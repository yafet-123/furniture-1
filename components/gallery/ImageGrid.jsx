import Image from 'next/image';
import work1 from "../../public/gallery/gallery (1).jpg";
import work2 from "../../public/gallery/gallery (2).jpg";
import work3 from "../../public/gallery/gallery (3).jpg";
import work4 from "../../public/gallery/gallery (4).jpg";
import work5 from "../../public/gallery/gallery (5).jpg";
import work6 from "../../public/gallery/gallery (6).jpg";
import work7 from "../../public/gallery/gallery (7).jpg";
import work8 from "../../public/gallery/gallery (8).jpg";
import work9 from "../../public/gallery/gallery (9).jpg";
import work10 from "../../public/gallery/gallery (10).jpg";
import work11 from "../../public/gallery/gallery (11).jpg";
import work12 from "../../public/gallery/gallery (12).jpg";
import work13 from "../../public/gallery/gallery (13).jpg";
import work14 from "../../public/gallery/gallery (14).jpg";
import work15 from "../../public/gallery/gallery (15).jpg";
import work16 from "../../public/gallery/gallery (16).jpg";
import work17 from "../../public/gallery/gallery (17).jpg";
import work18 from "../../public/gallery/gallery (18).jpg";
import work19 from "../../public/gallery/gallery (19).jpg";
import work20 from "../../public/gallery/gallery (20).jpg";
import work21 from "../../public/gallery/gallery (21).jpg";
import work22 from "../../public/gallery/gallery (22).jpg";
import work23 from "../../public/gallery/gallery (23).jpg";
import work24 from "../../public/gallery/gallery (24).jpg";
import work25 from "../../public/gallery/gallery (25).jpg";
import work26 from "../../public/gallery/gallery (26).jpg";
import work27 from "../../public/gallery/gallery (27).jpg";
import work28 from "../../public/gallery/gallery (28).jpg";
import work29 from "../../public/gallery/gallery (29).jpg";
import work30 from "../../public/gallery/gallery (30).jpg";
import work31 from "../../public/gallery/gallery (31).jpg";
import work32 from "../../public/gallery/gallery (32).jpg";
import work33 from "../../public/gallery/gallery (33).jpg";
import work34 from "../../public/gallery/gallery (34).jpg";
import work35 from "../../public/gallery/gallery (35).jpg";
import work36 from "../../public/gallery/gallery (36).jpg";
import work37 from "../../public/gallery/gallery (37).jpg";
import work38 from "../../public/gallery/gallery (38).jpg";
import work39 from "../../public/gallery/gallery (39).jpg";
import work40 from "../../public/gallery/gallery (40).jpg";
import work41 from "../../public/gallery/gallery (41).jpg";
import work42 from "../../public/gallery/gallery (42).jpg";
import work43 from "../../public/gallery/gallery (43).jpg";
import work44 from "../../public/gallery/gallery (44).jpg";
import work45 from "../../public/gallery/gallery (45).jpg";
import work46 from "../../public/gallery/gallery (46).jpg";
import work47 from "../../public/gallery/gallery (47).jpg";
import work48 from "../../public/gallery/gallery (48).jpg";
import work49 from "../../public/gallery/gallery (49).jpg";
import work50 from "../../public/gallery/gallery (50).jpg";
import work51 from "../../public/gallery/gallery (51).jpg";
import work52 from "../../public/gallery/gallery (52).jpg";
import work53 from "../../public/gallery/gallery (53).jpg";
import work54 from "../../public/gallery/gallery (54).jpg";
import work55 from "../../public/gallery/gallery (55).jpg";
import work56 from "../../public/gallery/gallery (56).jpg";
import work57 from "../../public/gallery/gallery (57).jpg";
import work58 from "../../public/gallery/gallery (58).jpg";
import work59 from "../../public/gallery/gallery (59).jpg";
import work60 from "../../public/gallery/gallery (60).jpg";
import work61 from "../../public/gallery/gallery (61).jpg";
import work62 from "../../public/gallery/gallery (62).jpg";
import work63 from "../../public/gallery/gallery (63).jpg";
import work64 from "../../public/gallery/gallery (64).jpg";
import work65 from "../../public/gallery/gallery (65).jpg";
import work66 from "../../public/gallery/gallery (66).jpg";
import work67 from "../../public/gallery/gallery (67).jpg";
import work68 from "../../public/gallery/gallery (68).jpg";
import work69 from "../../public/gallery/gallery (69).jpg";
import work70 from "../../public/gallery/gallery (70).jpg";
import work71 from "../../public/gallery/gallery (71).jpg";
import work72 from "../../public/gallery/gallery (72).jpg";
import work73 from "../../public/gallery/gallery (73).jpg";
import work74 from "../../public/gallery/gallery (74).jpg";
import work75 from "../../public/gallery/gallery (75).jpg";
import work76 from "../../public/gallery/gallery (76).jpg";
import work77 from "../../public/gallery/gallery (77).jpg";
import work78 from "../../public/gallery/gallery (78).jpg";
import work79 from "../../public/gallery/gallery (79).jpg";
import work80 from "../../public/gallery/gallery (80).jpg";
import work81 from "../../public/gallery/gallery (81).jpg";
import work82 from "../../public/gallery/gallery (82).jpg";
import work83 from "../../public/gallery/gallery (83).jpg";
import work84 from "../../public/gallery/gallery (84).jpg";
import work85 from "../../public/gallery/gallery (85).jpg";
import work86 from "../../public/gallery/gallery (86).jpg";
import work87 from "../../public/gallery/gallery (87).jpg";
import work88 from "../../public/gallery/gallery (88).jpg";
import work89 from "../../public/gallery/gallery (89).jpg";
import work90 from "../../public/gallery/gallery (90).jpg";
import work91 from "../../public/gallery/gallery (91).jpg";
// import work92 from "../../public/gallery/gallery (92).jpg";
// import work93 from "../../public/gallery/gallery (93).jpg";
// import work94 from "../../public/gallery/gallery (94).jpg";
// import work95 from "../../public/gallery/gallery (95).jpg";
// import work96 from "../../public/gallery/gallery (96).jpg";
// import work97 from "../../public/gallery/gallery (97).jpg";
// import work98 from "../../public/gallery/gallery (98).jpg";
// import work99 from "../../public/gallery/gallery (99).jpg";
// import work100 from "../../public/gallery/gallery (100).jpg";


