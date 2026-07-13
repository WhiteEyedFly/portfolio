import { makeLink, loadJson } from "./shared.js";

let commitsBackup = [
  {
    "sha": "f38fb5d974e2478f29b8f955511a4fcce22669a5",
    "message": "project and link fixes",
    "date": "2026-06-22T20:41:59Z",
    "author": "WhiteEyedFly",
    "parents": [
      "fd1521a9842f104ec67ddf61569bcc3dbd80dbab"
    ],
    "children": [],
    "branches": [
      "main"
    ],
    "position": 63958704407.00001
  },
  {
    "sha": "fd1521a9842f104ec67ddf61569bcc3dbd80dbab",
    "message": "graphVisualiser test",
    "date": "2026-06-22T20:31:49Z",
    "author": "WhiteEyedFly",
    "parents": [
      "15688b4701d6d718ceef1e20b782efc3fd949711"
    ],
    "children": [
      "f38fb5d974e2478f29b8f955511a4fcce22669a5"
    ],
    "branches": [
      "main"
    ],
    "position": 63958703797.00001
  },
  {
    "sha": "15688b4701d6d718ceef1e20b782efc3fd949711",
    "message": "graphVisualiser refactored - still needs dolling up due to text overlap and massive spacing",
    "date": "2026-06-22T00:10:48Z",
    "author": "WhiteEyedFly",
    "parents": [
      "24e81861ba32ab2bf17c9a928ec1963861aa2177"
    ],
    "children": [
      "fd1521a9842f104ec67ddf61569bcc3dbd80dbab"
    ],
    "branches": [
      "main"
    ],
    "position": 63958630536.00001
  },
  {
    "sha": "24e81861ba32ab2bf17c9a928ec1963861aa2177",
    "message": "merging graphVisualiser",
    "date": "2026-06-21T23:00:32Z",
    "author": "WhiteEyedFly",
    "parents": [
      "d5877b988a73c1104a02ffbfbcc72e271cc8cd3d",
      "49ca6b8fd19bc5db4b925fdc7ecb7933320aaf6b"
    ],
    "children": [
      "15688b4701d6d718ceef1e20b782efc3fd949711"
    ],
    "branches": [
      "main"
    ],
    "position": 63958626320.00001
  },
  {
    "sha": "49ca6b8fd19bc5db4b925fdc7ecb7933320aaf6b",
    "message": "Graph functional but hideous - requires further touch ups, merging back to main",
    "date": "2026-06-21T22:57:13Z",
    "author": "WhiteEyedFly",
    "parents": [
      "537be14d9f2037db73e15d644b50fb9ff73a66fa"
    ],
    "children": [
      "24e81861ba32ab2bf17c9a928ec1963861aa2177"
    ],
    "branches": [
      "graphVisualiser"
    ],
    "position": 63958626121.00001
  },
  {
    "sha": "537be14d9f2037db73e15d644b50fb9ff73a66fa",
    "message": "Structure functional",
    "date": "2026-06-21T22:34:05Z",
    "author": "WhiteEyedFly",
    "parents": [
      "c3e1b62d16928126b1dff4cefd6c997bc7a6fdbc"
    ],
    "children": [
      "49ca6b8fd19bc5db4b925fdc7ecb7933320aaf6b"
    ],
    "branches": [
      "graphVisualiser"
    ],
    "position": 63958624733.00001
  },
  {
    "sha": "d5877b988a73c1104a02ffbfbcc72e271cc8cd3d",
    "message": "Final fixes",
    "date": "2026-06-21T21:29:36Z",
    "author": "WhiteEyedFly",
    "parents": [
      "61914c620f7356b3ec44e513e27d9ee834619453"
    ],
    "children": [
      "24e81861ba32ab2bf17c9a928ec1963861aa2177"
    ],
    "branches": [
      "main"
    ],
    "position": 63958620864.00001
  },
  {
    "sha": "61914c620f7356b3ec44e513e27d9ee834619453",
    "message": "Mobile compatibility restored",
    "date": "2026-06-21T21:08:22Z",
    "author": "WhiteEyedFly",
    "parents": [
      "7f357f74e095c5ae7091a558a9f7cfe1bfd4377e"
    ],
    "children": [
      "d5877b988a73c1104a02ffbfbcc72e271cc8cd3d"
    ],
    "branches": [
      "main"
    ],
    "position": 63958619590.00001
  },
  {
    "sha": "7f357f74e095c5ae7091a558a9f7cfe1bfd4377e",
    "message": "Lukewarm mobile compatibility fix - will need further touch ups",
    "date": "2026-06-21T12:36:16Z",
    "author": "WhiteEyedFly",
    "parents": [
      "b8a6a201fefd701b28aa67445441ce13b231402c"
    ],
    "children": [
      "61914c620f7356b3ec44e513e27d9ee834619453"
    ],
    "branches": [
      "main"
    ],
    "position": 63958588864.00001
  },
  {
    "sha": "b8a6a201fefd701b28aa67445441ce13b231402c",
    "message": "Buttons now search",
    "date": "2026-06-21T10:58:08Z",
    "author": "WhiteEyedFly",
    "parents": [
      "9697e26c796e4248b626abb69e8e3e7446ffb5aa"
    ],
    "children": [
      "7f357f74e095c5ae7091a558a9f7cfe1bfd4377e"
    ],
    "branches": [
      "main"
    ],
    "position": 63958582976.00001
  },
  {
    "sha": "9697e26c796e4248b626abb69e8e3e7446ffb5aa",
    "message": "Improved search bar - project names now factor in",
    "date": "2026-06-21T10:21:47Z",
    "author": "WhiteEyedFly",
    "parents": [
      "3219fa552768e3bc1c70c174ff368d04cdb4bb78"
    ],
    "children": [
      "b8a6a201fefd701b28aa67445441ce13b231402c"
    ],
    "branches": [
      "main"
    ],
    "position": 63958580795.00001
  },
  {
    "sha": "3219fa552768e3bc1c70c174ff368d04cdb4bb78",
    "message": "Merge to refactor1",
    "date": "2026-06-21T10:08:02Z",
    "author": "WhiteEyedFly",
    "parents": [
      "31a039cd8bfc0e3be05f171ea814c0d90a27a829",
      "238a17e2d0a003f71f37d136b3fd6cad6907516e"
    ],
    "children": [
      "9697e26c796e4248b626abb69e8e3e7446ffb5aa"
    ],
    "branches": [
      "main"
    ],
    "position": 63958579970.00001
  },
  {
    "sha": "31a039cd8bfc0e3be05f171ea814c0d90a27a829",
    "message": "Merge back to main from refactor1",
    "date": "2026-06-21T09:58:33Z",
    "author": "WhiteEyedFly",
    "parents": [
      "b242f9920a236eae6dd432b370b21df3e243e514"
    ],
    "children": [
      "3219fa552768e3bc1c70c174ff368d04cdb4bb78"
    ],
    "branches": [
      "main"
    ],
    "position": 63958579401.00001
  },
  {
    "sha": "238a17e2d0a003f71f37d136b3fd6cad6907516e",
    "message": "Fixed projectMax and searcher - broken during to TS switch@",
    "date": "2026-06-21T09:55:10Z",
    "author": "WhiteEyedFly",
    "parents": [
      "dc04ee12697e99a79429cb922f4003a52ea25257"
    ],
    "children": [
      "3219fa552768e3bc1c70c174ff368d04cdb4bb78"
    ],
    "branches": [
      "refactor1"
    ],
    "position": 63958579198.00001
  },
  {
    "sha": "dc04ee12697e99a79429cb922f4003a52ea25257",
    "message": "TS conversion finished",
    "date": "2026-06-21T09:36:33Z",
    "author": "WhiteEyedFly",
    "parents": [
      "bbd01678af2a5998f68c815a1c14e6af3d3de4c7"
    ],
    "children": [
      "238a17e2d0a003f71f37d136b3fd6cad6907516e"
    ],
    "branches": [
      "refactor1"
    ],
    "position": 63958578081.00001
  },
  {
    "sha": "bbd01678af2a5998f68c815a1c14e6af3d3de4c7",
    "message": "TS sees no errors",
    "date": "2026-06-21T09:22:35Z",
    "author": "WhiteEyedFly",
    "parents": [
      "1b5a56a0c4daba7ca6ca81ed7ac93a53aa914db3"
    ],
    "children": [
      "dc04ee12697e99a79429cb922f4003a52ea25257"
    ],
    "branches": [
      "refactor1"
    ],
    "position": 63958577243.00001
  },
  {
    "sha": "1b5a56a0c4daba7ca6ca81ed7ac93a53aa914db3",
    "message": "TS port finished for all but main page",
    "date": "2026-06-21T09:07:15Z",
    "author": "WhiteEyedFly",
    "parents": [
      "7d96e5557dadce8385fbad22b5c9a4afca3bf6fe"
    ],
    "children": [
      "bbd01678af2a5998f68c815a1c14e6af3d3de4c7"
    ],
    "branches": [
      "refactor1"
    ],
    "position": 63958576323.00001
  },
  {
    "sha": "7d96e5557dadce8385fbad22b5c9a4afca3bf6fe",
    "message": "port to TS started",
    "date": "2026-06-21T09:01:38Z",
    "author": "WhiteEyedFly",
    "parents": [
      "db9bac8d878d2fda7dfa99ce042a853ede2b1850"
    ],
    "children": [
      "1b5a56a0c4daba7ca6ca81ed7ac93a53aa914db3"
    ],
    "branches": [
      "refactor1"
    ],
    "position": 63958575986.00001
  },
  {
    "sha": "db9bac8d878d2fda7dfa99ce042a853ede2b1850",
    "message": "restructured files",
    "date": "2026-06-21T08:11:43Z",
    "author": "WhiteEyedFly",
    "parents": [
      "100686d0427292577ec316331df8ddb13d082376"
    ],
    "children": [
      "7d96e5557dadce8385fbad22b5c9a4afca3bf6fe"
    ],
    "branches": [
      "refactor1"
    ],
    "position": 63958572991.00001
  },
  {
    "sha": "100686d0427292577ec316331df8ddb13d082376",
    "message": ".gitignore made and minor positioning fixes",
    "date": "2026-06-21T08:02:26Z",
    "author": "WhiteEyedFly",
    "parents": [
      "30dc8a9b35e5068f9b311b6defeedc8d50d6d66e"
    ],
    "children": [
      "db9bac8d878d2fda7dfa99ce042a853ede2b1850"
    ],
    "branches": [
      "refactor1"
    ],
    "position": 63958572434.00001
  },
  {
    "sha": "30dc8a9b35e5068f9b311b6defeedc8d50d6d66e",
    "message": "project maximiser functional - barely",
    "date": "2026-06-21T06:15:45Z",
    "author": "WhiteEyedFly",
    "parents": [
      "8748449ca62f86373180dcd8c866b5745b2f7e9a"
    ],
    "children": [
      "100686d0427292577ec316331df8ddb13d082376"
    ],
    "branches": [
      "refactor1"
    ],
    "position": 63958566033.00001
  },
  {
    "sha": "8748449ca62f86373180dcd8c866b5745b2f7e9a",
    "message": "functioning project slider and resized dropdowns",
    "date": "2026-06-21T04:41:24Z",
    "author": "WhiteEyedFly",
    "parents": [
      "e5ce827c833a859f3d712cb86c3b4cc6f7ef4409"
    ],
    "children": [
      "30dc8a9b35e5068f9b311b6defeedc8d50d6d66e"
    ],
    "branches": [
      "refactor1"
    ],
    "position": 63958560372.00001
  },
  {
    "sha": "e5ce827c833a859f3d712cb86c3b4cc6f7ef4409",
    "message": "start of branch",
    "date": "2026-06-21T03:28:23Z",
    "author": "WhiteEyedFly",
    "parents": [
      "b242f9920a236eae6dd432b370b21df3e243e514"
    ],
    "children": [
      "8748449ca62f86373180dcd8c866b5745b2f7e9a"
    ],
    "branches": [
      "refactor1"
    ],
    "position": 63958555991.00001
  },
  {
    "sha": "b242f9920a236eae6dd432b370b21df3e243e514",
    "message": "minor height fix",
    "date": "2026-06-19T20:02:15Z",
    "author": "WhiteEyedFly",
    "parents": [
      "6409057c100ad0b3665749a17d2c721cc800bfeb"
    ],
    "children": [
      "31a039cd8bfc0e3be05f171ea814c0d90a27a829",
      "e5ce827c833a859f3d712cb86c3b4cc6f7ef4409"
    ],
    "branches": [
      "main"
    ],
    "position": 63958442823.00001
  },
  {
    "sha": "6409057c100ad0b3665749a17d2c721cc800bfeb",
    "message": "max-height error on detail fixed",
    "date": "2026-06-19T20:00:45Z",
    "author": "WhiteEyedFly",
    "parents": [
      "af39829810fc1160747e20c89cc6caa10b67cb0d"
    ],
    "children": [
      "b242f9920a236eae6dd432b370b21df3e243e514"
    ],
    "branches": [
      "main"
    ],
    "position": 63958442733.00001
  },
  {
    "sha": "af39829810fc1160747e20c89cc6caa10b67cb0d",
    "message": "spcing fixes",
    "date": "2026-06-19T19:58:31Z",
    "author": "WhiteEyedFly",
    "parents": [
      "851114cf2d4f31fc13975065e53d156ac0c847e8"
    ],
    "children": [
      "6409057c100ad0b3665749a17d2c721cc800bfeb"
    ],
    "branches": [
      "main"
    ],
    "position": 63958442599.00001
  },
  {
    "sha": "851114cf2d4f31fc13975065e53d156ac0c847e8",
    "message": "faded search bar fixed",
    "date": "2026-06-19T19:35:47Z",
    "author": "WhiteEyedFly",
    "parents": [
      "83989fa28bc4a216b37a3270edd1a2c22da58bbf"
    ],
    "children": [
      "af39829810fc1160747e20c89cc6caa10b67cb0d"
    ],
    "branches": [
      "main"
    ],
    "position": 63958441235.00001
  },
  {
    "sha": "83989fa28bc4a216b37a3270edd1a2c22da58bbf",
    "message": "skill size change",
    "date": "2026-06-19T19:24:59Z",
    "author": "WhiteEyedFly",
    "parents": [
      "e28036126e1317027b9ee4c42910b153c1a30973"
    ],
    "children": [
      "851114cf2d4f31fc13975065e53d156ac0c847e8"
    ],
    "branches": [
      "main"
    ],
    "position": 63958440587.00001
  },
  {
    "sha": "e28036126e1317027b9ee4c42910b153c1a30973",
    "message": "title fix",
    "date": "2026-06-19T19:24:04Z",
    "author": "WhiteEyedFly",
    "parents": [
      "844d965ff3f83dbc7180d805f12b84bc6aac4394"
    ],
    "children": [
      "83989fa28bc4a216b37a3270edd1a2c22da58bbf"
    ],
    "branches": [
      "main"
    ],
    "position": 63958440532.00001
  },
  {
    "sha": "844d965ff3f83dbc7180d805f12b84bc6aac4394",
    "message": "transparency changes",
    "date": "2026-06-19T18:39:48Z",
    "author": "WhiteEyedFly",
    "parents": [
      "bc1fa3a12df6296a23ef77ffceba0d2f451c892d"
    ],
    "children": [
      "e28036126e1317027b9ee4c42910b153c1a30973"
    ],
    "branches": [
      "main"
    ],
    "position": 63958437876.00001
  },
  {
    "sha": "bc1fa3a12df6296a23ef77ffceba0d2f451c892d",
    "message": "finalised Polish project",
    "date": "2026-06-19T15:02:10Z",
    "author": "WhiteEyedFly",
    "parents": [
      "40995f19262e99eef7d91e2cdf1f1fa2b1bc94eb"
    ],
    "children": [
      "844d965ff3f83dbc7180d805f12b84bc6aac4394"
    ],
    "branches": [
      "main"
    ],
    "position": 63958424818.00001
  },
  {
    "sha": "40995f19262e99eef7d91e2cdf1f1fa2b1bc94eb",
    "message": "minor opacity and colour fixes",
    "date": "2026-06-18T22:34:38Z",
    "author": "WhiteEyedFly",
    "parents": [
      "5420aa5731d93a537b463b853387de65053d8b2f"
    ],
    "children": [
      "bc1fa3a12df6296a23ef77ffceba0d2f451c892d"
    ],
    "branches": [
      "main"
    ],
    "position": 63958365566.00001
  },
  {
    "sha": "5420aa5731d93a537b463b853387de65053d8b2f",
    "message": "background and fade out",
    "date": "2026-06-18T22:32:05Z",
    "author": "WhiteEyedFly",
    "parents": [
      "969295b9960a4e8a4fa5f18161a54972fd6eb3da"
    ],
    "children": [
      "40995f19262e99eef7d91e2cdf1f1fa2b1bc94eb"
    ],
    "branches": [
      "main"
    ],
    "position": 63958365413.00001
  },
  {
    "sha": "969295b9960a4e8a4fa5f18161a54972fd6eb3da",
    "message": "mobile top bar spacing fix",
    "date": "2026-06-18T21:47:10Z",
    "author": "WhiteEyedFly",
    "parents": [
      "02591ab3afcd663d93972615a5f81baff9a8e344"
    ],
    "children": [
      "5420aa5731d93a537b463b853387de65053d8b2f"
    ],
    "branches": [
      "main"
    ],
    "position": 63958362718.00001
  },
  {
    "sha": "02591ab3afcd663d93972615a5f81baff9a8e344",
    "message": "skills update and minor fixes",
    "date": "2026-06-18T21:44:13Z",
    "author": "WhiteEyedFly",
    "parents": [
      "f9a54117c1ac64de942ff0bb4e14e8c86c8db956"
    ],
    "children": [
      "969295b9960a4e8a4fa5f18161a54972fd6eb3da"
    ],
    "branches": [
      "main"
    ],
    "position": 63958362541.00001
  },
  {
    "sha": "f9a54117c1ac64de942ff0bb4e14e8c86c8db956",
    "message": "mini games added",
    "date": "2026-06-18T21:28:06Z",
    "author": "WhiteEyedFly",
    "parents": [
      "88eeb2e35ab82bf4ebf6d61fbf72c05d13867b84"
    ],
    "children": [
      "02591ab3afcd663d93972615a5f81baff9a8e344"
    ],
    "branches": [
      "main"
    ],
    "position": 63958361574.00001
  },
  {
    "sha": "c3e1b62d16928126b1dff4cefd6c997bc7a6fdbc",
    "message": "post secrets failure full code check",
    "date": "2026-06-17T23:17:22Z",
    "author": "WhiteEyedFly",
    "parents": [
      "c07ee15abb3f6dae92cd82948cda2a3b92b574dd"
    ],
    "children": [
      "537be14d9f2037db73e15d644b50fb9ff73a66fa"
    ],
    "branches": [
      "graphVisualiser"
    ],
    "position": 63958281730.00001
  },
  {
    "sha": "c07ee15abb3f6dae92cd82948cda2a3b92b574dd",
    "message": "post secrets failure hello world check",
    "date": "2026-06-17T23:16:17Z",
    "author": "WhiteEyedFly",
    "parents": [
      "5c4b9cd221ba9033a1389f6978d016b379d0e2ef"
    ],
    "children": [
      "c3e1b62d16928126b1dff4cefd6c997bc7a6fdbc"
    ],
    "branches": [
      "graphVisualiser"
    ],
    "position": 63958281665.00001
  },
  {
    "sha": "5c4b9cd221ba9033a1389f6978d016b379d0e2ef",
    "message": "svg fix",
    "date": "2026-06-17T21:06:25Z",
    "author": "WhiteEyedFly",
    "parents": [
      "ddbbaed480c62e51adcdef06bcdb5380106c9c41"
    ],
    "children": [
      "c07ee15abb3f6dae92cd82948cda2a3b92b574dd"
    ],
    "branches": [
      "graphVisualiser"
    ],
    "position": 63958273873.00001
  },
  {
    "sha": "ddbbaed480c62e51adcdef06bcdb5380106c9c41",
    "message": "playing around with D3 for graph visualiser",
    "date": "2026-06-17T21:03:08Z",
    "author": "WhiteEyedFly",
    "parents": [
      "88eeb2e35ab82bf4ebf6d61fbf72c05d13867b84"
    ],
    "children": [
      "5c4b9cd221ba9033a1389f6978d016b379d0e2ef"
    ],
    "branches": [
      "graphVisualiser"
    ],
    "position": 63958273676.00001
  },
  {
    "sha": "88eeb2e35ab82bf4ebf6d61fbf72c05d13867b84",
    "message": "dropdowns added",
    "date": "2026-06-17T17:47:37Z",
    "author": "WhiteEyedFly",
    "parents": [
      "0c85dcf8c771944ccd1c00c58f0541a1ec2c86b7"
    ],
    "children": [
      "f9a54117c1ac64de942ff0bb4e14e8c86c8db956",
      "ddbbaed480c62e51adcdef06bcdb5380106c9c41"
    ],
    "branches": [
      "main"
    ],
    "position": 63958261945.00001
  },
  {
    "sha": "0c85dcf8c771944ccd1c00c58f0541a1ec2c86b7",
    "message": "PtE tool update 2",
    "date": "2026-06-09T21:26:16Z",
    "author": "WhiteEyedFly",
    "parents": [
      "8a5d89ec5e513f392e10666789b8c717c34e9cb3"
    ],
    "children": [
      "88eeb2e35ab82bf4ebf6d61fbf72c05d13867b84"
    ],
    "branches": [
      "main"
    ],
    "position": 63957583864.00001
  },
  {
    "sha": "8a5d89ec5e513f392e10666789b8c717c34e9cb3",
    "message": "PtE tool update",
    "date": "2026-06-09T21:15:55Z",
    "author": "WhiteEyedFly",
    "parents": [
      "a5ed967552d1455e882a493a2572182e2fbbddda"
    ],
    "children": [
      "0c85dcf8c771944ccd1c00c58f0541a1ec2c86b7"
    ],
    "branches": [
      "main"
    ],
    "position": 63957583243.00001
  },
  {
    "sha": "a5ed967552d1455e882a493a2572182e2fbbddda",
    "message": "P to E project added",
    "date": "2026-06-03T19:53:30Z",
    "author": "WhiteEyedFly",
    "parents": [
      "a15bf65b961448196885190ccab03be430a6e160"
    ],
    "children": [
      "8a5d89ec5e513f392e10666789b8c717c34e9cb3"
    ],
    "branches": [
      "main"
    ],
    "position": 63957059898.00001
  },
  {
    "sha": "a15bf65b961448196885190ccab03be430a6e160",
    "message": "fact check",
    "date": "2026-05-31T23:12:41Z",
    "author": "WhiteEyedFly",
    "parents": [
      "8ec33edacaa0bb6d222ef29a92c1fab56722dc44"
    ],
    "children": [
      "a5ed967552d1455e882a493a2572182e2fbbddda"
    ],
    "branches": [
      "main"
    ],
    "position": 63956861032.99999
  },
  {
    "sha": "8ec33edacaa0bb6d222ef29a92c1fab56722dc44",
    "message": "search bar working",
    "date": "2026-05-31T23:03:53Z",
    "author": "WhiteEyedFly",
    "parents": [
      "ab0d4ff41af0a431ef439894495c98da18cd1076"
    ],
    "children": [
      "a15bf65b961448196885190ccab03be430a6e160"
    ],
    "branches": [
      "main"
    ],
    "position": 63956860504.99999
  },
  {
    "sha": "ab0d4ff41af0a431ef439894495c98da18cd1076",
    "message": "dw about it",
    "date": "2026-05-31T21:39:56Z",
    "author": "WhiteEyedFly",
    "parents": [
      "c8b71f908f76b6ee64ccc099bd7d0445d1145802"
    ],
    "children": [
      "8ec33edacaa0bb6d222ef29a92c1fab56722dc44"
    ],
    "branches": [
      "main"
    ],
    "position": 63956855467.99999
  },
  {
    "sha": "c8b71f908f76b6ee64ccc099bd7d0445d1145802",
    "message": "centered pfp",
    "date": "2026-05-31T21:35:40Z",
    "author": "WhiteEyedFly",
    "parents": [
      "dac121dc1e26bf117d4ad28abcb8ad0bcb84e3d1"
    ],
    "children": [
      "ab0d4ff41af0a431ef439894495c98da18cd1076"
    ],
    "branches": [
      "main"
    ],
    "position": 63956855211.99999
  },
  {
    "sha": "dac121dc1e26bf117d4ad28abcb8ad0bcb84e3d1",
    "message": "css split up and 2nd blog post",
    "date": "2026-05-31T21:22:06Z",
    "author": "WhiteEyedFly",
    "parents": [
      "cb664c5e7e4c9314874963e0381c418ee3aafeea"
    ],
    "children": [
      "c8b71f908f76b6ee64ccc099bd7d0445d1145802"
    ],
    "branches": [
      "main"
    ],
    "position": 63956854397.99999
  },
  {
    "sha": "cb664c5e7e4c9314874963e0381c418ee3aafeea",
    "message": "kilordle project glaze",
    "date": "2026-05-31T20:32:58Z",
    "author": "WhiteEyedFly",
    "parents": [
      "aab2ee85a8c722b7f87dab13a3f222cec8a719e7"
    ],
    "children": [
      "dac121dc1e26bf117d4ad28abcb8ad0bcb84e3d1"
    ],
    "branches": [
      "main"
    ],
    "position": 63956851449.99999
  },
  {
    "sha": "aab2ee85a8c722b7f87dab13a3f222cec8a719e7",
    "message": "nothing",
    "date": "2026-05-31T16:09:28Z",
    "author": "WhiteEyedFly",
    "parents": [
      "58c1bdcf0c5abeb1917e5611873a20a3a42bb0ec"
    ],
    "children": [
      "cb664c5e7e4c9314874963e0381c418ee3aafeea"
    ],
    "branches": [
      "main"
    ],
    "position": 63956835639.99999
  },
  {
    "sha": "58c1bdcf0c5abeb1917e5611873a20a3a42bb0ec",
    "message": "spacing issues",
    "date": "2026-05-31T15:45:34Z",
    "author": "WhiteEyedFly",
    "parents": [
      "a4a5dbd5d2cf45833f32cf5c7e5515cdfb6d0cf7"
    ],
    "children": [
      "aab2ee85a8c722b7f87dab13a3f222cec8a719e7"
    ],
    "branches": [
      "main"
    ],
    "position": 63956834205.99999
  },
  {
    "sha": "a4a5dbd5d2cf45833f32cf5c7e5515cdfb6d0cf7",
    "message": "spacing issues",
    "date": "2026-05-31T15:36:40Z",
    "author": "WhiteEyedFly",
    "parents": [
      "8aa99cc7b4222ec19325de82f689d0ba4ac435fd"
    ],
    "children": [
      "58c1bdcf0c5abeb1917e5611873a20a3a42bb0ec"
    ],
    "branches": [
      "main"
    ],
    "position": 63956833671.99999
  },
  {
    "sha": "8aa99cc7b4222ec19325de82f689d0ba4ac435fd",
    "message": "kilordle project finished",
    "date": "2026-05-31T15:30:37Z",
    "author": "WhiteEyedFly",
    "parents": [
      "a44fdc0577fca259dd5ee1ad839b2baa71c9a7cf"
    ],
    "children": [
      "a4a5dbd5d2cf45833f32cf5c7e5515cdfb6d0cf7"
    ],
    "branches": [
      "main"
    ],
    "position": 63956833308.99999
  },
  {
    "sha": "a44fdc0577fca259dd5ee1ad839b2baa71c9a7cf",
    "message": "solved page header overlap issues",
    "date": "2026-05-31T14:18:35Z",
    "author": "WhiteEyedFly",
    "parents": [
      "6622f4070269df8c8d539db2d457d5c9e41f78f1"
    ],
    "children": [
      "8aa99cc7b4222ec19325de82f689d0ba4ac435fd"
    ],
    "branches": [
      "main"
    ],
    "position": 63956828986.99999
  },
  {
    "sha": "6622f4070269df8c8d539db2d457d5c9e41f78f1",
    "message": "contributors page finished",
    "date": "2026-05-31T14:11:56Z",
    "author": "WhiteEyedFly",
    "parents": [
      "27a2ae84b25ff319d2e7b52fbb8cc990c3b889cc"
    ],
    "children": [
      "a44fdc0577fca259dd5ee1ad839b2baa71c9a7cf"
    ],
    "branches": [
      "main"
    ],
    "position": 63956828587.99999
  },
  {
    "sha": "27a2ae84b25ff319d2e7b52fbb8cc990c3b889cc",
    "message": "contributors page added",
    "date": "2026-05-31T14:01:08Z",
    "author": "WhiteEyedFly",
    "parents": [
      "76af817c518e3dda72c6be82596c145540d0ce84"
    ],
    "children": [
      "6622f4070269df8c8d539db2d457d5c9e41f78f1"
    ],
    "branches": [
      "main"
    ],
    "position": 63956827939.99999
  },
  {
    "sha": "76af817c518e3dda72c6be82596c145540d0ce84",
    "message": "contributors logic added",
    "date": "2026-05-31T13:31:33Z",
    "author": "WhiteEyedFly",
    "parents": [
      "5821e8d3642dd9ccab57e4442a530ead0b43ba04"
    ],
    "children": [
      "27a2ae84b25ff319d2e7b52fbb8cc990c3b889cc"
    ],
    "branches": [
      "main"
    ],
    "position": 63956826164.99999
  },
  {
    "sha": "5821e8d3642dd9ccab57e4442a530ead0b43ba04",
    "message": "contributors added, no logic",
    "date": "2026-05-31T12:31:41Z",
    "author": "WhiteEyedFly",
    "parents": [
      "ff714b42d7049ee3189802100d32cbea302d47ff"
    ],
    "children": [
      "76af817c518e3dda72c6be82596c145540d0ce84"
    ],
    "branches": [
      "main"
    ],
    "position": 63956822572.99999
  },
  {
    "sha": "ff714b42d7049ee3189802100d32cbea302d47ff",
    "message": "more kilordle skills added",
    "date": "2026-05-27T12:22:06Z",
    "author": "WhiteEyedFly",
    "parents": [
      "39c4fcf6b4fac637a32251b02c2fcab75b156e95"
    ],
    "children": [
      "5821e8d3642dd9ccab57e4442a530ead0b43ba04"
    ],
    "branches": [
      "main"
    ],
    "position": 63956476397.99999
  },
  {
    "sha": "39c4fcf6b4fac637a32251b02c2fcab75b156e95",
    "message": "debt simplifier - pandas added",
    "date": "2026-05-25T08:18:30Z",
    "author": "WhiteEyedFly",
    "parents": [
      "76f6ccaef08e773af3d498ffa0b20f87f993555b"
    ],
    "children": [
      "ff714b42d7049ee3189802100d32cbea302d47ff"
    ],
    "branches": [
      "main"
    ],
    "position": 63956288981.99999
  },
  {
    "sha": "76f6ccaef08e773af3d498ffa0b20f87f993555b",
    "message": "blog borders",
    "date": "2026-05-25T00:14:37Z",
    "author": "WhiteEyedFly",
    "parents": [
      "f80952dbb29f214d675abc180240d504b52d7720"
    ],
    "children": [
      "39c4fcf6b4fac637a32251b02c2fcab75b156e95"
    ],
    "branches": [
      "main"
    ],
    "position": 63956259948.99999
  },
  {
    "sha": "f80952dbb29f214d675abc180240d504b52d7720",
    "message": "link hover colours",
    "date": "2026-05-25T00:04:21Z",
    "author": "WhiteEyedFly",
    "parents": [
      "78bba664b53cfc02c956b572ef9b547a4486ce93"
    ],
    "children": [
      "76f6ccaef08e773af3d498ffa0b20f87f993555b"
    ],
    "branches": [
      "main"
    ],
    "position": 63956259332.99999
  },
  {
    "sha": "78bba664b53cfc02c956b572ef9b547a4486ce93",
    "message": "pc fix - website size",
    "date": "2026-05-24T23:54:15Z",
    "author": "WhiteEyedFly",
    "parents": [
      "f19fc781e7de9222c259bf8f3f82952945281a59"
    ],
    "children": [
      "f80952dbb29f214d675abc180240d504b52d7720"
    ],
    "branches": [
      "main"
    ],
    "position": 63956258726.99999
  },
  {
    "sha": "f19fc781e7de9222c259bf8f3f82952945281a59",
    "message": "mobile fix - search bar positioning and scrollers",
    "date": "2026-05-24T23:50:16Z",
    "author": "WhiteEyedFly",
    "parents": [
      "6f1af92f71293bbf2539fb721fd6cfebef703f63"
    ],
    "children": [
      "78bba664b53cfc02c956b572ef9b547a4486ce93"
    ],
    "branches": [
      "main"
    ],
    "position": 63956258487.99999
  },
  {
    "sha": "6f1af92f71293bbf2539fb721fd6cfebef703f63",
    "message": "mobile fix - about",
    "date": "2026-05-24T23:43:45Z",
    "author": "WhiteEyedFly",
    "parents": [
      "6622e787b601f2d591c77b4e23136d0d1340ee3b"
    ],
    "children": [
      "f19fc781e7de9222c259bf8f3f82952945281a59"
    ],
    "branches": [
      "main"
    ],
    "position": 63956258096.99999
  },
  {
    "sha": "6622e787b601f2d591c77b4e23136d0d1340ee3b",
    "message": "buttons redone",
    "date": "2026-05-24T22:49:21Z",
    "author": "WhiteEyedFly",
    "parents": [
      "52c753dca62e1ea3c545c701211004cffa47687c"
    ],
    "children": [
      "6f1af92f71293bbf2539fb721fd6cfebef703f63"
    ],
    "branches": [
      "main"
    ],
    "position": 63956254832.99999
  },
  {
    "sha": "52c753dca62e1ea3c545c701211004cffa47687c",
    "message": "file renaming support",
    "date": "2026-05-24T22:33:01Z",
    "author": "WhiteEyedFly",
    "parents": [
      "12e5a712a5a69863b10f09df40690417f68c3efe"
    ],
    "children": [
      "6622e787b601f2d591c77b4e23136d0d1340ee3b"
    ],
    "branches": [
      "main"
    ],
    "position": 63956253852.99999
  },
  {
    "sha": "12e5a712a5a69863b10f09df40690417f68c3efe",
    "message": "rename portfolio",
    "date": "2026-05-24T22:30:39Z",
    "author": "WhiteEyedFly",
    "parents": [
      "05be6db10191261ae8c81ab3ef0de5c033fb6e2b"
    ],
    "children": [
      "52c753dca62e1ea3c545c701211004cffa47687c"
    ],
    "branches": [
      "main"
    ],
    "position": 63956253710.99999
  },
  {
    "sha": "05be6db10191261ae8c81ab3ef0de5c033fb6e2b",
    "message": "pfp size fix",
    "date": "2026-05-24T16:55:30Z",
    "author": "WhiteEyedFly",
    "parents": [
      "4a30bbd87be1f9b0d008f510b84ed237cd2634b5"
    ],
    "children": [
      "12e5a712a5a69863b10f09df40690417f68c3efe"
    ],
    "branches": [
      "main"
    ],
    "position": 63956233601.99999
  },
  {
    "sha": "4a30bbd87be1f9b0d008f510b84ed237cd2634b5",
    "message": "image taken down",
    "date": "2026-05-24T16:49:00Z",
    "author": "WhiteEyedFly",
    "parents": [
      "7153575302d650ad94125b03fefea068325d3012"
    ],
    "children": [
      "05be6db10191261ae8c81ab3ef0de5c033fb6e2b"
    ],
    "branches": [
      "main"
    ],
    "position": 63956233211.99999
  },
  {
    "sha": "7153575302d650ad94125b03fefea068325d3012",
    "message": "div wrapper div position fix for mobile",
    "date": "2026-05-24T16:48:00Z",
    "author": "WhiteEyedFly",
    "parents": [
      "afa8bbba0607629d0089e6caa0256cae7e3ba994"
    ],
    "children": [
      "4a30bbd87be1f9b0d008f510b84ed237cd2634b5"
    ],
    "branches": [
      "main"
    ],
    "position": 63956233151.99999
  },
  {
    "sha": "afa8bbba0607629d0089e6caa0256cae7e3ba994",
    "message": "fixing type errors",
    "date": "2026-05-24T16:44:35Z",
    "author": "WhiteEyedFly",
    "parents": [
      "0f4cc51ff331df15a8a5f22afb1bbad6cb18c03b"
    ],
    "children": [
      "7153575302d650ad94125b03fefea068325d3012"
    ],
    "branches": [
      "main"
    ],
    "position": 63956232946.99999
  },
  {
    "sha": "0f4cc51ff331df15a8a5f22afb1bbad6cb18c03b",
    "message": "basic screen adaptation on images and header",
    "date": "2026-05-24T16:43:47Z",
    "author": "WhiteEyedFly",
    "parents": [
      "f16ab6c814da186ae64171ffc9024850d26a786d"
    ],
    "children": [
      "afa8bbba0607629d0089e6caa0256cae7e3ba994"
    ],
    "branches": [
      "main"
    ],
    "position": 63956232898.99999
  },
  {
    "sha": "f16ab6c814da186ae64171ffc9024850d26a786d",
    "message": "non-functional search bar and basice screen adaptation for wrapper element and text",
    "date": "2026-05-24T16:24:36Z",
    "author": "WhiteEyedFly",
    "parents": [
      "9ca8c84f85f3de33b9e6b92d6ea6ae43ee44074f"
    ],
    "children": [
      "0f4cc51ff331df15a8a5f22afb1bbad6cb18c03b"
    ],
    "branches": [
      "main"
    ],
    "position": 63956231747.99999
  },
  {
    "sha": "9ca8c84f85f3de33b9e6b92d6ea6ae43ee44074f",
    "message": "reworked makeProject for readability and adaptability",
    "date": "2026-05-24T12:11:01Z",
    "author": "WhiteEyedFly",
    "parents": [
      "af9f37081a1c77866e3d506b06525a2f8089c1ea"
    ],
    "children": [
      "f16ab6c814da186ae64171ffc9024850d26a786d"
    ],
    "branches": [
      "main"
    ],
    "position": 63956216532.99999
  },
  {
    "sha": "af9f37081a1c77866e3d506b06525a2f8089c1ea",
    "message": "mkaeSkills function added to centralise functionality",
    "date": "2026-05-24T11:55:39Z",
    "author": "WhiteEyedFly",
    "parents": [
      "9619a6ea4edb1a430b5de87d67394e3b5bc95282"
    ],
    "children": [
      "9ca8c84f85f3de33b9e6b92d6ea6ae43ee44074f"
    ],
    "branches": [
      "main"
    ],
    "position": 63956215610.99999
  },
  {
    "sha": "9619a6ea4edb1a430b5de87d67394e3b5bc95282",
    "message": "skillsList ordered alphabetically",
    "date": "2026-05-24T11:52:04Z",
    "author": "WhiteEyedFly",
    "parents": [
      "2405a0e6d31043be524d125f380b4c1c001e3465"
    ],
    "children": [
      "af9f37081a1c77866e3d506b06525a2f8089c1ea"
    ],
    "branches": [
      "main"
    ],
    "position": 63956215395.99999
  },
  {
    "sha": "2405a0e6d31043be524d125f380b4c1c001e3465",
    "message": "fact checking",
    "date": "2026-05-24T00:18:23Z",
    "author": "WhiteEyedFly",
    "parents": [
      "107f0e69668a7e5eba1a32b26041534a8d8ee93b"
    ],
    "children": [
      "9619a6ea4edb1a430b5de87d67394e3b5bc95282"
    ],
    "branches": [
      "main"
    ],
    "position": 63956173774.99999
  },
  {
    "sha": "107f0e69668a7e5eba1a32b26041534a8d8ee93b",
    "message": "rejigging education and experience layout",
    "date": "2026-05-24T00:17:12Z",
    "author": "WhiteEyedFly",
    "parents": [
      "fc1dfd7cd9fd6b56c5da238d8e0bd9c08c4439fc"
    ],
    "children": [
      "2405a0e6d31043be524d125f380b4c1c001e3465"
    ],
    "branches": [
      "main"
    ],
    "position": 63956173703.99999
  },
  {
    "sha": "fc1dfd7cd9fd6b56c5da238d8e0bd9c08c4439fc",
    "message": "job descriptions added",
    "date": "2026-05-24T00:07:35Z",
    "author": "WhiteEyedFly",
    "parents": [
      "b6526cc9350280b61e95588ecd418b6794e38900"
    ],
    "children": [
      "107f0e69668a7e5eba1a32b26041534a8d8ee93b"
    ],
    "branches": [
      "main"
    ],
    "position": 63956173126.99999
  },
  {
    "sha": "b6526cc9350280b61e95588ecd418b6794e38900",
    "message": "placeholder images changed",
    "date": "2026-05-23T23:49:20Z",
    "author": "WhiteEyedFly",
    "parents": [
      "72a683bd9aa377ec9072ab71a391d83547433a72"
    ],
    "children": [
      "fc1dfd7cd9fd6b56c5da238d8e0bd9c08c4439fc"
    ],
    "branches": [
      "main"
    ],
    "position": 63956172031.99999
  },
  {
    "sha": "72a683bd9aa377ec9072ab71a391d83547433a72",
    "message": "placeholder images added",
    "date": "2026-05-23T23:46:52Z",
    "author": "WhiteEyedFly",
    "parents": [
      "ef0091fab1692d9a7184cf51d8d04c1a7a5d1d7e"
    ],
    "children": [
      "b6526cc9350280b61e95588ecd418b6794e38900"
    ],
    "branches": [
      "main"
    ],
    "position": 63956171883.99999
  },
  {
    "sha": "ef0091fab1692d9a7184cf51d8d04c1a7a5d1d7e",
    "message": "project descriptions added",
    "date": "2026-05-23T23:24:00Z",
    "author": "WhiteEyedFly",
    "parents": [
      "ebb396705f5672150f984cb467102a97e42748c1"
    ],
    "children": [
      "72a683bd9aa377ec9072ab71a391d83547433a72"
    ],
    "branches": [
      "main"
    ],
    "position": 63956170511.99999
  },
  {
    "sha": "ebb396705f5672150f984cb467102a97e42748c1",
    "message": "project images added",
    "date": "2026-05-23T22:56:58Z",
    "author": "WhiteEyedFly",
    "parents": [
      "7f5014aafef09e51dbd9e5481f7d8e756d84c573"
    ],
    "children": [
      "ef0091fab1692d9a7184cf51d8d04c1a7a5d1d7e"
    ],
    "branches": [
      "main"
    ],
    "position": 63956168889.99999
  },
  {
    "sha": "7f5014aafef09e51dbd9e5481f7d8e756d84c573",
    "message": "bringing blog design back into accord",
    "date": "2026-05-23T22:02:45Z",
    "author": "WhiteEyedFly",
    "parents": [
      "42630bc982ef361f514013019a455d596cb914de"
    ],
    "children": [
      "ebb396705f5672150f984cb467102a97e42748c1"
    ],
    "branches": [
      "main"
    ],
    "position": 63956165636.99999
  },
  {
    "sha": "42630bc982ef361f514013019a455d596cb914de",
    "message": "header fix",
    "date": "2026-05-23T21:55:15Z",
    "author": "WhiteEyedFly",
    "parents": [
      "bf815b42e6f2331dedac1bdbf1b30d388fbf1e25"
    ],
    "children": [
      "7f5014aafef09e51dbd9e5481f7d8e756d84c573"
    ],
    "branches": [
      "main"
    ],
    "position": 63956165186.99999
  },
  {
    "sha": "bf815b42e6f2331dedac1bdbf1b30d388fbf1e25",
    "message": "phone test 2",
    "date": "2026-05-23T20:57:01Z",
    "author": "WhiteEyedFly",
    "parents": [
      "213a53979341aa4f91312e540b9cdef8683fbead"
    ],
    "children": [
      "42630bc982ef361f514013019a455d596cb914de"
    ],
    "branches": [
      "main"
    ],
    "position": 63956161692.99999
  },
  {
    "sha": "213a53979341aa4f91312e540b9cdef8683fbead",
    "message": "phone test 1",
    "date": "2026-05-23T20:52:10Z",
    "author": "WhiteEyedFly",
    "parents": [
      "084013ecb10a90ab98580afa9b5ec58973532274"
    ],
    "children": [
      "bf815b42e6f2331dedac1bdbf1b30d388fbf1e25"
    ],
    "branches": [
      "main"
    ],
    "position": 63956161401.99999
  },
  {
    "sha": "084013ecb10a90ab98580afa9b5ec58973532274",
    "message": "pfp fix",
    "date": "2026-05-23T20:42:37Z",
    "author": "WhiteEyedFly",
    "parents": [
      "51a02c46b357dab57822aa9a06cbfc3ce6c54fe3"
    ],
    "children": [
      "213a53979341aa4f91312e540b9cdef8683fbead"
    ],
    "branches": [
      "main"
    ],
    "position": 63956160828.99999
  },
  {
    "sha": "51a02c46b357dab57822aa9a06cbfc3ce6c54fe3",
    "message": "height fixes",
    "date": "2026-05-23T19:54:28Z",
    "author": "WhiteEyedFly",
    "parents": [
      "fe1db41fac3369ecd094faaaea065b0a555f7f15"
    ],
    "children": [
      "084013ecb10a90ab98580afa9b5ec58973532274"
    ],
    "branches": [
      "main"
    ],
    "position": 63956157939.99999
  },
  {
    "sha": "fe1db41fac3369ecd094faaaea065b0a555f7f15",
    "message": "some projects added 1",
    "date": "2026-05-07T20:23:59Z",
    "author": "WhiteEyedFly",
    "parents": [
      "fb5e7e07a7df3c78fe9e13677719e8a5c938ae8a"
    ],
    "children": [
      "51a02c46b357dab57822aa9a06cbfc3ce6c54fe3"
    ],
    "branches": [
      "main"
    ],
    "position": 63954777310.99999
  },
  {
    "sha": "fb5e7e07a7df3c78fe9e13677719e8a5c938ae8a",
    "message": "skills added to experience and Project titles added",
    "date": "2026-05-07T20:12:25Z",
    "author": "WhiteEyedFly",
    "parents": [
      "93bf97ca7267d403fa1188842f843e024695008d"
    ],
    "children": [
      "fe1db41fac3369ecd094faaaea065b0a555f7f15"
    ],
    "branches": [
      "main"
    ],
    "position": 63954776616.99999
  },
  {
    "sha": "93bf97ca7267d403fa1188842f843e024695008d",
    "message": "education and experience filled in preliminary",
    "date": "2026-05-07T20:06:28Z",
    "author": "WhiteEyedFly",
    "parents": [
      "9c9cf8c658e0bed8f1cd04fe0a1e1e46fd8ffca2"
    ],
    "children": [
      "fb5e7e07a7df3c78fe9e13677719e8a5c938ae8a"
    ],
    "branches": [
      "main"
    ],
    "position": 63954776259.99999
  },
  {
    "sha": "9c9cf8c658e0bed8f1cd04fe0a1e1e46fd8ffca2",
    "message": "header fixed",
    "date": "2026-05-07T19:48:30Z",
    "author": "WhiteEyedFly",
    "parents": [
      "6373345aced06ea164a47732fe3c4d8e96630ed7"
    ],
    "children": [
      "93bf97ca7267d403fa1188842f843e024695008d"
    ],
    "branches": [
      "main"
    ],
    "position": 63954775181.99999
  },
  {
    "sha": "6373345aced06ea164a47732fe3c4d8e96630ed7",
    "message": "all functionality finished",
    "date": "2026-05-07T18:57:20Z",
    "author": "WhiteEyedFly",
    "parents": [
      "02cdb29814c4f44ac7c4492576f735c998745b01"
    ],
    "children": [
      "9c9cf8c658e0bed8f1cd04fe0a1e1e46fd8ffca2"
    ],
    "branches": [
      "main"
    ],
    "position": 63954772111.99999
  },
  {
    "sha": "02cdb29814c4f44ac7c4492576f735c998745b01",
    "message": "initial decoration",
    "date": "2026-05-07T01:25:04Z",
    "author": "WhiteEyedFly",
    "parents": [
      "730d620bd84eb7cf42637104ec79fdae589aaf69"
    ],
    "children": [
      "6373345aced06ea164a47732fe3c4d8e96630ed7"
    ],
    "branches": [
      "main"
    ],
    "position": 63954708975.99999
  },
  {
    "sha": "730d620bd84eb7cf42637104ec79fdae589aaf69",
    "message": "dynamic generation of skills and other pages, cleaning and fixing of code",
    "date": "2026-05-07T00:44:20Z",
    "author": "WhiteEyedFly",
    "parents": [
      "8e82b3806da75f2bf354775308ae589c53ac6f03"
    ],
    "children": [
      "02cdb29814c4f44ac7c4492576f735c998745b01"
    ],
    "branches": [
      "main"
    ],
    "position": 63954706531.99999
  },
  {
    "sha": "8e82b3806da75f2bf354775308ae589c53ac6f03",
    "message": "finished dynamic generation of projects, experiences and educations",
    "date": "2026-05-07T00:23:08Z",
    "author": "WhiteEyedFly",
    "parents": [
      "1a03fa6c9d4690c8035edf9f7224b2a37d65e973"
    ],
    "children": [
      "730d620bd84eb7cf42637104ec79fdae589aaf69"
    ],
    "branches": [
      "main"
    ],
    "position": 63954705259.99999
  },
  {
    "sha": "1a03fa6c9d4690c8035edf9f7224b2a37d65e973",
    "message": "browserify",
    "date": "2026-05-06T23:31:33Z",
    "author": "WhiteEyedFly",
    "parents": [
      "fd1b2226da04872877762d08e02a11efa602ff63"
    ],
    "children": [
      "8e82b3806da75f2bf354775308ae589c53ac6f03"
    ],
    "branches": [
      "main"
    ],
    "position": 63954702164.99999
  },
  {
    "sha": "fd1b2226da04872877762d08e02a11efa602ff63",
    "message": "js cleaning",
    "date": "2026-05-06T23:29:30Z",
    "author": "WhiteEyedFly",
    "parents": [
      "890fe05b706f1b26989bdaf0f7827649e928ffaa"
    ],
    "children": [
      "1a03fa6c9d4690c8035edf9f7224b2a37d65e973"
    ],
    "branches": [
      "main"
    ],
    "position": 63954702041.99999
  },
  {
    "sha": "890fe05b706f1b26989bdaf0f7827649e928ffaa",
    "message": "js var fixes",
    "date": "2026-05-06T23:25:52Z",
    "author": "WhiteEyedFly",
    "parents": [
      "e6b652d32fbe69482cf6c1730807d987d490e8f5"
    ],
    "children": [
      "fd1b2226da04872877762d08e02a11efa602ff63"
    ],
    "branches": [
      "main"
    ],
    "position": 63954701823.99999
  },
  {
    "sha": "e6b652d32fbe69482cf6c1730807d987d490e8f5",
    "message": "js switch to dicts",
    "date": "2026-05-06T23:22:59Z",
    "author": "WhiteEyedFly",
    "parents": [
      "7093d473a86cd0d52f8d4f025baa94f855629bd4"
    ],
    "children": [
      "890fe05b706f1b26989bdaf0f7827649e928ffaa"
    ],
    "branches": [
      "main"
    ],
    "position": 63954701650.99999
  },
  {
    "sha": "7093d473a86cd0d52f8d4f025baa94f855629bd4",
    "message": "js test - browserify",
    "date": "2026-05-06T22:54:12Z",
    "author": "WhiteEyedFly",
    "parents": [
      "4081556709812ddb296e9a939ec4c43ea5061a5b"
    ],
    "children": [
      "e6b652d32fbe69482cf6c1730807d987d490e8f5"
    ],
    "branches": [
      "main"
    ],
    "position": 63954699923.99999
  },
  {
    "sha": "4081556709812ddb296e9a939ec4c43ea5061a5b",
    "message": "js test - type module",
    "date": "2026-05-06T22:45:16Z",
    "author": "WhiteEyedFly",
    "parents": [
      "aa4f5b17636e6fbb6b5cc2c24aa493ee399dd972"
    ],
    "children": [
      "7093d473a86cd0d52f8d4f025baa94f855629bd4"
    ],
    "branches": [
      "main"
    ],
    "position": 63954699387.99999
  },
  {
    "sha": "aa4f5b17636e6fbb6b5cc2c24aa493ee399dd972",
    "message": "js test 4 - server not running",
    "date": "2026-05-06T22:44:19Z",
    "author": "WhiteEyedFly",
    "parents": [
      "81403b8dfdbe3401e3162dbb7c1b4d59c4363545"
    ],
    "children": [
      "4081556709812ddb296e9a939ec4c43ea5061a5b"
    ],
    "branches": [
      "main"
    ],
    "position": 63954699330.99999
  },
  {
    "sha": "81403b8dfdbe3401e3162dbb7c1b4d59c4363545",
    "message": "js test 3 - server not running",
    "date": "2026-05-06T22:27:23Z",
    "author": "WhiteEyedFly",
    "parents": [
      "cba1ac1e2b3a1783173df70b5f66d5e3990e0860"
    ],
    "children": [
      "aa4f5b17636e6fbb6b5cc2c24aa493ee399dd972"
    ],
    "branches": [
      "main"
    ],
    "position": 63954698314.99999
  },
  {
    "sha": "cba1ac1e2b3a1783173df70b5f66d5e3990e0860",
    "message": "js test 2 - server not running",
    "date": "2026-05-06T21:50:33Z",
    "author": "WhiteEyedFly",
    "parents": [
      "2d8d1224d3b98f98674db76c499f4aae1294cc7d"
    ],
    "children": [
      "81403b8dfdbe3401e3162dbb7c1b4d59c4363545"
    ],
    "branches": [
      "main"
    ],
    "position": 63954696104.99999
  },
  {
    "sha": "2d8d1224d3b98f98674db76c499f4aae1294cc7d",
    "message": "js test 1 - server not running",
    "date": "2026-05-06T21:46:05Z",
    "author": "WhiteEyedFly",
    "parents": [
      "bcdedbf61833203bf0672e4796cc4d247ceff02b"
    ],
    "children": [
      "cba1ac1e2b3a1783173df70b5f66d5e3990e0860"
    ],
    "branches": [
      "main"
    ],
    "position": 63954695836.99999
  },
  {
    "sha": "bcdedbf61833203bf0672e4796cc4d247ceff02b",
    "message": "main.js made but non-functional, blanks removed, dynamic code in place, project folders made",
    "date": "2026-05-06T18:01:07Z",
    "author": "WhiteEyedFly",
    "parents": [
      "6ad3398271b6ef72b2a23bd54c0c462b50c5c188"
    ],
    "children": [
      "2d8d1224d3b98f98674db76c499f4aae1294cc7d"
    ],
    "branches": [
      "main"
    ],
    "position": 63954682338.99999
  },
  {
    "sha": "6ad3398271b6ef72b2a23bd54c0c462b50c5c188",
    "message": "removing info.json",
    "date": "2026-05-04T21:48:17Z",
    "author": "WhiteEyedFly",
    "parents": [
      "d9f436a6489db372299b8d975666b3d0a0777dd4"
    ],
    "children": [
      "bcdedbf61833203bf0672e4796cc4d247ceff02b"
    ],
    "branches": [
      "main"
    ],
    "position": 63954523168.99999
  },
  {
    "sha": "d9f436a6489db372299b8d975666b3d0a0777dd4",
    "message": "cleaning up blank.htmls",
    "date": "2026-05-04T21:47:40Z",
    "author": "WhiteEyedFly",
    "parents": [
      "8d71427a4921e97c48577d487ab9acac3e3c8ca2"
    ],
    "children": [
      "6ad3398271b6ef72b2a23bd54c0c462b50c5c188"
    ],
    "branches": [
      "main"
    ],
    "position": 63954523131.99999
  },
  {
    "sha": "8d71427a4921e97c48577d487ab9acac3e3c8ca2",
    "message": "Update README.md",
    "date": "2026-05-04T21:31:07Z",
    "author": "Joshua \"Dennis\" James Woodbridge",
    "parents": [
      "184acfe32cd446bc1ebf0b3382fbc35c27aa1b00"
    ],
    "children": [
      "d9f436a6489db372299b8d975666b3d0a0777dd4"
    ],
    "branches": [
      "main"
    ],
    "position": 63954522138.99999
  },
  {
    "sha": "184acfe32cd446bc1ebf0b3382fbc35c27aa1b00",
    "message": "project layout finished, experience and education sections added",
    "date": "2026-05-04T21:24:55Z",
    "author": "WhiteEyedFly",
    "parents": [
      "6acc4db2140006f149397ec95d8e417522a50f50"
    ],
    "children": [
      "8d71427a4921e97c48577d487ab9acac3e3c8ca2"
    ],
    "branches": [
      "main"
    ],
    "position": 63954521766.99999
  },
  {
    "sha": "6acc4db2140006f149397ec95d8e417522a50f50",
    "message": "Create README.md",
    "date": "2026-05-04T20:50:55Z",
    "author": "Joshua \"Dennis\" James Woodbridge",
    "parents": [
      "6d855ff7c42b4184192c3dbae541eed8983d460d"
    ],
    "children": [
      "184acfe32cd446bc1ebf0b3382fbc35c27aa1b00"
    ],
    "branches": [
      "main"
    ],
    "position": 63954519726.99999
  },
  {
    "sha": "6d855ff7c42b4184192c3dbae541eed8983d460d",
    "message": "about section base finished and page split with wrapper",
    "date": "2026-05-04T20:36:11Z",
    "author": "WhiteEyedFly",
    "parents": [
      "e825f362bb1661b391f54e6a26841fc26afb9e1b"
    ],
    "children": [
      "6acc4db2140006f149397ec95d8e417522a50f50"
    ],
    "branches": [
      "main"
    ],
    "position": 63954518842.99999
  },
  {
    "sha": "e825f362bb1661b391f54e6a26841fc26afb9e1b",
    "message": "grid test 2",
    "date": "2026-05-04T19:17:34Z",
    "author": "WhiteEyedFly",
    "parents": [
      "76bb8df2fe846751a4ae4af912ba64da7b3a3783"
    ],
    "children": [
      "6d855ff7c42b4184192c3dbae541eed8983d460d"
    ],
    "branches": [
      "main"
    ],
    "position": 63954514125.99999
  },
  {
    "sha": "76bb8df2fe846751a4ae4af912ba64da7b3a3783",
    "message": "grid test 1",
    "date": "2026-05-04T19:14:37Z",
    "author": "WhiteEyedFly",
    "parents": [
      "cc0d95a5bfe9e930b27d7f56e4f301251c1bec8b"
    ],
    "children": [
      "e825f362bb1661b391f54e6a26841fc26afb9e1b"
    ],
    "branches": [
      "main"
    ],
    "position": 63954513948.99999
  },
  {
    "sha": "cc0d95a5bfe9e930b27d7f56e4f301251c1bec8b",
    "message": "/style.css linked",
    "date": "2026-05-04T19:08:51Z",
    "author": "WhiteEyedFly",
    "parents": [
      "060caec228aff04c26923a0380f08a56d3deca8c"
    ],
    "children": [
      "76bb8df2fe846751a4ae4af912ba64da7b3a3783"
    ],
    "branches": [
      "main"
    ],
    "position": 63954513602.99999
  },
  {
    "sha": "060caec228aff04c26923a0380f08a56d3deca8c",
    "message": "hard swap to container",
    "date": "2026-05-04T19:05:18Z",
    "author": "WhiteEyedFly",
    "parents": [
      "b75203e659fba0613c07c0fda1a08a92248280a2"
    ],
    "children": [
      "cc0d95a5bfe9e930b27d7f56e4f301251c1bec8b"
    ],
    "branches": [
      "main"
    ],
    "position": 63954513389.99999
  },
  {
    "sha": "b75203e659fba0613c07c0fda1a08a92248280a2",
    "message": "basic container and back_up.html created",
    "date": "2026-05-04T18:58:21Z",
    "author": "WhiteEyedFly",
    "parents": [
      "34e2454887dc237fdba7e3e974faff47eff93d88"
    ],
    "children": [
      "060caec228aff04c26923a0380f08a56d3deca8c"
    ],
    "branches": [
      "main"
    ],
    "position": 63954512972.99999
  },
  {
    "sha": "34e2454887dc237fdba7e3e974faff47eff93d88",
    "message": "style.css added and minor changes",
    "date": "2026-05-04T18:40:43Z",
    "author": "WhiteEyedFly",
    "parents": [
      "b7c34dc68106b0fb401f5cc0a0badc5da36a2c46"
    ],
    "children": [
      "b75203e659fba0613c07c0fda1a08a92248280a2"
    ],
    "branches": [
      "main"
    ],
    "position": 63954511914.99999
  },
  {
    "sha": "b7c34dc68106b0fb401f5cc0a0badc5da36a2c46",
    "message": "index.html named",
    "date": "2026-05-04T18:29:47Z",
    "author": "WhiteEyedFly",
    "parents": [
      "72cf100780bf160559c3eb21dc9b3429991c8428"
    ],
    "children": [
      "34e2454887dc237fdba7e3e974faff47eff93d88"
    ],
    "branches": [
      "main"
    ],
    "position": 63954511258.99999
  },
  {
    "sha": "72cf100780bf160559c3eb21dc9b3429991c8428",
    "message": "Create static.yml",
    "date": "2026-05-04T18:25:56Z",
    "author": "Joshua \"Dennis\" James Woodbridge",
    "parents": [
      "1038c43ca2d2db244c18f0f3a6d80d74b2abf328"
    ],
    "children": [
      "b7c34dc68106b0fb401f5cc0a0badc5da36a2c46"
    ],
    "branches": [
      "main"
    ],
    "position": 63954511027.99999
  },
  {
    "sha": "1038c43ca2d2db244c18f0f3a6d80d74b2abf328",
    "message": "initialise",
    "date": "2026-05-04T18:23:37Z",
    "author": "WhiteEyedFly",
    "parents": [],
    "children": [
      "72cf100780bf160559c3eb21dc9b3429991c8428"
    ],
    "branches": [
      "main"
    ],
    "position": 63954510888.99999
  }
]

