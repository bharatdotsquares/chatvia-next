import React from 'react'

function SingleContact() {
  return (
    <div className="">
      <div className="p-3 fw-bold text-primary">C</div>
      <ul className="list-unstyled contact-list">
        <li>
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <h5 className="font-size-14 m-0">Craig Smiley</h5>
            </div>
            <div className="dropdown">
              <a
                href="#"
                className="text-muted dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ri-more-2-fill" />
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="#">
                  Share <i className="ri-share-line float-end text-muted" />
                </a>
                <a className="dropdown-item" href="#">
                  Block <i className="ri-forbid-line float-end text-muted" />
                </a>
                <a className="dropdown-item" href="#">
                  Remove{' '}
                  <i className="ri-delete-bin-line float-end text-muted" />
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SingleContact

// {/* end contact list C */}
//   <div className="mt-3">
//   <div className="p-3 fw-bold text-primary">D</div>
//   <ul className="list-unstyled contact-list">
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Daniel Clay
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Doris Brown
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//   </ul>
// </div>
// {/* end contact list D */}
// <div className="mt-3">
//   <div className="p-3 fw-bold text-primary">I</div>
//   <ul className="list-unstyled contact-list">
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">Iris Wells</h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//   </ul>
// </div>
// {/* end contact list I */}
// <div className="mt-3">
//   <div className="p-3 fw-bold text-primary">J</div>
//   <ul className="list-unstyled contact-list">
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Juan Flakes
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">John Hall</h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Joy Southern
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//   </ul>
// </div>
// {/* end contact list J */}
// <div className="mt-3">
//   <div className="p-3 fw-bold text-primary">M</div>
//   <ul className="list-unstyled contact-list">
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Mary Farmer
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Mark Messer
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Michael Hinton
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//   </ul>
// </div>
// {/* end contact list M */}
// <div className="mt-3">
//   <div className="p-3 fw-bold text-primary">O</div>
//   <ul className="list-unstyled contact-list">
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Ossie Wilson
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//   </ul>
// </div>
// {/* end contact list O */}
// <div className="mt-3">
//   <div className="p-3 fw-bold text-primary">P</div>
//   <ul className="list-unstyled contact-list">
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Phillis Griffin
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Paul Haynes
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//   </ul>
// </div>
// {/* end contact list P */}
// <div className="mt-3">
//   <div className="p-3 fw-bold text-primary">R</div>
//   <ul className="list-unstyled contact-list">
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Rocky Jackson
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//   </ul>
// </div>
// {/* end contact list R */}
// <div className="mt-3">
//   <div className="p-3 fw-bold text-primary">S</div>
//   <ul className="list-unstyled contact-list">
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Sara Muller
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Simon Velez
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div className="d-flex align-items-center">
//         <div className="flex-grow-1">
//           <h5 className="font-size-14 m-0">
//             Steve Walker
//           </h5>
//         </div>
//         <div className="dropdown">
//           <a
//             href="#"
//             className="text-muted dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             <i className="ri-more-2-fill" />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end">
//             <a className="dropdown-item" href="#">
//               Share{" "}
//               <i className="ri-share-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Block{" "}
//               <i className="ri-forbid-line float-end text-muted" />
//             </a>
//             <a className="dropdown-item" href="#">
//               Remove{" "}
//               <i className="ri-delete-bin-line float-end text-muted" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </li>
//   </ul>
// </div>
//{/* end contact list S */}
