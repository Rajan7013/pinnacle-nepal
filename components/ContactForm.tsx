"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import { fadeInUp } from "@/lib/animations";
import {
    HiMail,
    HiUser,
    HiPhone,
    HiAnnotation,
    HiLocationMarker,
    HiGlobeAlt,
    HiAcademicCap,
    HiOfficeBuilding,
    HiChevronDown
} from "react-icons/hi";
import { destinationsData } from "@/lib/data/destinations";
import { courses } from "@/lib/data/courses";

// Helper hook for clicking outside to close dropdowns
function useOnClickOutside(ref: any, handler: any) {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        country: "",
        zipCode: "",
        interestedCountry: "",
        interestedCourse: "",
        preferredCollege: "",
        message: "",
    });

    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track which dropdown is open
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const dropdownRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(dropdownRef, () => setOpenDropdown(null));

    // Memoize the list of colleges based on selected interestedCountry
    const availableColleges = useMemo(() => {
        if (!formData.interestedCountry) return [];

        // Find the country object that matches the name
        const selectedDest = destinationsData.find(d => d.name === formData.interestedCountry);

        // Return its universities or empty if not found
        return selectedDest ? selectedDest.universities.map(u => u.name) : [];
    }, [formData.interestedCountry]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectOption = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
        setOpenDropdown(null);
        setFocusedField(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

            if (!googleSheetsUrl) {
                console.error('Google Sheets URL not configured');
                setSubmitStatus("error");
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus("idle"), 3000);
                return;
            }

            const submissionData = {
                name: `${formData.firstName} ${formData.lastName}`.trim(),
                email: formData.email,
                phone: formData.phone,
                country: formData.interestedCountry,
                course: formData.interestedCourse,
                message: `Address: ${formData.address}\nCountry: ${formData.country}\nZip: ${formData.zipCode}\nPreferred College: ${formData.preferredCollege}\n\nMessage: ${formData.message}`,
                formType: 'Contact Form'
            };

            const response = await fetch(googleSheetsUrl, {
                method: 'POST',
                mode: 'no-cors', // Google Apps Script requires no-cors
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData)
            });

            // With no-cors, we can't read the response, so we assume success
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: "",
                country: "",
                zipCode: "",
                interestedCountry: "",
                interestedCourse: "",
                preferredCollege: "",
                message: "",
            });
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            setIsSubmitting(false);
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus("idle"), 3000);
        }
    };

    const renderField = (
        name: string,
        label: string,
        icon: any,
        type: string = "text",
        colSpan: string = "col-span-2",
        options?: string[],
        isManualInputAllowed: boolean = false
    ) => {
        const Icon = icon;
        const isFocused = focusedField === name || openDropdown === name;
        const value = formData[name as keyof typeof formData];
        const hasValue = value && value.toString().length > 0;

        // Helper to determine border color based on focus state
        const borderColorClass = isFocused
            ? "border-[#003893]"
            : "border-gray-300";

        // Custom Dropdown Render Logic
        if (type === "select" || (type === "text" && isManualInputAllowed && options && options.length > 0)) {
            return (
                <div className={`relative ${colSpan} mb-4`} ref={openDropdown === name ? dropdownRef : null}>
                    <label
                        htmlFor={name}
                        className={`absolute left-10 transition-all duration-200 pointer-events-none z-20 font-medium ${isFocused || hasValue
                            ? "-top-2.5 text-xs bg-white px-2 text-[#003893]"
                            : "top-3.5 text-gray-500 text-sm whitespace-nowrap"
                            }`}
                    >
                        {label}
                    </label>

                    <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center bg-gray-50 rounded-l-lg border-y border-l border-gray-300 z-10">
                        <Icon className={`text-lg ${isFocused ? "text-[#003893]" : "text-gray-400"}`} />
                    </div>

                    {/* Trigger Input/Div */}
                    <div
                        onClick={() => setOpenDropdown(openDropdown === name ? null : name)}
                        className={`w-full pl-12 pr-10 py-3 bg-white border-2 ${borderColorClass} rounded-lg outline-none transition-all text-gray-800 shadow-sm cursor-pointer flex items-center min-h-[50px] relative z-0`}
                    >
                        {/* If manual input is allowed, show an input field, otherwise just text */}
                        {isManualInputAllowed && type === "text" ? (
                            <input
                                type="text"
                                id={name}
                                name={name}
                                value={value}
                                onChange={(e) => {
                                    handleChange(e);
                                    if (!openDropdown) setOpenDropdown(name);
                                }}
                                onFocus={() => setFocusedField(name)}
                                className="w-full h-full bg-transparent outline-none p-0"
                                placeholder=""
                                autoComplete="off"
                            />
                        ) : (
                            <span className={`${!value ? "text-transparent" : "text-gray-800"}`}>
                                {value || label}
                            </span>
                        )}
                    </div>

                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
                        <HiChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openDropdown === name ? "rotate-180" : ""}`} />
                    </div>

                    {/* Custom Dropdown Options */}
                    <AnimatePresence>
                        {openDropdown === name && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto"
                            >
                                {options?.map((opt, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => handleSelectOption(name, opt)}
                                        className="px-4 py-3 cursor-pointer text-gray-700 transition-colors hover:bg-[#DC143C] hover:text-white border-b border-gray-50 last:border-0"
                                    >
                                        {opt}
                                    </div>
                                ))}
                                {isManualInputAllowed && type === "select" && (
                                    <div
                                        onClick={() => handleSelectOption(name, "Other")}
                                        className="px-4 py-3 cursor-pointer text-gray-700 transition-colors hover:bg-[#DC143C] hover:text-white"
                                    >
                                        Other
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            );
        }

        // Standard Text/Textarea Render Logic
        return (
            <div className={`relative ${colSpan} mb-4`}>
                <label
                    htmlFor={name}
                    className={`absolute left-10 transition-all duration-200 pointer-events-none z-20 font-medium ${isFocused || hasValue
                        ? "-top-2.5 text-xs bg-white px-2 text-[#003893]"
                        : "top-3.5 text-gray-500 text-sm whitespace-nowrap"
                        }`}
                >
                    {label}
                </label>

                {/* Icon Box - Left side */}
                <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center bg-gray-50 rounded-l-lg border-y border-l border-gray-300 z-10">
                    <Icon className={`text-lg ${isFocused ? "text-[#003893]" : "text-gray-400"}`} />
                </div>

                {type === "textarea" ? (
                    <textarea
                        id={name}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(name)}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className={`w-full pl-12 pr-4 py-3 bg-white border-2 ${borderColorClass} rounded-lg outline-none transition-all resize-none text-gray-800 placeholder-transparent shadow-sm relative z-0`}
                        placeholder=""
                    />
                ) : (
                    <input
                        type={type}
                        id={name}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(name)}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full pl-12 pr-4 py-3 bg-white border-2 ${borderColorClass} rounded-lg outline-none transition-all text-gray-800 placeholder-transparent shadow-sm relative z-0`}
                        placeholder=""
                    />
                )}
            </div>
        );
    };

    return (
        <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl"
        >
            {/* Header within form removed as page context provides it, keeping simple fields focus */}

            <div className="space-y-10 p-8">
                {/* Personal Details Section */}
                <div>
                    <div className="flex items-center gap-3 mb-6 border-b-2 border-gray-100 pb-2">
                        <span className="w-8 h-8 rounded-full bg-[#003893] text-white flex items-center justify-center font-bold text-sm">1</span>
                        <h3 className="text-lg font-bold text-[#003893] uppercase tracking-wide">Personal Details</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {renderField("firstName", "First Name", HiUser, "text")}
                        {renderField("lastName", "Last Name", HiUser, "text")}
                        {renderField("email", "Email Address", HiMail, "email")}
                        {renderField("phone", "Phone Number", HiPhone, "tel")}

                        {renderField("address", "Street Address", HiLocationMarker, "text", "md:col-span-2")}
                        {renderField("country", "Current Country", HiGlobeAlt, "text")}
                        {renderField("zipCode", "Zip Code", HiLocationMarker, "text")}
                    </div>
                </div>

                {/* Educational Interests Section */}
                <div>
                    <div className="flex items-center gap-3 mb-6 border-b-2 border-gray-100 pb-2">
                        <span className="w-8 h-8 rounded-full bg-[#DC143C] text-white flex items-center justify-center font-bold text-sm">2</span>
                        <h3 className="text-lg font-bold text-[#DC143C] uppercase tracking-wide">Educational Interests</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Populate Countries from destinationsData */}
                        {renderField("interestedCountry", "Destination Country", HiGlobeAlt, "select", "col-span-1", destinationsData.map(d => d.name), true)}

                        {/* Populate Courses from courses data */}
                        {renderField("interestedCourse", "Interested Course", HiAcademicCap, "select", "col-span-1", courses.map(c => c.title), true)}

                        {/* Smart College Field: Shows list based on country, allows manual typing */}
                        {renderField("preferredCollege", "Preferred College", HiOfficeBuilding, "text", "md:col-span-2", availableColleges, true)}

                        {renderField("message", "Message / specific inquiry", HiAnnotation, "textarea", "md:col-span-2")}
                    </div>
                </div>
            </div>

            <div className="px-8 pb-8 pt-2 bg-gray-50 rounded-b-xl border-t border-gray-100">
                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full py-4 rounded-lg font-bold text-lg text-white shadow-md uppercase tracking-wide transition-all ${isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#003893] hover:bg-[#DC143C] hover:shadow-lg"
                        } `}
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </span>
                    ) : submitStatus === "success" ? (
                        "Submitted Successfully! ✓"
                    ) : (
                        "Submit Application"
                    )}
                </motion.button>

                {submitStatus === "success" && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center font-medium"
                    >
                        Thank you! We have received your application. We will contact you soon.
                    </motion.div>
                )}
            </div>
        </motion.form>
    );
}