let branchesBackup = [
  {
    "name": "graphVisualiser",
    "commit": {
      "sha": "49ca6b8fd19bc5db4b925fdc7ecb7933320aaf6b",
      "url": "https://api.github.com/repos/WhiteEyedFly/portfolio/commits/49ca6b8fd19bc5db4b925fdc7ecb7933320aaf6b"
    },
    "protected": false
  },
  {
    "name": "main",
    "commit": {
      "sha": "f38fb5d974e2478f29b8f955511a4fcce22669a5",
      "url": "https://api.github.com/repos/WhiteEyedFly/portfolio/commits/f38fb5d974e2478f29b8f955511a4fcce22669a5"
    },
    "protected": false
  },
  {
    "name": "refactor1",
    "commit": {
      "sha": "238a17e2d0a003f71f37d136b3fd6cad6907516e",
      "url": "https://api.github.com/repos/WhiteEyedFly/portfolio/commits/238a17e2d0a003f71f37d136b3fd6cad6907516e"
    },
    "protected": false
  }
]

async function getCommits(){
    let page = 1;
    const responses = [];

    while (true) {
        const response = await fetch(
            `https://api.github.com/repos/WhiteEyedFly/portfolio/commits?per_page=100&page=${page}`
        );
        if (!response.ok) break;
        const commitList = await response.json();
        if (!commitList || commitList.length === 0) break;
        responses.push(...commitList);
        page += 1;
    }

    if (responses.length === 0) throw new Error("Empty API response");

    return responses.map(commit => ({
        sha: commit.sha,
        message: commit.commit.message,
        date: commit.commit.author.date,
        author: commit.commit.author.name,
        parents: commit.parents.map(parent => parent.sha)
    }));
    /*
    catch (e) {
        // Fall back to stored if rate limit hit
        console.warn("GitHub API rate limit hit or offline. Loading local mock commit timeline data.");
        return backUpCommits;
    }
        */
}

