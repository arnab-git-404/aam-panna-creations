interface Project {
  id: number;
  title: string;
  icon: string;
  description: string[];
  projectName: string;
  projectDes: string;
  liveLink: string;
}

export const projects: Project[] = [

    {
        id: 1,
        title: "Web Design & Development",
        icon: "/services/Code.svg",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
        ],
        projectName: "ClayLab",
        projectDes: "A platform for Child Education.",
        liveLink: "https://claylab-ver.vercel.app/",
    }

]