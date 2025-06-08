import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useForm, ValidationError } from "@formspree/react";
import { Input, Textarea, Button } from "@heroui/react";

export default function SupportPage() {
  const [state, handleSubmit] = useForm("xblydeyp");

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Support</h1>
        </div>
        
        <div className="w-full max-w-md p-6 bg-content1 rounded-lg shadow-lg">
          {state.succeeded ? (
            <p className="text-success text-center">Thanks for your submission!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  isRequired
                  variant="bordered"
                  className="w-full"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  isRequired
                  variant="bordered"
                  className="w-full"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button
                type="submit"
                color="primary"
                className="w-full"
                isLoading={state.submitting}
                disabled={state.submitting}
              >
                Submit
              </Button>
              
              <ValidationError errors={state.errors} />
            </form>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
