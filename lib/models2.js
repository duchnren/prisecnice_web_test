var vectorLayer = new OpenLayers.Layer.Vector("Simple Geometry");

var map = new OpenLayers.Map({
  div: "map",
  layers: [
    new OpenLayers.Layer.Image(
        'Prisecnice',
        '../img/prisecnice_mapa.png',
        new OpenLayers.Bounds(0.0, -3053.0, 2380.0, 0.0),
        new OpenLayers.Size(764, 595),
        {numZoomLevels: 5}
        ),
    new OpenLayers.Layer.Vector("KML", {
        strategies: [new OpenLayers.Strategy.Fixed()],
        protocol: new OpenLayers.Protocol.HTTP({
             url: "../buildings.kml",
             format: new OpenLayers.Format.KML({
                  extractStyles: true,
                  extractAttributes: true
             })
        })
    }),
    vectorLayer
  ],
  center: new OpenLayers.LonLat(1300,-980),
  zoom: 2
});

var vectorDum = [//1-0
            [new OpenLayers.Geometry.Point(1337, -957), new OpenLayers.Geometry.Point(1414, -946), new OpenLayers.Geometry.Point(1418, -970),
             new OpenLayers.Geometry.Point(1412, -970), new OpenLayers.Geometry.Point(1427, -1060), new OpenLayers.Geometry.Point(1363, -1073)],
            //2/3-1
            [new OpenLayers.Geometry.Point(1260, -1307), new OpenLayers.Geometry.Point(1284, -1304), new OpenLayers.Geometry.Point(1295, -1390),
             new OpenLayers.Geometry.Point(1245, -1398), new OpenLayers.Geometry.Point(1240, -1358), new OpenLayers.Geometry.Point(1269, -1354),
             new OpenLayers.Geometry.Point(1265, -1321), new OpenLayers.Geometry.Point(1261, -1321)],
            //4-2
            [new OpenLayers.Geometry.Point(1252, -1268), new OpenLayers.Geometry.Point(1281,-1264),new OpenLayers.Geometry.Point(1285,-1304),
             new OpenLayers.Geometry.Point(1235, -1310), new OpenLayers.Geometry.Point(1233,-1296),new OpenLayers.Geometry.Point(1243,-1296),
             new OpenLayers.Geometry.Point(1243, -1285), new OpenLayers.Geometry.Point(1254,-1285)],
            //5-3
            [new OpenLayers.Geometry.Point(1253, -1237), new OpenLayers.Geometry.Point(1277,-1235),new OpenLayers.Geometry.Point(1281,-1264),
             new OpenLayers.Geometry.Point(1227, -1270), new OpenLayers.Geometry.Point(1225,-1253),new OpenLayers.Geometry.Point(1252,-1253)],
            //6-4
            [new OpenLayers.Geometry.Point(1247, -1194), new OpenLayers.Geometry.Point(1276,-1188),new OpenLayers.Geometry.Point(1276,-1225),
             new OpenLayers.Geometry.Point(1228, -1233), new OpenLayers.Geometry.Point(1226,-1217),new OpenLayers.Geometry.Point(1250,-1213)],
            //7-5
            [new OpenLayers.Geometry.Point(1207, -1164), new OpenLayers.Geometry.Point(1215,-1164),new OpenLayers.Geometry.Point(1271,-1153),
             new OpenLayers.Geometry.Point(1276, -1188), new OpenLayers.Geometry.Point(1247,-1194),new OpenLayers.Geometry.Point(1242,-1175),
             new OpenLayers.Geometry.Point(1209, -1180)],
            //8-6
            [new OpenLayers.Geometry.Point(1236, -1125), new OpenLayers.Geometry.Point(1266,-1119),new OpenLayers.Geometry.Point(1271,-1153),
             new OpenLayers.Geometry.Point(1215, -1164), new OpenLayers.Geometry.Point(1210,-1164),new OpenLayers.Geometry.Point(1208,-1149),
             new OpenLayers.Geometry.Point(1225, -1147), new OpenLayers.Geometry.Point(1225,-1140),new OpenLayers.Geometry.Point(1239,-1138)],
            //9-7
            [new OpenLayers.Geometry.Point(1232, -1089), new OpenLayers.Geometry.Point(1259,-1086),new OpenLayers.Geometry.Point(1266,-1119),
             new OpenLayers.Geometry.Point(1236, -1125), new OpenLayers.Geometry.Point(1235,-1119),new OpenLayers.Geometry.Point(1224,-1119),
             new OpenLayers.Geometry.Point(1224, -1102), new OpenLayers.Geometry.Point(1233,-1102)],
            //10/11-8
            [new OpenLayers.Geometry.Point(1211, -1021), new OpenLayers.Geometry.Point(1252,-1019),new OpenLayers.Geometry.Point(1259,-1086),
             new OpenLayers.Geometry.Point(1232, -1089), new OpenLayers.Geometry.Point(1232,-1087),new OpenLayers.Geometry.Point(1215,-1087),
             new OpenLayers.Geometry.Point(1212, -1060), new OpenLayers.Geometry.Point(1228,-1059),new OpenLayers.Geometry.Point(1227,-1044),
             new OpenLayers.Geometry.Point(1222, -1044), new OpenLayers.Geometry.Point(1222,-1033),new OpenLayers.Geometry.Point(1211,-1033)],
            //15-9
            [new OpenLayers.Geometry.Point(1230, -893), new OpenLayers.Geometry.Point(1243,-890),new OpenLayers.Geometry.Point(1240,-880),
             new OpenLayers.Geometry.Point(1251, -877), new OpenLayers.Geometry.Point(1248,-871),new OpenLayers.Geometry.Point(1259,-868),
             new OpenLayers.Geometry.Point(1273, -912), new OpenLayers.Geometry.Point(1237,-925)],
            //16-10
            [new OpenLayers.Geometry.Point(1264, -882), new OpenLayers.Geometry.Point(1283,-876),new OpenLayers.Geometry.Point(1293,-906),
             new OpenLayers.Geometry.Point(1273, -912)],
            //17-11
            [new OpenLayers.Geometry.Point(1283, -876), new OpenLayers.Geometry.Point(1307,-867),new OpenLayers.Geometry.Point(1318,-897),
             new OpenLayers.Geometry.Point(1293, -906)],
            //18-12
            [new OpenLayers.Geometry.Point(1307, -867), new OpenLayers.Geometry.Point(1311,-865),new OpenLayers.Geometry.Point(1304,-846),
             new OpenLayers.Geometry.Point(1314, -843), new OpenLayers.Geometry.Point(1321,-859),new OpenLayers.Geometry.Point(1333,-855),
             new OpenLayers.Geometry.Point(1345, -888), new OpenLayers.Geometry.Point(1319,-897)],
            //20/21-13
            [new OpenLayers.Geometry.Point(1140, -898), new OpenLayers.Geometry.Point(1214,-893),new OpenLayers.Geometry.Point(1215,-928),
             new OpenLayers.Geometry.Point(1140, -934)],
            //26-14
            [new OpenLayers.Geometry.Point(1270, -729), new OpenLayers.Geometry.Point(1295,-719),new OpenLayers.Geometry.Point(1306,-752),
             new OpenLayers.Geometry.Point(1266, -767), new OpenLayers.Geometry.Point(1256,-745),new OpenLayers.Geometry.Point(1274,-740)],
            //35-15
            [new OpenLayers.Geometry.Point(1431, -505), new OpenLayers.Geometry.Point(1465,-503),new OpenLayers.Geometry.Point(1466,-520),
             new OpenLayers.Geometry.Point(1432, -521)],
            //49-16
            [new OpenLayers.Geometry.Point(1441, -816), new OpenLayers.Geometry.Point(1450.5,-816),new OpenLayers.Geometry.Point(1450.5,-808),
             new OpenLayers.Geometry.Point(1462, -808), new OpenLayers.Geometry.Point(1463,-814),new OpenLayers.Geometry.Point(1470,-814),
             new OpenLayers.Geometry.Point(1473, -837), new OpenLayers.Geometry.Point(1442,-840)],
            //50-17
            [new OpenLayers.Geometry.Point(1405, -841), new OpenLayers.Geometry.Point(1421,-838),new OpenLayers.Geometry.Point(1418,-825),
             new OpenLayers.Geometry.Point(1429, -822), new OpenLayers.Geometry.Point(1441,-865),new OpenLayers.Geometry.Point(1413,-871)],
            //51-18
            [new OpenLayers.Geometry.Point(1358, -845), new OpenLayers.Geometry.Point(1368,-843),new OpenLayers.Geometry.Point(1366,-835),
             new OpenLayers.Geometry.Point(1381, -833), new OpenLayers.Geometry.Point(1383,-844),new OpenLayers.Geometry.Point(1396,-841),
             new OpenLayers.Geometry.Point(1404, -874), new OpenLayers.Geometry.Point(1380,-880),new OpenLayers.Geometry.Point(1374,-880),
             new OpenLayers.Geometry.Point(1368, -877)],
            //52-19
            [new OpenLayers.Geometry.Point(1414, -945), new OpenLayers.Geometry.Point(1453,-940),new OpenLayers.Geometry.Point(1457,-964),
             new OpenLayers.Geometry.Point(1418, -970)],
            //58-20
            [new OpenLayers.Geometry.Point(1781, -881), new OpenLayers.Geometry.Point(1808,-875),new OpenLayers.Geometry.Point(1822,-929),
             new OpenLayers.Geometry.Point(1791, -933)],
            //59-21
            [new OpenLayers.Geometry.Point(1532, -1046), new OpenLayers.Geometry.Point(1574,-1041),new OpenLayers.Geometry.Point(1576,-1059),
             new OpenLayers.Geometry.Point(1560, -1061), new OpenLayers.Geometry.Point(1561,-1079),new OpenLayers.Geometry.Point(1531,-1081)],
            //60-22
            [new OpenLayers.Geometry.Point(1531, -1081), new OpenLayers.Geometry.Point(1561,-1079),new OpenLayers.Geometry.Point(1601,-1075),
             new OpenLayers.Geometry.Point(1620, -1074), new OpenLayers.Geometry.Point(1623,-1113),new OpenLayers.Geometry.Point(1575,-1119),
             new OpenLayers.Geometry.Point(1577, -1142), new OpenLayers.Geometry.Point(1538,-1147)],
            //61-23
            [new OpenLayers.Geometry.Point(1538, -1147), new OpenLayers.Geometry.Point(1605,-1138),new OpenLayers.Geometry.Point(1606,-1152),
             new OpenLayers.Geometry.Point(1540, -1161)],
            //62-24
            [new OpenLayers.Geometry.Point(1540, -1161), new OpenLayers.Geometry.Point(1588,-1154),new OpenLayers.Geometry.Point(1590,-1175),
             new OpenLayers.Geometry.Point(1571, -1176), new OpenLayers.Geometry.Point(1571,-1192),new OpenLayers.Geometry.Point(1544,-1193)],
            //66-25
            [new OpenLayers.Geometry.Point(1696, -1217), new OpenLayers.Geometry.Point(1741,-1217),new OpenLayers.Geometry.Point(1741,-1239),
             new OpenLayers.Geometry.Point(1720, -1239), new OpenLayers.Geometry.Point(1720,-1253),new OpenLayers.Geometry.Point(1694,-1253)],
            //67-26
            [new OpenLayers.Geometry.Point(1694, -1310), new OpenLayers.Geometry.Point(1702,-1310),new OpenLayers.Geometry.Point(1702,-1306),
             new OpenLayers.Geometry.Point(1711, -1306), new OpenLayers.Geometry.Point(1711,-1311),new OpenLayers.Geometry.Point(1720,-1311),
             new OpenLayers.Geometry.Point(1720, -1324), new OpenLayers.Geometry.Point(1726,-1324),new OpenLayers.Geometry.Point(1726,-1332),
             new OpenLayers.Geometry.Point(1694, -1332)],
            //415-27
            [new OpenLayers.Geometry.Point(1558, -1268), new OpenLayers.Geometry.Point(1594,-1262),new OpenLayers.Geometry.Point(1599,-1292),
             new OpenLayers.Geometry.Point(1564, -1296)],
            //70-28
            [new OpenLayers.Geometry.Point(1509, -1276), new OpenLayers.Geometry.Point(1530,-1273),new OpenLayers.Geometry.Point(1534,-1300),
             new OpenLayers.Geometry.Point(1540, -1300), new OpenLayers.Geometry.Point(1543,-1321),new OpenLayers.Geometry.Point(1534,-1321),
             new OpenLayers.Geometry.Point(1531, -1307), new OpenLayers.Geometry.Point(1526,-1307),new OpenLayers.Geometry.Point(1526,-1319),
             new OpenLayers.Geometry.Point(1519, -1319), new OpenLayers.Geometry.Point(1519,-1311),new OpenLayers.Geometry.Point(1513,-1311)],
            //71-29
            [new OpenLayers.Geometry.Point(1490, -1280), new OpenLayers.Geometry.Point(1509,-1276),new OpenLayers.Geometry.Point(1513,-1312),
             new OpenLayers.Geometry.Point(1495, -1313), new OpenLayers.Geometry.Point(1493,-1306)],
            //72-30
            [new OpenLayers.Geometry.Point(1432, -1287), new OpenLayers.Geometry.Point(1490,-1280),new OpenLayers.Geometry.Point(1493,-1306),
             new OpenLayers.Geometry.Point(1471, -1309), new OpenLayers.Geometry.Point(1471,-1315),new OpenLayers.Geometry.Point(1465,-1317),
             new OpenLayers.Geometry.Point(1437, -1320)],
            //73-31
            [new OpenLayers.Geometry.Point(1437, -1320), new OpenLayers.Geometry.Point(1465,-1317),new OpenLayers.Geometry.Point(1468,-1327),
             new OpenLayers.Geometry.Point(1472, -1327), new OpenLayers.Geometry.Point(1487,-1324),new OpenLayers.Geometry.Point(1487,-1334),
             new OpenLayers.Geometry.Point(1442, -1342)],
            //75-32
            [new OpenLayers.Geometry.Point(1347, -1361), new OpenLayers.Geometry.Point(1396,-1355),new OpenLayers.Geometry.Point(1395,-1348),
             new OpenLayers.Geometry.Point(1406, -1348), new OpenLayers.Geometry.Point(1409,-1378),new OpenLayers.Geometry.Point(1351,-1386)],
            //76-33
            [new OpenLayers.Geometry.Point(1375, -1286), new OpenLayers.Geometry.Point(1401,-1282),new OpenLayers.Geometry.Point(1404,-1307),
             new OpenLayers.Geometry.Point(1376, -1311)],
            //77-34
            [new OpenLayers.Geometry.Point(1338, -1288), new OpenLayers.Geometry.Point(1375,-1286),new OpenLayers.Geometry.Point(1376,-1311),
             new OpenLayers.Geometry.Point(1340, -1314)],
            //79-35
            [new OpenLayers.Geometry.Point(1345, -1343), new OpenLayers.Geometry.Point(1367,-1342),new OpenLayers.Geometry.Point(1368,-1352),
             new OpenLayers.Geometry.Point(1395, -1348), new OpenLayers.Geometry.Point(1396,-1355),new OpenLayers.Geometry.Point(1347,-1361)],
            //85-36
            [new OpenLayers.Geometry.Point(1700, -1382), new OpenLayers.Geometry.Point(1726,-1376),new OpenLayers.Geometry.Point(1731,-1399),
             new OpenLayers.Geometry.Point(1742, -1398), new OpenLayers.Geometry.Point(1745,-1408),new OpenLayers.Geometry.Point(1707,-1417)],
            //87-37
            [new OpenLayers.Geometry.Point(1714, -1447), new OpenLayers.Geometry.Point(1740,-1441),new OpenLayers.Geometry.Point(1749,-1472),
             new OpenLayers.Geometry.Point(1723, -1479)],
            //89-38
            [new OpenLayers.Geometry.Point(1728, -1489), new OpenLayers.Geometry.Point(1766,-1476),new OpenLayers.Geometry.Point(1779,-1504),
             new OpenLayers.Geometry.Point(1747, -1522)],
            //92-39
            [new OpenLayers.Geometry.Point(1766, -1557), new OpenLayers.Geometry.Point(1790,-1546),new OpenLayers.Geometry.Point(1793,-1551),
             new OpenLayers.Geometry.Point(1815, -1539), new OpenLayers.Geometry.Point(1821,-1551),new OpenLayers.Geometry.Point(1800,-1562),
             new OpenLayers.Geometry.Point(1806, -1572), new OpenLayers.Geometry.Point(1783,-1583)],
            //93-40
            [new OpenLayers.Geometry.Point(1783, -1583), new OpenLayers.Geometry.Point(1806,-1572),new OpenLayers.Geometry.Point(1813,-1584),
             new OpenLayers.Geometry.Point(1834, -1575), new OpenLayers.Geometry.Point(1841,-1587),new OpenLayers.Geometry.Point(1825,-1596),
             new OpenLayers.Geometry.Point(1829, -1604), new OpenLayers.Geometry.Point(1804,-1617)],
            //94-41
            [new OpenLayers.Geometry.Point(1804, -1617), new OpenLayers.Geometry.Point(1829,-1604),new OpenLayers.Geometry.Point(1841,-1597),
             new OpenLayers.Geometry.Point(1855, -1623), new OpenLayers.Geometry.Point(1818,-1643)],
            //96-42
            [new OpenLayers.Geometry.Point(1844, -1684), new OpenLayers.Geometry.Point(1862,-1673),new OpenLayers.Geometry.Point(1873,-1689),
             new OpenLayers.Geometry.Point(1897, -1674), new OpenLayers.Geometry.Point(1904,-1688),new OpenLayers.Geometry.Point(1884,-1703),
             new OpenLayers.Geometry.Point(1889, -1710), new OpenLayers.Geometry.Point(1869,-1722)],
            //101/102-43
            [new OpenLayers.Geometry.Point(1976, -1840), new OpenLayers.Geometry.Point(1998,-1823),new OpenLayers.Geometry.Point(2002,-1828),
             new OpenLayers.Geometry.Point(2008, -1822), new OpenLayers.Geometry.Point(2013,-1828),new OpenLayers.Geometry.Point(2007,-1833),
             new OpenLayers.Geometry.Point(2015, -1842), new OpenLayers.Geometry.Point(1994,-1861)],
            //119-44
            [new OpenLayers.Geometry.Point(2019, -2216), new OpenLayers.Geometry.Point(2057,-2214),new OpenLayers.Geometry.Point(2057,-2229),
             new OpenLayers.Geometry.Point(2045, -2230), new OpenLayers.Geometry.Point(2045,-2244),new OpenLayers.Geometry.Point(2017,-2244)],
            //121-45
            [new OpenLayers.Geometry.Point(2012, -2341), new OpenLayers.Geometry.Point(2041,-2341),new OpenLayers.Geometry.Point(2041,-2349),
             new OpenLayers.Geometry.Point(2048, -2350), new OpenLayers.Geometry.Point(2048,-2362),new OpenLayers.Geometry.Point(2010,-2361)],
            //122-46
            [new OpenLayers.Geometry.Point(2010, -2361), new OpenLayers.Geometry.Point(2038,-2363),new OpenLayers.Geometry.Point(2036,-2392),
             new OpenLayers.Geometry.Point(2008, -2391)],
            //123-47
            [new OpenLayers.Geometry.Point(2022, -2411), new OpenLayers.Geometry.Point(2051,-2411),new OpenLayers.Geometry.Point(2051,-2428),
             new OpenLayers.Geometry.Point(2021, -2428)],
            //125-48
            [new OpenLayers.Geometry.Point(2025, -2450), new OpenLayers.Geometry.Point(2053,-2450),new OpenLayers.Geometry.Point(2053,-2470),
             new OpenLayers.Geometry.Point(2026, -2470)],
            //137-49
            [new OpenLayers.Geometry.Point(1897, -2667), new OpenLayers.Geometry.Point(1919,-2658),new OpenLayers.Geometry.Point(1924,-2671),
             new OpenLayers.Geometry.Point(1902, -2679)],
            //138-50
            [new OpenLayers.Geometry.Point(1891, -2649), new OpenLayers.Geometry.Point(1912,-2641),new OpenLayers.Geometry.Point(1919,-2658),
             new OpenLayers.Geometry.Point(1897, -2667)],
            //142-51
            [new OpenLayers.Geometry.Point(1809, -2544), new OpenLayers.Geometry.Point(1825,-2544),new OpenLayers.Geometry.Point(1825,-2558),
             new OpenLayers.Geometry.Point(1796, -2557), new OpenLayers.Geometry.Point(1796,-2551),new OpenLayers.Geometry.Point(1809,-2551)],
            //146-52
            [new OpenLayers.Geometry.Point(1809, -2464), new OpenLayers.Geometry.Point(1832,-2464),new OpenLayers.Geometry.Point(1830,-2484),
             new OpenLayers.Geometry.Point(1794, -2482), new OpenLayers.Geometry.Point(1794,-2476),new OpenLayers.Geometry.Point(1808,-2475)],
            //147-53
            [new OpenLayers.Geometry.Point(1809, -2446), new OpenLayers.Geometry.Point(1833,-2446),new OpenLayers.Geometry.Point(1832,-2463),
             new OpenLayers.Geometry.Point(1809, -2463)],
            //154-54
            [new OpenLayers.Geometry.Point(1818, -2265), new OpenLayers.Geometry.Point(1852,-2268),new OpenLayers.Geometry.Point(1849,-2296),
             new OpenLayers.Geometry.Point(1815, -2293)],
            //155-55
            [new OpenLayers.Geometry.Point(1820, -2250), new OpenLayers.Geometry.Point(1854,-2254),new OpenLayers.Geometry.Point(1852,-2268),
             new OpenLayers.Geometry.Point(1818, -2265)],
            //173-56
            [new OpenLayers.Geometry.Point(1820, -1904), new OpenLayers.Geometry.Point(1839,-1899),new OpenLayers.Geometry.Point(1869,-1891),
             new OpenLayers.Geometry.Point(1880, -1924), new OpenLayers.Geometry.Point(1850,-1934),new OpenLayers.Geometry.Point(1845,-1917),
             new OpenLayers.Geometry.Point(1826, -1923)],
            //174-57
            [new OpenLayers.Geometry.Point(1821, -1878), new OpenLayers.Geometry.Point(1832,-1874),new OpenLayers.Geometry.Point(1862,-1866),
             new OpenLayers.Geometry.Point(1869, -1891), new OpenLayers.Geometry.Point(1839,-1899),new OpenLayers.Geometry.Point(1834,-1888),
             new OpenLayers.Geometry.Point(1825, -1891)],
            //175-58
            [new OpenLayers.Geometry.Point(1791, -1845), new OpenLayers.Geometry.Point(1848,-1826),new OpenLayers.Geometry.Point(1862,-1866),
             new OpenLayers.Geometry.Point(1832, -1874), new OpenLayers.Geometry.Point(1825,-1853),new OpenLayers.Geometry.Point(1796,-1863)],
            //184-59
            [new OpenLayers.Geometry.Point(1578, -1545), new OpenLayers.Geometry.Point(1608,-1553),new OpenLayers.Geometry.Point(1602,-1577),
             new OpenLayers.Geometry.Point(1591, -1574), new OpenLayers.Geometry.Point(1592,-1571),new OpenLayers.Geometry.Point(1585,-1569),
             new OpenLayers.Geometry.Point(1581, -1580),new OpenLayers.Geometry.Point(1571,-1578),new OpenLayers.Geometry.Point(1573,-1566)],
            //185-60
            [new OpenLayers.Geometry.Point(1555, -1538),new OpenLayers.Geometry.Point(1578,-1545),new OpenLayers.Geometry.Point(1573,-1566),
             new OpenLayers.Geometry.Point(1561, -1565),new OpenLayers.Geometry.Point(1558,-1578),new OpenLayers.Geometry.Point(1550,-1578)],
            //188-61
            [new OpenLayers.Geometry.Point(1441, -1513),new OpenLayers.Geometry.Point(1475,-1510),new OpenLayers.Geometry.Point(1480,-1554),
             new OpenLayers.Geometry.Point(1463, -1555),new OpenLayers.Geometry.Point(1463,-1542),new OpenLayers.Geometry.Point(1443,-1543)],
            //189-62
            [new OpenLayers.Geometry.Point(1393, -1459),new OpenLayers.Geometry.Point(1413,-1455),new OpenLayers.Geometry.Point(1433,-1452),
             new OpenLayers.Geometry.Point(1437, -1488),new OpenLayers.Geometry.Point(1406,-1491),new OpenLayers.Geometry.Point(1405,-1471),
             new OpenLayers.Geometry.Point(1394, -1472)],
            //193-63
            [new OpenLayers.Geometry.Point(1348, -1426),new OpenLayers.Geometry.Point(1371,-1415),new OpenLayers.Geometry.Point(1379,-1415),
             new OpenLayers.Geometry.Point(1383, -1441),new OpenLayers.Geometry.Point(1372,-1442),new OpenLayers.Geometry.Point(1373,-1446),
             new OpenLayers.Geometry.Point(1363, -1447),new OpenLayers.Geometry.Point(1365,-1464),new OpenLayers.Geometry.Point(1355,-1466)],
            //194-64
            [new OpenLayers.Geometry.Point(1317, -1431),new OpenLayers.Geometry.Point(1348,-1426),new OpenLayers.Geometry.Point(1355,-1466),
             new OpenLayers.Geometry.Point(1325, -1471)],
            //195-65
            [new OpenLayers.Geometry.Point(1341, -1545),new OpenLayers.Geometry.Point(1369,-1540),new OpenLayers.Geometry.Point(1377,-1557),
             new OpenLayers.Geometry.Point(1358, -1578),new OpenLayers.Geometry.Point(1356,-1578),new OpenLayers.Geometry.Point(1346,-1570)],
            //197-66
            [new OpenLayers.Geometry.Point(1421, -1641),new OpenLayers.Geometry.Point(1442,-1620),new OpenLayers.Geometry.Point(1454,-1631),
             new OpenLayers.Geometry.Point(1481, -1605),new OpenLayers.Geometry.Point(1491,-1612),new OpenLayers.Geometry.Point(1475,-1628),
             new OpenLayers.Geometry.Point(1441, -1660)],
            //198-67
            [new OpenLayers.Geometry.Point(1441, -1660),new OpenLayers.Geometry.Point(1475,-1628),new OpenLayers.Geometry.Point(1489,-1640),
             new OpenLayers.Geometry.Point(1458, -1677)],
            //201-68
            [new OpenLayers.Geometry.Point(1484, -1703),new OpenLayers.Geometry.Point(1516,-1673),new OpenLayers.Geometry.Point(1524,-1681),
             new OpenLayers.Geometry.Point(1509, -1694),new OpenLayers.Geometry.Point(1516,-1702),new OpenLayers.Geometry.Point(1498,-1719)],
            //202-69
            [new OpenLayers.Geometry.Point(1498, -1719),new OpenLayers.Geometry.Point(1516,-1702),new OpenLayers.Geometry.Point(1530,-1688),
             new OpenLayers.Geometry.Point(1538, -1676),new OpenLayers.Geometry.Point(1548,-1686),new OpenLayers.Geometry.Point(1523,-1710),
             new OpenLayers.Geometry.Point(1534, -1720),new OpenLayers.Geometry.Point(1516,-1738)],
            //205-70
            [new OpenLayers.Geometry.Point(1550, -1775),new OpenLayers.Geometry.Point(1579,-1746),new OpenLayers.Geometry.Point(1586,-1753),
             new OpenLayers.Geometry.Point(1576, -1763),new OpenLayers.Geometry.Point(1587,-1774),new OpenLayers.Geometry.Point(1568,-1793)],
            //206-71
            [new OpenLayers.Geometry.Point(1568, -1793),new OpenLayers.Geometry.Point(1587,-1774),new OpenLayers.Geometry.Point(1610,-1799),
             new OpenLayers.Geometry.Point(1593, -1817)],
            //207-72
            [new OpenLayers.Geometry.Point(1593, -1817),new OpenLayers.Geometry.Point(1610,-1799),new OpenLayers.Geometry.Point(1634,-1820),
             new OpenLayers.Geometry.Point(1616, -1841)],
            //208-73
            [new OpenLayers.Geometry.Point(1645, -1871),new OpenLayers.Geometry.Point(1677,-1838),new OpenLayers.Geometry.Point(1683,-1844),
             new OpenLayers.Geometry.Point(1688, -1839),new OpenLayers.Geometry.Point(1695,-1847),new OpenLayers.Geometry.Point(1689,-1853),
             new OpenLayers.Geometry.Point(1693, -1857),new OpenLayers.Geometry.Point(1665,-1887)],
            //214-74
            [new OpenLayers.Geometry.Point(1674, -1979),new OpenLayers.Geometry.Point(1691,-1963),new OpenLayers.Geometry.Point(1705,-1977),
             new OpenLayers.Geometry.Point(1686, -1997),new OpenLayers.Geometry.Point(1680,-1991),new OpenLayers.Geometry.Point(1683,-1988)],
            //215-75
            [new OpenLayers.Geometry.Point(1647, -1966),new OpenLayers.Geometry.Point(1670,-1942),new OpenLayers.Geometry.Point(1691,-1963),
             new OpenLayers.Geometry.Point(1674, -1979),new OpenLayers.Geometry.Point(1668,-1986)],
            //216-76
            [new OpenLayers.Geometry.Point(1615, -1934),new OpenLayers.Geometry.Point(1637,-1910),new OpenLayers.Geometry.Point(1670,-1942),
             new OpenLayers.Geometry.Point(1647, -1966),new OpenLayers.Geometry.Point(1639,-1958),new OpenLayers.Geometry.Point(1620,-1976),
             new OpenLayers.Geometry.Point(1609, -1964),new OpenLayers.Geometry.Point(1627,-1946)],
            //218-77
            [new OpenLayers.Geometry.Point(1583, -1894),new OpenLayers.Geometry.Point(1600,-1874),new OpenLayers.Geometry.Point(1611,-1884),
             new OpenLayers.Geometry.Point(1582, -1915),new OpenLayers.Geometry.Point(1575,-1908),new OpenLayers.Geometry.Point(1586,-1897)],
            //222-78
            [new OpenLayers.Geometry.Point(1490, -1807),new OpenLayers.Geometry.Point(1511,-1786),new OpenLayers.Geometry.Point(1540,-1815),
             new OpenLayers.Geometry.Point(1525, -1829),new OpenLayers.Geometry.Point(1511,-1815),new OpenLayers.Geometry.Point(1506,-1820)],
            //226-79
            [new OpenLayers.Geometry.Point(1419, -1739),new OpenLayers.Geometry.Point(1438,-1714),new OpenLayers.Geometry.Point(1458,-1733),
             new OpenLayers.Geometry.Point(1437, -1755)],
            //227-80
            [new OpenLayers.Geometry.Point(1382, -1714),new OpenLayers.Geometry.Point(1402,-1678),new OpenLayers.Geometry.Point(1438,-1714),
             new OpenLayers.Geometry.Point(1417, -1742)],
            //229-81
            [new OpenLayers.Geometry.Point(1266, -1689),new OpenLayers.Geometry.Point(1293,-1689),new OpenLayers.Geometry.Point(1293,-1683),
             new OpenLayers.Geometry.Point(1305, -1683),new OpenLayers.Geometry.Point(1305,-1688),new OpenLayers.Geometry.Point(1317,-1688),
             new OpenLayers.Geometry.Point(1317, -1678),new OpenLayers.Geometry.Point(1356,-1678),new OpenLayers.Geometry.Point(1356,-1691),
             new OpenLayers.Geometry.Point(1340, -1691),new OpenLayers.Geometry.Point(1340,-1699),new OpenLayers.Geometry.Point(1356,-1711),
             new OpenLayers.Geometry.Point(1356, -1726),new OpenLayers.Geometry.Point(1339,-1739),new OpenLayers.Geometry.Point(1266,-1740)],
            //239-82
            [new OpenLayers.Geometry.Point(1025, -1707),new OpenLayers.Geometry.Point(1051,-1703),new OpenLayers.Geometry.Point(1056,-1727),
             new OpenLayers.Geometry.Point(1031, -1731)],
            //241-83
            [new OpenLayers.Geometry.Point(969, -1689),new OpenLayers.Geometry.Point(995,-1681),new OpenLayers.Geometry.Point(999,-1695),
             new OpenLayers.Geometry.Point(974, -1702)],
            //249-84
            [new OpenLayers.Geometry.Point(684, -1718),new OpenLayers.Geometry.Point(696,-1714),new OpenLayers.Geometry.Point(706,-1738),
             new OpenLayers.Geometry.Point(713, -1736),new OpenLayers.Geometry.Point(721,-1753),new OpenLayers.Geometry.Point(701,-1760)],
            //250-85
            [new OpenLayers.Geometry.Point(712, -1730),new OpenLayers.Geometry.Point(732,-1724),new OpenLayers.Geometry.Point(741,-1747),
             new OpenLayers.Geometry.Point(721, -1753),new OpenLayers.Geometry.Point(713,-1736)],
            //251-86
            [new OpenLayers.Geometry.Point(732, -1724),new OpenLayers.Geometry.Point(748,-1718),new OpenLayers.Geometry.Point(758,-1741),
             new OpenLayers.Geometry.Point(741, -1747)],
            //262-87
            [new OpenLayers.Geometry.Point(1299, -1605),new OpenLayers.Geometry.Point(1336,-1597),new OpenLayers.Geometry.Point(1347,-1645),
             new OpenLayers.Geometry.Point(1315, -1650),new OpenLayers.Geometry.Point(1309,-1619),new OpenLayers.Geometry.Point(1299,-1618)],
            //263-88
            [new OpenLayers.Geometry.Point(1279, -1555),new OpenLayers.Geometry.Point(1288,-1554),new OpenLayers.Geometry.Point(1326,-1547),
             new OpenLayers.Geometry.Point(1333, -1583),new OpenLayers.Geometry.Point(1304,-1586),new OpenLayers.Geometry.Point(1301,-1567),
             new OpenLayers.Geometry.Point(1274, -1570),new OpenLayers.Geometry.Point(1274,-1564),new OpenLayers.Geometry.Point(1279,-1563)],
            //269-89
            [new OpenLayers.Geometry.Point(1123, -1466),new OpenLayers.Geometry.Point(1158,-1456),new OpenLayers.Geometry.Point(1167,-1486),
             new OpenLayers.Geometry.Point(1130, -1496)],
            //273-90
            [new OpenLayers.Geometry.Point(985, -1504),new OpenLayers.Geometry.Point(1020,-1494),new OpenLayers.Geometry.Point(1027,-1524),
             new OpenLayers.Geometry.Point(993, -1533)],
            //281-91
            [new OpenLayers.Geometry.Point(944, -1543),new OpenLayers.Geometry.Point(964,-1538),new OpenLayers.Geometry.Point(967,-1558),
             new OpenLayers.Geometry.Point(948, -1563)],
            //285-92
            [new OpenLayers.Geometry.Point(871, -1532),new OpenLayers.Geometry.Point(885,-1528),new OpenLayers.Geometry.Point(888,-1544),
             new OpenLayers.Geometry.Point(883, -1545),new OpenLayers.Geometry.Point(884,-1556),new OpenLayers.Geometry.Point(877,-1558)],
            //307-93
            [new OpenLayers.Geometry.Point(507, -1556),new OpenLayers.Geometry.Point(536,-1547),new OpenLayers.Geometry.Point(545,-1579),
             new OpenLayers.Geometry.Point(515, -1589)],
            //310-94
            [new OpenLayers.Geometry.Point(634, -1523),new OpenLayers.Geometry.Point(639,-1521),new OpenLayers.Geometry.Point(638,-1512),
             new OpenLayers.Geometry.Point(647, -1509),new OpenLayers.Geometry.Point(657,-1539),new OpenLayers.Geometry.Point(641,-1545)],
            //311-95
            [new OpenLayers.Geometry.Point(651, -1518),new OpenLayers.Geometry.Point(668,-1512),new OpenLayers.Geometry.Point(674,-1533),
             new OpenLayers.Geometry.Point(657, -1539)],
            //325-96
            [new OpenLayers.Geometry.Point(742, -1478),new OpenLayers.Geometry.Point(752,-1474),new OpenLayers.Geometry.Point(761,-1503),
             new OpenLayers.Geometry.Point(734, -1513),new OpenLayers.Geometry.Point(727,-1493),new OpenLayers.Geometry.Point(745,-1487)],
            //326-97
            [new OpenLayers.Geometry.Point(752,-1474),new OpenLayers.Geometry.Point(764,-1470),new OpenLayers.Geometry.Point(773,-1499),
             new OpenLayers.Geometry.Point(761,-1503)],
            //328-98
            [new OpenLayers.Geometry.Point(796,-1437),new OpenLayers.Geometry.Point(809,-1433),new OpenLayers.Geometry.Point(816,-1459),
             new OpenLayers.Geometry.Point(829,-1454),new OpenLayers.Geometry.Point(835,-1479),new OpenLayers.Geometry.Point(799,-1491),
             new OpenLayers.Geometry.Point(793,-1466),new OpenLayers.Geometry.Point(803,-1463)],
            //333-99
            [new OpenLayers.Geometry.Point(901,-1410),new OpenLayers.Geometry.Point(913,-1407),new OpenLayers.Geometry.Point(919,-1423),
             new OpenLayers.Geometry.Point(930,-1419),new OpenLayers.Geometry.Point(940,-1444),new OpenLayers.Geometry.Point(914,-1453)],
            //343-100
            [new OpenLayers.Geometry.Point(910,-1144),new OpenLayers.Geometry.Point(945,-1158),new OpenLayers.Geometry.Point(924,-1244),
             new OpenLayers.Geometry.Point(843,-1223),new OpenLayers.Geometry.Point(851,-1189),new OpenLayers.Geometry.Point(867,-1192),
             new OpenLayers.Geometry.Point(867,-1201),new OpenLayers.Geometry.Point(877,-1202),new OpenLayers.Geometry.Point(877,-1197),
             new OpenLayers.Geometry.Point(895,-1201),new OpenLayers.Geometry.Point(898,-1192),new OpenLayers.Geometry.Point(884,-1186),
             new OpenLayers.Geometry.Point(887,-1176),new OpenLayers.Geometry.Point(872,-1172),new OpenLayers.Geometry.Point(877,-1160),
             new OpenLayers.Geometry.Point(902,-1167)],
            //345-101
            [new OpenLayers.Geometry.Point(931,-1122),new OpenLayers.Geometry.Point(959,-1133),new OpenLayers.Geometry.Point(949,-1159),
             new OpenLayers.Geometry.Point(914,-1145),new OpenLayers.Geometry.Point(918,-1132),new OpenLayers.Geometry.Point(925,-1134)],
            //350-102
            [new OpenLayers.Geometry.Point(990,-1031),new OpenLayers.Geometry.Point(1009,-1030),new OpenLayers.Geometry.Point(1010,-1050),
             new OpenLayers.Geometry.Point(994,-1052)],
            //353-103
            [new OpenLayers.Geometry.Point(998,-931),new OpenLayers.Geometry.Point(1030,-947),new OpenLayers.Geometry.Point(1021,-967),
             new OpenLayers.Geometry.Point(999,-956),new OpenLayers.Geometry.Point(1003,-950),new OpenLayers.Geometry.Point(992,-944)],
            //362-104
            [new OpenLayers.Geometry.Point(1150,-1332),new OpenLayers.Geometry.Point(1170,-1329),new OpenLayers.Geometry.Point(1176,-1359),
             new OpenLayers.Geometry.Point(1155,-1361)],
            //363-105
            [new OpenLayers.Geometry.Point(1115,-1269),new OpenLayers.Geometry.Point(1136,-1257),new OpenLayers.Geometry.Point(1152,-1292),
             new OpenLayers.Geometry.Point(1132,-1302)],
            //366-106
            [new OpenLayers.Geometry.Point(948,-1328),new OpenLayers.Geometry.Point(978,-1325),new OpenLayers.Geometry.Point(979,-1335),
             new OpenLayers.Geometry.Point(988,-1335),new OpenLayers.Geometry.Point(989,-1348),new OpenLayers.Geometry.Point(984,-1348),
             new OpenLayers.Geometry.Point(984,-1365),new OpenLayers.Geometry.Point(962,-1368),new OpenLayers.Geometry.Point(961,-1350),
             new OpenLayers.Geometry.Point(950,-1350)],
            //368-107
            [new OpenLayers.Geometry.Point(998,-1379),new OpenLayers.Geometry.Point(1011,-1377),new OpenLayers.Geometry.Point(1011,-1386),
             new OpenLayers.Geometry.Point(1024,-1385),new OpenLayers.Geometry.Point(1024,-1395),new OpenLayers.Geometry.Point(1035,-1395),
             new OpenLayers.Geometry.Point(1040,-1424),new OpenLayers.Geometry.Point(1006,-1427)],
            //369-108
            [new OpenLayers.Geometry.Point(1053,-1374),new OpenLayers.Geometry.Point(1068,-1373),new OpenLayers.Geometry.Point(1072,-1420),
             new OpenLayers.Geometry.Point(1040,-1424),new OpenLayers.Geometry.Point(1036,-1398),new OpenLayers.Geometry.Point(1054,-1397)],
            //372-109
            [new OpenLayers.Geometry.Point(1137,-1363),new OpenLayers.Geometry.Point(1176,-1359),new OpenLayers.Geometry.Point(1184,-1405),
             new OpenLayers.Geometry.Point(1144,-1409)],
            //373-110
            [new OpenLayers.Geometry.Point(1198,-1331),new OpenLayers.Geometry.Point(1212,-1328),new OpenLayers.Geometry.Point(1212,-1320),
             new OpenLayers.Geometry.Point(1221,-1320),new OpenLayers.Geometry.Point(1224,-1338),new OpenLayers.Geometry.Point(1230,-1338),
             new OpenLayers.Geometry.Point(1230,-1352),new OpenLayers.Geometry.Point(1239,-1352),new OpenLayers.Geometry.Point(1245,-1399),
             new OpenLayers.Geometry.Point(1209,-1402)],
            //69-111
            [new OpenLayers.Geometry.Point(1530,-1273),new OpenLayers.Geometry.Point(1558,-1268),new OpenLayers.Geometry.Point(1564,-1296),
             new OpenLayers.Geometry.Point(1554,-1298),new OpenLayers.Geometry.Point(1554,-1319),new OpenLayers.Geometry.Point(1543,-1320),
             new OpenLayers.Geometry.Point(1540,-1300),new OpenLayers.Geometry.Point(1534,-1300)],
            //416-112
            [new OpenLayers.Geometry.Point(1614,-1305),new OpenLayers.Geometry.Point(1640,-1298),new OpenLayers.Geometry.Point(1648,-1330),
             new OpenLayers.Geometry.Point(1622,-1338),new OpenLayers.Geometry.Point(1618,-1321),new OpenLayers.Geometry.Point(1613,-1322),
             new OpenLayers.Geometry.Point(1609,-1308)],
            //423-113
            [new OpenLayers.Geometry.Point(1971,-2713),new OpenLayers.Geometry.Point(1995,-2712),new OpenLayers.Geometry.Point(2099,-2691),
             new OpenLayers.Geometry.Point(2107,-2691),new OpenLayers.Geometry.Point(2119,-2896),new OpenLayers.Geometry.Point(2064,-2897),
             new OpenLayers.Geometry.Point(2064,-2907),new OpenLayers.Geometry.Point(2057,-2907),new OpenLayers.Geometry.Point(2053,-2897),
             new OpenLayers.Geometry.Point(1962,-2838),new OpenLayers.Geometry.Point(1950,-2824),new OpenLayers.Geometry.Point(1944,-2789),
             new OpenLayers.Geometry.Point(1953,-2729)],
            //442-114
            [new OpenLayers.Geometry.Point(1282,-381),new OpenLayers.Geometry.Point(1303,-371),new OpenLayers.Geometry.Point(1313,-392),
             new OpenLayers.Geometry.Point(1292,-403)],
            //460-115
            [new OpenLayers.Geometry.Point(1624,-1176),new OpenLayers.Geometry.Point(1661,-1173),new OpenLayers.Geometry.Point(1662,-1204),
             new OpenLayers.Geometry.Point(1626,-1208)],
            //462-116
            [new OpenLayers.Geometry.Point(1993,-2586),new OpenLayers.Geometry.Point(2024,-2589),new OpenLayers.Geometry.Point(2024,-2598),
             new OpenLayers.Geometry.Point(2019,-2598),new OpenLayers.Geometry.Point(2018,-2613),new OpenLayers.Geometry.Point(1991,-2611)],
            //463-117
            [new OpenLayers.Geometry.Point(1601,-1182),new OpenLayers.Geometry.Point(1624,-1181),new OpenLayers.Geometry.Point(1626,-1208),
             new OpenLayers.Geometry.Point(1602,-1211)],
            //465-118
            [new OpenLayers.Geometry.Point(1386,-642),new OpenLayers.Geometry.Point(1392,-642),new OpenLayers.Geometry.Point(1392,-635),
             new OpenLayers.Geometry.Point(1401,-635),new OpenLayers.Geometry.Point(1401,-640),new OpenLayers.Geometry.Point(1412,-640),
             new OpenLayers.Geometry.Point(1414,-660),new OpenLayers.Geometry.Point(1388,-662)],
            //466-119
            [new OpenLayers.Geometry.Point(1381,-612),new OpenLayers.Geometry.Point(1414,-609),new OpenLayers.Geometry.Point(1416,-623),
             new OpenLayers.Geometry.Point(1393,-625),new OpenLayers.Geometry.Point(1391,-619),new OpenLayers.Geometry.Point(1382,-619)],
            //467-120
            [new OpenLayers.Geometry.Point(1388,-595),new OpenLayers.Geometry.Point(1412,-593),new OpenLayers.Geometry.Point(1414,-609),
             new OpenLayers.Geometry.Point(1381,-613),new OpenLayers.Geometry.Point(1381,-602),new OpenLayers.Geometry.Point(1389,-602)],
            //468-121
            [new OpenLayers.Geometry.Point(1387,-577),new OpenLayers.Geometry.Point(1412,-577),new OpenLayers.Geometry.Point(1412,-593),
             new OpenLayers.Geometry.Point(1388,-595)],
            //481-122
            [new OpenLayers.Geometry.Point(2008,-2392),new OpenLayers.Geometry.Point(2036,-2392),new OpenLayers.Geometry.Point(2036,-2397.5),
             new OpenLayers.Geometry.Point(2048,-2397.5),new OpenLayers.Geometry.Point(2048,-2407.5),new OpenLayers.Geometry.Point(2043,-2407.5),
             new OpenLayers.Geometry.Point(2043,-2410),new OpenLayers.Geometry.Point(2008,-2409)],
            //484-123
            [new OpenLayers.Geometry.Point(122,-1651),new OpenLayers.Geometry.Point(141,-1644),new OpenLayers.Geometry.Point(150,-1674),
             new OpenLayers.Geometry.Point(123,-1682),new OpenLayers.Geometry.Point(119,-1682),new OpenLayers.Geometry.Point(112,-1661),
             new OpenLayers.Geometry.Point(123,-1657)],
            //68-124
            [new OpenLayers.Geometry.Point(1594,-1262),new OpenLayers.Geometry.Point(1616,-1258),new OpenLayers.Geometry.Point(1623,-1258),
             new OpenLayers.Geometry.Point(1630,-1262),new OpenLayers.Geometry.Point(1640,-1298),new OpenLayers.Geometry.Point(1614,-1305),
             new OpenLayers.Geometry.Point(1609,-1290),new OpenLayers.Geometry.Point(1599,-1292)]];


