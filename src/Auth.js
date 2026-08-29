// import React, { useState, useEffect } from "react";
// import logo from "./assets/logo.png";
// import { auth, provider } from "./firebase";
// import {
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged
// } from "firebase/auth";

// const SESSION_TIME = 15 * 60 * 1000; // ⏱ 15 minutes

// const Auth = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 🔐 Allowed Emails
//   const allowedEmails = [
//     "rupamdholakiya@gmail.com",
//     "harshubh@gmail.com",
//     "sheikhzeeshan07@gmail.com",
//     "mishra.honey458@gmail.com",
//     "neha@harshubh.com",
//     "shah@harshubh.com",
//     "class@harshubh.com",


// //1 year access emails 21-04-2026 to 20-04-2027
// "panchalsagar287@gmail.com",
// "tusharrathi937@gmail.com",
// "pratikpc@hotmail.com",
// "jagdishbajiya3976@gmail.com",
// "sachinkhyaliya856@gmail.com",
// "ajitkumarnani2@gmail.com",
// "minakshisahare20@gmail.com",
// "cjvthate530@gmail.com",
// "arnikamilmile154@gmail.com",
// "05yashjaiswal@gmail.com",
// "varishasoni123@gmail.com",
// "tauseefmansoori.tm@gmail.com",
// "shubhmlunkad@gmail.com",
// "shankarshindeoppo@gmail.com",
// "wisdom.cwa@gmail.com",
// "bhavyamorbia33@gmail.com",
// "nirajdoshi03@gmail.com",
// "tt965458@gmail.com",
// "sahu113114@gmail.com",
// "amit.chandak14@gmail.com",
// "adityasahu2809@gmail.com",
// "jaiswal.rohit1118@gmail.com",
// "mirpuri.anand@gmail.com",
// "nawnitking@gmail.com",
// "dineshduhijod007@gmail.com",
// "rushikeshkulkarni34219@gmail.com",
// "gitinpatil@gmail.com",
// "blengule786@gmail.com",
// "mamtarachh@gmail.com",
// "mvbari222@gmail.com",
// "bhupendraraut2025@gmail.com",
// "roopesh500@gmail.com",
// "himanshu.virwani33@gmail.com",
// "bhishamgrg@gmail.com",
// "kukadeajay@gmail.com",
// "emceeadityakalla@gmail.com",

// ////27/04/26 to 26/04/27
// "mirpuri.anisha@gmail.com",

// /////29/04/26 to 28/04/27
// "compliancejural@gmail.com",

// //////06/05/26 to 05/05/27
// "soorajligade@gmail.com",

// ///////21/05/26 to 20/05/27
// "jayeshagnihotri789@gmail.com",
// "devangidhingani61@gmail.com",
// "ajaygodara864@gmail.com",
// "kuberconsultants21@gmail.com",
// "rahulyadav03022002@gmail.com",
// "neerajprajapati683@gmail.com",
// "sawlaniomraj210@gmail.com",
// "dhingrajatin911@gmail.com",
// "kothe.abhishek303@gmail.com",
// "sarveshwaghmare345@gmail.com",
// "himanchalpatel98@gmail.com",
// "veerkamalbti@gmail.com",
// "chetankakad65@gmail.com",
// "pikay31@gmail.com",
// "clintonjoseph70@gmail.com",
// "preetikothari222@gmail.com",
// "aniketmate14@gmail.com",
// "manoharbaghel316@gmail.com",
// "akanshhaajaiin@gmail.com",
// "ishwardhruw1071@gmail.com",
// "atulthakor3231@gmail.com",
// "deepakthakur1261997@gmail.com",
// "anandbaradia77@gmail.com",
// "patnaikaswini3@gmail.com",
// "sanjeevbudhani22@gmail.com",

// /// 07/06/26 to 06/06/27
// "amanhms60@gmail.com",


