// const pickedCivImg = new Component({
//     tagName: "div",
//     className: "picked-civ-img",
//   });

//   const bundle = [
//     {
//       className: "civ-icon",
//     },
//     {
//       className: "civ-title",
//     },
//     {
//       className: "civ-leader",
//     },
//   ];

//   const civBundle = bundle.map((bundleData) => {
//     return new Component({
//       tagName: "div",
//       className: bundleData.className,
//     });
//   });

//   const pickedCivInfo = new Component({
//     tagName: "div",
//     className: "picked-civ-info",
//     children: [...civBundle, playButton],
//   });

//   const pickedCiv = new Component({
//     tagName: "section",
//     className: "picked-civ",
//     children: [pickedCivInfo, pickedCivImg],
//   });
