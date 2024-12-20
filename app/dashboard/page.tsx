// "use client";

// import { useState } from "react";
// import { Input } from "@/app/ui/input";
// import { Button } from "@/app/ui/button";
// import { RefreshCw, Plus } from "lucide-react";
// import { RepositoryCard } from "@/app/components/RepositoryCard";

// const repositories = [
//   {
//     name: "design-system",
//     isPublic: true,
//     language: "React",
//     languageColor: "#1570EF",
//     size: 7320,
//     updatedAt: "1 day ago",
//   },
//   {
//     name: "codeant-ci-app",
//     isPublic: false,
//     language: "Javascript",
//     languageColor: "#1570EF",
//     size: 5871,
//     updatedAt: "2 days ago",
//   },
//   {
//     name: "analytics-dashboard",
//     isPublic: false,
//     language: "Python",
//     languageColor: "#1570EF",
//     size: 4521,
//     updatedAt: "5 days ago",
//   },
//   {
//     name: "mobile-app",
//     isPublic: true,
//     language: "Swift",
//     languageColor: "#1570EF",
//     size: 3096,
//     updatedAt: "3 days ago",
//   },
//   {
//     name: "e-commerce-platform",
//     isPublic: false,
//     language: "Java",
//     languageColor: "#1570EF",
//     size: 6210,
//     updatedAt: "6 days ago",
//   },
//   {
//     name: "blog-website",
//     isPublic: true,
//     language: "HTML/CSS",
//     languageColor: "#1570EF",
//     size: 2847,
//     updatedAt: "4 days ago",
//   },
//   {
//     name: "social-network",
//     isPublic: false,
//     language: "PHP",
//     languageColor: "#1570EF",
//     size: 5432,
//     updatedAt: "7 days ago",
//   },
// ];

// export default function RepositoriesPage() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredRepositories = repositories.filter((repo) =>
//     repo.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

// return (
//   <div className="p-4 lg:bg-[#FAFAFA]">
//     <div className="lg:p-6 bg-white rounded-xl">
//       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-5 gap-2">
//         <div>
//           <h1 className="text-xl font-semibold text-[#212529]">
//             Repositories
//           </h1>
//           <p className="text-sm text-[#868e96]">
//             {repositories.length} total repositories
//           </p>
//         </div>
//         <div className="flex items-center gap-2">
//           <Button
//             variant="outline"
//             size="sm"
//             className="h-9 px-3 text-[#414651] border-searchRepo border rounded-xl hover:text-[#212529]"
//           >
//             <RefreshCw className="h-5 w-5 text-md" />
//             Refresh All
//           </Button>
//           <Button size="sm" className="h-9 px-3 bg-[#1570EF] border rounded-xl">
//             <Plus className="h-4 w-4" />
//             Add Repository
//           </Button>
//         </div>
//       </div>
//       <div className="mb-6">
//         <Input
//           type="search"
//           placeholder="Search Repositories"
//           className="max-w-md h-9 border border-searchRepo rounded-xl"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>
//       <div className="px-6 -mx-6">
//         {filteredRepositories.map((repo) => (
//           <RepositoryCard key={repo.name} {...repo} />
//         ))}
//       </div>
//     </div>
//   </div>
// );
// }

"use client";

import { useState } from "react";
import { Input } from "@/app/ui/input";
import { RefreshCw, Plus } from "lucide-react";
import { RepositoryCard } from "@/app/components/RepositoryCard";
import { ButtonRepo } from "@/app/ui/buttonRepo";

const repositories = [
  {
    name: "design-system",
    isPublic: true,
    language: "React",
    languageColor: "#1570EF",
    size: 7320,
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    isPublic: false,
    language: "Javascript",
    languageColor: "#1570EF",
    size: 5871,
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    isPublic: false,
    language: "Python",
    languageColor: "#1570EF",
    size: 4521,
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    isPublic: true,
    language: "Swift",
    languageColor: "#1570EF",
    size: 3096,
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    isPublic: false,
    language: "Java",
    languageColor: "#1570EF",
    size: 6210,
    updatedAt: "6 days ago",
  },
  {
    name: "blog-website",
    isPublic: true,
    language: "HTML/CSS",
    languageColor: "#1570EF",
    size: 2847,
    updatedAt: "4 days ago",
  },
  {
    name: "social-network",
    isPublic: false,
    language: "PHP",
    languageColor: "#1570EF",
    size: 5432,
    updatedAt: "7 days ago",
  },
];

export default function RepositoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

return (
  <div className="p-4 lg:bg-[#FAFAFA]">
    <div className="lg:p-6 bg-white rounded-xl">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-5 gap-2">
        <div>
          <h1 className="text-xl font-semibold text-[#212529]">
            Repositories
          </h1>
          <p className="text-sm text-[#868e96]">
            {repositories.length} total repositories
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ButtonRepo
            variant="outline"
            size="sm"
            className="h-9 px-3 text-[#414651] border-searchRepo border rounded-xl hover:text-[#212529]"
          >
            <RefreshCw className="h-5 w-5 text-md" />
            Refresh All
          </ButtonRepo>
          <ButtonRepo size="sm" className="h-9 px-3 bg-[#1570EF] border rounded-xl">
            <Plus className="h-4 w-4" />
            Add Repository
          </ButtonRepo>
        </div>
      </div>
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Search Repositories"
          className="max-w-md h-9 border border-searchRepo rounded-xl"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="px-6 -mx-6">
        {filteredRepositories.map((repo) => (
          <RepositoryCard key={repo.name} {...repo} />
        ))}
      </div>
    </div>
  </div>
);
}