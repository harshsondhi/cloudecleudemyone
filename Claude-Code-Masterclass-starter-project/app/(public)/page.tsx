// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react"

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />cket Heist
        </h1>
        <div>Tiny missions. Big office mischief.</div>
        <p className="mt-4 text-body">
          Welcome to Pocket Heist — the ultimate tool for orchestrating sneaky
          little workplace challenges. Assign covert missions, track progress,
          and keep your colleagues on their toes. Whether you&apos;re planting a
          rubber duck on someone&apos;s desk or stealing the last coffee pod,
          every heist starts here.
        </p>
        <p className="mt-2 text-body">
          Log in to view your active heists or sign up to start your first
          mission. Remember: the best heists leave no trace.
        </p>
      </div>
    </div>
  )
}
