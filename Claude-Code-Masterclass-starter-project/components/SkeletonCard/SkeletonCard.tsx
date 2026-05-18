export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-light rounded-xl p-6 w-full">
      {/* avatar + header lines */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-lighter shrink-0" />
        <div className="flex flex-col gap-3 flex-1">
          <div className="h-3 bg-lighter rounded-full w-3/4" />
          <div className="h-3 bg-lighter rounded-full w-1/2" />
        </div>
      </div>

      {/* content lines */}
      <div className="flex flex-col gap-3">
        <div className="h-3 bg-lighter rounded-full w-full" />
        <div className="h-3 bg-lighter rounded-full w-full" />
        <div className="h-3 bg-lighter rounded-full w-2/5" />
      </div>
    </div>
  )
}