// //// 15/06/26 to 14/06/27
// "thakkaravinashr@gmail.com",
// "manishpatel05081997@gmail.com",
// "praful.rajkot25@gmail.com",
// "pran8585@gmail.com",
// "rohitkakkad1990@gmail.com",
// "rohitmaheshwari1995@gmail.com",
// "vividubey69@gmail.com",
// "maligopal6762@gmail.com",
// "mr.grewalsingh89@gmail.com",
// "paripallishrinivas@gmail.com",
// "vipulnenawat7@gmail.com",
// "deepakkumar2623@gmail.com",
// "Pravinkhopade2664@gmail.com",
// "Santoshj275@gmail.com",
// "shreyasc78@gmail.com",
// "vinayakjadhav581@gmail.com",
// "Cottonhub5534@gmail.com",
// "kalyan6959@gmail.com",
// "chandanbose1985@gmail.com",
// "sumitjzb39@gmail.com",
// "ashishraut074@gmail.com",
// "bhagyeshsinhvaghela824@gmail.com",
// "arnshare@gmail.com",
// "cagautamagrawal@gmail.com",
// "piyushpvp80@gmail.com",
// "vp77702@gmail.com",
// "tradingworkfromhome@gmail.com",
// "sureshkumargharjare@gmail.com",
// "vikas.redhu007@gmail.com",
// "mohitbhutada09@gmail.com",
// "shweta63gulat@gmail.com",

// ///16/06/26 to 15/06/27
// "cottonhub5534@gmail.com",
// "pravinkhopade2664@gmail.com",

// ///29/06/26 to 28/06/27
// "surat@harshubh.com",
// "hms.surat4@gmail.com",

// //04/07/26 to 03/07/27
// "info@harshubh.com"


//   ];

//   // 🔓 Unlimited Session Emails
//   const unlimitedAccessEmails = [
//     "rupamdholakiya@gmail.com",
//     "rupamdholakiya023@gmail.com",
//     "harshubh@gmail.com",
//     "rupamdholakiya2198@gmail.com",
//     "sheikhzeeshan07@gmail.com",
//     "mishra.honey458@gmail.com",
//     "neha@harshubh.com",
//     "shah@harshubh.com",
//     "class@harshubh.com"
//   ];

//   // ✅ AUTO LOGIN + SESSION TRACK
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

//       if (currentUser) {

//         if (allowedEmails.includes(currentUser.email.toLowerCase())) {

//           setUser(currentUser);

//           // ✅ Save login time only once
//           if (!localStorage.getItem("loginTime")) {
//             localStorage.setItem("loginTime", Date.now());
//           }

//         } else {
//           alert("Access Denied ❌");
//           signOut(auth);
//         }

//       } else {
//         setUser(null);
//         localStorage.removeItem("loginTime");
//       }

//       setLoading(false);
//     });

//     return () => unsubscribe();

//   }, []);

//   // ⏱ AUTO LOGOUT TIMER
//   useEffect(() => {

//     const interval = setInterval(() => {

//       // 🔓 Skip auto logout for unlimited users
//       if (
//         user &&
//         unlimitedAccessEmails.includes(user.email.toLowerCase())
//       ) {
//         return;
//       }

//       const loginTime = localStorage.getItem("loginTime");

//       if (loginTime) {

//         const currentTime = Date.now();

//         if (currentTime - loginTime > SESSION_TIME) {

//           alert("Session expired ⏰ Please login again");

//           signOut(auth);

//           localStorage.removeItem("loginTime");
//         }
//       }

//     }, 5000);

//     return () => clearInterval(interval);

//   }, [user]);

//   // 🔐 LOGIN
//   const handleLogin = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//     } catch (err) {
//       console.error(err);

//       if (err.code !== "auth/popup-closed-by-user") {
//         alert("Login failed ❌");
//       }
//     }
//   };

//   // 🔓 LOGOUT
//   const handleLogout = async () => {
//     await signOut(auth);
//     localStorage.removeItem("loginTime");
//   };

//   // ⏳ LOADING
//   if (loading) {
//     return (
//       <h2 style={{ color: "white", textAlign: "center" }}>
//         Loading...
//       </h2>
//     );
//   }

//   // 🔐 LOGIN SCREEN
//   if (!user) {
//     return (
//       <div
//         style={{
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column"
//         }}
//       >
//         <div className="header">
//           <img src={logo} alt="logo" className="logos" />
//         </div>

//         <h2>🔐 Private Astro Calendar</h2>

