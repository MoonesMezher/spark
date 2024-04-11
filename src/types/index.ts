import { ReactNode } from "react";

export type TSEOPrpos = { title: string, description: string, name: string, type: string };

export type TBorderDesignProps = { position: string };

export type TBoxInfoProps = { name: string, postion: string };

export type TBrushPorps = { position: string };

export type TBtnThemeProps = { title: string, style?: string, children?: ReactNode };

export type TCourseCardProps = { info: { title: string, rate: number, ratingCounts: number, price: number, offer?: number, img?: string, url?: string }};

export type TLesson = { url: string, title: string, description: string };

export type TLessonCardProps = { lesson: TLesson , index: number };

export type TLessonsProps = { lessons: Array<TLesson>, ConstLessonsNumberPerPage: number };

export type TCourseInfoProps = { info: { title: string, popular: boolean, duration: string, img: string, creator: string, uploaded: string, language: string, price: number, rate: number, ratingCounters: number, details: string, lessons: Array<TLesson>}};

export type TCourseInfoSectionThemeProps = { title: string, children: ReactNode };

export type TCourseTitleProps = { title: string, subtitle: string };

export type TFeedbackCardProps = { info: { text: string, userimg: string, username: string, rate: number }};

export type TSocialMediaContacts = Array<{ link: string, icon: ReactNode }>;

export type TMainTitleProps =  { title: string, subtitle: string, purple?: boolean };

export type TServices = Array<{icon: string, title: string, subtitle: string, url: string, img: string}>;

export type TServiceCardProps = { info: {icon: string, title: string, subtitle: string, url: string, img: string}, index: number};

export type TProjects = Array<{ title: string, type: string, subtitle: string, discription: string, img: string, url: string }>;

export type TTeam = Array<{name: string, postion: string, discription: string, rate: number, img: string}> ;

export type TServicesData = Array<{ title: string, img: string, discription: string }> ;

export type TCourses = Array<{ title: string, rate: number, ratingCounts: number, price: number, offer?: number, img?: string, url?: string }> ;

export type TFeedbacks = Array<{ username: string, text: string, rate: number, userimg: string }>

export type TCourseInfo = { title: string, popular: boolean, duration: string, img: string, creator: string, uploaded: string, language: string, price: number, rate: number, ratingCounters: number, details: string, lessons: Array<TLesson>};

export type TLayoutProps = { children: ReactNode };

export type TNavLinksArray = Array<{ title: string, link: string }>;

export type TNavLinksArray2 = Array<{ title: string, link: string }>;

export type TInfoCourseCardFieldProps = { icon: ReactNode, filed: string, value: string };

export type TFileds = Array<TInfoCourseCardFieldProps>;

export type TInfoCourseCardProps = { data: { title: string, popular: boolean, duration: string, img: string, creator: string, uploaded: string, language: string, price: number, rate: number, ratingCounters: number, details: string, lessons: Array<TLesson>}};

export type TServiceInfoCardProps = { info: { title: string, img: string, discription: string } ,index: number};

export type TProjectCardProps = { info: {url: string, discription: string, title: string, img: string, subtitle: string, type: string} ,index:number };

export type TSwiperDataProps = { team: Array<{name: string, img: string, postion: string, discription: string, rate: number, }>}

export type TSwiperBtnProps = { onClick: () => void, element: ReactNode, style: string };

export type TLogoProps = { img: string, title: string };

export type TNavLinksProps = { link: string, title: string };

export type TNormalBtnProps = { title: string, link: string, color: string }