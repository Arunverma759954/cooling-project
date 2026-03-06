export default function Contact() {
    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h1 className="text-4xl font-bold mb-6 text-primary">Get In Touch</h1>
                        <p className="text-gray-600 mb-10">
                            Technical experts are on call 24/7 to react promptly to your service needs. Don't hesitate to reach out for a consultation or emergency repair.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center text-primary shadow-sm border border-border">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold">Phone</h4>
                                    <p className="text-gray-500 font-medium">+91 9953666863</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center text-primary shadow-sm border border-border">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <p className="text-gray-500 font-medium">coolairsystem6863@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center text-primary shadow-sm border border-border">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold">Office</h4>
                                    <p className="text-gray-500 font-medium whitespace-pre-line">Shop No- 120, FF, Krishna Palace,{"\n"}Gurugram 122001</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-10 rounded-3xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-xl bg-muted border border-border focus:outline-none focus:border-accent" />
                                <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-xl bg-muted border border-border focus:outline-none focus:border-accent" />
                            </div>
                            <input type="text" placeholder="Service Requirement" className="w-full px-6 py-4 rounded-xl bg-muted border border-border focus:outline-none focus:border-accent" />
                            <textarea placeholder="Message" rows={4} className="w-full px-6 py-4 rounded-xl bg-muted border border-border focus:outline-none focus:border-accent"></textarea>
                            <button className="w-full bg-primary text-white py-5 rounded-xl font-bold hover:bg-secondary transition-colors shadow-lg shadow-primary/20">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
