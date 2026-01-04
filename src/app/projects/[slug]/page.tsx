import { Metadata } from "next";
import ProjectContent from "./ProjectContent";
import { getProjectBySlug } from "../../../data/projects";
import Footer from "../../../components/footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // Default to English for metadata since locale is client-side
  const project = getProjectBySlug(slug, "en");

  if (!project) {
    return {
      title: "Project Not Found | Ionic",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Ionic Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}


export default async function Page({ params }: Props) {
  const { slug } = await params;
  return (
    <>
      <ProjectContent slug={slug} />
      <Footer />
    </>
  );
}