//         <button
//           onClick={handleLogin}
//           style={{
//             marginTop: "20px",
//             padding: "10px 20px",
//             border: "none",
//             background: "#4285F4",
//             color: "white",
//             borderRadius: "5px",
//             cursor: "pointer"
//           }}
//         >
//           Login with Google
//         </button>
//       </div>
//     );
//   }

//   // 🔓 AFTER LOGIN
//   return (
//     <>
//       <div className="top-bar">

//         <button
//           onClick={handleLogout}
//           style={{
//             padding: "6px 12px",
//             background: "#ff5252",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer"
//           }}
//         >
//           Logout
//         </button>

//       </div>

//       {children}
//     </>
//   );
// };

// export default Auth;

import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import { auth, provider } from "./firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const SESSION_TIME = 15 * 60 * 1000; // 15 minutes

// 🔐 Allowed Emails (OUTSIDE COMPONENT)
const allowedEmails = [
  "rupamdholakiya@gmail.com",
  "harshubh@gmail.com",
  "sheikhzeeshan07@gmail.com",
  "mishra.honey458@gmail.com",
  "neha@harshubh.com",
  "shah@harshubh.com",
  "class@harshubh.com",
  "ahmedabad@harshubh.com",
  "saleshms78@gmail.com",


  // 1 year access emails 21-04-2026 to 20-04-2027
  "panchalsagar287@gmail.com",
  "tusharrathi937@gmail.com",
  "pratikpc@hotmail.com",
  "jagdishbajiya3976@gmail.com",
  "sachinkhyaliya856@gmail.com",
  "ajitkumarnani2@gmail.com",
  "minakshisahare20@gmail.com",
  "cjvthate530@gmail.com",
  "arnikamilmile154@gmail.com",
  "05yashjaiswal@gmail.com",
  "varishasoni123@gmail.com",
  "tauseefmansoori.tm@gmail.com",
  "shubhmlunkad@gmail.com",
  "shankarshindeoppo@gmail.com",
  "wisdom.cwa@gmail.com",
  "bhavyamorbia33@gmail.com",
  "nirajdoshi03@gmail.com",
  "tt965458@gmail.com",
  "sahu113114@gmail.com",
  "amit.chandak14@gmail.com",
  "adityasahu2809@gmail.com",
  "jaiswal.rohit1118@gmail.com",
  "mirpuri.anand@gmail.com",
  "nawnitking@gmail.com",
  "dineshduhijod007@gmail.com",
  "rushikeshkulkarni34219@gmail.com",
  "gitinpatil@gmail.com",
  "blengule786@gmail.com",
  "mamtarachh@gmail.com",
  "mvbari222@gmail.com",
  "bhupendraraut2025@gmail.com",
  "roopesh500@gmail.com",
  "himanshu.virwani33@gmail.com",
  "bhishamgrg@gmail.com",
  "kukadeajay@gmail.com",
  "hms.surat4@gmail.com",
  "emceeadityakalla@gmail.com",

  "mirpuri.anisha@gmail.com",
  "compliancejural@gmail.com",
  "soorajligade@gmail.com",
  "jayeshagnihotri789@gmail.com",
  "devangidhingani61@gmail.com",
  "ajaygodara864@gmail.com",
  "kuberconsultants21@gmail.com",
  "rahulyadav03022002@gmail.com",
  "neerajprajapati683@gmail.com",
  "sawlaniomraj210@gmail.com",
  "dhingrajatin911@gmail.com",
  "kothe.abhishek303@gmail.com",
  "sarveshwaghmare345@gmail.com",
  "himanchalpatel98@gmail.com",
  "veerkamalbti@gmail.com",
  "chetankakad65@gmail.com",
  "pikay31@gmail.com",
  "clintonjoseph70@gmail.com",
  "preetikothari222@gmail.com",
  "aniketmate14@gmail.com",
  "manoharbaghel316@gmail.com",
  "akanshhaajaiin@gmail.com",
  "ishwardhruw1071@gmail.com",
  "atulthakor3231@gmail.com",
  "deepakthakur1261997@gmail.com",
  "anandbaradia77@gmail.com",
  "patnaikaswini3@gmail.com",
  "sanjeevbudhani22@gmail.com",
  "amanhms60@gmail.com",
  "thakkaravinashr@gmail.com",
  "manishpatel05081997@gmail.com",
  "praful.rajkot25@gmail.com",
  "pran8585@gmail.com",
  "rohitkakkad1990@gmail.com",
  "rohitmaheshwari1995@gmail.com",
  "vividubey69@gmail.com",
  "maligopal6762@gmail.com",
  "mr.grewalsingh89@gmail.com",
  "paripallishrinivas@gmail.com",
  "vipulnenawat7@gmail.com",
  "deepakkumar2623@gmail.com",
  "Pravinkhopade2664@gmail.com",
  "Santoshj275@gmail.com",
  "shreyasc78@gmail.com",
  "vinayakjadhav581@gmail.com",
  "Cottonhub5534@gmail.com",
  "kalyan6959@gmail.com",
  "chandanbose1985@gmail.com",
  "sumitjzb39@gmail.com",
  "ashishraut074@gmail.com",
  "bhagyeshsinhvaghela824@gmail.com",
  "arnshare@gmail.com",
  "cagautamagrawal@gmail.com",
  "piyushpvp80@gmail.com",
  "vp77702@gmail.com",
  "tradingworkfromhome@gmail.com",
  "sureshkumargharjare@gmail.com",
  "vikas.redhu007@gmail.com",
  "mohitbhutada09@gmail.com",
  "shweta63gulat@gmail.com",
  "cottonhub5534@gmail.com",
  "pravinkhopade2664@gmail.com",
  "surat@harshubh.com",
  "info@harshubh.com",
  "tech@harshubh.com",
  "roopaammanagi@gmail.com",
  "ojesvikumarmadaan@gmail.com",
  "drsingh.male@gmail.com",
  "onkarsathe939@gmail.com",
  "somil29@gmail.com",
  "harshmehtaadv@gmail.com",
  "meethgohil28@gmail.com",
  "mastermindsanyam@gmail.com",
  "maniguglani.13@gmail.com",
  "harishverma.ac.in@gmail.com",
  "mayankpatel607@gmail.com",
  "hanrahul40@gmail.com",
  "siyodiabhavesh@gmail.com",
  "rakesh.gehlot02@gmail.com",
  "paraggaikwad@gmail.com",
  "coolswappy7@gmail.com",
  "angel.ganatra24@gmail.com",
  "parth.khalpada@gmail.com",
  "amolburade8788@gmail.com",
  "saurabhtiwari2491@gmail.com",
  "sa525301@gmail.com",
  "dnyandeob1511@gmail.com",
  "gajubmali@gmail.com",
  "bhupeshnarwani1979@gmail.com",
  "nariyaprince15@gmail.com",
  "caronak0708@gmail.com",
  "kulkarnisameer190776@gmail.com",
  "amansethmusic@gmail.com",
  "amitdhruve4@gmail.com",
  "abhays9096@gmail.com",
  "bobbyptanna@gmail.com",
  "sharadtcs1@gmail.com",
  "arnavsingh0770@gmail.com",

  //10-07-2026 to 09-07-2027 surat//
"punitpatel3m@gmail.com",
"hetsavaliya12@gmail.com",
"advajaypadhiyar1001@gmail.com",
"patel22984@gmail.com",
"jasmin.6984@gmail.com",
"deepshah2403@gmail.com",
"nilayjasani77@gmail.com",
"savaniprashant78@gmail.com",
"gaurangshah1234@gmail.com",
"gauravmishra5470@gmail.com",
"komalpatel2010@gmail.com",
"bipinramani04@gmail.com",
"patelmayur199515@gmail.com",
"dhavalv64@gmail.com",
"scmalaviya1907@gmail.com",

//1y access 10/8/2026 to 09/08/2027 Master class//
"prasadmulikar500@gmail.com",
"anils373@gmail.com",
"syedmunirdaimi@gmail.com",
"yashrana116@gmail.com",
"shubhamrajde123@gmail.com",
"swarajkaushik@gmail.com",
"ravijadhav386@gmail.com",
"aartisahu1530@gmail.com",
"gunu.rakesh@gmail.com",
"haldersouravkolkata1994@gmail.com",
"pratikgarach98@gmail.com",
"sbmehta7976@gmail.com",
"shivamkathuria59@gmail.com",
"tarunjain1540@gmail.com",
"bhagyodaysales9042@gmail.com",
"vatsaldakhara007@gmail.com",
"saurabh2oc111@gmail.com",
"shubhamhdfc1918@gmail.com",
"satishsuttekar25@gmail.com",
"thakurdeepak7732@gmail.com",
"ganpatsinghsinwar2900@gmail.com",
"santoshj275@gmail.com",
"santoshj275@gmail.com",
"ashishmakkar48@gmail.com",
"ria.lakhani001@gmail.com",
"vjaniani@gmail.com",
"abhishekbhatia24@gmail.com",
"hbpower3@gmail.com",
"manojrank@gmail.com",
"naveengupta62634@gmail.com",
"warun.mulmule@gmail.com",
"rathoddd1976@gmail.com",
"josephkiran2006@gmail.com",
"maulaali101@gmail.com",
"ramalaxmipal@gmail.com",
"mukeshkumar810846@gmail.com",
"sahu.aakanksha01@gmail.com",
"mundadagvibha@gmail.com",

//08-08-2026 to 08-08-2027 surat//
"pinturamani003@gmail.com",
"sanjay.gabani2@gmail.com",
"jay8866patel@gmail.com",
"kaushalthakkar1723@gmail.com",
"abhishekjaiswal0214@gmail.com",
"rajnishgiri8@gmail.com",
"gdhanrajg@gmail.com",
"shahrushil56900@gmail.com",
"ketanlakhani121@gmail.com",
"sohilshah1979@gmail.com",
 "rupamdholakiya6@gmail.com",
"drshrikantjadhavofficial@gmail.com"


];

