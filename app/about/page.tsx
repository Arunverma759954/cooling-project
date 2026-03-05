export default function About() {
    return (
        <div className="flex flex-col">
            <section className="py-20 bg-muted">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-4xl font-bold mb-6">Our Legacy of Excellence</h1>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Established in 1993, CoolingSolutions (inspired by Ventac) comprises an integrated team of Engineers and Technicians with 20-35 years of experience in various aspects of the HVAC industry – Design, Estimation, Execution, Operation, and After-sales service and Maintenance.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Commitment to Reliability</h3>
                                        <p className="text-sm text-gray-500">We ensure your systems run at peak performance 24/7.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Safety Standards</h3>
                                        <p className="text-sm text-gray-500">Rigorous safety protocols for every installation and repair.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Team working" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-2xl hidden md:block">
                                <div className="text-4xl font-bold text-primary">30+</div>
                                <div className="text-sm font-medium text-gray-600">Years of Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Mission & Vision</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="p-10 bg-muted rounded-3xl border border-border">
                            <h3 className="text-2xl font-bold mb-4 text-secondary">Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To provide the highest quality mechanical ventilation and air conditioning requirements while paying high regard to occupational Health and Safety, Environmental Protection, and Quality Assurance.
                            </p>
                        </div>
                        <div className="p-10 bg-primary text-white rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4 text-accent">Vision</h3>
                            <p className="text-gray-300 leading-relaxed">
                                To be the most trusted HVAC partner across India, recognized for our technical efficiencies and organizational excellence in large-scale mechanical ventilation projects.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
