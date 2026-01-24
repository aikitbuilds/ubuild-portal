"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MOCK_STATIONS } from "@/lib/tejas/data";
import { db } from "@/lib/firebase/client";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "sonner";
import { Plus } from "lucide-react";

export function AddVolunteerModal() {
    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        station: "",
        role: "General",
        shiftStart: "08:00",
        shiftEnd: "16:00"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // 1. Add Volunteer Profile
            const volRef = await addDoc(collection(db, "volunteers"), {
                firstName: formData.firstName,
                lastName: formData.lastName,
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phone: formData.phone,
                reliabilityScore: 80, // Default new vol score
                experience_level: 'novice',
                history: [],
                distanceFromVenue: 10,
                createdAt: new Date()
            });

            // 2. Add Assignment (Simulated Shift)
            // In a real app, date would be dynamic. Hardcoding for demo.
            const date = new Date('2026-02-06'); // Race Day
            const [startH, startM] = formData.shiftStart.split(':');
            const [endH, endM] = formData.shiftEnd.split(':');

            const start = new Date(date);
            start.setHours(parseInt(startH), parseInt(startM));

            const end = new Date(date);
            end.setHours(parseInt(endH), parseInt(endM));

            await addDoc(collection(db, "assignments"), {
                volunteerId: volRef.id,
                station: formData.station,
                role: formData.role,
                startTime: start,
                endTime: end,
                status: 'pending'
            });

            toast.success("Volunteer added successfully!");
            setOpen(false);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                station: "",
                role: "General",
                shiftStart: "08:00",
                shiftEnd: "16:00"
            });
        } catch (error) {
            console.error("Error adding volunteer:", error);
            toast.error("Failed to add volunteer.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-[10px] font-black uppercase tracking-widest px-6 h-12 rounded-2xl">
                    <Plus className="w-4 h-4 mr-2" /> Add Volunteer
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#1E1E1E] border-white/10 text-white sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Add New Volunteer</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="bg-white/5 border-white/10" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="bg-white/5 border-white/10" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-white/5 border-white/10" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="bg-white/5 border-white/10" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="station">Station Assignment</Label>
                        <Select onValueChange={(val) => handleSelectChange('station', val)}>
                            <SelectTrigger className="bg-white/5 border-white/10">
                                <SelectValue placeholder="Select a station" />
                            </SelectTrigger>
                            <SelectContent>
                                {MOCK_STATIONS.map((s) => (
                                    <SelectItem key={s} value={s}>{s}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="shiftStart">Shift Start</Label>
                            <Input id="shiftStart" name="shiftStart" type="time" value={formData.shiftStart} onChange={handleChange} className="bg-white/5 border-white/10" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="shiftEnd">Shift End</Label>
                            <Input id="shiftEnd" name="shiftEnd" type="time" value={formData.shiftEnd} onChange={handleChange} className="bg-white/5 border-white/10" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select onValueChange={(val) => handleSelectChange('role', val)} defaultValue="General">
                            <SelectTrigger className="bg-white/5 border-white/10">
                                <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="General">General Crew</SelectItem>
                                <SelectItem value="Captain">Station Captain</SelectItem>
                                <SelectItem value="Medic">Medical Staff</SelectItem>
                                <SelectItem value="Radio">Comms / Radio</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <DialogFooter>
                        <Button type="submit" disabled={isLoading} className="w-full bg-[#E67E22] hover:bg-[#D35400]">
                            {isLoading ? "Saving..." : "Create Volunteer Profile"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
