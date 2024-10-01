import React from "react";
function Loader() {
  return (
    <div className="loader_div">
      {/* <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
                <div className="wheel"></div>
                <div className="hamster">
                    <div className="hamster__body">
                        <div className="hamster__head">
                            <div className="hamster__ear"></div>
                            <div className="hamster__eye"></div>
                            <div className="hamster__nose"></div>
                        </div>
                        <div className="hamster__limb hamster__limb--fr"></div>
                        <div className="hamster__limb hamster__limb--fl"></div>
                        <div className="hamster__limb hamster__limb--br"></div>
                        <div className="hamster__limb hamster__limb--bl"></div>
                        <div className="hamster__tail"></div>
                    </div>
                </div>
                <div className="spoke"></div>
            </div> */}
      <svg
        version="1.1"
        viewBox="0 0 2000 2000"
        width="120"
        height="120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path transform="translate(0)" d="m0 0h2e3v2e3h-2e3z" fill="#131316" />
        <path
          transform="translate(94,635)"
          d="m0 0 5 1 23 7 63 14 32 6 1 4-15 37-16 38-13 32-14 36-14 38-12 34-12 35-12 38-10 35-7 23-9 34-13 51-4 11-2 16-3 53-2 52-3 49v42l3 20 6 16 8 11 10 9 15 8 13 4 5 1 15 1h50l190-1 38-1 12-1 9-4 6-7 2-4h2l5 15 8 18 8 13 10 14 14 15 8 8 14 11 16 10 16 8 18 7 20 5 20 2 23-1 25-5 27-9 24-12 20-14 13-12 9-9 11-15 9-16h2l3 3 21 3 16 1h61l55-1 177-2 87-2 100-2 43-2 19-2 8 20 10 16 10 13 16 16 16 12 15 9 19 9 18 6 19 4 8 1h30l17-3 20-6 16-7 18-10 13-10 14-12 7-7 9-11 10-15 7-12 6-12 2-1 5 1h179l23-2 19-5 16-6 13-7 10-9 4-5 3-9 1-6 1-19 3-1 56 5 16 2v659h-2e3v-1247l2 4 2 16 4 10 7 8 8 5 9 3 12 1 10-3 8-6 5-10 3-12 8-53 8-43 7-37z"
          fill="#FCFCFC"
        />
        <path
          transform="translate(0)"
          d="m0 0h2e3v1264l-74-2-1-1-2-340-1-79-1-123-2-33-3-27-5-29-6-26-8-22-7-16-9-16-9-12-9-10-13-10-14-8-25-10-17-4-18-2-211-1-57-1-185-2h-109l-30 3-23 4-40 10-21 7-25 11-23 13-5 4-20 1-131 3-63 1-119 3-102 4-170 9-90 6-33 3-20 4-16 7-15 9-12 11-8 8-12 18-4-2-23-12-26-11-36-12-29-7-41-7-29-3-16 1-10 4-5 5-5 10-4 30-7 64h-1z"
          fill="#FCFCFC"
        />
        <path
          transform="translate(1904,1074)"
          d="m0 0 4 1 1 212 2 27v30l-4 16-6 8-7 6-12 6-18 6-16 3-28 1-138-2-31-1-2-1-5-37-5-21-6-16-8-16-8-14-9-12-12-14-8-8-17-13-10-6-23-11-16-5-17-4-8-1h-23l-19 3-16 5-16 8-11 7-13 11-4 4h-2l-2 4-9 10-13 18-12 22-9 21-9 27-5 25-2 17-32 1h-31v-213l-148 7-254 10-35 2 2 66 3 47 7 76v10l-42 1-18 1h-11l-7-21-6-26-7-29-7-21-8-16-9-14-11-14-9-10-14-12-14-9-15-8-11-5-21-7-18-4-15-2h-10l-18 2-21 5-21 8-18 10-17 12-11 9-5 6-5 5-9 10-10 15-8 16-6 15-13 42-6 17-1 2-93 2-112 2-60 2h-39l-15-3-9-3-5-3v-2l-5-2-6-7-5-9-5-12-2-14v-39l1-16 1-5h24l12-2 12-6 7-7 6-9 3-14v-13l-2-16-4-9-6-8-4-3v-2l-5-1-4-2-6-1h-15l-12 2v-40l9-3 27-7 22-7 4 1 2 53 1 39 1 75 2 21 4 19 6 12v2l3 1 5 5 12 7 17 5 6 1h54l90-4 36-3 10-2 1-3 2-33 2-63 3-135 1-28 1-11h1433z"
          fill="#CF7F30"
        />
        <path
          transform="translate(1213,501)"
          d="m0 0h55l30 1 148 1 65 1 136 1 78 2 56 1 18 2 15 5 15 8 13 10 8 7 7 8 10 13 9 15 7 15 8 21 6 25 5 31 3 29 2 38 1 54v279l-67-2h-1445l-1-1 1-55 1-28 1-1 12-1 247-4 85-2 66-1 24-1 262-6 169-3 127-2 93-2 112-2 67-2 81-2 48-2 14-2 9-5 6-8 4-12 1-6v-39l-2-57-3-64-1-4-2-27-1-21-1-3-2-24-3-21-3-18-1-2v-7l-18-2-63-5-48-3-41-2-104-3-233-5-71-1h-187l-91 1-166 3-114 3-105 4-100 6-104 7-104 10h-14l3-9 8-15 9-12 10-10 13-8 15-5 19-3 29-2 283-13 92-4 128-4 141-3 69-1h303l103 2 32 1 120 2h87l1-6-5-2-42-3-63-3-84-2-157-2h-289l3-3 9-4 20-9 29-9 33-8 27-5z"
          fill="#F1C36D"
        />
        <path
          transform="translate(1058,619)"
          d="m0 0h154l79 1 129 3 85 3 81 3 42 2 56 2 47 2 66 2 2 4 4 52 6 60 2 26 5 109v35l-3 9-5 6-9 3-16 1-130 3-91 3-308 6-42 2-45 1-96 1-37 1-18 1-113 2-33 1-18 1-61 1-96 1-51 2-130 2-62 2h-55v-24l1-19 1-1 103-2 73-1 106-2 373-6 85-1 203-4 98-1 44-1 78-1 102-2 57-1h25v6l6-2 4-2 2-5 4-14 2-11v-43l-5-56-4-36-5-33-5-25-1-6h-20l-144-3-22-1-53-1-157-1-92-1-42-1h-434l-94 2-314 4-89 1-20 1-9 2-9 6-5 8-5 13-14 46-11 36-9 29-14 47-6 21-6 20-2 8-9 27-3 11-11 33-8 31-3 13-2 22-1 29-1 2-38 12-16 5h-3l3-10 8-31 10-34 7-25 12-40 7-22 6-20 8-23 5-15 10-27 9-25 10-26 18-45 12-29 14-32 14-30 8-16 147-6 232-12 206-8 125-3z"
          fill="#4D4E4D"
        />
        <path
          transform="translate(62,1355)"
          d="m0 0h3l6 9 9 10 11 7 16 7 10 2 15 1h50l190-1 38-1 12-1 9-4 6-7 2-4h2l5 15 8 18 8 13 10 14 14 15 8 8 14 11 16 10 16 8 18 7 20 5 20 2 23-1 25-5 27-9 24-12 20-14 13-12 9-9 11-15 9-16h2l3 3 21 3 16 1h61l55-1 177-2 87-2 100-2 43-2 19-2 8 20 10 16 10 13 16 16 16 12 15 9 19 9 18 6 19 4v1l-7 1-3 2h-249l-317-1-178-1-62-1-252-2-116-1-97-2-26-1-29-3-29-6-19-6-10-4-18-11-11-11-7-10-5-10-2-10v-13l4-17 8-21 8-18z"
          fill="#DAD8DD"
        />
        <path
          transform="translate(1242,1187)"
          d="m0 0h20l1 9-1 89-2 107-52 2-129 3-49 1h-168l-10-1-2-21-4-75-4-53-3-26-1-2v-17l72-2 6-1 43-1 59-3 53-2 40-2 89-3z"
          fill="#B45F2C"
        />
        <path
          transform="translate(771,679)"
          d="m0 0h12l1 1 2 231-1 1-33 1-123 2-44 1-87 1h-48l-1-72-1-41-1-78-1-33-1-7 1-1 179-4 54-1z"
          fill="#C5EAFC"
        />
        <path
          transform="translate(384,946)"
          d="m0 0h3v47l-3 74-1 1v8l1 2-2 85-2 68-2 49-1 58-29 2-48 3-76 6h-32l-10-2-13-5-4-5-5-5-5-10-3-10-1-1-2-20-1-19v-154l3-3 5-3h3v-2l7-4 14-10h3v-2h3v-2l5-3h2v-2l10-7h3v-2l5-3h2v-2l7-5h3v-2l8-6h3v-2h3v-2l6-4h2v-2l14-10 5-4h3v-2l6-4h2v-2l4-1v-2l4-1v-2l4-1v-2l4-1 1-3 32-24 21-16 14-10 9-7h3l1-3 11-8z"
          fill="#B45E2C"
        />
        <path
          transform="translate(892,678)"
          d="m0 0h240v72l3 123v34l-266 4h-31l-1-1-3-206v-25z"
          fill="#C5EAFC"
        />
        <path
          transform="translate(291,686)"
          d="m0 0h73l21 1 3 9 5 25 2 21v36l-3 65-2 57-2 30-10 8-14 10-18 13-11 8-17 12-18 13-14 10-18 13-11 8-14 10-16 12-19 14-18 14-13 10-16 13-12 9h-1l-2-69-1-13 8-27 9-28 12-37 8-25 19-58 14-44 12-38 15-48 5-22 5-3 8-4 12-3z"
          fill="#C5EAFC"
        />
        <path
          transform="translate(583,1214)"
          d="m0 0h28l20 4 22 8 17 9 12 8 13 11 18 18 11 16 7 14 7 23 11 44 3 16-3 9-11 18-11 14-12 13-9 9-16 12-18 10-20 8-18 5-17 3h-26l-18-3-21-6-13-5-15-8-12-9-9-7v-2l-4-2-11-11-13-17-7-11-8-14-7-16-5-15v-16l9-31 6-15 8-15 8-11 9-10 11-11 13-10 15-9 13-6 24-8z"
          fill="#353636"
        />
        <path
          transform="translate(1188,679)"
          d="m0 0h89l96 1 67 1 24 1 1 1-1 91v126l-1 1-11 1-179 3-83 1-1-1v-201z"
          fill="#C5EAFC"
        />
        <path
          transform="translate(1475,1221)"
          d="m0 0h27l9 2 15 2 7 3 10 4 13 7 11 8 14 11 11 11 14 19 9 16 5 11 5 15 4 22 4 32 1 19-3 10-9 14-9 11-11 12h-2l-1 3-11 9-15 10-23 12-24 8-22 3h-19l-20-2-17-4-15-6-14-8-10-7-13-10-18-18-10-13-7-9-9-15-5-10-1-9 3-14 12-41 6-18 8-18 8-14 18-22 12-11 18-12 20-8 13-4z"
          fill="#353636"
        />
        <path
          transform="translate(1519,683)"
          d="m0 0 137 2 82 2 1 1 8 58 5 37 3 28 1 15v46l-3 17-3 8-4 1h-135l-80 2h-15v-26l2-190z"
          fill="#C5EAFC"
        />
        <path
          transform="translate(1907,1382)"
          d="m0 0 5 2 7 10 6 13 3 10v13l-7 14-7 9h-2l-2 4-11 10-15 10-23 12-25 9-21 5-24 4-29 3-21 1-109 1-90-1-15-1 2-1v-2l-4-1 24-7 16-7 18-10 13-10 14-12 7-7 9-11 10-15 7-12 6-12 2-1 5 1h179l23-2 19-5 16-6 13-7z"
          fill="#DAD8DD"
        />
        <path
          transform="translate(1827,912)"
          d="m0 0h3l2 9-3 14h-2l-1 7h-2v2l-6 4-8 3-5 2-3 3-9 2-22 1h-10l-9 1-39 2h-13l-16 1-27 2-29 1h-32l-2-1-1 2-4-1h-29l-57 2-18 2h-48l-34 1-2-1h-17l-4 1-4-1-7 1-13-1-9 1h-22l-35 1-16 1-98 1-2-1-1 2-19-1h-10l-6 1-5-1h-12l-21 1-29 1-38 2-52 1-7-1-9 1h-29l-33 1-22 1h-20l-12 1h-25l-2-1-1 2-3-1h-45l-3 1h-21l-31 1-20 1h-12l-18 1h-108l-4 1h-132l-15 1-7 3h-3l-1-3v-7l12-1 247-4 85-2 66-1 24-1 262-6 169-3 127-2 93-2 112-2 67-2 81-2 48-2 14-2 9-5 6-8 4-12z"
          fill="#F9CE72"
        />
        <path
          transform="translate(38,587)"
          d="m0 0h18l19 3 13 6-2 13-6 29-1 10-1 2-1 10-2 9-11 62-1 9-3 13-3 21-1 2-1 9-5 1h-11l-12-3-7-3v-2l-5-2-1-4h-2l-2-6v-39l1-5 3-44 3-27 1-15 3-20 2-20 3-6z"
          fill="#B45E2C"
        />
        <path
          transform="translate(408,685)"
          d="m0 0h30l1 1 3 224v8l-2 1-43 1 1-37 2-56 1-43v-63l-3-32-1-3z"
          fill="#4C4D4C"
        />
        <path
          transform="translate(1143,678)"
          d="m0 0h36l1 1 1 109 1 56v62l-9 1h-29l-1-1v-185l-1-42z"
          fill="#4C4D4C"
        />
        <path
          transform="translate(1062,555)"
          d="m0 0h303l103 2 32 1 120 2h87l2-4 1 4-1 3-12 3-13 1-19 1h-26l-69 1-51-2h-10l-30-2h-87l-27-1h-15l-52-1-33-1h-40l-23-1h-169l-7 1h-54l-32 2-57 1h-43l-17 1h-22l-8 1-26 1-22 1h-22l-33 2-43 2h-9l-10 1-20 1h-11l-40 2-11 1-1-1-13 1-60 2h-20l-12 1h-16l-21 2h-43l-2-2 14-2 260-12 92-4 128-4 141-3z"
          fill="#F8CD72"
        />
        <path
          transform="translate(794,679)"
          d="m0 0h31l1 4 2 113 2 80v35l-1 1h-34l-1-63-1-169z"
          fill="#4C4D4C"
        />
        <path
          transform="translate(592,1310)"
          d="m0 0h17l14 4 10 7 8 8 7 14 2 9v8l-3 14-7 12-5 6-12 9-10 4-4 1h-16l-12-4-10-7-8-8-8-13-3-14v-10l2-9 6-10 9-10 10-7z"
          fill="#E4E4E5"
        />
        <path
          transform="translate(1474,682)"
          d="m0 0h33l1 1v35l-1 117-1 66h-33v-218z"
          fill="#4C4D4C"
        />
        <path
          transform="translate(1486,1310)"
          d="m0 0 14 3 11 6 9 7 7 9 4 10 1 5v13l-3 10-8 11-9 7-11 5-9 2h-9l-12-3-10-7-7-8-5-10-2-11v-13l3-12 6-8 7-7 10-6 6-2z"
          fill="#E4E4E5"
        />
        <path
          transform="translate(1613,1059)"
          d="m0 0h114l33 1 7 1h34l19 1h30l6 1 36 2v1l-5 1-46-1h-1169l-236-1v-1l97-1 26-1h79l73-1h356l98 1h299l86-1 27-1h29z"
          fill="#F5D283"
        />
        <path
          transform="translate(589,1297)"
          d="m0 0h23l8 2 16 8 10 8 9 12 6 12 2 9v21l-5 14-6 10-8 10-9 7-12 6-6 2-7 1h-15l-12-3-12-5-10-7-6-5-9-13-5-11-2-10v-14l4-16 7-12 9-10 14-10 11-5zm3 13-13 4-11 8-9 10-6 12-1 6v10l3 14 6 10 9 10 9 7 10 4 4 1h16l12-4 10-7 5-4 9-13 4-11 1-7v-8l-3-12-6-11-10-10-11-6-11-3z"
          fill="#101014"
        />
        <path
          transform="translate(323 1e3)"
          d="m0 0h29l9 5 6 8 1 2v28l-2 27-2 11-3 2-31 2h-18l-1-31v-41l2-5 2-4z"
          fill="#4D4E4D"
        />
        <path
          transform="translate(1213,501)"
          d="m0 0h55l30 1 148 1 65 1 136 1 78 2 56 1 18 2 15 5 15 8 13 10 8 7 7 8 10 13 9 15v5l-5-3-3-7-1-3h-2l-2-5-4-5-8-7-14-16v-2l-5-2-6-5-8-4-19-8-1-1h-29l-46 1h-19l-16-1h-13l-3-1h-153l-51-1-37-1h-60l-26-1h-50l-37-2h-21l-24-2h-7l-3 2-13 1v-2h-2v2l-3 1-4-3 8-2z"
          fill="#F8CD72"
        />
        <path
          transform="translate(1477,1301)"
          d="m0 0h19l12 3 13 7 12 11 5 7 5 12 2 9v15l-4 12-9 14-7 7-13 8-11 4-6 1h-12l-15-5-8-4-9-7-8-9-6-12-3-12v-18l4-14 6-10 9-9 12-7zm9 9-10 2-10 5-10 9-4 5-4 9-1 6v13l2 11 5 10 9 10 8 5 12 3h9l12-3 11-6 8-7 6-9 3-10v-13l-4-13-7-10-7-6-14-8z"
          fill="#101014"
        />
        <path
          transform="translate(1276,534)"
          d="m0 0h94l69 1 24 1h103l22 1 28 2 38 1 33 3h8l7 3 1 4h5l2 3h-3l-4-1-42-3-63-3-84-2-157-2h-275v-1l63-2 3-2 17-1 72-1h13z"
          fill="#F9D078"
        />
        <path
          transform="translate(99,591)"
          d="m0 0 10 1 23 6 10 3 27 9 16 6 8 4 13 5 15 7 10 4-2 5-5 11-9-1-64-16-47-10-8-1v-13z"
          fill="#B45F2C"
        />
        <path
          transform="translate(1926,1269)"
          d="m0 0 61 2 3 1v34l-3 1-1 2-9-1-2 6-1 4v6l-3 1v2l-9 1-14-1-4 1-7-1-11-1z"
          fill="#DAD8DD"
        />
        <path
          transform="translate(84,1181)"
          d="m0 0h16l10 3 7 8 4 13 1 6v20l-5 9-5 5-5 4-9 3-5 1h-24v-15l3-45 1-10 1-1z"
          fill="#F9CF74"
        />
        <path
          transform="translate(836,606)"
          d="m0 0 9 1 5 2 1-2 5 1h3l4 1 48 1v1l-19 1-108 2-114 3-105 4-100 6-61 4-18-1v-1l9-1 7-2 10-1 7-1 4 1 5-1 17-1 3-1 21-1 10-2 25-1 11-1 17-1 9-1 31-1 41-1 11-1 7-1h14l33-1h13l6 1 4-1 17 1 1 1h32l16-3 22-2z"
          fill="#F8CF78"
        />
        <path
          transform="translate(1772,940)"
          d="m0 0h27v1l-16 1-130 3-91 3-308 6-42 2-45 1-96 1-37 1-18 1-113 2-33 1-18 1-61 1-96 1-51 2-130 2-62 2h-55v-24h1v23l60-2 102-2 72-2 45-1 105-1 45-1h9l10-1 107-2 43-2 52-1 92-1 89-3 99-2 30-1 50-1 88-1 50-1 22-1 90-3h17l19-1z"
          fill="#353636"
        />
        <path
          transform="translate(323 1e3)"
          d="m0 0h29l9 5 6 8 1 2v28l-2 27-2 11-3 2-31 2h-18l-1-31v-41l2-5 2-4zm12 4-11 3-5 3-1 5v54l1 9 25-1 11-1 3-1 1-22v-39l-4-6-9-4z"
          fill="#141418"
        />
        <path
          transform="translate(759,1406)"
          d="m0 0h2l3 3v2l3 1v3h-3l-1 3h-2l-2 5-6 10-7 11h-2v2h-2l-2 4-8 7-14 10-6 5-5 2-10 6-9 4h-3v2l-4 1-6 2-6-1v2l-4 2-10 1-5 2-6 2v1l-7 1-2 2-20 4h-33l-1-3h-7l-11-3-3-3-5-1 2-2 9 1 12 3 20 2 23-1 25-5 27-9 24-12 20-14 13-12 9-9 11-15z"
          fill="#E3E3E4"
        />
        <path
          transform="translate(1008,1411)"
          d="m0 0h126v1h-5v2l-10 3h-8l-5 2-19 1-14 1h-59l-44-1-12-2-2-2-4-2 13-1 36-1z"
          fill="#E3E3E4"
        />
        <path
          transform="translate(1050,603)"
          d="m0 0 7 1 2-1 6 1 4-1 5 1 6-1 9 1 5 1 5-1v2l4-1 2 1h4l1-2v2h18l2-1h13l5-1h64l3-1 2 1 30 1 10 1 3 1 29 1 6 1v1h-290l-42-1v-1l22-1h13v-2h6l-1 2 17-3 4 1 3-1h18z"
          fill="#F6CC74"
        />
        <path
          transform="translate(1807,635)"
          d="m0 0 4 1 2 6 1 7 2 5 2 20 2 6 1 17 2 15 2 10 1 21 2 15v18l1 22v26l-1 20h-2v-15h-2l-1-7-3-64-1-4-2-27-1-21-1-3-2-24-3-21-3-18z"
          fill="#F3C66D"
        />
        <path
          transform="translate(1925,1268)"
          d="m0 0h29l30 1 8 1 1 3v61l-4 1-60-7-4-2zm1 1v57l15 1 5 1 3-1 16 1 6-1v-2l3-1v-9l3-5v-2l9 1 2-3h2v-34l-3-1-37-1z"
          fill="#4B4C4B"
        />
        <path
          transform="translate(1644,1412)"
          d="m0 0h2l-1 7 1 3-4 11-10 16-10 10-8 7-5 4-5 5-6 2v2l-5 3-6 4-2 2-12 4-1 2h-2v2h-6v2l-10 2-7 3-4 3-2 2-5 1h-7v-2l-4-1 24-7 16-7 18-10 13-10 14-12 7-7 9-11 10-15 7-12z"
          fill="#E3E3E4"
        />
        <path
          transform="translate(836,606)"
          d="m0 0 9 1 5 2 1-2 5 1h3l4 1 48 1v1l-19 1-108 2-79 2h-14l3-3 7-3 17 1 1 1h32l16-3 22-2z"
          fill="#F7D07A"
        />
        <path
          transform="translate(132,1093)"
          d="m0 0h3v13l-19 6-27 8-12 5h-2l1-13 1-2 39-12z"
          fill="#E3E3E4"
        />
        <path
          transform="translate(1213,603)"
          d="m0 0 4 1 30 1 10 1 3 1 29 1 6 1v1h-67l-35-1-88-1 1-2h3l1-2v2h18l2-1h13l5-1h64z"
          fill="#F8CE75"
        />
        <path
          transform="translate(1905,918)"
          d="m0 0 2 3 1 147h-5v-2l-3-1-2-4h2l2-7 1-16v-104z"
          fill="#FAD074"
        />
        <path
          transform="translate(99,591)"
          d="m0 0h5v2l3 1 1 3-1 2h-3v7l3 7 3 3 18 6 10 5 8 2 5 3v1h-9l-38-8-8-1v-13z"
          fill="#CB7C30"
        />
        <path
          transform="translate(168,816)"
          d="m0 0 1 3-3 10h-2l-1 6-8 23-5 14-4 12-4 13-4 10-3 9-8 25-9 28-13 44-14 49-5 20-4 15 2 2-6 1 3-10 8-31 10-34 7-25 12-40 7-22 6-20 8-23 5-15 10-27 9-25z"
          fill="#353636"
        />
        <path
          transform="translate(670,1485)"
          d="m0 0 3 1-4 2v2l-4 2-10 1-5 2-6 2v1l-7 1-2 2-20 4h-33l-1-3h-7l-11-3-3-3-5-1 2-2 9 1 12 3 20 2 23-1 25-5z"
          fill="#E2E1E3"
        />
        <path
          transform="translate(1570,611)"
          d="m0 0 16 1 1 2 10 1 1-3v2l5-2v2h7l2 1 18 1 67 3 21 2v1h-23l-59-3-145-4v-1l22-1h56z"
          fill="#F4CB78"
        />
        <path
          transform="translate(1721,906)"
          d="m0 0h23v1l-14 1-65 1-16 1-14 1-34 1h-161v-1l44-1 78-1 102-2z"
          fill="#353636"
        />
        <path
          transform="translate(1393,606)"
          d="m0 0 5 1h40l9 1 4-1 6 2 4 1v2h12v1l-22 1-97-2-12-1 1-2h35l15-2z"
          fill="#F7D07A"
        />
        <path
          transform="translate(619,924)"
          d="m0 0h54v1l-10 1h-13l-7 1-3-1-14 1-24 1h-20l-5-1-1 2-3-1h-55l-35 1h-18l-19 1h-47v10h-1v-11l1-1 103-2 73-1z"
          fill="#353636"
        />
        <path
          transform="translate(364,673)"
          d="m0 0 12 1h64l57-1h108v1l-233 3h-89v-1l47-1z"
          fill="#353636"
        />
        <path
          transform="translate(1796,510)"
          d="m0 0 10 2 12 5 14 8 11 9 7 6 7 8 10 13 9 15v5l-5-3-3-7-1-3h-2l-2-5-4-5-8-7-14-16v-2l-5-2-6-5-8-4-19-8-1-3z"
          fill="#F6C96F"
        />
        <path
          transform="translate(439,1373)"
          d="m0 0h2l5 15 8 18 8 13 10 14 14 15 9 9-1 2-3-2-6-1v-2h-2l-3-5-5-5-1-5h-2l-5-5v-2l-4-2-2-3v-3l-5-3-3-7v-4l-6-13v-2h-3l-2-5-5-3-4-2-2 1 2-4z"
          fill="#E2E2E3"
        />
        <path
          transform="translate(197,825)"
          d="m0 0 1 4-11 37-6 21-6 20-2 8-9 27-3 11-11 33-8 31-2 7h-1l1-11 8-31 6-18 5-16 1-4 3-11 3-8 4-12 6-21 8-25 9-29z"
          fill="#353636"
        />
        <path
          transform="translate(1185,915)"
          d="m0 0h55v1l-54 1-39 1-54 2h-154v-1l115-2 85-1z"
          fill="#353636"
        />
        <path
          transform="translate(1062,619)"
          d="m0 0h150l79 1v1l-60 1h-30l-4-1-5 1h-23l-15-1h-70l-7 1-6-1-2 1-7-1z"
          fill="#353636"
        />
        <path
          transform="translate(869,920)"
          d="m0 0h63v1l-28 1h-16l-9 1h-58l-36 1h-104v-1l133-2z"
          fill="#353636"
        />
        <path
          transform="translate(1894,633)"
          d="m0 0h2l4 21 4 30v23l-2-1-3-15-3-28v-9l-2-10-1-9z"
          fill="#F6C96E"
        />
        <path
          transform="translate(302,683)"
          d="m0 0h37l31 1 13 1 2 2h-94l-19 2h-5l4-2 16-3z"
          fill="#3F4040"
        />
        <path
          transform="translate(1342,912)"
          d="m0 0h58v1l-18 1h-18l-5 1h-119v-1z"
          fill="#353636"
        />
        <path
          transform="translate(1347,1417)"
          d="m0 0 3 3 10 17 11 14 16 16 8 6-1 2-13-10-5-2-5-3v-2l-4-2v-2h-2l-1-4h-2l-2-7-6-5-1-5v-3l-3-5-3-6z"
          fill="#E2E2E4"
        />
        <path
          transform="translate(556,1363)"
          d="m0 0h3l5 14 11 13 2 5v2l4 1v2l4 1-4 1-10-7-8-8-7-11z"
          fill="#F8F8F9"
          className="wheel"
        />
        <path
          transform="translate(1570,611)"
          d="m0 0 16 1 2 4-4 1-52-1-41-1v-1l22-1h56z"
          fill="#F2CB7D"
        />
        <path
          transform="translate(132,1093)"
          d="m0 0h3v13l-19 6-27 8-12 5h-2v-6l1 4 12-5 22-7 22-6h2v-9l-24 7-16 5-12 3-5 1v-2l39-12z"
          fill="#DAD8DD"
        />
        <path
          transform="translate(2e3 1268)"
          d="m0 0h3v69h-3v-17l-1-51z"
          fill="#353636"
        />
        <path
          transform="translate(1907,1382)"
          d="m0 0 5 2 5 8h-7l-11 2-6-1-13 5h-3v-2l16-6 13-7z"
          fill="#E4E3E5"
        />
        <path
          transform="translate(356,1016)"
          d="m0 0 3 3v39l-1 22-3 1-11 1-25 1v-5l1 3 32-2 3-3 2-44v-10z"
          fill="#353636"
        />
        <path
          transform="translate(1925,1268)"
          d="m0 0h29l30 1 3 2h-37l-18-1-6-1v57h-1z"
          fill="#484948"
        />
        <path
          transform="translate(144,1025)"
          d="m0 0h1l2 13 2 70h-2l-1-8v-22l-1-20-1-1-1-9v-10z"
          fill="#3E3F3F"
        />
        <path
          transform="translate(1838,1062)"
          d="m0 0h12l6 1 36 2v1l-5 1-46-1-13-1v-2z"
          fill="#F3D085"
        />
        <path
          transform="translate(700,610)"
          d="m0 0h9l9 1 1 1 7 1 19 1v1l-40 1h-14l3-3z"
          fill="#F3D088"
        />
        <path
          transform="translate(1440,1500)"
          d="m0 0 9 1 19 5 6 1v1l-7 1h-21l2-1v-2h-2v-2l-5-1z"
          fill="#E2E2E4"
        />
        <path
          transform="translate(282,1393)"
          d="m0 0h34l1 2-9 2-4 1-5-1h-22v-3z"
          fill="#E4E4E5"
        />
        <path
          transform="translate(1557,1496)"
          d="m0 0 2 1-5 3-7 3-4 3-2 2-5 1h-7v-2l-4-1 24-7z"
          fill="#E1E1E3"
        />
        <path
          transform="translate(1511,1321)"
          d="m0 0 4 1 8 7 6 10 1 9-2-4-2-7-6-1-6-7v-5z"
          fill="#F7F7F7"
        />
        <path
          transform="translate(1597,612)"
          d="m0 0 1 2 5-2v2h7l2 1 15 1 2 2h-23l-22-1 4-2h9z"
          fill="#F5C971"
        />
        <path
          transform="translate(224,636)"
          d="m0 0h7l-2 5-5 11-9-1v-3l9-4 1-2h-2v-5z"
          fill="#C67831"
        />
        <path
          transform="translate(1570,611)"
          d="m0 0 16 1 2 4-4 1h-12l-14-1v-2l11-1z"
          fill="#F6CF7C"
        />
        <path
          transform="translate(670,1485)"
          d="m0 0 3 1-4 2v2l-4 2-10 1-5 2-6 2v1h-8l1-3 19-5z"
          fill="#E0E0E2"
        />
        <path
          transform="translate(397,1053)"
          d="m0 0 5 5v3h2l1 3 13 1v1h-22l-1-3z"
          fill="#F2D28F"
        />
        <path
          transform="translate(317,636)"
          d="m0 0h11v1l-40 4h-11v-2l22-2z"
          fill="#ECB761"
        />
        <path
          transform="translate(4,653)"
          d="m0 0h1l-1 29-1 3-1 18-1 5h-1v-19z"
          fill="#3D3E3D"
        />
        <path
          transform="translate(110,594)"
          d="m0 0h7l17 5 2 3-6-1-7-2-5 1-7-2z"
          fill="#CD7C30"
        />
        <path
          transform="translate(316,632)"
          d="m0 0h10l1 1 9 1-2 2-26 1 4-1 1-3z"
          fill="#FACF73"
        />
        <path
          transform="translate(1205,502)"
          d="m0 0 1 4-3 1-13 1v-2h-2v2l-3 1-4-3 8-2z"
          fill="#F7D07D"
        />
        <path
          transform="translate(332,581)"
          d="m0 0 20 1-4 2h-31l3-2z"
          fill="#F5CC77"
        />
        <path
          transform="translate(1725,622)"
          d="m0 0h17l20 2v1h-22l-15-1z"
          fill="#F4C66F"
        />
        <path
          transform="translate(1450,1353)"
          d="m0 0h3l1 12 2 7 2 5-2 1-3-5-3-11z"
          fill="#FBFBFB"
        />
        <path
          transform="translate(335,1009)"
          d="m0 0h11l9 4v3l-5-3-7-1h-11l-12 3 1-2 10-3z"
          fill="#353636"
        />
        <path
          transform="translate(1006,606)"
          d="m0 0m-1 1m-7-2h6l-1 2 2 2h-42v-1l22-1h13z"
          fill="#FBD174"
        />
        <path
          transform="translate(1449,1362)"
          d="m0 0h2l3 11 2 2 1 7-5-5-3-7z"
          fill="#EBEBEC"
        />
        <path
          transform="translate(360,684)"
          d="m0 0h10l13 1 2 2h-21l-4-1z"
          fill="#3E3F3F"
        />
        <path
          transform="translate(1690,619)"
          d="m0 0 18 1 10 1v1h-23l-11-1v-1z"
          fill="#F5C972"
        />
        <path
          transform="translate(357,630)"
          d="m0 0m-3 1 15 1v1l-8 1h-23v-1z"
          fill="#F3C36A"
        />
        <path
          transform="translate(1074,537)"
          d="m0 0 4 1 3 1 1 3h-14l3-3z"
          fill="#EEC77C"
        />
        <path
          transform="translate(638,1328)"
          d="m0 0 3 1 6 11-1 4-4-8v-2h-2l-1-2h-2z"
          fill="#F4F4F5"
        />
        <path
          transform="translate(1109,604)"
          d="m0 0 1 2h17l1 2h-23l1-2h3z"
          fill="#FBD174"
        />
        <path
          transform="translate(1500,1393)"
          d="m0 0m-4 1 4 1-3 2-5 1h-9l-1-2z"
          fill="#F1F0F2"
        />
        <path
          transform="translate(1814,923)"
          d="m0 0 1 4-4 8-5 4-7 1 8-4 6-10z"
          fill="#353636"
        />
        <path
          transform="translate(360,629)"
          d="m0 0 1 2 7-1h13v1l-9 1-3 1-12-1z"
          fill="#F8D17A"
        />
        <path
          transform="translate(1673,618)"
          d="m0 0 17 1v1l-13 1-4-1z"
          fill="#F2CC80"
        />
        <path
          transform="translate(574,1395)"
          d="m0 0h3v2l4 1v2l4 1-4 1-8-5z"
          fill="#F0F0F1"
        />
        <path
          transform="translate(641,1494)"
          d="m0 0h5v2l-2 2h-8l1-3z"
          fill="#E1E1E3"
        />
        <path
          transform="translate(1382,1464)"
          d="m0 0 4 2 9 7-1 2-12-9z"
          fill="#E0DFE2"
        />
        <path
          transform="translate(121,596)"
          d="m0 0 11 2 4 4-6-1-7-2v-2z"
          fill="#C27330"
        />
        <path
          transform="translate(1347,1417)"
          d="m0 0 3 3 6 10v2h-2l-4-7-3-6z"
          fill="#E1E0E2"
        />
        <path
          transform="translate(1451,1365)"
          d="m0 0 4 1 1 7 2 4-2 1-3-5z"
          fill="#FDFDFD"
        />
        <path
          transform="translate(1926,1332)"
          d="m0 0h8l4 3h-13z"
          fill="#3C3D3D"
        />
        <path
          transform="translate(1172,507)"
          d="m0 0h7l-4 4-8-1v-2z"
          fill="#F6CC74"
        />
        <path
          transform="translate(1813,945)"
          d="m0 0m-2 1 2 1-5 5-4-1 3-3z"
          fill="#F4C976"
        />
      </svg>
    </div>
  );
}

export default Loader;