obj = JSON.parse(budovy);
var puvPoz = new OpenLayers.LonLat(1300,-980);
var cooSel;

//Add option into select #coo
for (var i = 1; i<=7; i++) {
  $('#coo').append($('<option>', {
    value: i,
    text: obj.dum[i-1].cp
  }));
}

//Select item for display model
$('#coo').on('change', function() {
  cooSel = $('#coo').val();

  if (cooSel=="br") {
    map.setCenter(puvPoz, 2);
    vectorLayer.removeAllFeatures();
  }
  else {
    var sour = obj.dum[cooSel-1].souradnice;
    var xyi = sour.split(",").map(Number);
    var x = xyi[0];
    var y = xyi[1];
    var i = xyi[2];

    vectorLayer.removeAllFeatures();

    var poz = new OpenLayers.LonLat(x,y);
    var dd2 = new OpenLayers.Geometry.LinearRing(vectorDum[i]);
    polygonFeature = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon([dd2]));
    vectorLayer.addFeatures([polygonFeature]);
    map.setCenter(poz, 4);

    $('#obsah-popis').show();
    $('#obsah-popis').html(
      '<h3 class="nazev">' + obj.dum[cooSel-1].nazev + '</h3></br>' +
      '<p class="popis">' + obj.dum[cooSel-1].popis + '</p>');

    $('#obsah-model').show();

    if (obj.dum[cooSel-1].popis==" ") {
      $('#obsah-model').css({width: '100%', marginTop: '0'});
    } else {
      $('#obsah-model').css({width: '50%', marginTop: '72'});
    }
    $('#obsah-model').html('<iframe class="frame" src="' + obj.dum[cooSel-1].model + '"></iframe>');
  }
});

//Button for default view
$('.but').click(function() {
  map.setCenter(puvPoz, 2);
  vectorLayer.removeAllFeatures();
  $('#coo').val("br");
  $('#obsah-popis').hide();
  $('#obsah-model').hide();
});

//Button for hide and show map
$('.but2').click(function() {
  var id_map = $('#map').css('display');

  if (id_map=="block") {
    $('#map').hide();
    $('.but2').html("Zobrazit mapu");
    $('#formular').css('marginTop','-=300');
  }
  else if (id_map=="none") {
    $('#map').show();
    $('.but2').html("Skrýt mapu");
    $('#formular').css('marginTop','+=300');
  }
});
