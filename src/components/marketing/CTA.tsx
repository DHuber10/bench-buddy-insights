
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 bg-smartbench-blue">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to grow your business with data?
            </h2>
            <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join hundreds of small business owners who are making smarter decisions with SmartBench.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" variant="secondary" onClick={() => window.location.href = '/signup'}>
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" onClick={() => window.location.href = '#how-it-works'}>
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
