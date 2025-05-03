import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {

    return (

        <div className=" pt-8 space-y-4 bg-no-repeat bg-cover max-w-screen mt-10"
        style={{ backgroundImage: "url('./hero/bg-lines.png')" }}>
            <h2 className="mx-auto text-2xl text-center font-bold md:text-3xl mb-6 text-black dark:text-white max-w-4xl">
                What people are saying 🤔
            </h2>

            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    );
}
