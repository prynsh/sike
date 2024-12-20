import { Badge } from "@/app/ui/badge";

interface RepositoryCardProps {
  name: string;
  isPublic: boolean;
  language: string;
  languageColor: string;
  size: number;
  updatedAt: string;
}

export function RepositoryCard({
  name,
  isPublic,
  language,
  languageColor,
  size,
  updatedAt,
}: RepositoryCardProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between m-2 py-3 px-4 border-t rounded-lg md:px-6 hover:bg-[#f8f9fa]  -mx-4 md:-mx-6 gap-2 md:gap-0">
      <div className="flex items-start md:items-center gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-[15px] font-medium text-[#212529]">
              {name}
            </span>
            <Badge
              variant={"outline"}
              className="h-5 text-xs font-normal text-[#175CD3] bg-sky-100 rounded-full border border-[#B2DDFF]"
            >
              {isPublic ? "Public" : "Private"}
            </Badge>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#868e96]">
            <div className="flex items-center gap-1.5 font-sm text-[#181D27]">
              {language}
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: languageColor }}
              />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 text-[#181D27]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
          </svg>
            <div className="text-[#181D27]">{size.toLocaleString()} KB</div>
            <div className="text-sm text-[#181D27]">Updated {updatedAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