const ImageGrid = () => {
  const worksArray = [
    { id: 1, image: work1, ar: "portrait", select: "landscape" },
    { id: 2, image: work2, ar: "portrait", select: "square" },
    { id: 3, image: work3, ar: "portrait", select: "landscape" },
    { id: 4, image: work4, ar: "portrait", select: "landscape" },
    { id: 5, image: work5, ar: "portrait", select: "landscape" },
    { id: 6, image: work6, ar: "portrait", select: "landscape" },
    { id: 7, image: work7, ar: "portrait", select: "landscape" },
    { id: 8, image: work8, ar: "portrait", select: "landscape" },
    { id: 9, image: work9, ar: "portrait", select: "landscape" },
    { id: 10, image: work10, ar: "portrait", select: "landscape" },
    { id: 11, image: work11, ar: "portrait", select: "landscape" },
    { id: 12, image: work12, ar: "portrait", select: "landscape" },
    { id: 13, image: work13, ar: "portrait", select: "landscape" },
    { id: 14, image: work14, ar: "portrait", select: "landscape" },
    { id: 15, image: work15, ar: "portrait", select: "landscape" },
    { id: 16, image: work16, ar: "portrait", select: "landscape" },
    { id: 17, image: work17, ar: "portrait", select: "landscape" },
    { id: 18, image: work18, ar: "portrait", select: "landscape" },
    { id: 19, image: work19, ar: "portrait", select: "landscape" },
    { id: 20, image: work20, ar: "portrait", select: "landscape" },
    { id: 21, image: work21, ar: "portrait", select: "landscape" },
    { id: 22, image: work22, ar: "portrait", select: "landscape" },
    { id: 23, image: work23, ar: "portrait", select: "landscape" },
    { id: 24, image: work24, ar: "portrait", select: "landscape" },
    { id: 25, image: work25, ar: "portrait", select: "landscape" },
    { id: 26, image: work26, ar: "portrait", select: "landscape" },
    { id: 27, image: work27, ar: "portrait", select: "landscape" },
    { id: 28, image: work28, ar: "portrait", select: "landscape" },
    { id: 29, image: work29, ar: "portrait", select: "landscape" },
    { id: 30, image: work30, ar: "portrait", select: "landscape" },
    { id: 31, image: work31, ar: "portrait", select: "landscape" },
    { id: 32, image: work32, ar: "portrait", select: "landscape" },
    { id: 33, image: work33, ar: "portrait", select: "landscape" },
    { id: 34, image: work34, ar: "portrait", select: "landscape" },
    { id: 35, image: work35, ar: "portrait", select: "landscape" },
    { id: 36, image: work36, ar: "portrait", select: "landscape" },
    { id: 37, image: work37, ar: "portrait", select: "landscape" },
    { id: 38, image: work38, ar: "portrait", select: "landscape" },
    { id: 39, image: work39, ar: "portrait", select: "landscape" },
    { id: 40, image: work40, ar: "portrait", select: "landscape" },
    { id: 41, image: work41, ar: "portrait", select: "landscape" },
    { id: 42, image: work42, ar: "portrait", select: "landscape" },
    { id: 43, image: work43, ar: "portrait", select: "landscape" },
    { id: 44, image: work44, ar: "portrait", select: "landscape" },
    { id: 45, image: work45, ar: "portrait", select: "landscape" },
    { id: 46, image: work46, ar: "portrait", select: "landscape" },
    { id: 47, image: work47, ar: "portrait", select: "landscape" },
    { id: 48, image: work48, ar: "portrait", select: "landscape" },
    { id: 49, image: work49, ar: "portrait", select: "landscape" },
    { id: 50, image: work50, ar: "portrait", select: "landscape" },
    { id: 51, image: work51, ar: "portrait", select: "landscape" },
    { id: 52, image: work52, ar: "portrait", select: "landscape" },
    { id: 53, image: work53, ar: "portrait", select: "landscape" },
    { id: 54, image: work54, ar: "portrait", select: "landscape" },
    { id: 55, image: work55, ar: "portrait", select: "landscape" },
    { id: 56, image: work56, ar: "portrait", select: "landscape" },
    { id: 57, image: work57, ar: "portrait", select: "landscape" },
    { id: 58, image: work58, ar: "portrait", select: "landscape" },
    { id: 59, image: work59, ar: "portrait", select: "landscape" },
    { id: 60, image: work60, ar: "portrait", select: "landscape" },
    { id: 61, image: work61, ar: "portrait", select: "landscape" },
    { id: 62, image: work62, ar: "portrait", select: "landscape" },
    { id: 63, image: work63, ar: "portrait", select: "landscape" },
    { id: 64, image: work64, ar: "portrait", select: "landscape" },
    { id: 65, image: work65, ar: "portrait", select: "landscape" },
    { id: 66, image: work66, ar: "portrait", select: "landscape" },
    { id: 67, image: work67, ar: "portrait", select: "landscape" },
    { id: 68, image: work68, ar: "portrait", select: "landscape" },
    { id: 69, image: work69, ar: "portrait", select: "landscape" },
    { id: 70, image: work70, ar: "portrait", select: "landscape" },
    { id: 71, image: work71, ar: "portrait", select: "landscape" },
    { id: 72, image: work72, ar: "portrait", select: "landscape" },
    { id: 73, image: work73, ar: "portrait", select: "landscape" },
    { id: 74, image: work74, ar: "portrait", select: "landscape" },
    { id: 75, image: work75, ar: "portrait", select: "landscape" },
    { id: 76, image: work76, ar: "portrait", select: "landscape" },
    { id: 77, image: work77, ar: "portrait", select: "landscape" },
    { id: 78, image: work78, ar: "portrait", select: "landscape" },
    { id: 79, image: work79, ar: "portrait", select: "landscape" },
    { id: 80, image: work80, ar: "portrait", select: "landscape" },
    { id: 81, image: work81, ar: "portrait", select: "landscape" },
    { id: 82, image: work82, ar: "portrait", select: "landscape" },
    { id: 83, image: work83, ar: "portrait", select: "landscape" },
    { id: 84, image: work84, ar: "portrait", select: "landscape" },
    { id: 85, image: work85, ar: "portrait", select: "landscape" },
    { id: 86, image: work86, ar: "portrait", select: "landscape" },
    { id: 87, image: work87, ar: "portrait", select: "landscape" },
    { id: 88, image: work88, ar: "portrait", select: "landscape" },
    { id: 89, image: work89, ar: "portrait", select: "landscape" },
    { id: 90, image: work90, ar: "portrait", select: "landscape" },
    { id: 91, image: work91, ar: "portrait", select: "landscape" },
    // { id: 92, image: work92, ar: "portrait", select: "landscape" },
  ];

  return (
    <main className="mt-4 columns-1 gap-x-4 gap-y-4 md:columns-2 lg:columns-3 lg:gap-x-8 px-5">
      {worksArray.map(({ id, image, ar, select }) => (
        <figure
          key={id}
          className={`relative mb-4 overflow-hidden rounded bg-neutral-two dark:bg-neutral-nine 
            ${select === 'square' ? 'aspect-square' : select === 'landscape' ? 'aspect-landscape' : 'aspect-portrait'}
            md:mb-4 lg:mb-8`}
          style={{ position: 'relative', width: '100%', height: 'auto' }} // Ensure `figure` has dimensions
        >
          <Image
            src={image}
            alt={select}
            fill
            priority={ar === 'portrait'}
            loading={ar === 'portrait' ? 'eager' : 'lazy'}
            sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
            className="object-cover duration-700 ease-in-out group-hover:cursor-pointer group-hover:opacity-90"
          />
        </figure>
      ))}
    </main>
  );
};

export default ImageGrid;