async function getBranches(){
    const response = await fetch("https://api.github.com/repos/WhiteEyedFly/portfolio/branches?per_page=100&page=1");
    if (response.ok){
        const branchList = await response.json();

        if (branchList || branchList.length !== 0){
            return branchList
        }
    }
    else {
        console.log(response)
    }
}

function findChildren(commit, commits){
    const sha = commit.sha
    commit.children = []

    for (const com of commits){
        if (com.parents.includes(sha)){
            commit.children.push(com.sha)
        }
    }
}

function assignBranches(commits, branches) {
    const commitMap = new Map(commits.map(c => [c.sha, c]));

    // Everything starts on main
    for (const commit of commits) {
        commit.branches = ["main"];
    }

    for (const branch of branches) {
        if (branch.name === "main") continue;

        let current = commitMap.get(branch.commit.sha);

        while (current) {
            current.branches = [branch.name];

            if (current.parents.length !== 1) {
                break;
            }

            const parent = commitMap.get(current.parents[0]);
            if (!parent) break;

            if (parent.children.length > 1) {
                break;
            }

            current = parent;
        }
    }
}

function findPosition(commit) {
    let date = commit.date
    const split1 = date.split("-")
    const split2 = split1[2].split("T")
    const split3 = split2[1].split(":")

    const year =    parseInt(split1[0])
    const month =   parseInt(split1[1])
    const day =     parseInt(split2[0])
    const hour =    parseInt(split3[0])
    const minute =  parseInt(split3[1])
    const second =  parseInt(split3[2].replace("Z", ""))

    const position = second + 60*(minute + 60*(hour + 24*(day + 30.44*(month + 12*year))))

    commit.position ??= Int16Array;
    commit.position = position
}

