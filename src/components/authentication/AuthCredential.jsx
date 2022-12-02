

const AuthCredential = ({ children }) => {
    return (
        <div>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div className="flex  xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12">
                            <img
                                src="/images/istockphoto-1321277096-612x612 1.png"
                                className="w-full"
                                alt="Sampleimage"
                            />
                        </div>
                        {children}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default AuthCredential