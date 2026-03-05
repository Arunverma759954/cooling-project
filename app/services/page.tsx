export default function Services() {
    const services = [
        {
            id: "dx",
            title: "Central DX Systems",
            desc: "HVAC Central DX Systems (Direct Expansion Systems) are air conditioning systems that use refrigerant to cool the air directly. Ideal for precise climate control in commercial buildings.",
            features: ["Energy Efficient", "Precise Control", "Quick Installation"]
        },
        {
            id: "ahu",
            title: "Air Handling Unit (AHU)",
            desc: "Device used to regulate and circulate air as part of a heating, ventilating, and air-conditioning system. AHUs connect to ductwork that distributes the conditioned air.",
            features: ["Air Filtration", "Humidity Control", "Ventilation Control"]
        },
        {
            id: "vrf",
            title: "VRF/VRV system",
            desc: "Variable Refrigerant Flow (VRF) or Variable Refrigerant Volume (VRV) is a type of air conditioning system that uses variable speed to control the flow of refrigerant.",
            features: ["Multi-zone Control", "High Energy Savings", "Quiet Operation"]
        },
        {
            id: "air-washer",
            title: "Air Washer Systems",
            desc: "A type of air purification system that uses water to trap dust, pollen, and other airborne particles, providing clean and humidified air.",
            features: ["Natural Cooling", "Air Purification", "Low Maintenance"]
        },
        {
            id: "ducting",
            title: "Insulated Air Ducting",
            desc: "High-quality insulated ductwork designed to transport conditioned air with minimal heat loss and noise reduction.",
            features: ["Thermal Insulation", "Sound Dampening", "Durability"]
        },
        {
            id: "ventilation",
            title: "Kitchen & Parking Ventilation",
            desc: "Specialized systems designed to provide adequate air circulation and remove smoke, odors, and harmful gases in parking and kitchen areas.",
            features: ["Safety Compliance", "High Airflow", "Smoke Extraction"]
        }
    ];

    return (
        <div className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-6">Our Expert HVAC Services</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From design and supply to installation and commissioning, we provide end-to-end mechanical and HVAC services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} id={service.id} className="bg-white p-8 rounded-3xl shadow-sm border border-border hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                {service.desc}
                            </p>
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="text-secondary font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                                Get Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
