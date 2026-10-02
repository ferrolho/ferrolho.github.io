// Talks, workshops, and service — mirrors the "Invited Talks, Workshops, and Lectures" section of the CV.
export interface Talk {
  date: string; // YYYY-MM
  kind: 'Talk' | 'Seminar' | 'Workshop organiser' | 'Workshop' | 'Lecture' | 'Judge' | 'Programme committee' | 'Short talk' | 'Session chair';
  title?: string;
  venue: string;
  place?: string;
  href?: string;
  video?: string; // YouTube id
}

export const talks: Talk[] = [
  { date: '2025-11', kind: 'Judge', title: 'Vsim Hackathon: How to Train Your Robot', venue: 'Advanced Research + Invention Agency (ARIA)', place: 'Cambridge, UK', href: 'https://v-sim.co.uk' },
  { date: '2025-10', kind: 'Workshop organiser', title: 'The Art of Robustness: Surviving Failures in Robotics', venue: 'IEEE/RSJ IROS 2025', place: 'Hangzhou, China', href: 'https://art-of-robustness-iros2025.github.io' },
  { date: '2025-09', kind: 'Seminar', title: 'Trajectory Optimization with Direct Transcription and Whole-Body Robot Dynamics', venue: 'Georgia Institute of Technology · AI4OPT PhD course on Optimal Control and Learning' },
  { date: '2025-09', kind: 'Programme committee', venue: 'ROSCon UK 2025', place: 'Edinburgh, UK', href: 'https://roscon.org.uk/2025/' },
  { date: '2025-02', kind: 'Talk', title: 'Robotics, Optimal Control, Trajectory Optimisation, Julia Robotics', venue: 'Beijing Institute for General Artificial Intelligence (BIGAI)', place: 'Beijing, China', href: 'https://www.bigai.ai' },
  { date: '2024-07', kind: 'Workshop organiser', title: 'Tactile Sensing for General Purpose Robot Learning', venue: 'Robotics: Science and Systems (RSS) 2024', place: 'TU Delft, Netherlands', href: 'https://noosphereworkshop.github.io' },
  { date: '2024-04', kind: 'Talk', title: 'Is the robot grasping something? Binary Grasp Classification of RGB Frames', venue: 'Ocado Technology 10th Research Conference (internal)' },
  { date: '2024-04', kind: 'Session chair', title: 'Robotics Simulation', venue: 'Ocado Technology 10th Research Conference (internal)' },
  { date: '2023-07', kind: 'Talk', title: 'Using Julia to Optimise Trajectories for Robots with Legs', venue: 'JuliaCon 2023 · MIT', place: 'Cambridge, MA, USA', href: 'https://youtu.be/5uF3VqgjiVE', video: '5uF3VqgjiVE' },
  { date: '2022-11', kind: 'Short talk', title: 'My journey as a Robotics CDT student (alumni panel)', venue: 'Heriot-Watt University · CDT RAS Annual Conference' },
  { date: '2020-12', kind: 'Talk', title: 'Trajectory Optimization with Direct Transcription', venue: 'University of Porto · Intelligent Systems, Interaction and Multimedia Seminar' },
  { date: '2019-05', kind: 'Seminar', title: 'Robust Dynamic Trajectory Optimization', venue: 'University of Edinburgh · Institute of Perception, Action and Behaviour' },
  { date: '2018-03', kind: 'Workshop', title: 'Introduction to Robotics with Three.js', venue: 'ENEI · Portuguese National Meeting of Informatics Students', href: 'https://ferrolho.github.io/workshop-robotics/' },
  { date: '2015-12', kind: 'Lecture', title: 'Graphics, State Machines, and OOP in C for MINIX', venue: 'University of Porto · Computer Laboratory (MSc)', href: 'http://bit.ly/lcom-ferrolho-2015' },
  { date: '2014-12', kind: 'Lecture', title: 'Graphics, State Machines, and OOP in C for MINIX', venue: 'University of Porto · Computer Laboratory (MSc)', href: 'http://bit.ly/lcom-ferrolho-2014' },
];