// 🔓 Unlimited Access Emails (OUTSIDE COMPONENT)
const unlimitedAccessEmails = [
  "rupamdholakiya@gmail.com",
  "rupamdholakiya023@gmail.com",
  "harshubh@gmail.com",
  "rupamdholakiya2198@gmail.com",
  "sheikhzeeshan07@gmail.com",
  "mishra.honey458@gmail.com",
  "neha@harshubh.com",
  "shah@harshubh.com",
  "class@harshubh.com",
  "info@harshubh.com"
];

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ AUTH CHECK
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        if (allowedEmails.includes(currentUser.email.toLowerCase())) {
          setUser(currentUser);

          if (!localStorage.getItem("loginTime")) {
            localStorage.setItem("loginTime", Date.now());
          }
        } else {
          alert("Access Denied ❌");
          signOut(auth);
        }
      } else {
        setUser(null);
        localStorage.removeItem("loginTime");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ⏱ SESSION TIMER
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        user &&
        unlimitedAccessEmails.includes(user.email.toLowerCase())
      ) {
        return;
      }

      const loginTime = localStorage.getItem("loginTime");

      if (loginTime) {
        const currentTime = Date.now();

        if (currentTime - loginTime > SESSION_TIME) {
          alert("Session expired ⏰ Please login again");
          signOut(auth);
          localStorage.removeItem("loginTime");
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [user]);

  // 🔐 LOGIN
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
      if (err.code !== "auth/popup-closed-by-user") {
        alert("Login failed ❌");
      }
    }
  };

  // 🔓 LOGOUT
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("loginTime");
  };

  // ⏳ LOADING
  if (loading) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Loading...</h2>;
  }

  // 🔐 LOGIN SCREEN
  if (!user) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <div className="header">
          <img src={logo} alt="logo" className="logos" />
        </div>

        <h2>🔐 Private Astro Calendar</h2>

        <button
          onClick={handleLogin}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            border: "none",
            background: "#4285F4",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Login with Google
        </button>
      </div>
    );
  }

  // 🔓 AFTER LOGIN
  return (
    <>
      <div className="top-bar">
        <button
          onClick={handleLogout}
          style={{
            padding: "6px 12px",
            background: "#ff5252",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>

      {children}
    </>
  );
};

export default Auth;

