// preview page for newly created UI components
import SkeletonCard from "@/components/SkeletonCard"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2 className="mb-6">Preview</h2>

      <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-body">SkeletonCard</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  )
}
