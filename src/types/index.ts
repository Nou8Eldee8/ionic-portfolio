export interface ProjectPhase {
    title: string;
    description: string;
    image: string;
}

export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string; // Main cover image
    videoUrl?: string;
    phases?: ProjectPhase[];
}

export interface LocalizedProjectData {
    [key: string]: Project; // Key is the slug
}