async function main(){
    const pageList = await loadJson("../data/otherPages.json")
    pageList.forEach(makeLink);

    console.log(document.querySelector("#graphVisualiser"));

    // Pulling from git

    let commits = commitsBackup
    let branches = branchesBackup
    var branchNames = ["main"]

    for (const branch of branches){
        if (!branchNames.includes(branch.name)){
            branchNames.push(branch.name)
        }
    }

    // Data validation

    const commitMap = new Map(commits.map(c => [c.sha, c]));
    const branchHeads = new Map(branches.map(b => [b.name, b.commit.sha]));

    for (const commit of commits){
        findChildren(commit, commits)
    }
    
    assignBranches(commits, branches)

    for (const commit of commits){
        findPosition(commit)
    }
    console.log(commits)
    console.log(branches)

    // Positioning

    const positions = d => d.position;

    commits.sort((a, b) => positions(b) - positions(a));

    const newestCommit = d3.max(commits, positions);
    const oldestCommit = d3.min(commits, positions);
    
    const totalTimeDiff = Math.abs(newestCommit - oldestCommit);

    const baseHeight = totalTimeDiff * 30;
    const computedHeight = baseHeight + (commits.length * 20);

    // ------------
    // Construction
    // ------------

    const targetElement = d3.select(".graphContainer").html("");
    
    const svg = targetElement.append("svg")
        .attr("width", "100%")
        .attr("height", `${computedHeight}px`)

    const getBranchXCoordinate = (d) => {
        const branch = d.branches && d.branches.length
            ? d.branches[0]
            : "main";

        return 30 + branchNames.indexOf(branch) * 40;
    };

    const yScale = d3.scaleTime()
        .domain([newestCommit, oldestCommit]) 
        .range([60, computedHeight]);

    const getCommitYCoordinate = (d) => 30*(1 + commits.findIndex(commit => commit === d));

    // Edges
    commits.forEach((commit) => {
        const startX = getBranchXCoordinate(commit);
        const startY = getCommitYCoordinate(commit);

        commit.parents.forEach(parentSha => {
            const parentIndex = commits.findIndex(c => c.sha === parentSha);

            if (parentIndex !== -1) {
                const endX = getBranchXCoordinate(commits[parentIndex]);
                const endY = getCommitYCoordinate(commits[parentIndex]);

                svg.append("line")
                    .attr("x1", endX)
                    .attr("y1", startY)
                    .attr("x2", endX)
                    .attr("y2", endY)
                    .attr("stroke", "#484848")
                    .attr("stroke-width", 2.5)
                    .attr("opacity", 0.7);

                if (startX !== endX){
                    svg.append("line")
                        .attr("x1", startX)
                        .attr("y1", startY)
                        .attr("x2", endX)
                        .attr("y2", startY)
                        .attr("stroke", "#484848")
                        .attr("stroke-width", 2.5)
                        .attr("opacity", 0.7);
                }
            }
        });
    });

    // Nodes
    const commitGroups = svg.append("g")
        .selectAll(".commit-node")
        .data(commits)
        .join("g")
        .classed("commit-node", true);

    commitGroups.append("circle")
        .attr("cx", d => getBranchXCoordinate(d))
        .attr("cy", d => getCommitYCoordinate(d))
        .attr("r", 6.5)
        .attr("fill", d => {
            const b = d.branches || [];
            if (b.includes("main") || b.includes("master")) return "#95a472"; 
            return b.length ? "#4a90e2" : "#757575";
        })
        .attr("stroke", "#484848")
        .attr("stroke-width", 2);

    commitGroups.append("text")
        .attr("x", 60 + (branchNames.length * 40) + 20) 
        .attr("y", d => getCommitYCoordinate(d) + 5)
        .attr("fill", "#1a1d13")
        .style("font-family", "sans-serif")
        .style("font-size", "12px")
        .style("font-weight", "700")
        .text(d => {
            const cleanDate = new Date(d.date).toLocaleDateString(undefined, {month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'});
            const displayMsg = d.message;
            return `[${cleanDate}] ${displayMsg}`;
        });

    commitGroups.append("title")
        .text(d => `Commit SHA: ${d.sha.slice(0, 7)}\nAuthor: ${d.author}\nTimestamp: ${d.date}\nMessage: ${d.message}`);
}

main()

// Come back to this to make spacing nicer:
// Have a gap for each day without a commit and have all commits from one day printed together, a set distance apart
// Convert graph visualiser to TS