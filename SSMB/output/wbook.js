var sheets = ['Input','Assumptions','MB-BI','GoDB test cases',''];
var srcs = {
	"0_4_5" : ["0_17_2",],
	"0_7_8" : ["1_1_27",],
	"0_7_9" : ["0_7_8",],
	"0_9_2" : ["0_7_8",],
	"0_20_2" : ["0_17_2","1_22_38","1_22_40",],
	"0_26_2" : ["0_20_2",],
	"1_1_16" : [],
	"1_1_17" : [],
	"1_1_18" : [],
	"1_1_19" : [],
	"1_1_20" : [],
	"1_1_21" : [],
	"1_1_22" : [],
	"1_1_23" : [],
	"1_1_24" : [],
	"1_1_27" : [{ s:1,sr:2,sc:26,er:13,ec:27},],
	"1_2_15" : [],
	"1_2_16" : ["1_2_15",],
	"1_2_17" : ["1_2_16",],
	"1_2_18" : ["1_2_17",],
	"1_2_19" : ["1_2_18",],
	"1_2_20" : ["1_2_19",],
	"1_2_21" : ["1_2_20",],
	"1_2_22" : ["1_2_21",],
	"1_2_23" : ["1_2_22",],
	"1_2_24" : ["1_2_23",],
	"1_2_27" : [{ s:1,sr:3,sc:10,er:50,ec:11},"0_16_2","0_11_2","0_13_2",{ s:1,sr:1,sc:13,er:50,ec:24},{ s:1,sr:1,sc:13,er:50,ec:13},{ s:1,sr:1,sc:13,er:2,ec:24},"0_12_2","0_15_2","0_10_2",{ s:1,sr:12,sc:1,er:13,ec:2},],
	"1_3_26" : ["1_3_27",],
	"1_3_27" : ["0_17_2","1_2_27",],
	"1_4_10" : [],
	"1_4_13" : [],
	"1_4_27" : [{ s:1,sr:3,sc:10,er:50,ec:11},"0_16_2","0_11_2","0_13_2",{ s:1,sr:1,sc:13,er:50,ec:24},{ s:1,sr:1,sc:13,er:50,ec:13},{ s:1,sr:1,sc:13,er:2,ec:24},"0_12_2","0_15_2","0_10_2",{ s:1,sr:12,sc:1,er:13,ec:2},],
	"1_5_10" : ["1_4_10",],
	"1_5_13" : ["1_4_13",],
	"1_5_26" : ["1_5_27",],
	"1_5_27" : ["0_17_2","1_4_27",],
	"1_6_10" : ["1_5_10",],
	"1_6_13" : ["1_5_13",],
	"1_6_27" : [{ s:1,sr:3,sc:10,er:50,ec:11},"0_16_2","0_11_2","0_13_2",{ s:1,sr:1,sc:13,er:50,ec:24},{ s:1,sr:1,sc:13,er:50,ec:13},{ s:1,sr:1,sc:13,er:2,ec:24},"0_12_2","0_15_2","0_10_2",{ s:1,sr:12,sc:1,er:13,ec:2},],
	"1_7_10" : ["1_6_10",],
	"1_7_13" : ["1_6_13",],
	"1_7_26" : ["1_7_27",],
	"1_7_27" : ["0_17_2","1_6_27",],
	"1_8_10" : ["1_7_10",],
	"1_8_13" : ["1_7_13",],
	"1_8_27" : [{ s:1,sr:3,sc:10,er:50,ec:11},"0_16_2","0_11_2","0_13_2",{ s:1,sr:1,sc:13,er:50,ec:24},{ s:1,sr:1,sc:13,er:50,ec:13},{ s:1,sr:1,sc:13,er:2,ec:24},"0_12_2","0_15_2","0_10_2",{ s:1,sr:12,sc:1,er:13,ec:2},],
	"1_9_10" : ["1_8_10",],
	"1_9_13" : ["1_8_13",],
	"1_9_26" : ["1_9_27",],
	"1_9_27" : ["0_17_2","1_8_27",],
	"1_10_10" : ["1_9_10",],
	"1_10_13" : ["1_9_13",],
	"1_10_27" : [{ s:1,sr:3,sc:10,er:50,ec:11},"0_16_2","0_11_2","0_13_2",{ s:1,sr:1,sc:13,er:50,ec:24},{ s:1,sr:1,sc:13,er:50,ec:13},{ s:1,sr:1,sc:13,er:2,ec:24},"0_12_2","0_15_2","0_10_2",{ s:1,sr:12,sc:1,er:13,ec:2},],
	"1_11_10" : ["1_10_10",],
	"1_11_13" : ["1_10_13",],
	"1_11_26" : ["1_11_27",],
	"1_11_27" : ["0_17_2","1_10_27",],
	"1_12_10" : ["1_11_10",],
	"1_12_13" : ["1_11_13",],
	"1_12_27" : [{ s:1,sr:3,sc:10,er:50,ec:11},"0_16_2","0_11_2","0_13_2",{ s:1,sr:1,sc:13,er:50,ec:24},{ s:1,sr:1,sc:13,er:50,ec:13},{ s:1,sr:1,sc:13,er:2,ec:24},"0_12_2","0_15_2","0_10_2",{ s:1,sr:12,sc:1,er:13,ec:2},],
	"1_13_10" : ["1_12_10",],
	"1_13_13" : ["1_12_13",],
	"1_13_26" : ["1_13_27",],
	"1_13_27" : ["0_17_2","1_12_27",],
	"1_14_10" : ["1_13_10",],
	"1_14_13" : ["1_13_13",],
	"1_15_10" : ["1_14_10",],
	"1_15_13" : ["1_14_13",],
	"1_16_10" : ["1_15_10",],
	"1_16_13" : ["1_15_13",],
	"1_17_10" : ["1_16_10",],
	"1_17_13" : ["1_16_13",],
	"1_18_10" : ["1_17_10",],
	"1_18_13" : ["1_17_13",],
	"1_19_10" : ["1_18_10",],
	"1_19_13" : ["1_18_13",],
	"1_19_33" : [{ s:1,sr:3,sc:10,er:50,ec:11},],
	"1_19_34" : [{ s:1,sr:3,sc:10,er:50,ec:11},],
	"1_19_38" : ["0_9_2","1_28_33",],
	"1_20_10" : ["1_19_10",],
	"1_20_13" : ["1_19_13",],
	"1_20_30" : ["1_19_38","0_10_2",{ s:1,sr:12,sc:1,er:13,ec:2},],
	"1_20_33" : ["1_19_33","0_16_2",],
	"1_20_34" : ["1_19_34","0_16_2",],
	"1_20_38" : ["0_9_2","1_29_33",],
	"1_21_10" : ["1_20_10",],
	"1_21_13" : ["1_20_13",],
	"1_21_30" : ["1_20_38","0_10_2",{ s:1,sr:12,sc:1,er:13,ec:2},],
	"1_21_33" : ["0_9_2",{ s:1,sr:3,sc:1,er:8,ec:3},],
	"1_21_34" : ["0_9_2",{ s:1,sr:3,sc:1,er:8,ec:3},],
	"1_21_38" : ["1_19_38","1_20_38",],
	"1_22_10" : ["1_21_10",],
	"1_22_13" : ["1_21_13",],
	"1_22_30" : ["1_22_40",],
	"1_22_33" : ["1_20_33","1_21_33",],
	"1_22_34" : ["1_20_34","1_21_34",],
	"1_22_38" : ["1_21_38","0_10_2",{ s:1,sr:12,sc:1,er:13,ec:2},],
	"1_22_39" : ["1_22_38",],
	"1_22_40" : ["1_22_38","1_22_39",],
	"1_23_10" : ["1_22_10",],
	"1_23_13" : ["1_22_13",],
	"1_23_30" : ["1_25_38","0_10_2",{ s:1,sr:12,sc:1,er:13,ec:2},],
	"1_23_33" : ["1_22_33","0_14_2",],
	"1_23_34" : ["1_22_34","0_14_2",],
	"1_24_10" : ["1_23_10",],
	"1_24_13" : ["1_23_13",],
	"1_24_30" : ["1_26_38","0_10_2",{ s:1,sr:12,sc:1,er:13,ec:2},],
	"1_24_33" : ["0_13_2",{ s:1,sr:1,sc:13,er:50,ec:24},{ s:1,sr:1,sc:13,er:50,ec:13},{ s:1,sr:1,sc:13,er:2,ec:24},],
	"1_24_34" : ["0_13_2",{ s:1,sr:1,sc:13,er:50,ec:24},{ s:1,sr:1,sc:13,er:50,ec:13},{ s:1,sr:1,sc:13,er:2,ec:24},],
	"1_25_10" : ["1_24_10",],
	"1_25_13" : ["1_24_13",],
	"1_25_30" : ["1_28_40",],
	"1_25_33" : ["0_15_2",],
	"1_25_34" : ["0_15_2",],
	"1_25_38" : ["0_9_2","1_28_34",],
	"1_26_10" : ["1_25_10",],
	"1_26_13" : ["1_25_13",],
	"1_26_33" : ["0_12_2",],
	"1_26_34" : ["0_12_2",],
	"1_26_38" : ["0_9_2","1_29_34",],
	"1_27_10" : ["1_26_10",],
	"1_27_13" : ["1_26_13",],
	"1_27_30" : ["0_9_2","1_23_30",],
	"1_27_33" : ["0_11_2","1_23_33",],
	"1_27_34" : ["0_11_2","1_23_34",],
	"1_27_38" : ["1_25_38","1_26_38",],
	"1_28_10" : ["1_27_10",],
	"1_28_13" : ["1_27_13",],
	"1_28_30" : ["2_22_3",],
	"1_28_33" : ["1_23_33",],
	"1_28_34" : ["1_23_34",],
	"1_28_38" : ["1_27_38","0_10_2",{ s:1,sr:12,sc:1,er:13,ec:2},],
	"1_28_39" : ["1_28_38",],
	"1_28_40" : ["1_28_38","1_28_39",],
	"1_29_10" : ["1_28_10",],
	"1_29_13" : ["1_28_13",],
	"1_29_30" : ["2_23_3",],
	"1_29_33" : [{ s:1,sr:24,sc:33,er:27,ec:33},],
	"1_29_34" : [{ s:1,sr:24,sc:34,er:27,ec:34},],
	"1_30_10" : ["1_29_10",],
	"1_30_13" : ["1_29_13",],
	"1_31_10" : ["1_30_10",],
	"1_31_13" : ["1_30_13",],
	"1_32_10" : ["1_31_10",],
	"1_32_13" : ["1_31_13",],
	"1_33_10" : ["1_32_10",],
	"1_33_13" : ["1_32_13",],
	"1_34_10" : ["1_33_10",],
	"1_34_13" : ["1_33_13",],
	"1_35_10" : ["1_34_10",],
	"1_35_13" : ["1_34_13",],
	"1_36_10" : ["1_35_10",],
	"1_36_13" : ["1_35_13",],
	"1_37_10" : ["1_36_10",],
	"1_37_13" : ["1_36_13",],
	"1_38_10" : ["1_37_10",],
	"1_38_13" : ["1_37_13",],
	"1_39_10" : ["1_38_10",],
	"1_39_13" : ["1_38_13",],
	"1_40_10" : ["1_39_10",],
	"1_40_13" : ["1_39_13",],
	"1_41_10" : ["1_40_10",],
	"1_41_13" : ["1_40_13",],
	"1_42_10" : ["1_41_10",],
	"1_42_13" : ["1_41_13",],
	"1_43_10" : ["1_42_10",],
	"1_43_13" : ["1_42_13",],
	"1_44_10" : ["1_43_10",],
	"1_44_13" : ["1_43_13",],
	"1_45_10" : ["1_44_10",],
	"1_45_13" : ["1_44_13",],
	"1_46_10" : ["1_45_10",],
	"1_46_13" : ["1_45_13",],
	"1_47_10" : ["1_46_10",],
	"1_47_13" : ["1_46_13",],
	"1_48_10" : ["1_47_10",],
	"1_48_13" : ["1_47_13",],
	"1_49_10" : ["1_48_10",],
	"1_49_13" : ["1_48_13",],
	"1_50_10" : ["1_49_10",],
	"1_50_13" : ["1_49_13",],
	"2_13_3" : [],
	"2_15_3" : ["0_6_2",],
	"2_17_3" : [],
	"2_17_7" : ["0_7_2",],
	"2_19_3" : ["0_9_2",],
	"2_19_7" : ["0_8_2",],
	"2_20_3" : ["1_27_30",],
	"2_20_7" : ["0_10_2",],
	"2_21_7" : ["2_30_3",],
	"2_22_3" : ["2_45_9","2_43_7",],
	"2_22_7" : ["1_25_30",],
	"2_23_3" : ["2_45_10","2_43_7",],
	"2_29_2" : [],
	"2_29_3" : ["0_10_2","1_22_38",],
	"2_29_4" : ["2_29_3",],
	"2_29_5" : ["2_29_3","2_29_4",],
	"2_29_6" : ["1_27_30",],
	"2_29_7" : ["0_9_2","0_7_2",],
	"2_29_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:29,ec:7},],
	"2_29_9" : ["0_9_2",],
	"2_29_10" : ["0_9_2",],
	"2_30_2" : [],
	"2_30_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_30_4" : ["2_30_3",],
	"2_30_5" : ["2_30_3","2_30_4",],
	"2_30_6" : ["1_27_30",],
	"2_30_7" : ["0_9_2","0_7_2",],
	"2_30_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:30,ec:7},],
	"2_30_9" : ["0_9_2",],
	"2_30_10" : ["0_9_2",],
	"2_31_2" : [],
	"2_31_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_31_4" : ["2_31_3",],
	"2_31_5" : ["2_31_3","2_31_4",],
	"2_31_6" : ["1_27_30",],
	"2_31_7" : ["0_9_2","0_7_2",],
	"2_31_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:31,ec:7},],
	"2_31_9" : ["0_9_2",],
	"2_31_10" : ["0_9_2",],
	"2_32_2" : [],
	"2_32_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_32_4" : ["2_32_3",],
	"2_32_5" : ["2_32_3","2_32_4",],
	"2_32_6" : ["1_27_30",],
	"2_32_7" : ["0_9_2","0_7_2",],
	"2_32_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:32,ec:7},],
	"2_32_9" : ["0_9_2",],
	"2_32_10" : ["0_9_2",],
	"2_33_2" : [],
	"2_33_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_33_4" : ["2_33_3",],
	"2_33_5" : ["2_33_3","2_33_4",],
	"2_33_6" : ["1_27_30",],
	"2_33_7" : ["0_9_2","0_7_2",],
	"2_33_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:33,ec:7},],
	"2_33_9" : ["0_9_2",],
	"2_33_10" : ["0_9_2",],
	"2_34_2" : [],
	"2_34_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_34_4" : ["2_34_3",],
	"2_34_5" : ["2_34_3","2_34_4",],
	"2_34_6" : ["1_27_30",],
	"2_34_7" : ["0_9_2","0_7_2",],
	"2_34_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:34,ec:7},],
	"2_34_9" : ["0_9_2",],
	"2_34_10" : ["0_9_2",],
	"2_35_2" : [],
	"2_35_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_35_4" : ["2_35_3",],
	"2_35_5" : ["2_35_3","2_35_4",],
	"2_35_6" : ["1_27_30",],
	"2_35_7" : ["0_9_2","0_7_2",],
	"2_35_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:35,ec:7},],
	"2_35_9" : ["0_9_2",],
	"2_35_10" : ["0_9_2",],
	"2_36_2" : [],
	"2_36_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_36_4" : ["2_36_3",],
	"2_36_5" : ["2_36_3","2_36_4",],
	"2_36_6" : ["1_27_30",],
	"2_36_7" : ["0_9_2","0_7_2",],
	"2_36_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:36,ec:7},],
	"2_36_9" : ["0_9_2",],
	"2_36_10" : ["0_9_2",],
	"2_37_2" : [],
	"2_37_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_37_4" : ["2_37_3",],
	"2_37_5" : ["2_37_3","2_37_4",],
	"2_37_6" : ["1_27_30",],
	"2_37_7" : ["0_9_2","0_7_2",],
	"2_37_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:37,ec:7},],
	"2_37_9" : ["0_9_2",],
	"2_37_10" : ["0_9_2",],
	"2_38_2" : [],
	"2_38_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_38_4" : ["2_38_3",],
	"2_38_5" : ["2_38_3","2_38_4",],
	"2_38_6" : ["1_27_30",],
	"2_38_7" : ["0_9_2","0_7_2",],
	"2_38_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:38,ec:7},],
	"2_38_9" : ["0_9_2",],
	"2_38_10" : ["0_9_2",],
	"2_39_2" : [],
	"2_39_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_39_4" : ["2_39_3",],
	"2_39_5" : ["2_39_3","2_39_4",],
	"2_39_6" : ["1_27_30",],
	"2_39_7" : ["0_9_2","0_7_2",],
	"2_39_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:39,ec:7},],
	"2_39_9" : ["0_9_2",],
	"2_39_10" : ["0_9_2",],
	"2_40_2" : [],
	"2_40_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_40_4" : ["2_40_3",],
	"2_40_5" : ["2_40_3","2_40_4",],
	"2_40_6" : ["1_27_30",],
	"2_40_7" : ["0_9_2","0_7_2",],
	"2_40_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:40,ec:7},],
	"2_40_9" : ["0_9_2",],
	"2_40_10" : ["0_9_2",],
	"2_41_2" : [],
	"2_41_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_41_4" : ["2_41_3",],
	"2_41_5" : ["2_41_3","2_41_4",],
	"2_41_6" : ["1_27_30",],
	"2_41_7" : ["0_9_2","0_7_2",],
	"2_41_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:41,ec:7},],
	"2_41_9" : ["0_9_2",],
	"2_41_10" : ["0_9_2",],
	"2_42_2" : [],
	"2_42_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_42_4" : ["2_42_3",],
	"2_42_5" : ["2_42_3","2_42_4",],
	"2_42_6" : ["1_27_30",],
	"2_42_7" : ["0_9_2","0_7_2",],
	"2_42_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:42,ec:7},],
	"2_42_9" : ["0_9_2",],
	"2_42_10" : ["0_9_2",],
	"2_43_2" : [],
	"2_43_3" : ["0_8_2","0_10_2","1_28_38",],
	"2_43_4" : ["2_43_3",],
	"2_43_5" : ["2_43_3","2_43_4",],
	"2_43_6" : ["1_27_30",],
	"2_43_7" : ["0_9_2","0_7_2",],
	"2_43_8" : [{ s:1,sr:3,sc:5,er:16,ec:8},"1_20_30","1_23_30","0_8_2",{ s:2,sr:29,sc:7,er:43,ec:7},],
	"2_43_9" : ["0_9_2",],
	"2_43_10" : ["0_9_2",],
	"2_44_9" : ["0_9_2",],
	"2_44_10" : ["0_9_2",],
	"2_45_9" : ["2_44_9","2_43_9",],
	"2_45_10" : ["2_44_10","2_43_10",],
};
/* Excel formula simulator in Javascript!
 *  Portions of the Excel Jsavascript functions are reproduced from Sutoiku's formula.js library
 *  and some portions are adaptations of formula.js library. Credit's are due to the original
 *  authors.
 */

/* simplest but inefficient replaceAll */
String.prototype.replaceAll = function(search, replace)
{
    return this.split(search).join(replace);
};

function updateListValidations(id, formula1, formula2){
    _g.fieldValidations(id, formula1);

    /*
    var elem;
    if( !_g.dcache.hasOwnProperty(id) ){
        elem = document.getElementById(id);
        _g.dcache[id] = elem;
    }
    if( !(elem=_g.dcache[id]) )return;

    elem = $(elem);
    if( formula1 != null ){
        _g.fieldValidations(elem, formula1);
    }*/
    //if( formula2 != null ){
    //    _g.fieldValidations($(elem), formula2);
    //}
}



var FALSE = 0;
var TRUE  = 1;
var WEEK_STARTS = [undefined, 0, 1,undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 1, 2, 3, 4, 5, 6, 0 ];

var WEEK_TYPES = [
  [],
  [1, 2, 3, 4, 5, 6, 7],
  [7, 1, 2, 3, 4, 5, 6],
  [6, 0, 1, 2, 3, 4, 5],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [7, 1, 2, 3, 4, 5, 6],
  [6, 7, 1, 2, 3, 4, 5],
  [5, 6, 7, 1, 2, 3, 4],
  [4, 5, 6, 7, 1, 2, 3],
  [3, 4, 5, 6, 7, 1, 2],
  [2, 3, 4, 5, 6, 7, 1],
  [1, 2, 3, 4, 5, 6, 7]
];
var WEEKEND_TYPES = [
  [],
  [6, 0],
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  undefined,
  undefined,
  undefined, [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6]
];






/* global functions */

function isNumber(obj){
    return !isNaN(parseFloat(obj)) && isFinite(obj) ;
}

var d1900 = new Date(1900, 0, 1);
(function(){

    var _g = function(){
    };

    this._g = _g;
    _g.error = {
        nil  : '#NULL!',
        div0 : '#DIV/0',
        value: '#VALUE?',
        ref  : '#REF!',
        name : '#NAME?',
        num  : '#NUM!',
        error: '#ERROR!',
		na   : '#N/A'
    };

    _g.states = {};
    _g.dcache = {};
    _g.lists  = {};
    _g.listVals  = {};

    /*
     * parses time of the form h:mm:ss am/pm and returns a date object
     */
    _g.parseTime = function(stime){

        if (stime == '' || typeof stime !== 'string' )
            return _g.error.value;

        var time = stime.match(/(\d+)(:(\d\d))?\s*(p?)/i);
        if (time == null)return _g.error.value;

        var hours = parseInt(time[1],10);
        if (hours == 12 && !time[4]) {
            hours = 0;
        }
        else {
            hours += (hours < 12 && time[4])? 12 : 0;
        }
        var d = new Date();
        d.setHours(hours);
        d.setMinutes(parseInt(time[3],10) || 0);
        d.setSeconds(0, 0);
        return d;
    };

    _g.parseDate = function(date) {

        if( isNumber(date) ){

            /* excel time is of the format .nnn */
            if( +date < 1 ){
                return +date;
            }

            /* if the date is in unix timestamp format directly use it
            * excel date time format max (year 9999) is 2958446
            */
            if( +date > 2958446 ){
                return new Date(+date);
            }
			
			if( date % 1 !== 0 ){	//date with time float with decimal values
				
				var d = date|0;
				var h = (date - d)*24;
				var m = (h - (h|0))*60;
				var s = (m - (m|0))*60;
				
				var dd;
				if( d>60 )dd = new Date(d1900.getTime() + (d - 2) * 86400000);
				else dd = new Date(d1900.getTime() + (d - 1) * 86400000);
				
				dd.setHours( h|0 );
				dd.setMinutes( m|0 );
				dd.setSeconds( Math.floor(s+0.5)|0 );
				return dd;
			}
			
        }

        if (!isNaN(date)) {

            /* if its already a date object, just use it */
            if (date instanceof Date)return new Date(date);

            /* if its number of days (serial date) since 1900, constrcut
                new date object from 1900 and add days to it */
			
            var d = parseInt(date, 10);
            if (d < 0)return _g.error.value;
            if (d <= 60) {
                return new Date(d1900.getTime() + (d - 1) * 86400000);
            }
            return new Date(d1900.getTime() + (d - 2) * 86400000);
        }

        /* if its a string representation of date try to parse it */
        if (typeof date === 'string') {
            dt = new Date(date);
            if (!isNaN(dt))return dt;

            /* check if the provided value is time (alone)*/
            return _g.parseTime(date);
        }

        /* oops */
        return _g.error.value;
    };

    /* convert boolean from TRUE, false, "false", 1 0 etc to
        proper boolean var
    */
    _g.parseBool = function(bool) {
        if( typeof bool === 'boolean')return bool;

        if( _g.ISERROR(bool) )return bool;

        if (typeof bool === 'number')return bool !== 0;

        if (typeof bool === 'string'){
            var up = bool.toUpperCase();
            if (up === 'TRUE')return true;
            if (up === 'FALSE')return false;
        }

        if( bool instanceof Date && !isNaN(bool))return true;

        return _g.error.value;
    };

    _g.parseNumber = function(string) {
        if( string === undefined || string === '') {
            return _g.error.value;
        }
		if( string instanceof Date ){
			return string.getTime();
		}
        if (!isNaN(string)) {
            return parseFloat(string);
        }
        return _g.error.value;
    };

	_g.fixTables = function(){
		for(var i=0; i<arguments.length; i++ ){
			if( arguments[i] == undefined )continue;
			if( typeof arguments[i] == 'object' ){
				arguments[i].row    = +arguments[i].row|0;
				arguments[i].rowEnd = +arguments[i].rowEnd|0;
				arguments[i].col    = +arguments[i].col|0;
				arguments[i].colEnd = +arguments[i].colEnd|0;
			}
		}
	}

	_g.numToString = function(num){
		if( typeof num === 'number' )
			return ""+Number(num.toFixed(5));
		return ""+num;
	}

    _g.validDate = function(d) {
        return d && d.getTime && !isNaN(d.getTime());
    }

    _g.ensureDate = function(d) {
        return (d instanceof Date)?d:new Date(d);
    };

    _g.check = function(){
        for(var i=0; i<arguments.length; i++ ){
            if( arguments[i] == _g.error.value )return false;
        }
        return true;
    }

	_g.criteria = function(criteria, val){
        if( criteria==undefined || criteria == null )return false;
		
		if( typeof val == "string") val = "'"+val+"'";
        if( typeof criteria != "string"){
            criteria = "=="+criteria;
        }
        else{
            var code = criteria.charAt(0);
            if( code != '<' && code != '>' && code != '=' && code != '!' )criteria = "=='"+criteria+"'";
            if( code=='=' && criteria.charAt(1)!='=' )criteria = "='"+criteria+"'";
        }
        if( eval(val + criteria)) return true;
        return false;
    };


    _g.num = function(n){
        return _g.parseNumber(n);
    };

    _g.ABS = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.abs(number);
    };

    _g.ACOS = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.acos(number);
    };
    _g.COS = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.cos(number);
    };

    _g.ACOSH = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.log(number + Math.sqrt(number * number - 1));
    };

    _g.ASIN = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.asin(number);
    };
    _g.SIN = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.sin(number);
    };
    _g.SINH = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.sinh(number);
    };

    _g.ASINH = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.log(number + Math.sqrt(number * number + 1));
    };

    _g.ATAN = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.atan(number);
    };

    _g.ATAN2 = function(number1, number2) {
        if( (number1=_g.parseNumber(number1)) == _g.error.value )return number1;
		if( (number2=_g.parseNumber(number2)) == _g.error.value )return number2;
        return Math.atan2(number1, number2);
    };
    _g.ATANH = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.log((1 + number) / (1 - number)) / 2;
    };
    _g.TANH = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.tanh(number);
    };

	_g.ACOT = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.atan(1/number);
    };

    _g.ACOTH = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return 0.5 * Math.log((number + 1) / (number - 1));
    };
	
	_g.BASE = function(number, radix, min_length) {
		min_length  = min_length || 0;
		number	    = _g.parseNumber(number);
		radix	    = _g.parseNumber(radix);
		min_length  = _g.parseNumber(min_length);

		if( !_g.check(number, radix, min_length))
		    return _g.error.value;

		var result = number.toString(radix);
		return new Array(Math.max(min_length + 1 - result.length, 0)).join('0') + result;
	};

	_g.CEILING = function(number, significance, mode) {
		significance = (significance === undefined) ? 1 : Math.abs(significance);
		mode = mode || 0;
		number		= _g.parseNumber(number);
		significance= _g.parseNumber(significance);
		mode		= _g.parseNumber(mode);

        if( !_g.check(number, significance, mode)) {
            return _g.error.value;
        }
		if (significance === 0) {
			return 0;
		}
		var precision = -Math.floor(Math.log(significance) / Math.log(10));
		if (number >= 0) {
			return _g.ROUND(Math.ceil(number / significance) * significance, precision);
		} else {
			if (mode === 0) {
				return -_g.ROUND(Math.floor(Math.abs(number) / significance) * significance, precision);
			} else {
				return -_g.ROUND(Math.ceil(Math.abs(number) / significance) * significance, precision);
			}
		}
	};

	var MEMOIZED_FACT = [];

	_g.FACT = function(number) {
		number = _g.parseNumber(number);

        if( !_g.check(number)) {
            return _g.error.value;
        }
		var n = Math.floor(number);
		if (n === 0 || n === 1) {
			return 1;
		} else if (MEMOIZED_FACT[n] > 0) {
			return MEMOIZED_FACT[n];
		} else {
			MEMOIZED_FACT[n] = _g.FACT(n - 1) * n;
			return MEMOIZED_FACT[n];
		}
	};

	_g.FACTDOUBLE = function(number) {
		number = _g.parseNumber(number);
        if( !_g.check(number)) {
            return _g.error.value;
        }
		var n = Math.floor(number);
		if (n <= 0) {
			return 1;
		} else {
			return n * _g.FACTDOUBLE(n - 2);
		}
	};

    _g.COMBIN = function(number, number_chosen) {
        number = _g.parseNumber(number);
        number_chosen = _g.parseNumber(number_chosen);
        if( !_g.check(number, number_chosen))return _g.error.value;
        return _g.FACT(number) / (_g.FACT(number_chosen) * _g.FACT(number - number_chosen));
    };

    _g.COMBINA = function(number, number_chosen) {
        number = _g.parseNumber(number);
        number_chosen = _g.parseNumber(number_chosen);
        if( !_g.check(number, number_chosen))return _g.error.value;
        return (number === 0 && number_chosen === 0) ? 1 : _g.COMBIN(number + number_chosen - 1, number - 1);
    };
    _g.DEGREES = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return number * 180 / Math.PI;
    };
    _g.EVEN = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return _g.CEILING(number, -2, -1);
    };

    _g.EXP = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return Math.exp(number);
    };

	_g.FLOOR = function(number, significance) {
		number = _g.parseNumber(number);
		significance = _g.parseNumber(significance);
        if( number==_g.error.value || significance == _g.error.value) {
            return _g.error.value;
        }
		if (significance === 0) {
			return 0;
		}

		if (!(number > 0 && significance > 0) && !(number < 0 && significance < 0)) {
			return error.num;
		}

		significance = Math.abs(significance);
		var precision = -Math.floor(Math.log(significance) / Math.log(10));
		if (number >= 0) {
			return _g.ROUND(Math.floor(number / significance) * significance, precision);
		} else {
			return -_g.ROUND(Math.ceil(Math.abs(number) / significance), precision);
		}
	};
    _g.GCD = function() {
        var range = _g.argsToArray(arguments, true);
        var n = range.length;
        var r0 = range[0];
        var x = r0 < 0 ? -r0 : r0;
        for (var i = 1; i < n; i++) {
            var ri = range[i];
            var y = ri < 0 ? -ri : ri;
            while (x && y) {
                if (x > y) {
                    x %= y;
                } else {
                    y %= x;
                }
            }
            x += y;
        }
        return x;
    };

    _g.INT = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return Math.floor(number);
    };

    _g.LCM = function() {
        var o = _g.argsToArray(arguments, true);
        for (var i, j, n, d, r = 1; (n = o.pop()) !== undefined;) {
            while (n > 1) {
                if (n % 2) {
                    for (i = 3, j = Math.floor(Math.sqrt(n)); i <= j && n % i; i += 2) {
                        //empty
                    }
                    d = (i <= j) ? i : n;
                } else {
                    d = 2;
                }
                for (n /= d, r *= d, i = o.length; i; (o[--i] % d) === 0 && (o[i] /= d) === 1 && o.splice(i, 1)) {
                    //empty
                }
            }
        }
        return r;
    };
    _g.LN = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return Math.log(number);
    };

    _g.LOG = function(number, base) {
        base = (base === undefined) ? 10 : base;
        number = _g.parseNumber(number);
        base    = _g.parseNumber(base);
        if( !_g.check(number, base))return _g.error.value;
        return Math.log(number) / Math.log(base);
    };
    _g.LOG10 = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return Math.log(number) / Math.log(10);
    };

    /*
    _g.MDETERM = function(matrix) {
        matrix = _g.parseMatrix(matrix);
        if (matrix instanceof Error) {
            return matrix;
        }
        return numeric.det(matrix);
    };

    _g.MINVERSE = function(matrix) {
        matrix = _g.parseMatrix(matrix);
        if (matrix instanceof Error) {
        return matrix;
        }
        return numeric.inv(matrix);
    };
    */

    _g.MROUND = function(number, multiple) {
        number = _g.parseNumber(number);
        multiple = _g.parseNumber(multiple);
        if( !_g.check(number, multiple))return _g.error.value;
        if (number * multiple < 0) {
            return _g.error.num;
        }
        return Math.round(number / multiple) * multiple;
    };

    _g.MULTINOMIAL = function() {
        var args = _g.argsToArray(arguments, true);
        var sum = 0;
        var divisor = 1;
        for (var i = 0; i < args.length; i++) {
            sum += args[i];
            divisor *= exports.FACT(args[i]);
        }
        return _g.FACT(sum) / divisor;
    };

    _g.ODD = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        var temp = Math.ceil(Math.abs(number));
        temp = (temp & 1) ? temp : temp + 1;
        return (number > 0) ? temp : -temp;
    };

    _g.PI = function() {
        return Math.PI;
    };

    _g.POWER = function(number, power) {
        number  = _g.parseNumber(number);
        power   = _g.parseNumber(power);
        if( !_g.check(number, power))return _g.error.value;
        var result = Math.pow(number, power);
        if (isNaN(result)) {
            return _g.error.num;
        }
        return result;
    };

    _g.PRODUCT = function() {
        var args = _g.argsToArray(arguments, true);
        var result = 1;
        for (var i = 0; i < args.length; i++) {
            result *= args[i];
        }
        return result;
    };

	_g.sumArray = function(arr){
		if( arr.length==0 )return 0;
		var sum=0;
		if( arr[0] instanceof Array ){
			for(var i=0; i<arr.length; i++){
				for(var j=0; j<arr[0].length; j++)
					sum += arr[i][j];
			}
		}
		else{
			for(var i=0; i<arr.length; i++)sum += arr[i];
		}
		return sum;
	};

    _g.SUMPRODUCT = function() {
		var result = [];
		if( arguments[0] instanceof Array ){
			if( arguments[0].length==0 )return [];
			if( arguments[0][0] instanceof Array ){
				for(var i=0; i<arguments[0].length; i++)
					result[i] = arguments[0][i].slice();
			}
			else{
				result = arguments[0].slice();
			}
		}
		else{
			var aptg = arguments[0];
			var rs = aptg.row | 0;
			var re = aptg.rowEnd | 0;
			var cs = aptg.col | 0;
			var ce = aptg.colEnd | 0;
			var sheet = aptg.sheet | 0;

			for(var r=rs; r<=re; r++){
				var pidx = sheet+'_'+r+'_';
				result[r-rs] = [];
				for( var c=cs; c<=ce; c++){
					var idx = pidx+c;
					var num = 0;
					//if( data.hasOwnProperty(idx) )num = +data[idx]
					var v = data[idx];
					if( v!==undefined )num = +v;
					result[r-rs][c-cs] = num;
				}
			}
		}
		
        for (var i = 1; i < arguments.length; i++) {
			var arr = arguments[i];
			if( arr instanceof Array ){
				if( arr.length!=result.length )
					return _g.error.value;
				
				if( result[0] instanceof Array ){
					//not implemented
					for(var r=0; r<result.length; r++){
						if( result[r].length != arr[r].length )
							return _g.error.value;
						for(var c=0; c<result[r].length; c++){
							result[r][c] = result[r][c]*(+arr[r][c]);
						}
					}
				}
				else{
					for(var i=0; i<arr.length; i++)
						result[i] = result[i]*(+arr[i]);
				}
			}else if( arr instanceof Object ){
				var aptg = arr;
				var rs = aptg.row | 0;
				var re = aptg.rowEnd | 0;
				var cs = aptg.col | 0;
				var ce = aptg.colEnd | 0;
				var sheet = aptg.sheet | 0;
				if( result.length != (re-rs+1) )
					return _g.error.value;
				for(var r=rs; r<=re; r++){
					if( result[r-rs].length != (ce-cs+1) )
						return _g.error.value;
					var pidx = sheet+'_'+r+'_';
					for( var c=cs; c<=ce; c++){
						var num = 0;
						var idx = pidx+c;
						//if( data.hasOwnProperty(idx) )num = +data[idx]
						var v = data[idx];
						if( v!==undefined )num = +v;
						result[r-rs][c-cs] *= num;
					}
				}
			}
        }
        return _g.sumArray(result);
    };

	
	_g.QUOTIENT = function(numerator, denominator) {
        numerator = _g.parseNumber(numerator);
        denominator = _g.parseNumber(denominator);
        if( !_g.check(numerator, denominator))return _g.error.value;
        return parseInt(numerator / denominator, 10);
    };

    _g.RADIANS = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return number * Math.PI / 180;
    };

    _g.RAND = function() {
        return Math.random();
    };

    _g.RANDBETWEEN = function(bottom, top) {
        bottom  = _g.parseNumber(bottom);
        top     = _g.parseNumber(top);
        if( !_g.check(bottom, top))return _g.error.value;
        // Creative Commons Attribution 3.0 License
        // Copyright (c) 2012 eqcode
        return bottom + Math.ceil((top - bottom + 1) * Math.random()) - 1;
    };
    _g.ROMAN = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        // The MIT License
        // Copyright (c) 2008 Steven Levithan
        var digits = String(number).split('');
        var key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
        var roman = '';
        var i = 3;
        while (i--) {
            roman = (key[+digits.pop() + (i * 10)] || '') + roman;
        }
        return new Array(+digits.join('') + 1).join('M') + roman;
    };

    _g.SERIESSUM = function(x, n, m, coefficients) {
        x = _g.parseNumber(x);
        n = _g.parseNumber(n);
        m = _g.parseNumber(m);
        if( !_g.check(x, n, m))return _g.error.value;
        coefficients = _g.argsToArray(coefficients, true);
        var result = coefficients[0] * Math.pow(x, n);
        for (var i = 1; i < coefficients.length; i++) {
            result += coefficients[i] * Math.pow(x, n + i * m);
        }
        return result;
    };

    _g.SIGN = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        if (number < 0) {
            return -1;
        } else if (number === 0) {
            return 0;
        } else {
            return 1;
        }
    };

    _g.SQRT = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        if (number < 0) {
            return _g.error.num;
        }
        return Math.sqrt(number);
    };

    _g.SQRTPI = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return Math.sqrt(number * Math.PI);
    };

    _g.TRUNC = function(number, digits) {
        digits = (digits === undefined) ? 0 : digits;
        number = _g.parseNumber(number);
        digits = _g.parseNumber(digits);
        if( !_g.check(number, digits))return _g.error.value;
        var sign = (number > 0) ? 1 : -1;
        return sign * (Math.floor(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
    };

	/* walk list of arrays, area ptgs, constants
	 * and filter as numbers
	 */
    _g.walkAptgNum = function(args, cb){
		
        if( !(args instanceof Array) ){
			args = [args];
		}
		
		var alen = args.length;
		for(var i=0; i<alen; i++){
            if( args[i] instanceof Array ){
                var aiLength = args[i].length;
                for(var j=0; j<=aiLength; j++){
                    var num = _g.parseNumber( args[i][j] );
                    if( num != _g.error.value )
                        if(cb(num, j, -1)===false)return;
                }
            }else if( typeof args[i] == 'object' ){
				/* walk area ptg to identify all number cells and pass it to
				 * callback function
				 */
                var aptg = args[i];
				var rs = aptg.row | 0;
				var re = aptg.rowEnd | 0;
				var cs = aptg.col | 0;
				var ce = aptg.colEnd | 0;
				var sheet = aptg.sheet | 0;

                for(var r=rs; r<=re; r++){
                    var pidx = sheet+'_'+r+'_';
                    for( var c=cs; c<=ce; c++){
                        var idx = pidx+c;
						var d = data[idx];
                        //if( data.hasOwnProperty(idx) ){
						if( d!==undefined ){
                            var num = _g.parseNumber( d );
                            if( num != _g.error.value )
                                if( cb(num, sheet, r-rs, c-cs) === false )return;
                        }
                    }
                }
            }else{
                var num = _g.parseNumber( args[i] );
                if( num != _g.error.value )
                    if(cb(num, -1, -1)===false)return;
            }
        }
    };

    _g.walkAptgAll = function(args, cb){
        if( !(args instanceof Array) )args = [args];

        //for(var i in args ){
		var alen = args.length;
		for(var i=0; i<alen; i++){
            if( args[i] instanceof Array ){
                for(var j=0; j<=args[i].length; j++){
                   if(cb(args[i][j], j, -1)===false)return;
                }
            }else if( typeof args[i] == 'object' ){
                var aptg = args[i];
				//_g.fixTables(aptg);
				var rs = aptg.row | 0;
				var re = aptg.rowEnd | 0;
				var cs = aptg.col | 0;
				var ce = aptg.colEnd | 0;
				var sheet = aptg.sheet | 0;
                for(var r=rs; r<=re; r++){
                    var pidx = sheet+'_'+r+'_';
                    for( var c=cs; c<=ce; c++){
                        var idx = pidx+c;
						if( cb(data[idx], sheet, r-rs, c-cs) === false )return;
                    }
                }
            }else{
                if( cb(args[i], -1, -1) === false )return;
            }
        }
    };

    _g.walkAptg = function(args, cb){
        if( !(args instanceof Array) )args = [args];

        //for(var i in args ){
		var alen = args.length;
		for(var i=0; i<alen; i++){
            if( args[i] instanceof Array ){
                for(var j=0; j<=args[i].length; j++){
                   if(cb(args[i][j], j, -1)===false)return;
                }
            }else if( typeof args[i] == 'object' ){
                var aptg = args[i];
				var rs = aptg.row | 0;
				var re = aptg.rowEnd | 0;
				var cs = aptg.col | 0;
				var ce = aptg.colEnd | 0;
				var sheet = aptg.sheet | 0;
				
                for(var r=rs; r<=re; r++){
                    var pidx = sheet+'_'+r+'_';
                    for( var c=cs; c<=ce; c++){
                        var idx = pidx+c;
						var d = data[idx];
                        //if( data.hasOwnProperty(idx) ){
						if( d!==undefined ){
							if( cb(d, sheet, r-rs, c-cs) === false )return;
						}
                    }
                }
            }else{
                if( cb(args[i], -1, -1) === false )return;
            }
        }
    };


    _g.argsToArray = function(args, num){
        var ret = [];
        if( num != undefined && num ){
            for(var i in args){
                if( args[i] instanceof Array ){
                    ret = ret.concat(_g.argsToArray(args[i], num));
                }else if( typeof args[i] === 'object' ){
                    ret = ret.concat(_g.tableToArray(args[i], num));
                }else{
                    var n = _g.parseNumber(args[i]);
                    if( n != _g.error.value )ret.push(n);
                }
            }
        }
        else{
            for(var i in args){
                ret.push(args[i]);
            }
        }
        return ret;
    }

	_g.tableToArray = function(tbl, num){
	    var ret = [];
	    if( num != undefined && num ){
            _g.walkAptgNum(tbl, function(val){ret.push(val);});
	    }
	    else{
	        _g.walkAptg(tbl, function(val){ret.push(val);});
	    }
	    return ret;
	}
	
	_g.index = function(table, row, col){
		if( table instanceof Array ){
			if( row<0 || row>=table.length )return _g.error.value;
			if( table[0] instanceof Array )
			    return table[row][col];
			return table[row];
		}else if( typeof table == 'object'){
			if( row<0 || row>(table.rowEnd-table.row))return _g.error.value;
			if( col<0 || col>(table.colEnd-table.col))return _g.error.value;
			var idx = table.sheet + "_" + (table.row+ +row) + "_" + (table.col+ +col);
			return data[idx];
		}
		return _g.error.value;
	};
	
	_g.arrayIf = function(arr1, arr2){
		var ret = [];
		
		if( arr1 instanceof Array ){
			if( arr2 instanceof Array ){
				for(var i=0; i<arr1.length && i<arr2.length; i++)
					if( arr1[i] )ret.push(arr2[i]);
			}
			else{
				console.log('arrayIf (range) not implemented...');
			}
		}
		else{
			console.log('arrayIf (range) not implemented...');
		}
		return ret;
	}
	
	_g.formatData = function(val, fmt){
		if( !fmt )return val;
		return SSF.format(fmt, val).replace('.00%', '%');
	}


	/* currently only list based valildations are supported
	 * rest of the validations are ignored
	 */
    _g.fieldValidations = function(id, vals){
        var jqelem;

        /* if id is not list, just ignore this*/
        if( !_g.lists.hasOwnProperty(id)){
			jqelem = $(document.getElementById(id));
			
            if( !jqelem || (!jqelem.is('select') && !jqelem.hasClass('gradio')) ){
                _g.lists[id] = null;
                return false;
            }
            _g.lists[id] = jqelem;
        }
		
		
        if( !(jqelem=_g.lists[id]) ){
			return false;
		}
		
		var fmt = fmt = jqelem.data('fmt');
		if( !fmt )fmt = jqelem.data('data-fmt');


        /* update the list only if there are some changes */
        var ops = "";
		if( jqelem.hasClass('gradio') ){
			var i=0;
			_g.walkAptg(vals, function(val){
				ops += "<label><input type='radio' name='"+id+"' id='chk-"+ i++ +"-"+ id + "' value='"+val+"' class='gradio-item'>"+val+"</label>";
			});
		}
		else{
			var prcnt = fmt && fmt.indexOf('%')==fmt.length-1;
			if( prcnt )fmt = "0.00%";
			_g.walkAptg(vals, function(val){
				//console.log(fmt+' => '+val+' => '+_g.formatData(val, fmt));
				if(prcnt && typeof val == 'string' && val.length>0)val = (+val.substring(0, val.length-1))/100;
				ops += "<option value='"+val+"'>"+_g.formatData(val, fmt)+"</option>";
				
			});
		}

        if( _g.listVals[id] == ops ){
            return false;
        }

		var oldVal = jqelem.val();
		if( jqelem.hasClass('gradio') ){
			oldVal = $('input[name='+id+']:radio:checked').val();
		}
			
		if( oldVal == null )oldVal = data[id];
		jqelem.empty().append(ops);
		if( jqelem.hasClass('gradio') ){
			$("input[name="+id+"][value='" + oldVal+ "']").attr('checked', 'checked');
			//$("input[name="+id+"]").val(oldVal);
			$('[id^=chk-]').change(function(e){
				e.preventDefault();
				var parts = this.id.split('-');
				if( parts.length!=3)return;
				data[parts[2]] = this.value;
				var chks = document.getElementsByName(this.name);
				for( var i=0; i<chks.length; i++){
					if( chks[i].type=="checkbox" && chks[i].id != this.id)chks[i].checked = false;
				}
				if(xl2g){
					xl2g.evalAllTargets();
					if( xl2g.afterRadioChange )
						xl2g.afterRadioChange(this);
				}
			});
			
		}
		else
			jqelem.val(oldVal)
		
		
        _g.listVals[id] = ops;

    }

    _g.SUM = function(){
        var sum = 0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptgNum(arguments[i], function(val){sum+=val;});
        return sum;
    };
    _g.SUMIF = function(range, criteria, sum_range){
        var sum = 0;
		if( sum_range == undefined ){
			_g.walkAptgNum(range, function(val){
				if( _g.criteria(criteria, val) )sum+=val;
			});
		}
		else if( typeof sum_range == 'object') {
			//not so good optimization (will not support complex criteria)
			//-rr jul-27-2016
			if( typeof criteria === 'number' || typeof criteria === 'boolean' ){
				var rs = range.row|0;
				var re = range.rowEnd|0;
				var cs = range.col|0;
				var ce = range.colEnd|0;
				
				
				if( rs===re ){
					var sc = sum_range.col|0;
					var idxpre = range.sheet+"_"+rs+"_";
					var idxpretar = sum_range.sheet + "_"+ (+sum_range.row) + "_";
					
					for(var c=cs; c<=ce; c++){
						if( data[idxpre+c] == criteria ){
							var val = parseFloat(data[idxpretar+(sc+c-cs) ]);
							if( !isNaN(val) )sum += val;
						}
					}
					return sum;
				}
				
				if( cs===ce ){
					//looks like too much code for optimization, imagine a sheet with 
					//	hundreds of thousands of sumifs
					//
					var pre = range.sheet+"_";
					var pretar = sum_range.sheet + "_";
					var suf="_"+cs;
					var suftar="_"+sum_range.col;
					var sr = sum_range.row|0;
					for(var r=rs; r<=re; r++){
						if( data[pre+r+suf] == criteria ){
							var val = parseFloat(data[ pretar + (sr+r-rs) + suftar ]);
							if( !isNaN(val) )sum += +val;
						}
					}
					return sum;
				}
				
				
				
				_g.walkAptg(range, function(val, sheet, row, col ){
					if( criteria == val ){
						var idx = sum_range.sheet + "_"+ (+sum_range.row + +row) + "_"+ (+sum_range.col + +col);
						var val = _g.parseNumber(data[idx]);
						if( val != _g.error.value )sum += +val;
					}
				});
				return sum;
			}
			
			if( typeof criteria === 'string' ){
				var code = criteria.charAt(0);
				if( code != '<' && code != '>' && code != '=' && code != '!' ){
					_g.walkAptg(range, function(val, sheet, row, col ){
						if( criteria == val ){
							var idx = sum_range.sheet + "_"+ (+sum_range.row + +row) + "_"+ (+sum_range.col + +col);
							var val = _g.parseNumber(data[idx]);
							if( val != _g.error.value )sum += +val;
						}
					});
					return sum;
				}
			}
			
			
			
			_g.walkAptg(range, function(val, sheet, row, col ){
				if( _g.criteria(criteria, val) ){
					var idx = sum_range.sheet + "_"+ (+sum_range.row + +row) + "_"+ (+sum_range.col + +col);
					var val = _g.parseNumber(data[idx]);
					if( val != _g.error.value )sum += +val;
				}
			});
		}
		else if( typeof sum_range == 'string'){
			//single cell refernece
			var parts = sum_range.split('_');
			var srow = parts[1];
			var scol = parts[2];
			_g.walkAptg(range, function(val, sheet, row, col ){
				if( _g.criteria(criteria, val) ){
					var idx = parts[0] + "_"+ (+srow + +row) + "_"+ (+scol + +col);
					var val = _g.parseNumber(data[idx]);
					if( val != _g.error.value )sum += +val;
				}
			});
			
		}
		else{
			console.log(sum_range);
			console.log("error: sumif: sum_range array not implemented.");
		}
        return sum;
    };


	_g.SUMSQ = function(){
        var sum = 0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptgNum(arguments[i], function(val){sum+=val*val;});
        return sum;
    };

    _g.AVERAGE = function(){
        var sum = 0;
        var count=0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptgNum(arguments[i], function(val){sum+=val;count++;});
        if( count>0 )return sum/count;
        return 0;
    };
    _g.AVERAGEA = function(){
        var sum = 0;
        var count=0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptg(arguments[i], function(val){
				if( isNumber(val))sum += +val;
				else if( val === true )sum += 1;
				if( val!=null) count++;
			});
        if( count>0 )return sum/count;
        return 0;
    };
    _g.AVERAGEIF = function(range, criteria, average_range){
        var sum = 0;
        var count=0;
		_g.walkAptg(range, function(val, s, r, c){
			if( _g.criteria(criteria, val) ){
				
				if( average_range != undefined)
					val = _g.index(average_range, r, c);
				
				val = _g.parseNumber(val);
				if( val != _g.error.value ){
					sum += val;
					count ++;
				}
			}
		});
        if( count>0 )return sum/count;
        return 0;
    };

    _g.AVERAGEIFS = function(){
		var range = arguments[0];
		var criterias = arguments;
        var sum = 0;
        var count=0;
		_g.walkAptg(range, function(val, s, r, c){
			var status = true;
			for(var i=1; i<criterias.length; i+=2 ){
				var cval = _g.index(criterias[i], r, c);
				if( !_g.criteria(criterias[i+1], cval) ){
					status = false;
					break;
				}
			}
			if( status ){
				val = _g.parseNumber(val);
				if( val != _g.error.value ){
					sum += val;
					count ++;
				}
			}
		});
        if( count>0 )return sum/count;
        return 0;
    };


	_g.COUNT = function(){
        var count=0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptgNum(arguments[i], function(val){count++;});
        return count;
    };

    _g.COUNTIF = function(range, criteria){
        var count=0;
		if( typeof criteria === 'string' ){
			var code = criteria.charAt(0);
			if( code != '<' && code != '>' && code != '=' && code != '!' ){
				_g.walkAptg(range, function(val){
					if( /*val &&*/ criteria == val )count++;
				});
				return count;
			}
		}
        _g.walkAptg(range, function(val){
			if( _g.criteria(criteria, val) )count++;
		});
        return count;
    };

	_g.COUNTA = function(){
        var count=0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptg(arguments[i], function(val){count++;});
        return count;
    };
	_g.COUNTBLANK = function(){
        var count=0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptgAll(arguments[i], function(val){
				if(val==undefined || val == '' )count++;
			});
        return count;
	}
    _g.COUNTIFS = function(){
		var criterias = arguments;
        var sum = 0;
        var count=0;
		_g.walkAptg(criterias[0], function(val, s, r, c){
			var status = true;
			if( _g.criteria(criterias[1], val) ){
				for(var i=2; i<criterias.length; i+=2 ){
					var cval = _g.index(criterias[i], r, c);
					if( !_g.criteria(criterias[i+1], cval) ){
						status = false;
						break;
					}
				}
				if( status )count ++;
			}
			
		});
        return count;
    };

    _g.MAX = function(){
        var max = -Number.MAX_VALUE;
		for(var i=0; i<arguments.length; i++)
			_g.walkAptg(arguments[i], function(val){
			    if( val instanceof Date )val = val.getTime();
			    else val = _g.parseNumber(val);
			    if(val>max)max = val;
			});
        return max==-Number.MAX_VALUE?0:max;
    };

    _g.MIN = function(){
        var min = Number.MAX_VALUE;
		for(var i=0; i<arguments.length; i++)
			_g.walkAptgNum(arguments[i], function(val){
			    if( val instanceof Date )val = val.getTime();
			    else val = _g.parseNumber(val);
			    if(val<min)min = val;
			});
        return min==Number.MAX_VALUE?0:min;
    };

    _g.TODAY = function(){
        var d1 = new Date();
        d1.setHours(0,0,0);
        return d1;
    };

    _g.NOW = function(){
        return new Date();
    };

    _g.equalArray = function(v1, v2){
        if( typeof v1 == 'object' )v1 = _g.tableToArray(v1);
        if( typeof v2 == 'object' )v2 = _g.tableToArray(v2);

        var ret = [];
        if( v1 instanceof Array && !(v2 instanceof Array) ){
            for(var i=0; i<v1.length; i++)ret.push(v1[i] == v2);
        }
        else if( v2 instanceof Array && !(v1 instanceof Array) ){
            for(var i=0; i<v2.length; i++)ret.push(v2[i] == v1);
        }
        else{
            for(var i=0; i<v2.length; i++)ret.push(i<v1.length?v2[i]==v1[i] : false);
        }
        return ret;
    };


	/* caseless, typefull comparison of strings, numbers
	 * dates etc
	 */
	_g.equal = function(v1, v2){
		if( v1 === undefined )return v2 == undefined || v2 == '';
		if( v2 === undefined )return v1 == undefined || v1 == '';

		/* dates should be compared as numbers (seconds since...) */
		if( v1 instanceof Date )v1 = v1.getTime();
		if( v2 instanceof Date )v2 = v2.getTime();
		
        if( v1 instanceof Array || v2 instanceof Array || typeof v1 == 'object' || typeof v2 == 'object')
            return _g.equalArray(v1, v2);

		/* if its a string make it caseless */
		if( typeof v1=='string' )v1 = v1.toLowerCase();
		if( typeof v2=='string' )v2 = v2.toLowerCase();
		
		/* just compare now (types must match) */
		return ( v1 === v2 );
	}

	_g.equalString = function(v1, v2){
		v1 = v1 || '';
		v2 = v2 || '';
		return ( String(v1).toLowerCase() === String(v2).toLowerCase() );
	}

    _g.mulArray = function(v1, v2){
        if( typeof v1 == 'object' )v1 = _g.tableToArray(v1);
        if( typeof v2 == 'object' )v2 = _g.tableToArray(v2);

        var ret = [];
        if( v1 instanceof Array && !(v2 instanceof Array) ){
            for(var i=0; i<v1.length; i++)ret.push(v1[i]*v2);
        }
        else if( v2 instanceof Array && !(v1 instanceof Array) ){
            for(var i=0; i<v2.length; i++)ret.push(v2[i]*v1);
        }
        else{
            for(var i=0; i<v2.length; i++)ret.push(i<v1.length?v2[i]*v1[i] : 0);
        }
        return ret;
    }

    _g.mul = function(v1, v2){
		if( _g.checkerr(v1) )return v1;
		if( _g.checkerr(v2) )return v2;
	    if( v1 === undefined )v1 = 0;
	    if( v2 === undefined )v2 = 0;
        if( v1 instanceof Array || v2 instanceof Array || typeof v1 == 'object' || typeof v2 == 'object')
            return _g.mulArray(v1, v2);
	    return (+v1) * (+v2);
    }

    _g.div = function(v1, v2){
		if( _g.checkerr(v1) )return v1;
		if( _g.checkerr(v2) )return v2;
	    if( v1 === undefined )v1 = 0;
	    if( v2 === undefined )v2 = 0;
	    if( +v2==0 )return _g.error.value;
	    return +v1 / +v2;
    }
	
    _g.pow = function(v1, v2){
	    if( v1 === undefined )v1 = 0;
	    if( v2 === undefined )v2 = 0;
	    return Math.pow(+v1, +v2);
    }

    _g.add = function(v1, v2){
		if( _g.checkerr(v1) )return v1;
		if( _g.checkerr(v2) )return v2;
	    if( v1 === undefined )v1 = 0;
	    if( v2 === undefined )v2 = 0;
	    return (+v1) + (+v2);
    }

	_g.sub = function(v1, v2){
		if( _g.checkerr(v1) )return v1;
		if( _g.checkerr(v2) )return v2;
		
	    if( v1 === undefined )v1 = 0;
	    if( v2 === undefined )v2 = 0;

		if( v1 instanceof Date || v2 instanceof Date ){
	        if( !(v1 instanceof Date) )v1 = _g.parseDate(v1);
	        if( !(v2 instanceof Date) )v2 = _g.parseDate(v2);

            /* datedif parameters are start, end */
            return _g.DATEDIF(v2, v1, 'd');
	    }
	    else{
	        return _g.num(v1) - _g.num(v2);
	    }
	}


	/* returns <0 =0 >0 based on the input data (numbers and strings)
	    - for strings a caseless (lowercase to be more precise) is used
	    - in excel a number is always less than a string (even if the string
	    appears to be small ).
	    - string form of number is converted to actual number first
	 */
	_g.diff = function(v1, v2){
		if( _g.ISERROR(v1) )return _g.ISERROR(v2)?0:-1;
		if( _g.ISERROR(v2) )return 1;


		if( v1 instanceof Date )v1 = v1.getTime();
		if( v2 instanceof Date )v2 = v2.getTime();
		
		if( isNumber(v1) )v1 = +v1;
		else if(typeof v1 === 'string') v1 = v1.toLowerCase();
		if( isNumber(v2) )v2 = +v2;
		else if(typeof v2 === 'string') v2 = v2.toLowerCase();


		if( typeof v1 == 'string' && typeof v2 != 'string' )return 1;
		if( typeof v1 != 'string' && typeof v2 == 'string' )return -1;
		if( v1 == v2 )return 0;
		return ( v1 <  v2 )? -1 : 1;
	}

    _g.VLOOKUP = function(value, table, resIndex, approx){

        resIndex = _g.parseNumber(resIndex);
        if( !_g.check(resIndex) )return _g.error.na;
		
        resIndex = Math.round(+resIndex);
		if( resIndex<1 )return _g.error.value;

		if( approx == undefined )approx = 1;

        var prev = _g.error.na;
        if( table instanceof Array ){
			var tlen = table.length;
            for(var r=0; r<tlen; r++){

                if( _g.equal(table[r][0], value) )return table[r][resIndex-1];
                if( approx ){
                    if( _g.diff(table[r][0], value) > 0 )return isNumber(prev) ? +prev : prev;
                    prev = table[r][resIndex-1];
                }
            }
            if( approx )return isNumber(prev) ? +prev : prev;
            return _g.error.na;
        }

        if( typeof table != 'object' ){

            console.log("invalid paramter to vlookup expected table ");
            return _g.error.ref;
        }

		//_g.fixTables(table);
        var rs = table.row | 0;
        var re = table.rowEnd | 0;
        var cs = table.col | 0;
        var ce = table.colEnd | 0;
        var sheet = table.sheet | 0;
		
		if( typeof value === 'string'){
			var sheet_ = sheet + "_";
			var _cs = "_"+cs;
			value = value.toLowerCase();
			for(var r=rs; r<=re; r++){
				var idx = sheet_ + r + _cs;
				var d = data[idx];
				if( String(d).toLowerCase() === value ){
					var resIdx = sheet_ + r + "_" + (cs+resIndex-1);
					var rd = data[resIdx];
					return isNumber(rd) ? +rd : rd;
				}

				if( approx ){
					if( _g.diff(d, value) > 0 )return isNumber(prev) ? +prev : prev;

					var resIdx = sheet_ + r + "_" + (cs+resIndex-1);
					prev = data[resIdx];
				}

			}
		}
		else{
			for(var r=rs; r<=re; r++){
				var idx = sheet + "_" + r + "_" + cs;


				if( _g.equal(data[idx], value) ){
					var resIdx = sheet + "_" + r + "_" + (cs+resIndex-1);
					var rd = data[resIdx];
					return isNumber(rd) ? +rd : rd;
				}

				if( approx ){
					if( _g.diff(data[idx], value) > 0 )return isNumber(prev) ? +prev : prev;

					var resIdx = sheet + "_" + r + "_" + (cs+resIndex-1);
					prev = data[resIdx];
				}

			}
		}
        if( approx )return isNumber(prev) ? +prev : prev;
        //console.log("vlookup not found for "+value+" in ["+rs+":"+re+", "+cs+":"+ce+"] sheet: "+sheet);
        return _g.error.na;
    }

    _g.HLOOKUP = function(value, table, resIndex, approx){

        resIndex = _g.parseNumber(resIndex);
        if( !_g.check(resIndex) )return _g.error.na;
        resIndex = Math.round(+resIndex);
		if( resIndex<1 )return _g.error.value;
		if( approx == undefined )approx = 1;
        var prev = _g.error.na;

        if( table instanceof Array ){
			var t0len = table[0].length;
            for(var c=0; c<t0len; c++){
                if( _g.equal(table[0][c], value) )return table[resIndex-1][c];
                if( approx ){
                    if( _g.diff(table[0][c], value) > 0 )return isNumber(prev) ? +prev : prev;
                    prev = table[resIndex-1][c];
                }
            }
            if( approx )return isNumber(prev) ? +prev : prev;
            return _g.error.na;
        }


        if( typeof table != 'object' ){
            console.log("invalid paramter to hlookup expected table ");
            return _g.error.ref;
        }



		//_g.fixTables(table);
		
        var rs = table.row | 0;
        var re = table.rowEnd | 0;
        var cs = table.col | 0;
        var ce = table.colEnd | 0;
        var sheet = table.sheet | 0;
		
		var pidx = sheet + "_" + rs + "_";
        for(var c=cs; c<=ce; c++){
            var idx = pidx + c;
            

            if( _g.equal(data[idx], value) ){
				var resIdx = sheet + "_" + (rs+resIndex-1)+"_"+c;
                return isNumber(data[resIdx]) ? +data[resIdx] : data[resIdx];
			}
			
            if( approx ){
				if( _g.diff(data[idx], value) > 0 )return isNumber(prev) ? +prev : prev;
                var resIdx = sheet + "_" + (rs+resIndex-1)+"_"+c;
				prev = data[resIdx];
            }

        }
        if( approx )return isNumber(prev) ? +prev : prev;
        //console.log("h-lookup not found for "+value+" in ["+table.row+":"+table.rowEnd+", "+table.col+":"+table.colEnd+"] sheet: "+table.sheet);
        return _g.error.na;
    };

    _g.MATCHARRAY = function(value, table, type){
        var prev = _g.error.na;
        for(var i=0; i<table.length; i++ ){
            if( _g.equal(table[i], value) )return i+1;
            if( type!=0 ){
                diff = _g.diff(table[i], value);
                if( type== 1 && diff>0 )return prev;
                if( type==-1 && diff<0 )return prev;
            }
            prev = i+1;
        }
        return _g.error.na;
    };

    _g.MATCH = function(value, table, type){

        if( table instanceof Array )
            return _g.MATCHARRAY(value, table, type);

        if( typeof table != 'object' ){
            console.log("invalid paramter to match expected table ");
            return _g.error.ref;
        }

		if( type == undefined )type = 1;
        var prev = _g.error.na;

		var rs = table.row | 0;
        var re = table.rowEnd | 0;
        var cs = table.col | 0;
        var ce = table.colEnd | 0;
        var sheet = table.sheet | 0;
		
		
		var diff;
        if( rs == re){
            /* search columns */
            for(var c=cs; c<=ce; c++){
                var idx = sheet + "_" + rs + "_" + c;
                if( _g.equal(data[idx], value) )return c - +cs + 1;
				
				if( type!=0 ){
					diff = _g.diff(data[idx], value);
					if( type== 1 && diff>0 )return prev;
					if( type==-1 && diff<0 )return prev;
				}
                prev = c - table.col+1;
            }
            if( type != 0 )return prev;
        }
        else if( cs == ce){
			var _cs = "_"+cs;
			var sheet_ = sheet+"_";
			
            /* search rows */
			if( typeof value === 'string' ){
				for(var r=rs; r<=re; r++){
					var idx = sheet_ + r + _cs;
					if( _g.equalString(data[idx], value) )return r - rs + 1;

					if( type!=0 ){
						diff = _g.diff(data[idx], value);
						if( type== 1 && diff>0 )return prev;
						if( type==-1 && diff<0 )return prev;
					}
					prev = r - table.row + 1;
				}
			}
			else{
				
			    for(var r=rs; r<=re; r++){
					var idx = sheet + "_" + r + "_" + cs;
					if( _g.equal(data[idx], value) )return r - rs + 1;

					if( type!=0 ){
						diff = _g.diff(data[idx], value);
						if( type== 1 && diff>0 )return prev;
						if( type==-1 && diff<0 )return prev;
					}
					prev = r - table.row + 1;
				}
			}
            if( type != 0 )return prev;
        }
        else{
            console.log("unimplemented match case...");
        }
        return _g.error.na;
    };
	
	
    _g.MATCH_orig = function(value, table, type){

        if( typeof table != 'object' ){
            console.log("invalid paramter to match expected table ");
            return _g.error.ref;
        }
        _g.fixTables(table);
        if( type == undefined )type = 1;
        var prev = _g.error.na;
        if( +table.row == +table.rowEnd){
            /* search columns */
            for(var c=table.col; c<=table.colEnd; c++){
                var idx = table.sheet + "_" + table.row + "_" + c;
                if( _g.equal(data[idx], value) )return c - +table.col + 1;
                if( type== 1 && _g.diff(data[idx], value)>0 )return prev;
                if( type==-1 && _g.diff(data[idx], value)<0 )return prev;
                prev = c - table.col+1;
            }
            if( type != 0 )return prev;
        }
        else if( +table.col == +table.colEnd){
            /* search rows */
            for(var r=table.row; r<=table.rowEnd; r++){
                var idx = table.sheet + "_" + r + "_" + table.col;
                if( _g.equal(data[idx], value) )return r - +table.row + 1;
                if( type== 1 && _g.diff(data[idx], value)>0 )return prev;
                if( type==-1 && _g.diff(data[idx], value)<0 )return prev;
                prev = r - table.row + 1;
            }
            if( type != 0 )return prev;
        }
        else{
            console.log("unimplemented match case...");
        }
        return _g.error.na;
    };

	_g.LOOKUP = function(value, table, resTable){

	    if( table instanceof Array ){
	        if( table.lenggth > table[0].length ){
	            var c = table[0].length-1;
                for(var r=0; r<table.length; r++){
                    if( _g.equal(table[r][0], value) ){
                        return ( resTable == undefined ) ? table[r][c] : resTable[r][0];
                    }
                    if( _g.diff(table[r][0], value) > 0 )return prev;
                    prev = ( resTable == undefined ) ? table[r][c] : resTable[r][0];
                }
                return prev;
	        }
	        else{
	            var r = table.length-1;
                for(var c=0; c<table[0].length; c++){
                    if( _g.equal(table[0][c], value) ){
                        return ( resTable == undefined ) ? table[r][c] : resTable[0][c];
                    }
                    if( _g.diff(table[0][c], value) > 0 )return prev;
                    prev = ( resTable == undefined ) ? table[r][c] : resTable[0][c];
                }
                return prev;
	        }
	    }


        if( typeof table != 'object' ){
            console.log("invalid paramter to match expected table ");
            return _g.error.ref;
        }
		_g.fixTables(resTable);
        var rs = table.row | 0;
        var re = table.rowEnd | 0;
        var cs = table.col | 0;
        var ce = table.colEnd | 0;
        var sheet = table.sheet | 0;
		
		var prev = _g.error.na;
		if( (re - rs) > (ce - cs) ){
			/* more rows than columns, search in first col and every row */
			for( var r=rs; r<=re; r++){
				var idx = sheet + "_" + r + "_" + cs;
				//if( data.hasOwnProperty(idx) ){
				if( data[idx]!==undefined ){
					var didx = sheet + "_" + r + "_" + ce;
					if( _g.equal(data[idx], value) ){
						return ( resTable == undefined ) ? data[didx] : data[sheet + "_" + r + "_" + resTable.colEnd];
					}
					//if( isNumber(value) && +data[idx] > +value )
					if( _g.diff(data[idx], value) > 0 )
						return prev;
					prev = ( resTable == undefined ) ? data[didx] : data[sheet + "_" + r + "_" + resTable.colEnd];
				}
			}
			return prev;
			
		}
		else{
			var pidx = sheet + "_" + rs + "_";
			for( var c=cs; c<=ce; c++){
				var idx = pidx + c;
				//if( data.hasOwnProperty(idx) ){
				if( data[idx]!==undefined ){
					var didx = sheet + "_" + re + "_" + c;
					if( _g.equal(data[idx], value) ){
						return ( resTable == undefined ) ? data[didx] : data[sheet + "_" + resTable.rowEnd + "_" + c];
					}
					if( _g.diff(data[idx], value) > 0 )
						return prev;
					prev = ( resTable == undefined ) ? data[didx] : data[sheet + "_" + resTable.rowEnd + "_" + c];
				}
			}
			return prev;
		}
	};

    _g.INDEX = function(table, row, col){
        /* table could be array refernce */
        
        if( table instanceof Array ){

            if( table.length<=1 ){
                if( row<1 || row>table[0].length+1)return _g.error.ref;
                return table[0][row-1]; //first param (row) should be treated as column index
            }
            else{
                if( row<1 || row>table[0].length+1)return _g.error.ref;
                if( col<1 || col>table[row].length+1)return _g.error.ref;
                return table[row-1][col-1];
            }
        }
		
        if( typeof table != 'object' ){
            console.log("invalid paramter to match expected table ");
            return _g.error.ref;
        }
        _g.fixTables(table);
        if( table.row == table.rowEnd ){
            if( row<1 || row>(table.colEnd-table.col+1))return _g.error.ref;
            var idx = table.sheet + "_" + table.row + "_" + (table.col + (+row) - 1);
			if( row==0 )return idx;
            return data[idx];
        }
        if( table.col == table.colEnd ){
            if( row<1 || row>(table.rowEnd-table.row+1))return _g.error.ref;
            var idx = table.sheet + "_" + (table.row+ +row -1) + "_" + table.col;
			if( col==0 )return idx;
            return data[idx];
        }
		
		if( col==0 ){
			var ret = [];
			for(var c=table.col; c<=table.colEnd; c++){
				var idx = table.sheet + "_" + (table.row) + "_" + c;
				ret.push([data[idx]]);
			}
			return ret;
		}
		if( row==0 ){
			var ret = [];
			for(var r=table.row; r<=table.rowEnd; r++){
				var idx = table.sheet + "_" + (r) + "_" + table.col;
				ret.push(data[idx]);
			}
			return ret;
		}
		
		if( row == 0 || col == 0 )console.log("unimplemented case (INDEX) returning array");

        if( row<1 || row>(table.rowEnd-table.row+1))return _g.error.ref;
        if( col<1 || col>(table.colEnd-table.col+1))return _g.error.ref;
        var idx = table.sheet + "_" + (+table.row + (+row) - 1) + "_" + (+table.col + (+col) - 1);
        return data[idx];
    };
	
	_g.AND = function(table){
		var ret = _g.error.value;
		for(var r=+table.row; r<=+table.rowEnd; r++){
			for(var c=+table.col; c<=+table.colEnd; c++){
				var idx = table.sheet + "_" + r + "_" + c;
				if( data[idx] !== undefined ){
					if( !_g.parseBool(data[idx]) )
						return false;
					else
						ret = true;
					//console.log(" => "+data[idx]);
				}
			}
		}
		//console.log(" => "+ret);
		return ret;
	};

    _g.ROUND = function(number, digits) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return _g.error.value;
        if( (digits=_g.parseNumber(digits)) == _g.error.value )digits = 0;
		
		
		//console.log("round("+digits+") "+number+" => "+Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits));
		//number = Math.round(number * Math.pow(10, (digits+1))) / Math.pow(10, (digits+1));
		
		var tmp = (""+number).split('.');
		if( tmp.length>1 ){
			var declen = tmp[1].length;
			//console.log(tmp);
			//console.log(tmp[1].length);
			
			//we should also check if last few digits are repeating
			if( declen>10 && tmp[1][declen-1]==tmp[1][declen-2] && tmp[1][declen-1]==tmp[1][declen-3] ){
				if( number>0 )
					number += 0.000000001;
				else if(number<0)
					number -= 0.000000001;
			}
		}
		
		//console.log("     => "+Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits));
        return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
    };
    _g.ROUNDUP = function(number, digits) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return _g.error.value;
        if( (digits=_g.parseNumber(digits)) == _g.error.value )digits = 0;
        return Math.ceil(number * Math.pow(10, digits)) / Math.pow(10, digits);
    };
    _g.ROUNDDOWN = function(number, digits) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return _g.error.value;
        if( (digits=_g.parseNumber(digits)) == _g.error.value )digits = 0;
        return Math.floor(number * Math.pow(10, digits)) / Math.pow(10, digits);
    };
	
	_g.IFERROR = function(value, value_if_error){
		//value_if_error = value_if_error || '';
		if( value_if_error === undefined )value_if_error = '';
		//if( !value && !value_if_error )return 0;
		if (Array.isArray(value)){
			var ret = [];
			for(var i=0; i<value.length; i++)
				ret.push( _g.IFERROR(value[i], value_if_error) );
			return ret;
		}
		if( _g.ISERROR(value) )return value_if_error;
		return value;
	};

    _g.checkerr = function(value){
		return 
		  ( value == _g.error.value ||
			value == _g.error.ref	||
			value == _g.error.na    ||
			value == _g.error.num   ||
			value == _g.error.error ||
			value == _g.error.name  
			);
    };


    _g.ISERROR = function(value){

		if( value == undefined ){
			return true;
		}
		if( typeof value == "number" && isNaN(value) ){
		    return true;
		}
		if( value == _g.error.value )return true;
		if( value == _g.error.ref   )return true;
		if( value == _g.error.na    )return true;
		if( value == _g.error.num   )return true;
		if( value == _g.error.error )return true;
		if( value == _g.error.name  )return true;

        //for( var e in _g.error )
        //    if( value == _g.error[e] )return true;
        return false;
    };
    _g.ISERR = function(value){
		if( value == undefined )return true;
        for( var e in _g.error )
            if( value == _g.error[e] )return true;
        return false;
    };
    _g.ISBLANK = function(value){
        if( value == undefined || value == null )return true;
        return false;
    };
    _g.ISNUMBER = function(value){
        return isNumber(value);
    };
	
	_g.ISNA = function(value){
		if( value == _g.error.na )return true;
		return false;
	}
	_g.ISREF = function(value){
		if( value == _g.error.ref )return true;
		return false;
	}
    _g.ISEVEN = function(number) {
        return (Math.floor(Math.abs(+number)) & 1) ? false : true;
    };
    _g.ISLOGICAL = function(value) {
        return value === true || value === false;
    };
    _g.ISODD = function(number) {
        return (Math.floor(Math.abs(+number)) & 1) ? true : false;
    };
    _g.ISTEXT = function(value) {
        return !isNumber(value);
    };
    _g.ISNONTEXT = function(value) {
        if( this.ISNUMBER(value) || value instanceof Date) return true;
        return false;
    };

    _g.N = function(value) {
        if (this.ISNUMBER(value)) {
            return value;
        }
        if (value instanceof Date) {
            return value.getTime();
        }
        if (value === true) {
            return 1;
        }
        if (value === false) {
            return 0;
        }
        if (this.ISERROR(value)) {
            return value;
        }
        return 0;
    };

    _g.NA = function() {
        return _g.error.na;
    };
    _g.TYPE = function(value) {
        if (this.ISNUMBER(value)) {
            return 1;
        }
        if (this.ISTEXT(value)) {
            return 2;
        }
        if (this.ISLOGICAL(value)) {
            return 4;
        }
        if (this.ISERROR(value)) {
            return 16;
        }
        if (Array.isArray(value)) {
            return 64;
        }
    };

    _g.serial = function(date) {
        var addOn = (date > -2203891200000)?2:1;
        return (date - d1900) / 86400000 + addOn;
    };

    _g.DATE = function(year, month, day){
        year = _g.parseNumber(year);
        month= _g.parseNumber(month);
        day  = _g.parseNumber(day);
        if( !_g.check(year, month, day))return _g.error.value;

        /* 1900 year system - not compatible with Mac */
        if( year<0 || year>=10000 )return _g.error.num;
        if( year>=0 && year <=1899 )year += 1900;
        /* else the year is used as such */

        /* javascript month is 0 - jan 1 - feb etc */
        var dt = new Date(year, month-1, day, 0, 0, 0, 0);
        return dt.getTime();
    }
    _g.DATEVALUE = function(date_text) {
        if (typeof date_text !== 'string') {
            return error.value;
        }
        var date = Date.parse(date_text);
        if( isNaN(date) )return _g.error.value;
        if (date <= -2203891200000) {
            return (date - d1900) / 86400000 + 1;
        }
        return (date - d1900) / 86400000 + 2;
    };
    _g.DAY = function(serial_number) {
        if( serial_number instanceof Date )
            return serial_number.getDate();
		if( serial_number===undefined )return _g.error.value;
        serial_number = _g.parseNumber(serial_number);
        if( serial_number == _g.error.value )return _g.error.value;
        if( serial_number > 2958446 ){
            var date = new Date(serial_number);
            return date.getDate();
        }
        else{
            var date = _g.parseDate(serial_number);
            if(date == _g.error.value )return _g.error.value;
            return date.getDate();
        }

    };
    _g.DAYS360 = function(start_date, end_date, method) {
        method      = _g.parseBool(method);
        start_date  = _g.parseDate(start_date);
        end_date    = _g.parseDate(end_date);
        if( !_g.check(method, start_date, end_date))return _g.error.value;
        var sm = start_date.getMonth();
        var em = end_date.getMonth();
        var sd, ed;
        if (method) {
            sd = start_date.getDate() === 31 ? 30 : start_date.getDate();
            ed = end_date.getDate() === 31 ? 30 : end_date.getDate();
        } else {
            var smd = new Date(start_date.getFullYear(), sm + 1, 0).getDate();
            var emd = new Date(end_date.getFullYear(), em + 1, 0).getDate();
            sd = start_date.getDate() === smd ? 30 : start_date.getDate();
            if (end_date.getDate() === emd) {
                if (sd < 30) {
                    em++;
                    ed = 1;
                } else {
                    ed = 30;
                }
            } else {
                ed = end_date.getDate();
            }
        }
        return 360 * (end_date.getFullYear() - start_date.getFullYear()) +
        30 * (em - sm) + (ed - sd);
    };

    _g.monthDays = function(){
        if( arguments[0] instanceof Date )
            return new Date(arguments[0].getFullYear(), arguments[0].getMonth(), 0).getDate();
        else if( arguments.length == 2){
            return new Date(arguments[0], arguments[1], 0).getDate();
        }
        return 0;
    }
    _g.EDATE = function(start_date, months) {
        start_date  = _g.parseDate(start_date);
        months      = _g.parseNumber(months);
        if( !_g.check(start_date, months))return _g.error.value;
        /* just adding months doesnot work for the edge case of last day of month */
        if( _g.monthDays(start_date) == start_date.getDate() ){
            var day = _g.monthDays(start_date.getFullYear(), start_date.getMonth() + months+1);
            start_date = new Date(start_date.getFullYear(), start_date.getMonth() + months, day);
        }
        else
            start_date.setMonth(start_date.getMonth() + months);
        //return _g.serial(start_date);
        return start_date.getTime();
    };

    _g.EOMONTH = function(start_date, months) {
        start_date = _g.parseDate(start_date);
        if( !_g.check(start_date))return _g.error.value;
        months = parseInt(months, 10);
        return new Date(start_date.getFullYear(), start_date.getMonth() + months + 1, 0).getTime();
    };
    _g.HOUR = function(serial_number) {
		if( serial_number===undefined )return _g.error.value;
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        return serial_number.getHours();
    };
    _g.MINUTE = function(serial_number) {
		if( serial_number===undefined )return _g.error.value;
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        return serial_number.getMinutes();
    };

    _g.MONTH = function(serial_number) {
		if( serial_number===undefined )return _g.error.value;
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        return serial_number.getMonth() + 1;
    };

    _g.NETWORKDAYS = function(start_date, end_date, holidays, weekend) {
        start_date  = _g.parseDate(start_date);
        end_date    = _g.parseDate(end_date);
        if( !_g.check(start_date, end_date))return _g.error.value;

        weekend = (weekend === undefined) ? WEEKEND_TYPES[1] : WEEKEND_TYPES[+weekend];
        if (!(weekend instanceof Array))return _g.error.value;

        if (holidays === undefined) {
            holidays = [];
        } else if (!(holidays instanceof Array)) {
            holidays = [holidays];
        }

        for (var i = 0; i < holidays.length; i++) {
            holidays[i] = _g.parseDate(holidays[i]);
            if( !_g.check(holidays[i]) )return _g.error.value;
        }

        var days = (end_date - start_date) / (1000 * 60 * 60 * 24) + 1;
        var total = days;
        var day = start_date;
        for (i = 0; i < days; i++) {
            var d = (new Date().getTimezoneOffset() > 0) ? day.getUTCDay() : day.getDay();
            var dec = false;
            if (d === weekend[0] || d === weekend[1]) {
                dec = true;
            }
            for (var j = 0; j < holidays.length; j++) {
                var holiday = holidays[j];
                if (holiday.getDate() === day.getDate() &&
                    holiday.getMonth() === day.getMonth() &&
                    holiday.getFullYear() === day.getFullYear()) {
                        dec = true;
                        break;
                }
            }
            if (dec)total--;
            day.setDate(day.getDate() + 1);
        }
        return total;
    };

    _g.SECOND = function(serial_number) {
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        return serial_number.getSeconds();
    };

    _g.TIME = function(hour, minute, second) {
        hour    = _g.parseNumber(hour);
        minute  = _g.parseNumber(minute);
        second  = _g.parseNumber(second);

        if( !_g.check(hour, minute, second))return _g.error.value;

        if (hour < 0 || minute < 0 || second < 0) {
            return _g.error.num;
        }
        return (3600 * hour + 60 * minute + second) / 86400;
    };

    _g.TIMEVALUE = function(time_text) {
        time_text = _g.parseDate(time_text);
        if( !_g.check(time_text))return _g.error.value;
        return (3600 * time_text.getHours() +
            60 * time_text.getMinutes() +
            time_text.getSeconds()) / 86400;
    };

    _g.WEEKDAY = function(serial_number, return_type) {
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        if (return_type === undefined) {
            return_type = 1;
        }
        return WEEK_TYPES[return_type][serial_number.getDay()];
    };

    _g.ISOWEEKNUM = function(date) {
        date = _g.parseDate(date);
        if( !_g.check(date))return _g.error.value;
        date.setHours(0, 0, 0);
        date.setDate(date.getDate() + 4 - (date.getDay() || 7));
        var yearStart = new Date(date.getFullYear(), 0, 1);
        return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
    };

    _g.WEEKNUM = function(serial_number, return_type) {
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        if (return_type === undefined) {
            return_type = 1;
        }
        if (return_type === 21) {
            return this.ISOWEEKNUM(serial_number);
        }
        var week_start = WEEK_STARTS[return_type];
        var jan = new Date(serial_number.getFullYear(), 0, 1);
        var inc = jan.getDay() < week_start ? 1 : 0;
        jan -= Math.abs(jan.getDay() - week_start) * 24 * 60 * 60 * 1000;
        return Math.floor(((serial_number - jan) / (1000 * 60 * 60 * 24)) / 7 + 1) + inc;
    };

    _g.WORKDAY = function(start_date, days, holidays, weekend) {
        start_date  = _g.parseDate(start_date);
        days        = _g.parseNumber(days);
        if( !_g.check(start_date, days))return _g.error.value;
        start_date.setHours(0);
        start_date.setMinutes(0);
        start_date.setSeconds(0);


        if (days < 0)return _g.error.num;
        if (weekend === undefined) {
            weekend = WEEKEND_TYPES[1];
        } else {
            weekend = WEEKEND_TYPES[weekend];
        }
        if (!(weekend instanceof Array)) {
            return _g.error.value;
        }
        if (holidays === undefined) {
            holidays = [];
        } else if (!(holidays instanceof Array)) {
            holidays = [holidays];
        }
        for (var i = 0; i < holidays.length; i++) {
            holidays[i] = _g.parseDate(holidays[i]);
            if( !_g.check(holidays[i]))return _g.error.value;
        }
        var d = 0;
        while (d < days) {
            start_date.setDate(start_date.getDate() + 1);
            var day = start_date.getDay();
            if (day === weekend[0] || day === weekend[1]) {
                continue;
            }
            for (var j = 0; j < holidays.length; j++) {
                var holiday = holidays[j];
                if (holiday.getDate() === start_date.getDate() &&
                    holiday.getMonth() === start_date.getMonth() &&
                    holiday.getFullYear() === start_date.getFullYear()) {
                        d--;
                        break;
                }
            }
            d++;
        }
        return new Date(start_date).getTime();
    };

    _g.YEAR = function(serial_number) {
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        return serial_number.getFullYear();
    };

    _g.DATEDIF = function(ldt, rdt, type){
        var d2time = rdt;
        var d1time = ldt;

        /* op1 */
        if( ldt instanceof Date ){
            d1time = ldt;
        }
        else if( !isNumber(ldt) ){
            dsrc = (typeof ldt === 'string') ?  ldt.trim() : ldt;
            d1time = new Date(dsrc);
        }

        /* op2 */
        if( rdt instanceof Date ){
            d2time = rdt;
        }
        else if( !isNumber(rdt) ){
            ddst = (typeof rdt === 'string') ?  rdt.trim() : rdt;
            d2time = new Date(ddst);
        }

        if( type === undefined )type = '';
        type = type.toLowerCase();

        /* The difference between the months (days and years are ignored). */
        if( type == 'YM'){
            d1time.setYear(2001);
            d2time.setYear(2001);
            d1time.setDate(1);
            d2time.setDate(1);
            type = 'm';
        }

        /*The difference between the days (months and years are ignored). */
        if( type == 'MD'){
            d1time.setYear(2001);
            d2time.setYear(2001);
            d1time.setMonth(1);
            d2time.setMonth(1);
            type = 'd';
        }

        /* The difference between the days of start_date and end_date. The years of the dates are ignored. */
        if( type == 'MD'){
            d1time.setYear(2001);
            d2time.setYear(2001);
            type = 'd';
        }
		
		var yy = (d2time.getYear() - d1time.getYear())|0;
		var mm = (d2time.getMonth() - d1time.getMonth())|0;
		
		if( mm==0 && d2time.getDate() < d1time.getDate() ){
			// this month is not complete, revert to one less.
			//
			mm --;
		}

		// add the completed year in terms of month to the mm
		//
		mm += yy*12;
		
		if( type=='Y' || type=='y' )return (mm/12)|0;
		if( type=='M' || type=='m' )return mm;
		
        /* difference in milli seconds */
        var ms = d2time.getTime() - d1time.getTime();

		/* convert the difference to the expected format */
        //if( type=='Y' || type=='y' )return Math.floor(ms / (1000*60*60*24*365.25));
		//if( type=='M' || type=='m' )return Math.floor( (ms / ((1000*60*60*24) *  30.4375)));
		
		// works only from jan-01-1970
		//
		if( type=='D' || type=='d' )return Math.floor(ms / (1000*60*60*24));
        return ms;
    };



    _g.ACCRINT = function(issue, first, settlement, rate, par, frequency, basis) {
         // Return error if either date is invalid
         rate       = _g.parseNumber(rate);
         par        = _g.parseNumber(par);
         frequency  = _g.parseNumber(frequency);
         basis      = _g.parseNumber(basis);

         issue      = _g.ensureDate(issue);
         first      = _g.ensureDate(first);
         settlement = _g.ensureDate(settlement);
         if (!_g.validDate(issue) || !_g.validDate(first) || !_g.validDate(settlement))return '#VALUE!';

         // Return error if either rate or par are lower than or equal to zero
         if (rate <= 0 || par <= 0)return _g.error.num;

         // Return error if frequency is neither 1, 2, or 4
         if ([1, 2, 4].indexOf(frequency) === -1)return _g.error.num;

         // Return error if basis is neither 0, 1, 2, 3, or 4
         if ([0, 1, 2, 3, 4].indexOf(basis) === -1)return _g.error.num;

         // Return error if settlement is before or equal to issue
         if (settlement <= issue)return _g.error.num;

         // Set default values
         par   = par   || 0;
         basis = basis || 0;


         // Compute accrued interest
         return par * rate * _g.YEARFRAC(issue, settlement, basis);
    };

    _g.isLeapYear = function(year) {
        return new Date(year, 1, 29).getMonth() === 1;
    };

    _g.daysBetween = function(start_date, end_date) {
        return Math.ceil((end_date - start_date) / 1000 / 60 / 60 / 24);
    }

    _g.YEARFRAC = function(start_date, end_date, basis) {
        start_date  = _g.parseDate(start_date);
        end_date    = _g.parseDate(end_date);
        if( !_g.check(start_date, end_date))return _g.error.value;

        if( start_date > end_date ){
            var tmp = end_date;
            end_date = start_date;
            start_date = tmp;
        }


        basis = basis || 0;
        var sd = start_date.getDate();
        var sm = start_date.getMonth() + 1;
        var sy = start_date.getFullYear();
        var ed = end_date.getDate();
        var em = end_date.getMonth() + 1;
        var ey = end_date.getFullYear();

        switch (basis) {
        case 0:
            // US (NASD) 30/360
            if (sd === 31 && ed === 31) {
                sd = 30;
                ed = 30;
            } else if (sd === 31) {
                sd = 30;
            } else if (sd === 30 && ed === 31) {
                ed = 30;
            }
            return ((ed + em * 30 + ey * 360) - (sd + sm * 30 + sy * 360)) / 360;
        case 1:
            // Actual/actual
            var feb29Between = function(date1, date2) {
                var year1 = date1.getFullYear();
                var mar1year1 = new Date(year1, 2, 1);
                if (_g.isLeapYear(year1) && date1 < mar1year1 && date2 >= mar1year1) {
                    return true;
                }
                var year2 = date2.getFullYear();
                var mar1year2 = new Date(year2, 2, 1);
                return (_g.isLeapYear(year2) && date2 >= mar1year2 && date1 < mar1year2);
            };
            var ylength = 365;
            if (sy === ey || ((sy + 1) === ey) && ((sm > em) || ((sm === em) && (sd >= ed)))) {
                if ((sy === ey && _g.isLeapYear(sy)) ||
                    feb29Between(start_date, end_date) ||
                    (em === 1 && ed === 29)) {
                        ylength = 366;
                }
                return _g.daysBetween(start_date, end_date) / ylength;
            }
            var years = (ey - sy) + 1;
            var days = (new Date(ey + 1, 0, 1) - new Date(sy, 0, 1)) / 1000 / 60 / 60 / 24;
            var average = days / years;
            return _g.daysBetween(start_date, end_date) / average;
        case 2:
            // Actual/360
            return _g.daysBetween(start_date, end_date) / 360;
        case 3:
            // Actual/365
            return _g.daysBetween(start_date, end_date) / 365;
        case 4:
            // European 30/360
            return ((ed + em * 30 + ey * 360) - (sd + sm * 30 + sy * 360)) / 360;
        }
    };

    _g.IRR = function(values, guess) {
        guess = guess || 0;

        //values = utils.parseNumberArray(utils.flatten(values));
        values = _g.tableToArray(values, true);
        if( typeof values != 'object' ){
            console.log("irr expected first paramter to be array");
            return _g.error.ref;
        }

        guess = _g.parseNumber(guess);
        if( guess==_g.error.value ) {
            return _g.error.value;
        }

        // Calculates the resulting amount
        var irrResult = function(values, dates, rate) {
            var r = rate + 1;
            var result = values[0];
            for (var i = 1; i < values.length; i++) {
                result += values[i] / Math.pow(r, (dates[i] - dates[0]) / 365);
            }
            return result;
        };

      // Calculates the first derivation
        var irrResultDeriv = function(values, dates, rate) {
            var r = rate + 1;
            var result = 0;
            for (var i = 1; i < values.length; i++) {
                var frac = (dates[i] - dates[0]) / 365;
                result -= frac * values[i] / Math.pow(r, frac + 1);
            }
            return result;
        };

      // Initialize dates and check that values contains at least one positive value and one negative value
        var dates = [];
        var positive = false;
        var negative = false;
        for (var i = 0; i < values.length; i++) {
            dates[i] = (i === 0) ? 0 : dates[i - 1] + 365;
            if (values[i] > 0) {
                positive = true;
            }
            if (values[i] < 0) {
                negative = true;
            }
        }

      // Return error if values does not contain at least one positive value and one negative value
        if (!positive || !negative) {
            return _g.error.num;
        }

        // Initialize guess and resultRate
        guess = (guess === undefined) ? 0.1 : guess;
        var resultRate = guess;

        // Set maximum epsilon for end of iteration
        var epsMax = 1e-10;

        // Implement Newton's method
        var newRate, epsRate, resultValue;
        var contLoop = true;
        do {
            resultValue = irrResult(values, dates, resultRate);
            newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
            epsRate = Math.abs(newRate - resultRate);
            resultRate = newRate;
            contLoop = (epsRate > epsMax) && (Math.abs(resultValue) > epsMax);
        } while (contLoop);

        // Return internal rate of return
        return resultRate;
    };


    _g.FV = function(rate, periods, payment, value, type) {

        value = value || 0;
        type = type || 0;

        rate    = _g.parseNumber(rate);
        periods = _g.parseNumber(periods);
        payment = _g.parseNumber(payment);
        value   = _g.parseNumber(value);
        type    = _g.parseNumber(type);
        if( rate==_g.error.value || periods==_g.error.value || payment == _g.error.value || value == _g.error.value || type == _g.error.value) {
            return _g.error.value;
        }

        // Return future value
        var result;
        if (rate === 0) {
            result = value + payment * periods;
        } else {
            var term = Math.pow(1 + rate, periods);
            if (type === 1) {
                result = value * term + payment * (1 + rate) * (term - 1) / rate;
            } else {
                result = value * term + payment * (term - 1) / rate;
            }
        }
        return -result;
    };

    _g.FVSCHEDULE = function(principal, schedule) {
        principal = _g.parseNumber(principal);
        schedule = _g.tableToArray(schedule,true);
        if( principal==_g.error.value) {
            return _g.error.value;
        }
        var n = schedule.length;
        var future = principal;
        for (var i = 0; i < n; i++) {
            future *= 1 + schedule[i];
        }
        return future;
    };

    _g.CUMIPMT = function(rate, periods, value, start, end, type) {
        rate    = _g.parseNumber(rate);
        periods = _g.parseNumber(periods);
        value   = _g.parseNumber(value);
        if( rate==_g.error.value || periods==_g.error.value || value == _g.error.value) {
            return _g.error.value
        }

        // Return error if either rate, periods, or value are lower than or equal to zero
        if (rate <= 0 || periods <= 0 || value <= 0) {
            return error.num;
        }

        // Return error if start < 1, end < 1, or start > end
        if (start < 1 || end < 1 || start > end) {
            return error.num;
        }

        // Return error if type is neither 0 nor 1
        if (type !== 0 && type !== 1) {
            return error.num;
        }

        // Compute cumulative interest
        var payment = _g.PMT(rate, periods, value, 0, type);
        var interest = 0;

        if (start === 1) {
            if (type === 0) {
                interest = -value;
                start++;
            }
        }

        for (var i = start; i <= end; i++) {
            if (type === 1) {
                interest += _g.FV(rate, i - 2, payment, value, 1) - payment;
            } else {
                interest += _g.FV(rate, i - 1, payment, value, 0);
            }
        }
        interest *= rate;

        // Return cumulative interest
        return interest;
    };


    _g.PMT = function(rate, periods, present, future, type) {
        future = future || 0;
        type = type || 0;
        rate    = _g.parseNumber(rate);
        periods = _g.parseNumber(periods);
        present = _g.parseNumber(present);
        future  = _g.parseNumber(future);
        type    = _g.parseNumber(type);

        if( rate==_g.error.value || periods==_g.error.value || present==_g.error.value || future==_g.error.value || type==_g.error.value ) {
            return _g.error.value;
        }

        var result;
        if (rate === 0) {
            result = (present + future) / periods;
        } else {
            var term = Math.pow(1 + rate, periods);
            if (type === 1) {
                result = (future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate);
            } else {
                result = future * rate / (term - 1) + present * rate / (1 - 1 / term);
            }
        }
        return -result;
    };

    _g.IPMT = function(rate, period, periods, present, future, type) {
        future = future || 0;
        type = type || 0;

        rate    = _g.parseNumber(rate);
        period  = _g.parseNumber(period);
        periods = _g.parseNumber(periods);
        present = _g.parseNumber(present);
        future  = _g.parseNumber(future);
        type    = _g.parseNumber(type);
        if( rate==_g.error.value || periods==_g.error.value || present==_g.error.value || future==_g.error.value || type==_g.error.value ) {
            return _g.error.value;
        }

        // Compute payment
        var payment = _g.PMT(rate, periods, present, future, type);

        // Compute interest
        var interest;
        if (period === 1) {
            if (type === 1) {
                interest = 0;
            } else {
                interest = -present;
            }
        } else {
            if (type === 1) {
                interest = _g.FV(rate, period - 2, payment, present, 1) - payment;
            } else {
                interest = _g.FV(rate, period - 1, payment, present, 0);
            }
        }
        return interest * rate;
    };

    _g.PPMT = function(rate, period, periods, present, future, type) {
        future = future || 0;
        type = type || 0;

        rate    = _g.parseNumber(rate);
        periods = _g.parseNumber(periods);
        present = _g.parseNumber(present);
        future  = _g.parseNumber(future);
        type    = _g.parseNumber(type);
        if( rate==_g.error.value || periods==_g.error.value || present==_g.error.value || future==_g.error.value || type==_g.error.value ) {
            return _g.error.value;
        }

        return _g.PMT(rate, periods, present, future, type) - _g.IPMT(rate, period, periods, present, future, type);
    };

    _g.RATE = function(periods, payment, present, future, type, guess) {
        guess = (guess === undefined) ? 0.01 : guess;
        future = (future === undefined) ? 0 : future;
        type = (type === undefined) ? 0 : type;

        periods = _g.parseNumber(periods);
        payment = _g.parseNumber(payment);
        present = _g.parseNumber(present);
        future  = _g.parseNumber(future);
        type    = _g.parseNumber(type);
        guess   = _g.parseNumber(guess);

        if( payment==_g.error.value || periods==_g.error.value || present==_g.error.value || future==_g.error.value || type==_g.error.value || guess ==_g.error.value ) {
            return _g.error.value;
        }

        var epsMax = 1e-10;     // Set maximum epsilon for end of iteration
        var iterMax = 50;       // Set maximum number of iterations

        var y, y0, y1, x0, x1 = 0,  // Implement Newton's method
        f = 0,
        i = 0;
        var rate = guess;
        if (Math.abs(rate) < epsMax) {
            y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
        } else {
            f = Math.exp(periods * Math.log(1 + rate));
            y = present * f + payment * (1 / rate + type) * (f - 1) + future;
        }
        y0 = present + payment * periods + future;
        y1 = present * f + payment * (1 / rate + type) * (f - 1) + future;
        i = x0 = 0;
        x1 = rate;
        while ((Math.abs(y0 - y1) > epsMax) && (i < iterMax)) {
            rate = (y1 * x0 - y0 * x1) / (y1 - y0);
            x0 = x1;
            x1 = rate;
            if (Math.abs(rate) < epsMax) {
                y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
            } else {
                f = Math.exp(periods * Math.log(1 + rate));
                y = present * f + payment * (1 / rate + type) * (f - 1) + future;
            }
            y0 = y1;
            y1 = y;
            ++i;
        }
        return rate;
    };


    _g.ISPMT = function(rate, period, periods, value) {
        rate    = -g.parseNumber(rate);
        period  = _g.parseNumber(period);
        periods = _g.parseNumber(periods);
        value   = _g.parseNumber(value);
        if( rate==_g.error.value || period==_g.error.value || periods==_g.error.value || value==_g.error.value ) {
            return _g.error.value;
        }

        return value * rate * (period / periods - 1);
    };

    _g.NPV = function() {
        args = _g.argsToArray(arguments, true);


        var rate = args[0];
        var value = 0;
        // Loop on all values
        for (var j = 1; j < args.length; j++) {
            value += args[j] / Math.pow(1 + rate, j);
        }
        return value;
    };

    _g.MIRR = function(values, finance_rate, reinvest_rate) {
        values = _g.tableToArray(values, true);
        finance_rate    = _g.parseNumber(finance_rate);
        reinvest_rate   = _g.parseNumber(reinvest_rate);
        if( finance_rate==_g.error.value || reinvest_rate==_g.error.value) {
            return _g.error.value;
        }

        var n = values.length;
        // Lookup payments (negative values) and incomes (positive values)
        var payments = [];
        var incomes = [];
        for (var i = 0; i < n; i++) {
            if (values[i] < 0) {
                payments.push(values[i]);
            } else {
                incomes.push(values[i]);
            }
        }
        var num = -_g.NPV(reinvest_rate, incomes) * Math.pow(1 + reinvest_rate, n - 1);
        var den = _g.NPV(finance_rate, payments) * (1 + finance_rate);
        return Math.pow(num / den, 1 / (n - 1)) - 1;
    };


    _g.RRI = function(periods, present, future) {
        periods = _g.parseNumber(periods);
        present = _g.parseNumber(present);
        future  = _g.parseNumber(future);
        if( periods==_g.error.value || present==_g.error.value || future ==_g.error.value) {
            return _g.error.value;
        }

        // Return error if periods or present is equal to 0 (zero)
        if (periods === 0 || present === 0) {
            return _g.error.num;
        }
        // Return equivalent interest rate
        return Math.pow(future / present, 1 / periods) - 1;
    };

    _g.SLN = function(cost, salvage, life) {
        cost    = _g.parseNumber(cost);
        salvage = _g.parseNumber(salvage);
        life    = _g.parseNumber(life);
        if( cost==_g.error.value || salvage==_g.error.value || life ==_g.error.value) {
            return _g.error.value;
        }
        if (life === 0) {
            return _g.error.num;
        }
        return (cost - salvage) / life;
    };

    _g.SYD = function(cost, salvage, life, period) {
        cost    = _g.parseNumber(cost);
        salvage = _g.parseNumber(salvage);
        life    = _g.parseNumber(life);
        period  = _g.parseNumber(period);

        if( !_g.check(cost, salvage, life, period))return _g.error.value;

        if (life === 0) {
            return _g.error.num;
        }
        if (period < 1 || period > life) {
            return _g.error.num;
        }
        period = parseInt(period, 10);
        return ((cost - salvage) * (life - period + 1) * 2) / (life * (life + 1));
    };

    _g.TBILLEQ = function(settlement, maturity, discount) {
        settlement = _g.parseDate(settlement);
        maturity = _g.parseDate(maturity);
        discount = _g.parseNumber(discount);

        if( !_g.check(settlement, maturity, discount))return _g.error.value;
        if (discount <= 0 || settlement > maturity ) {
            return _g.error.num;
        }
        if (maturity - settlement > 365 * 24 * 60 * 60 * 1000) {
            return _g.error.num;
        }
        return (365 * discount) / (360 - discount * dateTime.DAYS360(settlement, maturity, false));
    };

    _g.EFFECT = function(rate, periods) {
        rate    = _g.parseNumber(rate);
        periods = _g.parseNumber(periods);
        if( !_g.check(rate, period))return _g.error.value;

        if (rate <= 0 || periods < 1) {
            return _g.error.num;
        }
        periods = parseInt(periods, 10);
        return Math.pow(1 + rate / periods, periods) - 1;
    };
	

    _g.CHOOSE = function(){
        if (arguments.length < 2)return _g.error.na;
        var index_num = _g.parseNumber(arguments[0]);

        if( !_g.check(index_num) ||  index_num < 1 || index_num >= arguments.length )
            return _g.error.value;

        return arguments[index_num];
    }

    _g.COLUMNS = function(arr){
        if( arr == undefined )return _g.error.value;
        if( arr instanceof Array ){
            if( arr[0] instanceof Array )return arr[0].length;
            return arr.length;
        }else if( typeof arr == 'object'){
            return arr.colEnd - arr.col + 1;
        }
        return 1;
    }

    _g.ROWS = function(arr){
        if( arr == undefined )return _g.error.value;
        if( arr instanceof Array ){
            return arr.length;
        }else if( typeof arr == 'object'){
            return arr.rowEnd - arr.row + 1;
        }
        return 1;
    }

    _g.TRANSPOSE = function(arr){
        if( arr instanceof Array ){
            if( !(arr[0] instanceof Array ) )arr = [arr];
            var res = [];
            var cols = arr[0].length;
            var rows = arr.length;
            for( c=0; c<cols; c++) {
                var carr = new Array(rows);
                for( r=0; r<rows; r++ )
                    carr[r] = arr[r][c];
                res.push(carr);
            }
            return res;
        }else if( typeof arr == 'object'){
            var nptg = {};
            nptg.shhet  = arr.aheet;
            nptg.row    = arr.col;
            nptg.rowEnd = arr.colEnd;
            nptg.col    = arr.row;
            nptg.colEnd = arr.rowEnd;
            return nptg;
        }
        return _g.error.value;
    };

    _g.SWITCH = function(){
        var value = arguments[0];
        for( var i=1; i<arguments.length-1; i+=2 ){
            if( value == arguments[i] )return arguments[i+1];
        }
        if( i < arguments.length )return arguments[i];
    };
	
	
	_g.ASC = function(val){
		if( val==undefined || val=='' )return 0;
		return val.charCodeAt(0);
	};
	
	_g.BAHTTEX = function(val){
		val = _g.parseNumber(val);
		if( !_g.check(val) )return _g.error.value;
		if( val == 0 )return "zero";
		//var numDigits = Math.floor(Math.log(number) / Math.LN10 + 1);
		
		return "bahttext not implemented";
	};
	
	_g.CHAR = function(number){
		number = _g.parseNumber(number);
		if( !_g.check(number) )return _g.error.value;
		return String.fromCharCode(number)
	}
	
	_g.CLEAN = function(text) {
		text = text || '';
		var re = /[\0-\x1F]/g;
		return text.replace(re, "");
	};
	
	_g.CODE = function(text) {
		if( typeof text == 'number')text = ''+text;
		text = text || '';
		return text.charCodeAt(0);
	};
	
	_g.CONCATENATE = function(){
        var value = '';
        for( var i=0; i<arguments.length; i++ ){
            if( arguments[i] !== undefined )
				value += _g.numToString(arguments[i]);
        }
        return value;
	};

	_g.DOLLAR = function(number, decimals) {
		decimals	= (decimals === undefined) ? 2 : decimals;
		number		= _g.parseNumber(number);
		decimals	= _g.parseNumber(decimals);
		if( !_g.check(number, decimals) ) {
			return _g.error.value;
		}
		var format = '';
		if (decimals <= 0) {
			number = Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
			format = '($0,0)';
		} else if (decimals > 0) {
			format = '($0,0.' + new Array(decimals + 1).join('0') + ')';
		}
		return SSF.format(format, number);
		//return numeral(number).format(format);
	};
	
	_g.EXACT = function(text1, text2) {
		if( typeof text1 == 'string' && typeof text2 == 'string' )
			return text1 === text2;
		return text1 == text2;
	};

	_g.FIND = function(find_text, within_text, position) {
		position = position || 1;
		if( find_text.length==0 )return position;
		if( !within_text )return _g.error.value;
		var idx = within_text.indexOf(find_text, position - 1);
		if( idx<0 )return _g.error.value;
		return idx + 1;
	};

	_g.FIXED = function(number, decimals, no_commas) {
		decimals = (decimals === undefined) ? 2 : decimals;
		no_commas = (no_commas === undefined) ? false : no_commas;

		number		= _g.parseNumber(number);
		decimals	= _g.parseNumber(decimals);
		if( !_g.check(number, decimals)) {
			return error.value;
		}

		var format = no_commas ? '0' : '0,0';
		if (decimals <= 0) {
			number = Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
		} else if (decimals > 0) {
			format += '.' + new Array(decimals + 1).join('0');
		}
		return SSF.format(format,number);
		//return numeral(number).format(format);
	};

	_g.LEFT = function(text, number) {
		if( _g.checkerr(text) )return text;
		if( _g.checkerr(number) )return number;
		
		text = text || '';
		number = number || 1;
		number = _g.parseNumber(number);
		if( !_g.check(number) || number <0 )return _g.error.value;
		if( number >= text.length )return text;
		return text.substring(0, number);
	};

	_g.LEN = function(text) {
		if (arguments.length === 0) {
			return 0;
		}
		if( text == undefined )
			return 0;
		if (typeof text === 'string') {
			return text ? text.length : 0;
		}
		if (text.length) {
			return text.length;
		}
		return _g.error.value;
	};

	_g.LOWER = function(text) {
		if( text == undefined )return '';
		if (typeof text !== 'string') {
			return _g.error.value;
		}
		return text ? text.toLowerCase() : text;
	};

	_g.MID = function(text, start, number) {
		if( _g.checkerr(text) )return text;
		if( _g.checkerr(start) )return start;
		if( _g.checkerr(number) )return number;

		text = text || '';
		start	= _g.parseNumber(start);
		number	= _g.parseNumber(number);
		
		if( start > text.length )return '';
		
		if( !_g.check(number, start) || start<=0 || number<0 ) {
			return _g.error.value;
		}
		return text.substring(start - 1, start - 1+number);
	};
	
	_g.PROPER = function(text) {
		if (text === undefined || text.length === 0) {
			return _g.error.value;
		}
		if (text === true) {
			text = 'TRUE';
		}
		if (text === false) {
			text = 'FALSE';
		}
		if (isNaN(text) && typeof text === 'number') {
			return _g.error.value;
		}
		if (typeof text === 'number') {
			text = '' + text;
		}

		return text.replace(/\w\S*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};

	_g.REPLACE = function(text, position, length, new_text) {
		position	= _g.parseNumber(position);
		length		= _g.parseNumber(length);
		if( !_g.check(position, length) ||
			typeof text !== 'string' ||
			typeof new_text !== 'string') {
			return _g.error.value;
		}
		return text.substr(0, position - 1) + new_text + text.substr(position - 1 + length);
	};

	_g.REPT = function(text, number) {
		number = _g.parseNumber(number);
		if( !_g.check(number) ){
			return _g.error.value;
		}
		return new Array(number + 1).join(text);
	};

	_g.RIGHT = function(text, number) {
		if( _g.checkerr(text) )return text;
		if( _g.checkerr(number) )return number;

		if( number == 0 )return '';
		
		number = number || 1;
		number = _g.parseNumber(number);
		
		if( !_g.check(number) || number<0 ){
			return _g.error.value;
		}
		
		if( number >= text.length )return text;
		
		return text ? text.substring(text.length - number) : null;
	};

	_g.SEARCH = function(find_text, within_text, position) {
		if (typeof find_text !== 'string' || typeof within_text !== 'string') {
			return _g.error.value;
		}
		position = (position === undefined) ? 0 : position;
		return within_text.toLowerCase().indexOf(find_text.toLowerCase(), position - 1) + 1;
	};

	_g.SPLIT = function (text, separator) {
		return text.split(separator);
	};

	_g.SUBSTITUTE = function(text, old_text, new_text, occurrence) {
		if (!text || !old_text || !new_text) {
			return text;
		} else if (occurrence === undefined) {
			return text.replace(new RegExp(old_text, 'g'), new_text);
		} else {
			var index = 0;
			var i = 0;
			while (text.indexOf(old_text, index) > 0) {
				index = text.indexOf(old_text, index + 1);
				i++;
				if (i === occurrence) {
					return text.substring(0, index) + new_text + text.substring(index + old_text.length);
				}
			}
		}
		return text;
	};
	_g.T = function(value) {
		return (typeof value === "string") ? value : '';
	};

	_g.TEXT = function(value, format) {
		if( value instanceof Date )
			return _g.formatDate(value, format);
		value = _g.parseNumber(value);
		if(!_g.check(value)) {
			return _g.error.na;
		}
		return SSF.format(format, +value);
		//return numeral(value).format(format);
	};

	_g.TRIM = function(text) {
		if (typeof text !== 'string') {
			return _g.error.value;
		}
		return text.replace(/ +/g, ' ').trim();
	};

	_g.UPPER = function(text) {
		if (typeof text !== 'string') {
			return _g.error.value;
		}
		return text.toUpperCase();
	};

	_g.VALUE = function(text) {
		if (typeof text !== 'string') {
			return text; //_g.error.value;
		}
		if( text.indexOf('%')==text.length-1 ){
			text = text.substring(0, text.indexOf('%'));
			return _g.parseNumber(text)/100.0;
		}
			
		return _g.parseNumber(text);
		//return numeral().unformat(text);
	};
	
	_g.ROW = function(ref, arrayFormula){

		if( !ref ){
		    console.log('ERROR: ROW() not implemented');
		    return 0;
		}

		if( typeof ref === 'object' ){
		    if( ref.row == ref.rowEnd || !arrayFormula )
		        return +ref.row+1;
		    var ret = [];
		    for(var i=ref.row; i<=ref.rowEnd; i++)ret.push(i+1);
		    return ret;
		}
		if( typeof ref === 'string' ){
            if( ref.indexOf('_')>0 ){
                var parts = ref.split('_');
				if( parts.length == 3 )
					return +parts[1]+1; //our row is zero based
            }
			
			if( ref.indexOf('!')>0 ){
				ref = ref.substring(ref.indexOf('!')+1);
			}
			
			var c = 0, r = 0;
			var a = 'a'.charCodeAt(0);
			var A = 'A'.charCodeAt(0);

			for (var i = 0, len = ref.length; i < len; i++) {
				var code = ref.charCodeAt(i);

				if( ref[i]=='$' )
					continue;
				else if( ref[i]>='a' && ref[i]<='z' )
					c = c * 26 + (code-'a'.charCodeAt(0));
				else if( ref[i]>='A' && ref[i]<='Z' )
					c = c * 26 + (code-'A'.charCodeAt(0));
				else{
					r = _g.parseNumber(ref.substring(i));
					return r;
				}
			}
		}

		return 0;
	};

	_g.excelDate = function(inDate){
		var ret = 25569.0 + ((inDate.getTime() - (inDate.getTimezoneOffset() * 60 * 1000)) / (1000 * 60 * 60 * 24));
		return +ret.toString().substr(0,20);
	};
	
	_g.formatDate = function(dt, format){
		if( !(dt instanceof Date) ){
			dt = _g.parseDate(dt);
		}
		return SSF.format(format, _g.excelDate(dt), null, true);
	};
	
	_g.INDIRECT = function(s, ref, type){
		//console.log("indrect: "+s+" "+ref+" "+type);

		if( ref.indexOf('!') > 0 ){
			var names = ref.split('!'), name='';
			if( ref.charAt(0) == "'" )
				name = names[0].substring(1, names[0].length-1).toLowerCase();
			else
				name = names[0].toLowerCase();
			
			for(var i=0; i<sheets.length; i++ ){
				if( sheets[i].toLowerCase() == name){
					s = i;
					break;
				}
			}
			ref = names[1];
		}
		
		//check if we have a name
		
		if( named && named.hasOwnProperty(ref) ){
			var cref = named[ref];
			
			//if its already a aptg, just re	turn that
			//
			if( cref instanceof Object ){
				return cref;
			}
			
			if( (typeof cref == 'string') && cref.indexOf('_')>0 ){
				if(xl2g){
					if( _g.states[cref] < this.evalCount )//-rr jul-27-2016
						xl2g.evaluateCell(cref);
				}
				return data[cref];
			}
			
			if( _g.parseNumber(cref)>=0 ){
				cref = _g.parseNumber(cref)|0;
				if( cref>=0 && cref<aptg.length ){
					if(xl2g)xl2g.evaluateRange(aptg[cref]);
					return aptg[cref];
				}
			}
			return cref;
		}
		/*
		for(var i=0; i<aptg.length; i++){
			if( aptg[i].name == ref ){
				console.log("indirect: name found "+ref);
				return aptg[i];
			}
		}*/
		
		
		if( type==undefined || type ){
			var c = 0, r = 0, c1=-1, r1=-1;
			var a = 'a'.charCodeAt(0);
			var A = 'A'.charCodeAt(0);
			
			for (var i = 0, len = ref.length; i < len; i++) {
				var code = ref.charCodeAt(i);
				
				if( ref[i]=='$' )
					continue;
				else if( ref[i]==':' ){
					c1 = c;r1 = r-1;
					c = 0;r = 0;
				}
				else if( ref[i]>='a' && ref[i]<='z' )
					c = c * 26 + (code-'a'.charCodeAt(0));
				else if( ref[i]>='A' && ref[i]<='Z' )
					c = c * 26 + (code-'A'.charCodeAt(0));
				else if( ref[i]>='0' && ref[i]<='9' ){
					r = r * 10 + (code-'0'.charCodeAt(0));
				}
			}
			r = r - 1;
			
			if( c1==-1 && r1 == -1 ){
				//console.log("indirect cell "+c+":"+r);
				var cref = s+'_'+r+'_'+c;
				if(xl2g){
					if( _g.states[cref] < this.evalCount )//-rr jul-27-2016
						xl2g.evaluateCell(cref);
				}
				return data[cref];
			}
			//console.log("indirect range "+c1+":"+r1);
			if(xl2g)xl2g.evaluateRange(+s, +r1, +c1, +r, +c);
			return {sheet: s, row: r1, col: c1, rowEnd: r, colEnd: c};
		}
		else{
			var parts = ref.split('C');
			var r = 0, c = 0;
			if( parts.length<=1 ){
				console.log('Invalid indirect reference '+ref);
			}
			else{
				r = _g.parseNumber(parts[0].substring(1))-1;
				c = _g.parseNumber(parts[1])-1;
			}
			var cref = s+'_'+r+'_'+c;
			if(xl2g){
				if( _g.states[cref] < this.evalCount )//-rr jul-27-2016
					xl2g.evaluateCell(cref);
			}
			return data[cref];
		}
	};
	
	
	_g.OFFSET = function(ref, rows, cols, height, width){
		rows	= _g.parseNumber(rows);
		cols	= _g.parseNumber(cols);
		
		if( !_g.check(rows, cols) )return _g.error.value;
		
		if( typeof ref == 'object' ){
			if( height == undefined || height<=0 )height=ref.rowEnd - ref.row;
			if( width == undefined || width <=0 )width = ref.colEnd - ref.col;
			
			if( height>1 || width>1 )
			{
				var area = {sheet: ref.sheet, row: ref.row+rows, col: ref.col+cols, rowEnd: ref.row+rows+height, colEnd: ref.col+cols+width};
				return area;
			}
			var idx = ref.sheet + '_' + (+ref.row + +rows) + '_' + (+ref.col + +cols);
			return data[idx];
		}
		else{
			if( height == undefined || height<=0 )height=1;
			if( width == undefined || width <=0 )width =1;

			
			var cell = ref.split('_');
			if( cell.length<3 ){
				console.log('invalid reference '+ref);
				return _g.error.value;
			}
			var row = ((cell[1]|0)+rows);
			var col = ((cell[2]|0)+cols);
			if( height>1 || width>1 )
				return {sheet: cell[0], row: row, col: col, rowEnd: row+height-1, colEnd: col+width-1};
			
			var idx = cell[0] + '_' + row + '_' + col;
            if(xl2g){
				if( _g.states[idx] < this.evalCount )
					xl2g.evaluateCell(idx);
			}
			return data[idx];
		}
		
	};
	
	_g.numToCol = function(num){
		var col = '';
		
		num = num-1;
		col = String.fromCharCode(65+(num%26))+col;
		num = (num / 26)>>0;
		
		while( num > 0 ){
			col = String.fromCharCode(64+(num%26))+col;
			num = (num / 26)>>0;
		}
		return col;
	}
	
	_g.ADDRESS = function(row, col, abs_num, a1, sheet){
		var ref = '';
		if( a1 == undefined )a1 = true;
		if( !abs_num || abs_num == 1 ){
			if( a1 )
				ref = '$'+_g.numToCol(col)+'$'+row;
			else
				ref = 'R'+row+'C'+col;
		}
		else if( abs_num == 2 ){
			if( a1 )
				ref = _g.numToCol(col)+'$'+row;
			else
				ref = 'R'+row+'C['+col+']';
		}
		else if( abs_num == 3 ){
			if( a1 )
				ref = '$'+_g.numToCol(col)+row;
			else
				ref = 'R['+row+']C'+col+'';
		}
		else if( abs_num == 4 ){
			if( a1 )
				ref = _g.numToCol(col)+row;
			else
				ref = 'R['+row+']C['+col+']';
		}
		if( sheet ){
			if( sheet.indexOf(' ')>0 || sheet.indexOf('!')>0 || sheet.indexOf('[')>0 || sheet.indexOf(']')>0 )
				ref = "'"+sheet+"'!"+ref;
			else
				ref = ""+sheet+"!"+ref;
		}
		return ref;
	};

	_g.SMALL = function(aptg, k){
	    var arr = aptg;
        if( !(aptg instanceof Array) ){
            arr = _g.tableToArray(aptg, 1);
        }
		if( arr.length==1 && arr[0] instanceof Array )arr = arr[0];
		
        if( k<0 || k>arr.length )return _g.error.num;

        //sort the array till we find k th small value
        //
        arr.sort(function(a,b){return a-b;});
        return arr[k-1];
	}

	
	_g.range = function(s, e){
		console.log("error: range not implemented...");
		console.log(s);
		console.log(e);
	};
	
	_g.numConvert = function(num, from, to, places){
		if( from==10 && !isNumber(num))
			return _g.error.value;

		// for decimal no conversion, prefix is needed
		if( to == 10 ){
			if( from == 2 ){	//make the binary negative if 10th digit is set
				num = ""+num;
				if( num.length>10 )return _g.error.num;
				if( num.length==10 && num[0]=='1' ){
					return parseInt(Array(23).join("1")+num, from)|0;
				}
			}
			return Number(parseInt(""+num, from));
		}

		var hex = Number(parseInt(""+num, from)).toString(to);
		
		if( places != undefined ){
			if( !isNumber(places))return _g.error.value;
			if( hex.length > +places || +places < 0 )return _g.error.num;
			if( hex.length < +places )
				hex = "0000000000".substring(0, +places-hex.length)+hex;
		}
		return hex;
	};
	
	_g.BIN2DEC = function(num){
		return _g.numConvert(num, 2, 10);
	}
	_g.BIN2HEX = function(num, places){
		return _g.numConvert(num, 2, 16, places);
	}
	_g.BIN2OCT = function(num, places){
		return _g.numConvert(num, 2, 8, places);
	}

	_g.DEC2BIN = function(num, places){
		return _g.numConvert(num, 10, 2, places);
	}
	_g.DEC2HEX = function(num, places){
		return _g.numConvert(num, 10, 16, places);
	}
	_g.DEC2OCT = function(num, places){
		return _g.numConvert(num, 10, 16, places);
	}

	_g.HEX2BIN = function(num, places){
		return _g.numConvert(num, 16, 2, places);
	}
	_g.HEX2DEC = function(num){
		return _g.numConvert(num, 16, 10);
	}
	_g.HEX2OCT = function(num, places){
		return _g.numConvert(num, 16, 8, places);
	}

	_g.OCT2BIN = function(num, places){
		return _g.numConvert(num, 8, 2, places);
	}
	_g.OCT2DEC = function(num){
		return _g.numConvert(num, 8, 10);
	}
	_g.OCT2HEX = function(num, places){
		return _g.numConvert(num, 8, 16, places);
	}


})();



var createXl2g = function(){
    this.srcElements = [];
    this.tarElements = [];
    this.evalCount   = 0;
    this.updtCount   = 0;
    xl2g = this;

	this.evaluateRange = function(sheet, sr, sc, er, ec){
		var rid = 'r'+sheet+'_'+sr+'_'+sc+'_'+er+'_'+ec;
		if( _g.states[rid] == this.evalCount )
			return;
		_g.states[rid] = this.evalCount;
		
		for(var r=+sr; r<=+er; r++){
			rid = sheet+"_"+r+"_";
			for(var c=+sc; c<=+ec; c++){
				var tid = rid+c;
				if( _g.states[tid] < this.evalCount )
					this.evaluateCell(tid);
			}
		}
	}

    this.evaluateCell = function(id){

		if( typeof _g['calc'+id] == 'function' ){
			this.updtCount ++;
			_g.states[id] = this.evalCount;

			/* if we have source cells for this cell, we must evaluate them first */
			var src = srcs[id];
			//if( srcs.hasOwnProperty(id) ){
			if( src!==undefined ){
			    var slen = src.length;
				//for(var i in src ){
				for( var i=0; i<slen; i++){
					/* if this src has already been evaluated don't do it again */
                    var cid = src[i];
                    if( typeof cid == "string" ){
                        /*if(!_g.states.hasOwnProperty(cid))
                            console.log(cid+' not found in states');
                        else*/ if( _g.states[cid] < this.evalCount )
                            this.evaluateCell(cid);
                    }
                    else{
						this.evaluateRange(+cid.s, +cid.sr, +cid.sc, +cid.er, +cid.ec);						
						/*
                        for(var r=cid.sr; r<=cid.er; r++){
                            var rid = cid.s+"_"+r+"_";
                            for(var c=cid.sc; c<=cid.ec; c++){
                                var tid = rid+c;
                                /~*if(!_g.states.hasOwnProperty(tid)){
                                    if( typeof _g['calc'+tid] == 'function' )
                                        console.log(id+' not found in states');
                                }
                                else*~/ if( _g.states[tid] < this.evalCount )
                                    this.evaluateCell(tid);
                            }
                        }*/
                    }
				}
			}

			/* now that all sources have been updated we can evaluate this cell */
            _g['calc'+id]();
        }
		else{
			// make the state very high so that it never gets executed
			//
			if( _g.states.hasOwnProperty(id) )_g.states[id] = 1000000;
		}
    }

    this.setCellValue = function(cellId, value){
        data[cellId] = value;
        this.evalAllTargets();
    }
    this.setCellValueAsDate = function(cellId, value){
        var d = new Date(value);
        this.setCellValue(cellId, d.getTime());
    }

    this.onInputChange = function(elem){
		//console.log(elem)
        if( elem==null || elem.id == undefined )return;
		if(elem.type=="date")
		{
		    data[elem.id] = new Date(elem.value);
			//var d1 = new Date(elem.value);
			//d1time = d1.getTime();
			//data[elem.id] = d1time;
		}
		else
		{
			var fmt;
			if( elem.hasOwnProperty('dataset') && elem.dataset.hasOwnProperty("fmt") ){
				fmt = elem.dataset.fmt;
			}
			else if( elem.hasOwnProperty('data-fmt') ){
				fmt = elem['data-fmt'];
			}
			
			if( fmt && fmt.indexOf('%')>0 ){
				if( elem.value.indexOf('%')>0 )
					data[elem.id] = +elem.value.substr(0, elem.value.length-1)/100;
				else
					data[elem.id] = +elem.value;
			}
		    else if( isNumber(elem.value) )
		        data[elem.id] = +elem.value;
			else
			    data[elem.id] = elem.value;
		}
        //data[elem.id] = elem.value;
        this.evalAllTargets();  /* evaluate all the targets */
    }

    /* add an element to the list of source elements */
    this.addElementToSource = function(elem){
        if( elem == null )return;
        /* validate id format */
        if( elem.id == undefined )return;
        if( isNaN(parseInt(elem.id, 10)) )return;

        this.srcElements.push( elem.id );
        _g.dcache[elem.id] = elem;

        /* populate the element with the default value */
		if( data[elem.id] !== undefined && elem.value.indexOf('%')<0)
			elem.value = data[elem.id];

        /* setup an onchange script */
        var self = this;
        elem.onchange = function(){
            self.onInputChange(this);
        };
    }

    /* add an element to the list of target elements */
    this.addElementToTarget = function(elem){
        if( elem == null )return;
        /* validate id format */

        if( elem.id == undefined )
            return;

        if( isNaN(parseInt(elem.id, 10)) )
            return;

		/* oct-05-2015 for xlapp table td */
		if( elem.id.split('_').length != 3 )
			return;

        /* make sure this is not part of the source */
        if( this.srcElements.indexOf(elem.id) >=0 )
            return;

        this.tarElements.push( elem.id );
        _g.dcache[elem.id] = elem;
    }


    this.findInputs = function(){
        /*
        var elems = document.getElementsByTagName('select');
        for(var i in elems )this.addElementToSource( elems[i] );
        elems = document.getElementsByTagName('input');
        for(var i in elems )this.addElementToSource( elems[i] );
        */
        var elems = document.querySelectorAll('select,input');
        for(var i in elems )this.addElementToSource( elems[i] );
    }

    this.findTargets = function(){
        //var elems = document.getElementsByTagName("*");
        var elems = document.querySelectorAll('span');
        for( var i in elems ){
            if( elems[i].id )
                this.addElementToTarget(elems[i]);
        }
		elems = document.querySelectorAll('td');
        for( var i in elems ){
            if( elems[i].id )
                this.addElementToTarget(elems[i]);
        }
		
    }

    this.prepareCells = function(){
        var ts = performance.now();
        var count = 0;
        for( var key in srcs ){
            if( !srcs.hasOwnProperty(key) )continue;
            var slen = srcs[key].length;
            for( var i=0; i<slen; i++){
                var cid = srcs[key][i];
                if( typeof cid == "string" ){
                    if( !_g.states.hasOwnProperty(cid)){
                        _g.states[cid]=0;count++;
                    }
                }
                else{
                    for(var r=cid.sr; r<=cid.er; r++){
                        for(var c=cid.sc; c<=cid.ec; c++){
                            if( !_g.states.hasOwnProperty(cid.s+"_"+r+"_"+c)){
                                _g.states[cid.s+"_"+r+"_"+c]=0;count ++;
                            }
                        }
                    }
                }
            }
        }
        console.log("intialized "+count+" sources in "+(performance.now()-ts)+" ms")
        //console.log(" total "+Object.keys(_g.states).length);
    }

    this.prepareCells1 = function(){
        var count = 0;
        var silen;
        var slen = srcs.length;
        for(var i=0; i<slen; i++){
            //this.cellState[i] = 0;
            silen = srcs[i].length|0;

            for( var j=0; j<silen; j++){
                var cid = srcs[i][j];
                if( typeof cid == "string" ){
                    //if(!this.cellState.hasOwnProperty(cid)) count ++;
                    //this.cellState[cid] = 0;
                    _g.states[cid]=0;
                    count ++;
                }
                else{
                    for(var r=+cid.sr; r<=+cid.er; r++){
                        for(var c=+cid.sc; c<=+cid.ec; c++){
                            var id = cid.s+"_"+r+"_"+c;
                            //if(!this.cellState.hasOwnProperty(id)) count ++;
                            //this.cellState[id] = 0;
                            _g.states[id]=0;
                            count ++;
                        }
                    }
                }
            }
        }
        console.log("intialized "+count+" sources");
    }

    this.evalAllTargets = function(){
		var start = new Date().getTime();

        /* all cells need to be evaluated only once. Use this evalCOunt as controller */
        this.evalCount ++;
        this.updtCount = 0;
		_g.evalCount = this.evalCount;
		
        var depElem;
        for( var i in this.tarElements){
            var id = this.tarElements[i];
			if( _g.states[id] < this.evalCount )//-rr jul-27-2016
				this.evaluateCell(id);

            /* update the value back to DOM */
            //if( !_g.dcache.hasOwnProperty(id) ){
			if( _g.dcache[id]===undefined ){
                _g.dcache[id] = document.getElementById(id);
            }

            depElem = _g.dcache[id];
            if( depElem ){
				var val = data[id];
				var fmt = '';
				try{
					if( depElem.dataset && depElem.dataset.hasOwnProperty("fmt") ){
						fmt = depElem.dataset.fmt;
					}
					else if( depElem.hasOwnProperty('data-fmt') ){
						fmt = dcepElem['data-fmt'];
					}
				}catch(err){
				}

				if( val instanceof Date ){
					if( fmt ){
						val = SSF.format(fmt, val);
					}
					else{
						val = val.getTime();
					}
				}
                else if( isNumber(val) ){
					if( fmt ){
						val = SSF.format(fmt, val);
					}
					else{
						val = _g.numToString(val);//SSF.format("0.00", Number(val.toFixed(5)));
					}
                }

				if( val === undefined )
					depElem.innerHTML = '';
				else
					depElem.innerHTML = val;
            }
        }
		var calcTime = ((new Date().getTime())-start);
		start = new Date().getTime();
		doValidations();
		var reloadTime= ((new Date().getTime())-start);

        console.log("calculated "+this.updtCount+" cells in "+calcTime+" ms ["+reloadTime+"]");
		$('#out').empty().append("calculated "+this.updtCount+" cells in "+calcTime+" ms ["+reloadTime+"]");

    }

    this.fillTemplate = function(tmpl, options){
        /* each of the option's value should be replaced in the template */
        for( var i in options ){
            varName = "{"+options[i]+"}";
            //tmpl = tmpl.replaceAll(varName, data.hasOwnProperty(varName)?data[varName]:"");
			tmpl = tmpl.replaceAll(varName, data[varName]!==undefined?data[varName]:"");
        }
        for( var i in this.srcElements ){
            varName = "{"+this.srcElements[i]+"}";
            //tmpl = tmpl.replaceAll(varName, data.hasOwnProperty(varName)?data[varName]:"");
			tmpl = tmpl.replaceAll(varName, data[varName]!==undefined?data[varName]:"");
        }
        for( var i in this.tarElements ){
            varName = "{"+this.tarElements[i]+"}";
            //tmpl = tmpl.replaceAll(varName, data.hasOwnProperty(varName)?data[varName]:"");
			tmpl = tmpl.replaceAll(varName, data[varName]!==undefined?data[varName]:"");
        }
        return tmpl;
    }

    var start = new Date().getTime();
    this.findInputs();
    this.findTargets();
    //this.prepareCells();
    console.log("sources:"+Object.keys(srcs).length);
    console.log("initialized in "+((new Date().getTime())-start)+" ms");
	$('#iout').empty().append("initialized in "+((new Date().getTime())-start)+" ms");

    /* simulate the first change */
    //this.onInputChange(document.getElementById(this.srcElements[0]));
	this.evalAllTargets();

    return this;
}
_g.states={"0_4_5":0,"0_6_2":0,"0_7_2":0,"0_7_8":0,"0_7_9":0,"0_8_2":0,"0_9_2":0,"0_10_2":0,"0_11_2":0,"0_12_2":0,"0_13_2":0,"0_14_2":0,"0_15_2":0,"0_16_2":0,"0_17_2":0,"0_20_2":0,"0_26_2":0,"1_1_16":0,"1_1_17":0,"1_1_18":0,"1_1_19":0,"1_1_20":0,"1_1_21":0,"1_1_22":0,"1_1_23":0,"1_1_24":0,"1_1_27":0,"1_2_15":0,"1_2_16":0,"1_2_17":0,"1_2_18":0,"1_2_19":0,"1_2_20":0,"1_2_21":0,"1_2_22":0,"1_2_23":0,"1_2_24":0,"1_2_27":0,"1_3_26":0,"1_3_27":0,"1_4_10":0,"1_4_13":0,"1_4_27":0,"1_5_10":0,"1_5_13":0,"1_5_26":0,"1_5_27":0,"1_6_10":0,"1_6_13":0,"1_6_27":0,"1_7_10":0,"1_7_13":0,"1_7_26":0,"1_7_27":0,"1_8_10":0,"1_8_13":0,"1_8_27":0,"1_9_10":0,"1_9_13":0,"1_9_26":0,"1_9_27":0,"1_10_10":0,"1_10_13":0,"1_10_27":0,"1_11_10":0,"1_11_13":0,"1_11_26":0,"1_11_27":0,"1_12_10":0,"1_12_13":0,"1_12_27":0,"1_13_10":0,"1_13_13":0,"1_13_26":0,"1_13_27":0,"1_14_10":0,"1_14_13":0,"1_15_10":0,"1_15_13":0,"1_16_10":0,"1_16_13":0,"1_17_10":0,"1_17_13":0,"1_18_10":0,"1_18_13":0,"1_19_10":0,"1_19_13":0,"1_19_33":0,"1_19_34":0,"1_19_38":0,"1_20_10":0,"1_20_13":0,"1_20_30":0,"1_20_33":0,"1_20_34":0,"1_20_38":0,"1_21_10":0,"1_21_13":0,"1_21_30":0,"1_21_33":0,"1_21_34":0,"1_21_38":0,"1_22_10":0,"1_22_13":0,"1_22_30":0,"1_22_33":0,"1_22_34":0,"1_22_38":0,"1_22_39":0,"1_22_40":0,"1_23_10":0,"1_23_13":0,"1_23_30":0,"1_23_33":0,"1_23_34":0,"1_24_10":0,"1_24_13":0,"1_24_30":0,"1_24_33":0,"1_24_34":0,"1_25_10":0,"1_25_13":0,"1_25_30":0,"1_25_33":0,"1_25_34":0,"1_25_38":0,"1_26_10":0,"1_26_13":0,"1_26_33":0,"1_26_34":0,"1_26_38":0,"1_27_10":0,"1_27_13":0,"1_27_30":0,"1_27_33":0,"1_27_34":0,"1_27_38":0,"1_28_10":0,"1_28_13":0,"1_28_30":0,"1_28_33":0,"1_28_34":0,"1_28_38":0,"1_28_39":0,"1_28_40":0,"1_29_10":0,"1_29_13":0,"1_29_30":0,"1_29_33":0,"1_29_34":0,"1_30_10":0,"1_30_13":0,"1_31_10":0,"1_31_13":0,"1_32_10":0,"1_32_13":0,"1_33_10":0,"1_33_13":0,"1_34_10":0,"1_34_13":0,"1_35_10":0,"1_35_13":0,"1_36_10":0,"1_36_13":0,"1_37_10":0,"1_37_13":0,"1_38_10":0,"1_38_13":0,"1_39_10":0,"1_39_13":0,"1_40_10":0,"1_40_13":0,"1_41_10":0,"1_41_13":0,"1_42_10":0,"1_42_13":0,"1_43_10":0,"1_43_13":0,"1_44_10":0,"1_44_13":0,"1_45_10":0,"1_45_13":0,"1_46_10":0,"1_46_13":0,"1_47_10":0,"1_47_13":0,"1_48_10":0,"1_48_13":0,"1_49_10":0,"1_49_13":0,"1_50_10":0,"1_50_13":0,"2_12_3":0,"2_13_3":0,"2_15_3":0,"2_17_3":0,"2_17_7":0,"2_19_3":0,"2_19_7":0,"2_20_3":0,"2_20_7":0,"2_21_7":0,"2_22_3":0,"2_22_7":0,"2_23_3":0,"2_29_2":0,"2_29_3":0,"2_29_4":0,"2_29_5":0,"2_29_6":0,"2_29_7":0,"2_29_8":0,"2_29_9":0,"2_29_10":0,"2_30_2":0,"2_30_3":0,"2_30_4":0,"2_30_5":0,"2_30_6":0,"2_30_7":0,"2_30_8":0,"2_30_9":0,"2_30_10":0,"2_31_2":0,"2_31_3":0,"2_31_4":0,"2_31_5":0,"2_31_6":0,"2_31_7":0,"2_31_8":0,"2_31_9":0,"2_31_10":0,"2_32_2":0,"2_32_3":0,"2_32_4":0,"2_32_5":0,"2_32_6":0,"2_32_7":0,"2_32_8":0,"2_32_9":0,"2_32_10":0,"2_33_2":0,"2_33_3":0,"2_33_4":0,"2_33_5":0,"2_33_6":0,"2_33_7":0,"2_33_8":0,"2_33_9":0,"2_33_10":0,"2_34_2":0,"2_34_3":0,"2_34_4":0,"2_34_5":0,"2_34_6":0,"2_34_7":0,"2_34_8":0,"2_34_9":0,"2_34_10":0,"2_35_2":0,"2_35_3":0,"2_35_4":0,"2_35_5":0,"2_35_6":0,"2_35_7":0,"2_35_8":0,"2_35_9":0,"2_35_10":0,"2_36_2":0,"2_36_3":0,"2_36_4":0,"2_36_5":0,"2_36_6":0,"2_36_7":0,"2_36_8":0,"2_36_9":0,"2_36_10":0,"2_37_2":0,"2_37_3":0,"2_37_4":0,"2_37_5":0,"2_37_6":0,"2_37_7":0,"2_37_8":0,"2_37_9":0,"2_37_10":0,"2_38_2":0,"2_38_3":0,"2_38_4":0,"2_38_5":0,"2_38_6":0,"2_38_7":0,"2_38_8":0,"2_38_9":0,"2_38_10":0,"2_39_2":0,"2_39_3":0,"2_39_4":0,"2_39_5":0,"2_39_6":0,"2_39_7":0,"2_39_8":0,"2_39_9":0,"2_39_10":0,"2_40_2":0,"2_40_3":0,"2_40_4":0,"2_40_5":0,"2_40_6":0,"2_40_7":0,"2_40_8":0,"2_40_9":0,"2_40_10":0,"2_41_2":0,"2_41_3":0,"2_41_4":0,"2_41_5":0,"2_41_6":0,"2_41_7":0,"2_41_8":0,"2_41_9":0,"2_41_10":0,"2_42_2":0,"2_42_3":0,"2_42_4":0,"2_42_5":0,"2_42_6":0,"2_42_7":0,"2_42_8":0,"2_42_9":0,"2_42_10":0,"2_43_2":0,"2_43_3":0,"2_43_4":0,"2_43_5":0,"2_43_6":0,"2_43_7":0,"2_43_8":0,"2_43_9":0,"2_43_10":0,"2_44_9":0,"2_44_10":0,"2_45_9":0,"2_45_10":0,"-1":0}
var data = {"0_0_1":"Enter the details in Cells coloured Green",
"0_1_1":"Output is in cells coloured Pink",
"0_3_1":"Inputs in Green Cell",
"0_3_5":"Premium Input for Reverse Calculator",
"0_4_1":"Date of Illustration: ",
"0_4_2": _g.parseDate("41465.0"),
"0_4_5":"Orig. Installment Premium (Rs.) INCLUDING Service Tax for Year 1: ",
"0_4_8":40000,
"0_5_1":"Age Last Birthday as on Date of Commencement",
"0_5_2":30,
"0_6_1":"Gender: ",
"0_6_2":"FEMALE",
"0_6_5":"Output of reverse calculator",
"0_7_1":"Policy Term",
"0_7_2":15,
"0_7_5":"SA Out put for Reverse Calculator",
"0_7_8":374902,
"0_8_1":"Premium Term",
"0_8_2":11,
"0_9_1":"Sum Assured",
"0_9_2":374902,
"0_10_1":"Premium Frequency",
"0_10_2":1,
"0_11_1":"MMR",
"0_11_2":"No",
"0_11_3":0,
"0_11_4":"As per our understanding from underwriting team, MMR is no longer used and hence should always assume the value 0 here.",
"0_12_1":"Flat Extra",
"0_12_2":"No",
"0_12_3":1,
"0_13_1":"EMR",
"0_13_2":"No",
"0_13_3":1,
"0_14_1":"Staff",
"0_14_2":"No",
"0_14_3":0.1175,
"0_15_1":"NSAP Extra",
"0_15_2":"No",
"0_15_3":2,
"0_16_1":"Worksite Group \/ Online Discount",
"0_16_2":"No",
"0_16_3":0.035,
"0_17_1":"Orig. Installment Premium \"Including\" Service Tax ( Cell F4)",
"0_17_2":"Yes",
"0_17_5":"Note:",
"0_18_5":"Reverse Calculator will not work for Staff Cases",
"0_19_5":"If the Service Tax depicted here is different from the actual, get the Reverse Calculator updated from Actuarial Team.",
"0_20_1":"Check for Premium basis Premium Calculator",
"0_20_2":39999,
"0_22_1":"Year ",
"0_22_2":"Service Tax and applicable Cess",
"0_23_1":"Year 1",
"0_23_2":0.045,
"0_24_1":"Other Years",
"0_24_2":0.0225,
"0_26_2":-1,
"0_26_3":"If Cell D33 is greater than 1 wrt rounding of values, please connect with the Pricing Team",
"1_0_10":"Premium Per 1000 SA",
"1_0_13":"EMRs ",
"1_0_14":0,
"1_0_15":0.25,
"1_0_16":0.5,
"1_0_17":0.75,
"1_0_18":1,
"1_0_19":1.25,
"1_0_20":1.5,
"1_0_21":1.75,
"1_0_22":2.25,
"1_0_23":2.75,
"1_0_24":3.5,
"1_0_26":"Reverse Calculator",
"1_1_1":"Sum Assured Band",
"1_1_5":"GSV Factor Table",
"1_1_10":"Age",
"1_1_11":"Rate",
"1_1_12":"AGE",
"1_1_14":0,
"1_1_15":0.01,
"1_1_16":0.26,
"1_1_17":0.51,
"1_1_18":0.76,
"1_1_19":1.01,
"1_1_20":1.26,
"1_1_21":1.51,
"1_1_22":1.76,
"1_1_23":2.26,
"1_1_24":2.76,
"1_1_27":374902,
"1_2_1":"Lower",
"1_2_2":"Upper",
"1_2_3":"Rebate Per 1000 SA",
"1_2_5":"Lower Yr",
"1_2_6":"Upper Yr",
"1_2_7":"% of Tot Prem ",
"1_2_8":"% of Accrued Bonus",
"1_2_14":2,
"1_2_15":3,
"1_2_16":4,
"1_2_17":5,
"1_2_18":6,
"1_2_19":7,
"1_2_20":8,
"1_2_21":9,
"1_2_22":10,
"1_2_23":11,
"1_2_24":12,
"1_2_27":99.1,
"1_3_1":100000,
"1_3_2":149999,
"1_3_3":0,
"1_3_5":0,
"1_3_6":2,
"1_3_7":0,
"1_3_10":8,
"1_3_11":110.8,
"1_3_13":8,
"1_3_14":0,
"1_3_15":0.17,
"1_3_16":0.34,
"1_3_17":0.51,
"1_3_18":0.67,
"1_3_19":0.84,
"1_3_20":1.02,
"1_3_21":1.18,
"1_3_22":1.53,
"1_3_23":1.88,
"1_3_24":2.4,
"1_3_26":"Not OK",
"1_3_27":386251,
"1_4_1":150000,
"1_4_2":199999,
"1_4_3":5,
"1_4_5":3,
"1_4_6":3,
"1_4_7":0.3,
"1_4_10":9,
"1_4_11":110.81,
"1_4_13":9,
"1_4_14":0,
"1_4_15":0.17,
"1_4_16":0.35,
"1_4_17":0.52,
"1_4_18":0.7,
"1_4_19":0.87,
"1_4_20":1.04,
"1_4_21":1.22,
"1_4_22":1.57,
"1_4_23":1.92,
"1_4_24":2.46,
"1_4_27":100.1,
"1_5_1":200000,
"1_5_2":299999,
"1_5_3":7.5,
"1_5_5":4,
"1_5_6":4,
"1_5_7":0.5,
"1_5_10":10,
"1_5_11":110.82,
"1_5_13":10,
"1_5_14":0,
"1_5_15":0.18,
"1_5_16":0.35,
"1_5_17":0.53,
"1_5_18":0.71,
"1_5_19":0.89,
"1_5_20":1.07,
"1_5_21":1.26,
"1_5_22":1.62,
"1_5_23":1.99,
"1_5_24":2.55,
"1_5_26":"Not OK",
"1_5_27":382393,
"1_6_1":300000,
"1_6_2":499999,
"1_6_3":10,
"1_6_5":5,
"1_6_6":5,
"1_6_7":0.5,
"1_6_10":11,
"1_6_11":110.83,
"1_6_13":11,
"1_6_14":0,
"1_6_15":0.19,
"1_6_16":0.37,
"1_6_17":0.56,
"1_6_18":0.75,
"1_6_19":0.94,
"1_6_20":1.13,
"1_6_21":1.33,
"1_6_22":1.71,
"1_6_23":2.1,
"1_6_24":2.7,
"1_6_27":102.1,
"1_7_1":500000,
"1_7_2":999999,
"1_7_3":12,
"1_7_5":6,
"1_7_6":6,
"1_7_7":0.5,
"1_7_10":12,
"1_7_11":110.84,
"1_7_13":12,
"1_7_14":0,
"1_7_15":0.2,
"1_7_16":0.4,
"1_7_17":0.6,
"1_7_18":0.8,
"1_7_19":1,
"1_7_20":1.21,
"1_7_21":1.41,
"1_7_22":1.82,
"1_7_23":2.24,
"1_7_24":2.87,
"1_7_26":"OK",
"1_7_27":374902,
"1_8_1":1000000,
"1_8_2":1000000000,
"1_8_3":13,
"1_8_5":7,
"1_8_6":7,
"1_8_7":0.5,
"1_8_10":13,
"1_8_11":110.86,
"1_8_13":13,
"1_8_14":0,
"1_8_15":0.21,
"1_8_16":0.42,
"1_8_17":0.64,
"1_8_18":0.85,
"1_8_19":1.06,
"1_8_20":1.28,
"1_8_21":1.5,
"1_8_22":1.94,
"1_8_23":2.38,
"1_8_24":3.05,
"1_8_27":104.6,
"1_9_5":8,
"1_9_6":8,
"1_9_7":0.52,
"1_9_10":14,
"1_9_11":110.88,
"1_9_13":14,
"1_9_14":0,
"1_9_15":0.22,
"1_9_16":0.45,
"1_9_17":0.67,
"1_9_18":0.9,
"1_9_19":1.13,
"1_9_20":1.35,
"1_9_21":1.58,
"1_9_22":2.05,
"1_9_23":2.52,
"1_9_24":3.23,
"1_9_26":"OK",
"1_9_27":365942,
"1_10_1":"Modal Factor Table",
"1_10_5":9,
"1_10_6":9,
"1_10_7":0.54,
"1_10_10":15,
"1_10_11":110.9,
"1_10_13":15,
"1_10_14":0,
"1_10_15":0.23,
"1_10_16":0.47,
"1_10_17":0.71,
"1_10_18":0.94,
"1_10_19":1.18,
"1_10_20":1.43,
"1_10_21":1.67,
"1_10_22":2.16,
"1_10_23":2.65,
"1_10_24":3.4,
"1_10_27":107.1,
"1_11_1":"Frequency",
"1_11_2":"Factor",
"1_11_5":10,
"1_11_6":10,
"1_11_7":0.56,
"1_11_10":16,
"1_11_11":110.93,
"1_11_13":16,
"1_11_14":0,
"1_11_15":0.24,
"1_11_16":0.49,
"1_11_17":0.74,
"1_11_18":0.99,
"1_11_19":1.24,
"1_11_20":1.49,
"1_11_21":1.74,
"1_11_22":2.26,
"1_11_23":2.77,
"1_11_24":3.56,
"1_11_26":"OK",
"1_11_27":357400,
"1_12_1":1,
"1_12_2":1,
"1_12_5":11,
"1_12_6":11,
"1_12_7":0.58,
"1_12_10":17,
"1_12_11":110.96,
"1_12_13":17,
"1_12_14":0,
"1_12_15":0.25,
"1_12_16":0.51,
"1_12_17":0.77,
"1_12_18":1.03,
"1_12_19":1.29,
"1_12_20":1.55,
"1_12_21":1.81,
"1_12_22":2.35,
"1_12_23":2.88,
"1_12_24":3.71,
"1_12_27":112.1,
"1_13_1":12,
"1_13_2":0.09,
"1_13_5":12,
"1_13_6":12,
"1_13_7":0.6,
"1_13_10":18,
"1_13_11":111,
"1_13_13":18,
"1_13_14":0,
"1_13_15":0.26,
"1_13_16":0.53,
"1_13_17":0.79,
"1_13_18":1.06,
"1_13_19":1.33,
"1_13_20":1.6,
"1_13_21":1.87,
"1_13_22":2.42,
"1_13_23":2.98,
"1_13_24":3.84,
"1_13_26":"OK",
"1_13_27":341459,
"1_14_5":13,
"1_14_6":13,
"1_14_7":0.62,
"1_14_10":19,
"1_14_11":111.04,
"1_14_13":19,
"1_14_14":0,
"1_14_15":0.27,
"1_14_16":0.54,
"1_14_17":0.82,
"1_14_18":1.09,
"1_14_19":1.37,
"1_14_20":1.65,
"1_14_21":1.93,
"1_14_22":2.5,
"1_14_23":3.07,
"1_14_24":3.95,
"1_15_1":"Money Back Schedule",
"1_15_5":14,
"1_15_6":14,
"1_15_7":0.64,
"1_15_10":20,
"1_15_11":111.1,
"1_15_13":20,
"1_15_14":0,
"1_15_15":0.28,
"1_15_16":0.56,
"1_15_17":0.84,
"1_15_18":1.12,
"1_15_19":1.4,
"1_15_20":1.69,
"1_15_21":1.98,
"1_15_22":2.56,
"1_15_23":3.16,
"1_15_24":4.06,
"1_16_1":"Time",
"1_16_2":"%age of SA",
"1_16_5":15,
"1_16_6":15,
"1_16_7":0.66,
"1_16_10":21,
"1_16_11":111.16,
"1_16_13":21,
"1_16_14":0,
"1_16_15":0.28,
"1_16_16":0.57,
"1_16_17":0.86,
"1_16_18":1.15,
"1_16_19":1.44,
"1_16_20":1.73,
"1_16_21":2.03,
"1_16_22":2.63,
"1_16_23":3.24,
"1_16_24":4.17,
"1_17_1":4,
"1_17_2":0.15,
"1_17_10":22,
"1_17_11":111.23,
"1_17_13":22,
"1_17_14":0,
"1_17_15":0.29,
"1_17_16":0.58,
"1_17_17":0.88,
"1_17_18":1.18,
"1_17_19":1.48,
"1_17_20":1.78,
"1_17_21":2.08,
"1_17_22":2.7,
"1_17_23":3.32,
"1_17_24":4.28,
"1_18_1":8,
"1_18_2":0.15,
"1_18_10":23,
"1_18_11":111.31,
"1_18_13":23,
"1_18_14":0,
"1_18_15":0.3,
"1_18_16":0.6,
"1_18_17":0.9,
"1_18_18":1.21,
"1_18_19":1.52,
"1_18_20":1.83,
"1_18_21":2.14,
"1_18_22":2.77,
"1_18_23":3.41,
"1_18_24":4.4,
"1_18_26":"Premium Calculation",
"1_18_32":"Description",
"1_18_33":"Year 1",
"1_18_34":"Year 2",
"1_18_36":"Year 1",
"1_18_38":"Base Premium",
"1_18_39":"ST",
"1_18_40":"Final Premium",
"1_19_1":12,
"1_19_2":0.15,
"1_19_10":24,
"1_19_11":111.4,
"1_19_13":24,
"1_19_14":0,
"1_19_15":0.31,
"1_19_16":0.62,
"1_19_17":0.93,
"1_19_18":1.25,
"1_19_19":1.56,
"1_19_20":1.88,
"1_19_21":2.2,
"1_19_22":2.86,
"1_19_23":3.52,
"1_19_24":4.53,
"1_19_26":"Description",
"1_19_30":" Premium Amount",
"1_19_32":"Base Premium Rate",
"1_19_33":112.1,
"1_19_34":112.1,
"1_19_36":"Base Annual Premium Yr1",
"1_19_38":38277.4942,
"1_20_10":25,
"1_20_11":111.49,
"1_20_13":25,
"1_20_14":0,
"1_20_15":0.32,
"1_20_16":0.64,
"1_20_17":0.96,
"1_20_18":1.29,
"1_20_19":1.62,
"1_20_20":1.95,
"1_20_21":2.28,
"1_20_22":2.96,
"1_20_23":3.64,
"1_20_24":4.69,
"1_20_26":"Annualized Base Premium in Year 1 (excl ST)",
"1_20_30":38277,
"1_20_32":"Premium Rate after Worksite Discount",
"1_20_33":112.1,
"1_20_34":112.1,
"1_20_36":"Extra Annual Premium  Yr 1",
"1_20_38":0,
"1_20_46":"Orig. Installment Premium (Rs.) ",
"1_21_1":"Interest Rate",
"1_21_2":"Annual Bonus",
"1_21_3":"Final Bonus",
"1_21_10":26,
"1_21_11":111.59,
"1_21_13":26,
"1_21_14":0,
"1_21_15":0.33,
"1_21_16":0.66,
"1_21_17":1,
"1_21_18":1.34,
"1_21_19":1.68,
"1_21_20":2.02,
"1_21_21":2.37,
"1_21_22":3.07,
"1_21_23":3.79,
"1_21_24":4.88,
"1_21_26":"Extra Annualized Premium in Yr1 (excl.ST)",
"1_21_30":0,
"1_21_32":"Applicable High SA Rebate",
"1_21_33":10,
"1_21_34":10,
"1_21_36":"Total Annual Premium in Yr 1",
"1_21_38":38277.4942,
"1_21_46":"INCLUDING Service Tax ",
"1_22_1":0.04,
"1_22_2":0.02,
"1_22_3":0.1,
"1_22_10":27,
"1_22_11":111.7,
"1_22_13":27,
"1_22_14":0,
"1_22_15":0.34,
"1_22_16":0.69,
"1_22_17":1.04,
"1_22_18":1.4,
"1_22_19":1.75,
"1_22_20":2.11,
"1_22_21":2.48,
"1_22_22":3.21,
"1_22_23":3.96,
"1_22_24":5.1,
"1_22_26":"Installment Premium (incl UW Extra) in Year 1 incl. of ST",
"1_22_30":39999,
"1_22_32":"Premium Rate after High SA Rebate",
"1_22_33":102.1,
"1_22_34":102.1,
"1_22_36":"Installment Premium in Yr 1",
"1_22_38":38277,
"1_22_39":1722,
"1_22_40":39999,
"1_22_46":"EXCLUDING Service Tax ",
"1_23_1":0.08,
"1_23_2":0.025,
"1_23_3":0.2,
"1_23_10":28,
"1_23_11":111.82,
"1_23_13":28,
"1_23_14":0,
"1_23_15":0.36,
"1_23_16":0.73,
"1_23_17":1.1,
"1_23_18":1.47,
"1_23_19":1.84,
"1_23_20":2.22,
"1_23_21":2.6,
"1_23_22":3.38,
"1_23_23":4.17,
"1_23_24":5.37,
"1_23_26":"Annualized Base Premium in Year 2 (excl ST)",
"1_23_30":38277,
"1_23_32":"Premium Rate after Staff Discount",
"1_23_33":102.1,
"1_23_34":102.1,
"1_23_46":"for Year 1: ",
"1_24_10":29,
"1_24_11":111.95,
"1_24_13":29,
"1_24_14":0,
"1_24_15":0.38,
"1_24_16":0.77,
"1_24_17":1.16,
"1_24_18":1.55,
"1_24_19":1.95,
"1_24_20":2.35,
"1_24_21":2.76,
"1_24_22":3.58,
"1_24_23":4.41,
"1_24_24":5.7,
"1_24_26":"Extra Annualized Premium in Yr2 excl.ST",
"1_24_30":0,
"1_24_32":"EMR Extra",
"1_24_33":0,
"1_24_34":0,
"1_24_36":"Year 2",
"1_24_38":"Base Premium",
"1_24_39":"ST",
"1_24_40":"Final Premium",
"1_25_10":30,
"1_25_11":112.1,
"1_25_13":30,
"1_25_14":0,
"1_25_15":0.41,
"1_25_16":0.82,
"1_25_17":1.23,
"1_25_18":1.65,
"1_25_19":2.08,
"1_25_20":2.5,
"1_25_21":2.94,
"1_25_22":3.81,
"1_25_23":4.71,
"1_25_24":6.08,
"1_25_26":"Installment Premium (incl UW Extra) in Year 2 incl. of ST",
"1_25_30":39138,
"1_25_32":"NSAP Extra",
"1_25_33":0,
"1_25_34":0,
"1_25_36":"Modal Base Premium Yr2",
"1_25_38":38277.4942,
"1_26_10":31,
"1_26_11":112.26,
"1_26_13":31,
"1_26_14":0,
"1_26_15":0.44,
"1_26_16":0.88,
"1_26_17":1.32,
"1_26_18":1.77,
"1_26_19":2.23,
"1_26_20":2.69,
"1_26_21":3.15,
"1_26_22":4.09,
"1_26_23":5.06,
"1_26_24":6.54,
"1_26_32":"Flat Extra",
"1_26_33":0,
"1_26_34":0,
"1_26_36":"Extra Annual Premium  Yr 2",
"1_26_38":0,
"1_27_10":32,
"1_27_11":112.43,
"1_27_13":32,
"1_27_14":0,
"1_27_15":0.47,
"1_27_16":0.95,
"1_27_17":1.43,
"1_27_18":1.91,
"1_27_19":2.4,
"1_27_20":2.9,
"1_27_21":3.4,
"1_27_22":4.42,
"1_27_23":5.47,
"1_27_24":7.08,
"1_27_26":"Death Benefit Sum Assured:",
"1_27_30":382770,
"1_27_32":"MMR Extra",
"1_27_33":0,
"1_27_34":0,
"1_27_36":"Total Annual Premium in Yr 2",
"1_27_38":38277.4942,
"1_28_10":33,
"1_28_11":112.61,
"1_28_13":33,
"1_28_14":0,
"1_28_15":0.51,
"1_28_16":1.03,
"1_28_17":1.55,
"1_28_18":2.08,
"1_28_19":2.61,
"1_28_20":3.15,
"1_28_21":3.7,
"1_28_22":4.81,
"1_28_23":5.96,
"1_28_24":7.73,
"1_28_26":"Maturity Benefit @4% :",
"1_28_30":356156.9,
"1_28_32":"Total Base Premium Rate (applicable)",
"1_28_33":102.1,
"1_28_34":102.1,
"1_28_36":"Installment Premium in Yr 2",
"1_28_38":38277,
"1_28_39":861,
"1_28_40":39138,
"1_29_10":34,
"1_29_11":112.8,
"1_29_13":34,
"1_29_14":0,
"1_29_15":0.56,
"1_29_16":1.12,
"1_29_17":1.69,
"1_29_18":2.27,
"1_29_19":2.85,
"1_29_20":3.45,
"1_29_21":4.05,
"1_29_22":5.27,
"1_29_23":6.53,
"1_29_24":8.49,
"1_29_26":"Maturity Benefit  @8% :",
"1_29_30":421764.75,
"1_29_32":"Extra Premium Rate (applicable)",
"1_29_33":0,
"1_29_34":0,
"1_30_10":35,
"1_30_11":113,
"1_30_13":35,
"1_30_14":0,
"1_30_15":0.61,
"1_30_16":1.23,
"1_30_17":1.85,
"1_30_18":2.49,
"1_30_19":3.13,
"1_30_20":3.79,
"1_30_21":4.45,
"1_30_22":5.81,
"1_30_23":7.2,
"1_30_24":9.38,
"1_31_10":36,
"1_31_11":113.23,
"1_31_13":36,
"1_31_14":0,
"1_31_15":0.67,
"1_31_16":1.35,
"1_31_17":2.04,
"1_31_18":2.75,
"1_31_19":3.46,
"1_31_20":4.19,
"1_31_21":4.92,
"1_31_22":6.43,
"1_31_23":7.99,
"1_31_24":10.42,
"1_32_10":37,
"1_32_11":113.49,
"1_32_13":37,
"1_32_14":0,
"1_32_15":0.74,
"1_32_16":1.5,
"1_32_17":2.26,
"1_32_18":3.04,
"1_32_19":3.84,
"1_32_20":4.64,
"1_32_21":5.47,
"1_32_22":7.15,
"1_32_23":8.9,
"1_32_24":11.64,
"1_33_10":38,
"1_33_11":113.79,
"1_33_13":38,
"1_33_14":0,
"1_33_15":0.82,
"1_33_16":1.66,
"1_33_17":2.51,
"1_33_18":3.38,
"1_33_19":4.27,
"1_33_20":5.17,
"1_33_21":6.09,
"1_33_22":7.99,
"1_33_23":9.96,
"1_33_24":13.06,
"1_34_10":39,
"1_34_11":114.12,
"1_34_13":39,
"1_34_14":0,
"1_34_15":0.91,
"1_34_16":1.85,
"1_34_17":2.8,
"1_34_18":3.77,
"1_34_19":4.76,
"1_34_20":5.77,
"1_34_21":6.81,
"1_34_22":8.94,
"1_34_23":11.18,
"1_34_24":14.72,
"1_35_10":40,
"1_35_11":114.49,
"1_35_13":40,
"1_35_14":0,
"1_35_15":1.02,
"1_35_16":2.06,
"1_35_17":3.12,
"1_35_18":4.21,
"1_35_19":5.32,
"1_35_20":6.46,
"1_35_21":7.64,
"1_35_22":10.04,
"1_35_23":12.58,
"1_35_24":16.64,
"1_36_10":41,
"1_36_11":114.9,
"1_36_13":41,
"1_36_14":0,
"1_36_15":1.13,
"1_36_16":2.29,
"1_36_17":3.48,
"1_36_18":4.7,
"1_36_19":5.95,
"1_36_20":7.25,
"1_36_21":8.56,
"1_36_22":11.3,
"1_36_23":14.2,
"1_36_24":18.9,
"1_37_10":42,
"1_37_11":115.36,
"1_37_13":42,
"1_37_14":0,
"1_37_15":1.26,
"1_37_16":2.56,
"1_37_17":3.89,
"1_37_18":5.26,
"1_37_19":6.67,
"1_37_20":8.12,
"1_37_21":9.62,
"1_37_22":12.75,
"1_37_23":16.07,
"1_37_24":21.51,
"1_38_10":43,
"1_38_11":115.87,
"1_38_13":43,
"1_38_14":0,
"1_38_15":1.41,
"1_38_16":2.85,
"1_38_17":4.35,
"1_38_18":5.89,
"1_38_19":7.48,
"1_38_20":9.13,
"1_38_21":10.83,
"1_38_22":14.4,
"1_38_23":18.26,
"1_38_24":24.56,
"1_39_10":44,
"1_39_11":116.42,
"1_39_13":44,
"1_39_14":0,
"1_39_15":1.57,
"1_39_16":3.19,
"1_39_17":4.87,
"1_39_18":6.6,
"1_39_19":8.4,
"1_39_20":10.27,
"1_39_21":12.21,
"1_39_22":16.3,
"1_39_23":20.77,
"1_39_24":28.14,
"1_40_10":45,
"1_40_11":117,
"1_40_13":45,
"1_40_14":0,
"1_40_15":1.75,
"1_40_16":3.56,
"1_40_17":5.45,
"1_40_18":7.4,
"1_40_19":9.44,
"1_40_20":11.57,
"1_40_21":13.78,
"1_40_22":18.52,
"1_40_23":23.68,
"1_40_24":32.37,
"1_41_10":46,
"1_41_11":117.66,
"1_41_13":46,
"1_41_14":0,
"1_41_15":1.95,
"1_41_16":3.98,
"1_41_17":6.09,
"1_41_18":8.31,
"1_41_19":10.62,
"1_41_20":13.04,
"1_41_21":15.57,
"1_41_22":21.05,
"1_41_23":27.07,
"1_41_24":37.38,
"1_42_10":47,
"1_42_11":118.4,
"1_42_13":47,
"1_42_14":0,
"1_42_15":2.17,
"1_42_16":4.44,
"1_42_17":6.82,
"1_42_18":9.32,
"1_42_19":11.95,
"1_42_20":14.71,
"1_42_21":17.64,
"1_42_22":23.96,
"1_42_23":31.04,
"1_42_24":43.35,
"1_43_10":48,
"1_43_11":119.2,
"1_43_13":48,
"1_43_14":0,
"1_43_15":2.42,
"1_43_16":4.96,
"1_43_17":7.64,
"1_43_18":10.46,
"1_43_19":13.45,
"1_43_20":16.63,
"1_43_21":19.99,
"1_43_22":27.35,
"1_43_23":35.69,
"1_43_24":50.55,
"1_44_10":49,
"1_44_11":120.06,
"1_44_13":49,
"1_44_14":0,
"1_44_15":2.69,
"1_44_16":5.54,
"1_44_17":8.55,
"1_44_18":11.75,
"1_44_19":15.15,
"1_44_20":18.81,
"1_44_21":22.69,
"1_44_22":31.28,
"1_44_23":41.2,
"1_44_24":59.3,
"1_45_10":50,
"1_45_11":121,
"1_45_13":50,
"1_45_14":0,
"1_45_15":2.98,
"1_45_16":6.18,
"1_45_17":9.58,
"1_45_18":13.21,
"1_45_19":17.12,
"1_45_20":21.3,
"1_45_21":25.8,
"1_45_22":35.89,
"1_45_23":47.77,
"1_45_24":70.09,
"1_46_10":51,
"1_46_11":121.99,
"1_46_13":51,
"1_46_14":0,
"1_46_15":3.33,
"1_46_16":6.9,
"1_46_17":10.73,
"1_46_18":14.88,
"1_46_19":19.34,
"1_46_20":24.17,
"1_46_21":29.4,
"1_46_22":41.34,
"1_46_23":55.7,
"1_46_24":83.64,
"1_47_10":52,
"1_47_11":123.07,
"1_47_13":52,
"1_47_14":0,
"1_47_15":3.71,
"1_47_16":7.71,
"1_47_17":12.04,
"1_47_18":16.77,
"1_47_19":21.89,
"1_47_20":27.49,
"1_47_21":33.62,
"1_47_22":47.84,
"1_47_23":65.4,
"1_47_24":101.16,
"1_48_10":53,
"1_48_11":124.27,
"1_48_13":53,
"1_48_14":0,
"1_48_15":4.12,
"1_48_16":8.62,
"1_48_17":13.55,
"1_48_18":18.92,
"1_48_19":24.84,
"1_48_20":31.36,
"1_48_21":38.59,
"1_48_22":55.69,
"1_48_23":77.49,
"1_48_24":124.35,
"1_49_10":54,
"1_49_11":125.56,
"1_49_13":54,
"1_49_14":0,
"1_49_15":4.62,
"1_49_16":9.68,
"1_49_17":15.29,
"1_49_18":21.46,
"1_49_19":28.32,
"1_49_20":35.98,
"1_49_21":44.58,
"1_49_22":65.41,
"1_49_23":92.98,
"1_49_24":156.53,
"1_50_10":55,
"1_50_11":127,
"1_50_13":55,
"1_50_14":0,
"1_50_15":5.17,
"1_50_16":10.92,
"1_50_17":17.29,
"1_50_18":24.42,
"1_50_19":32.43,
"1_50_20":41.51,
"1_50_21":51.86,
"1_50_22":77.65,
"1_50_23":113.57,
"1_50_24":203.84,
"2_0_1":"Benefit Illustration - Smart Stage Money back plan",
"2_8_1":"Thank you for interest in our Canara HSBC Oriental Bank of Commerce Life Insurance Smart Stage Money Back Plan. Based on the details provided by you, and as reproduced below, the illustration customised to your",
"2_9_1":"requirements is appended. Please note that this illustration is indicative and the actual values may vary depending on performance of the Participating Fund managed by the Company.",
"2_11_1":"Personal details of life to be assured",
"2_11_5":"Plan Details",
"2_12_1":"Date of Birth:",
"2_12_3":"#REF!",
"2_12_5":"Proposal Number: ",
"2_12_7":"NA",
"2_12_9":" UIN: XXXXXXXX",
"2_13_1":"Age: ",
"2_13_3":30,
"2_13_5":"Name of the plan: ",
"2_13_7":"Canara HSBC Oriental Bank of  \nCommerce Life Insurance Smart Stage Money Back Plan",
"2_14_1":"Designation",
"2_14_3":"<<Designation>>",
"2_15_1":"Gender: ",
"2_15_3":"FEMALE",
"2_17_1":"Date of Illustration: ",
"2_17_3": _g.parseDate("41465.0"),
"2_17_5":"Policy Term: ",
"2_17_7":15,
"2_17_8":"Years",
"2_19_1":"Base Sum Assured (In. Rs.): ",
"2_19_3":374902,
"2_19_5":"Premium Payment Term: ",
"2_19_7":11,
"2_19_8":"Years",
"2_20_1":"Death Benefit Sum Assured(In. Rs.):",
"2_20_3":382770,
"2_20_5":"Premium Payment Frequency:",
"2_20_7":"Yearly",
"2_21_5":"Annualised Premium: ",
"2_21_7":38277,
"2_22_1":"Maturity Benefit @4% :",
"2_22_3":356156.9,
"2_22_5":"Instalment Premium : ",
"2_22_7":39138,
"2_23_1":"Maturity Benefit  @8% :",
"2_23_3":421764.75,
"2_25_1":"Illustration with Standard Mortality rates",
"2_27_6":"Guaranteed Benefits",
"2_27_9":"Non Guaranteed Benefits",
"2_28_1":"Year",
"2_28_2":"Age at the beginning of the Year",
"2_28_3":"Annualized Premium (`)",
"2_28_4":"Service Tax and applicable cess (`)",
"2_28_5":"Total Premium (`)",
"2_28_6":"Death Benefit (`)",
"2_28_7":"Survival\/Maturity benefits (`)",
"2_28_8":"Surrender Value(`)",
"2_28_9":"Accumulated Annual Bonus at an assumed investment return of 4% (`)",
"2_28_10":"Accumulated Annual Bonus at an assumed investment return of 8% (`)",
"2_29_1":1,
"2_29_2":30,
"2_29_3":38277,
"2_29_4":1435.39,
"2_29_5":39712.39,
"2_29_6":382770,
"2_29_7":0,
"2_29_8":0,
"2_29_9":7498.04,
"2_29_10":9372.55,
"2_30_1":2,
"2_30_2":31,
"2_30_3":38277,
"2_30_4":717.69,
"2_30_5":38994.69,
"2_30_6":382770,
"2_30_7":0,
"2_30_8":0,
"2_30_9":14996.08,
"2_30_10":18745.1,
"2_31_1":3,
"2_31_2":32,
"2_31_3":38277,
"2_31_4":717.69,
"2_31_5":38994.69,
"2_31_6":382770,
"2_31_7":0,
"2_31_8":34449.3,
"2_31_9":22494.12,
"2_31_10":28117.65,
"2_32_1":4,
"2_32_2":33,
"2_32_3":38277,
"2_32_4":717.69,
"2_32_5":38994.69,
"2_32_6":382770,
"2_32_7":56235.3,
"2_32_8":20318.7,
"2_32_9":29992.16,
"2_32_10":37490.2,
"2_33_1":5,
"2_33_2":34,
"2_33_3":38277,
"2_33_4":717.69,
"2_33_5":38994.69,
"2_33_6":382770,
"2_33_7":0,
"2_33_8":39457.2,
"2_33_9":37490.2,
"2_33_10":46862.75,
"2_34_1":6,
"2_34_2":35,
"2_34_3":38277,
"2_34_4":717.69,
"2_34_5":38994.69,
"2_34_6":382770,
"2_34_7":0,
"2_34_8":58595.7,
"2_34_9":44988.24,
"2_34_10":56235.3,
"2_35_1":7,
"2_35_2":36,
"2_35_3":38277,
"2_35_4":717.69,
"2_35_5":38994.69,
"2_35_6":382770,
"2_35_7":0,
"2_35_8":77734.2,
"2_35_9":52486.28,
"2_35_10":65607.85,
"2_36_1":8,
"2_36_2":37,
"2_36_3":38277,
"2_36_4":717.69,
"2_36_5":38994.69,
"2_36_6":382770,
"2_36_7":56235.3,
"2_36_8":46761.72,
"2_36_9":59984.32,
"2_36_10":74980.4,
"2_37_1":9,
"2_37_2":38,
"2_37_3":38277,
"2_37_4":717.69,
"2_37_5":38994.69,
"2_37_6":382770,
"2_37_7":0,
"2_37_8":73555.62,
"2_37_9":67482.36,
"2_37_10":84352.95,
"2_38_1":10,
"2_38_2":39,
"2_38_3":38277,
"2_38_4":717.69,
"2_38_5":38994.69,
"2_38_6":382770,
"2_38_7":0,
"2_38_8":101880.6,
"2_38_9":74980.4,
"2_38_10":93725.5,
"2_39_1":11,
"2_39_2":40,
"2_39_3":38277,
"2_39_4":717.69,
"2_39_5":38994.69,
"2_39_6":382770,
"2_39_7":0,
"2_39_8":131736.66,
"2_39_9":82478.44,
"2_39_10":103098.05,
"2_40_1":12,
"2_40_2":41,
"2_40_3":0,
"2_40_4":0,
"2_40_5":0,
"2_40_6":382770,
"2_40_7":56235.3,
"2_40_8":83922.3,
"2_40_9":89976.48,
"2_40_10":112470.6,
"2_41_1":13,
"2_41_2":42,
"2_41_3":0,
"2_41_4":0,
"2_41_5":0,
"2_41_6":382770,
"2_41_7":0,
"2_41_8":92343.24,
"2_41_9":97474.52,
"2_41_10":121843.15,
"2_42_1":14,
"2_42_2":43,
"2_42_3":0,
"2_42_4":0,
"2_42_5":0,
"2_42_6":382770,
"2_42_7":0,
"2_42_8":100764.18,
"2_42_9":104972.56,
"2_42_10":131215.7,
"2_43_1":15,
"2_43_2":44,
"2_43_3":0,
"2_43_4":0,
"2_43_5":0,
"2_43_6":382770,
"2_43_7":206196.1,
"2_43_8":0,
"2_43_9":112470.6,
"2_43_10":140588.25,
"2_44_8":"Final Bonus at Maturity",
"2_44_9":37490.2,
"2_44_10":74980.4,
"2_45_8":"Total Bonus",
"2_45_9":149960.8,
"2_45_10":215568.65,
"2_46_1":"(1)  The Company shall ensure that the total maturity benefit (including the money back benefits and bonus) is higher than the sum total of all due premiums payable (excluding service tax and extra premum, if any) by the policyholder. The Company has also illustrated above, returns projected at gross interest rates of 4% and 8%",
"2_47_1":"(2) The Death Benefit payable on death of Life Assured is:\n \"Higher of (Sum Assured chosen or 10 times of Annualised Premium) + Annual Bonuses added till date of death + Interim Bonus (if any) along with Final Bonus (if any at date of death)\nPlease note that the death benefit will be at least 105% of (all premiums paid less extra premiums paid, if any)\".",
"2_48_1":"On payment of death benefit ,the policy stands will stand terminated.",
"2_50_1":"Notes:",
"2_52_1":"1. Some benefits are guaranteed and some benefits are variable with returns based on the future performance of your Insurer carrying on life insurance business. If your policy  \n    offers guaranteed returns then these will be clearly marked \u201Cguaranteed\u201D in the illustration table. If your policy offers variable returns then the illustrations on this \n    page will show two different rates of assumed future investment returns. These assumed rates of return are not guaranteed and they are not the upper or lower limits of what you \n    might get back, as the value of your policy is dependent on a number of factors including future investment performance.",
"2_53_1":"2. Annual bonuses and final bonus (if any) are shown at an assumed investment rate of 4% or 8% every year in this illustration. There is no guarantee on the amount of  bonuses and these ",
"2_54_1":"    will be declared at the sole discretion of the company.",
"2_55_1":"3. This is a traditional plan intended for long term savings and benefits. It is strongly advised that the policy should be continued throughout the defined policy ",
"2_56_1":"    term to realise the full benefits. Early exit should not be opted for unless there is no other alternative available, as it will impact the policy value. If premiums are discontinued",
"2_57_1":"    after paying at least three years premiums, the policy will acquire a Paid-up value that you will receive on death or on maturity, whichever is earlier provided you have not",
"2_58_1":"    surrendered the policy.",
"2_59_1":"4. Your policy will acquire a guaranteed surrender value (GSV) after payment of at least three years premium. However, the company may offer a special surrender value (SSV),",
"2_60_1":"    and higher of GSV and SSV will be paid on surrender. The illustration above only shows the guaranteed surrender value payable.",
"2_61_1":"5.  Premiums payable and benefits receivable under this plan are eligible for tax benefits as per the prevailing tax laws subject to amendments from time to time. ",
"2_62_1":"6.  The above premium is for a healthy individual. Your application will be assessed as per board approved underwriting guidelines of the company. Basis underwriting, it may result in an extra premium to be paid, which shall be ",
"2_63_1":"      borne by you.",
"2_64_1":"7. The above illustration takes into account currently applicable service tax & cess. However, the applicable taxes may change from time to time and premium payable will change accordingly.",
"2_65_1":"8. The above illustration does not take into account rider charges (if any).",
"2_67_1":"Disclosures",
"2_68_1":"1. <<Non Staff policies only>>: Corporate Agent will receive 23.5% commission on first year premium and 1% commission on renewal premiums during year 2nd to 4th from the Company for this transaction. For policies ",
"2_69_1":"    sold directly, no commision is payable.IRDA regulations do not permit Corporate Agent or its employees to pay such commission, whether in part or whole, as an inducement to any person to take out or renew or continue",
"2_70_1":"     an insurance policy of any kind. (Sec 41 of the Insurance Act, 1938)",
"2_71_1":"   <<Staff policies only>>: Corporate Agent will receive 11.75% commission on first year premium and 1% commission on renewal premiums during year 2nd to 4th from the Company for this transaction.\n",
"2_72_1":"    IRDA regulations do not permit Corporate Agent or its employees to pay such commission, whether in part or whole, as an inducement to any person to take out or renew or continue an insurance policy of",
"2_73_1":"    any kind. (Sec 41 of the Insurance Act, 1938)",
"2_74_1":"2. Insurance is the subject matter of the solicitation",
"2_75_1":"Risk Factors",
"2_76_1":"There is no guarantee on the amount of bonuses and these will be declared at the sole discretion of the company. Hence, the bonuses in this plan may vary from time to time.",
"2_78_1":"Declaration",
"2_79_1":"I\u2026\u2026\u2026\u2026\u2026..\u2026\u2026\u2026..\u2026\u2026\u2026\u2026\u2026..(Name), have explained the information with respect to the above, to the proposer before entering into the contract.",
"2_82_1":"Marketing officials' Signature: ",
"2_84_1":"Place:",
"2_86_1":"Date:",
"2_88_1":"I .............................................. (Name),having received the information with respect to the above,have understood the above statement before entering into the contract.",
"2_91_1":"Proposer's Signature: ",
"2_93_1":"Place:",
"2_95_1":"Date:",
"3_1_2":"INPUT",
"3_3_2":"TEST1",
"3_3_3":"TEST2",
"3_3_4":"TEST3",
"3_4_1":"Orig. Installment Premium \"Including\" Service Tax",
"3_4_2":40000,
"3_4_3":5000,
"3_4_4":750000,
"3_5_1":"Date of Illustration: ",
"3_5_2": _g.parseDate("1.3733946E12"),
"3_5_3": _g.parseDate("1.4134842E12"),
"3_5_4": _g.parseDate("1.4533146E12"),
"3_6_1":"Age Last Birthday as on Date of Commencement",
"3_6_2":30,
"3_6_3":25,
"3_6_4":50,
"3_7_1":"Gender: ",
"3_7_2":"F",
"3_7_3":"M",
"3_7_4":"M",
"3_8_1":"Premium Frequency",
"3_8_2":1,
"3_8_3":12,
"3_8_4":12,
"3_9_1":"NSAP Extra",
"3_9_2":"No",
"3_9_3":"Yes",
"3_9_4":"Yes",
"3_10_1":"Orig. Installment Premium \"Including\" Service Tax ( Cell F4)",
"3_10_2":"Yes",
"3_10_3":"Yes",
"3_10_4":"No",
"3_12_2":"OUTPUT",
"3_13_1":"SA Out put for Reverse Calculator",
"3_13_2":374902,
"3_13_3":523827,
"3_13_4":75757576,
};
var xl2g=null;
var aptg = [
	{sheet: 2, row: 0, col: 1, rowEnd: 97, colEnd: 11, name: ""}, /*0*/
	{sheet: 1, row: 1, col: 13, rowEnd: 50, colEnd: 24, name: ""}, /*1*/
	{sheet: 1, row: 3, col: 5, rowEnd: 16, colEnd: 8, name: ""}, /*2*/
	{sheet: 1, row: 3, col: 1, rowEnd: 8, colEnd: 3, name: ""}, /*3*/
	{sheet: 1, row: 12, col: 1, rowEnd: 13, colEnd: 2, name: ""}, /*4*/
	{sheet: 1, row: 3, col: 10, rowEnd: 50, colEnd: 11, name: ""}, /*5*/
	{sheet: 0, row: 4, col: 1, rowEnd: 30, colEnd: 10, name: ""}, /*6*/
	{sheet: 0, row: 4, col: 5, rowEnd: 4, colEnd: 10, name: ""}, /*7*/
	{sheet: 1, row: 2, col: 26, rowEnd: 13, colEnd: 27, name: ""}, /*8*/
	{sheet: 1, row: 1, col: 13, rowEnd: 50, colEnd: 13, name: ""}, /*9*/
	{sheet: 1, row: 1, col: 13, rowEnd: 2, colEnd: 24, name: ""}, /*10*/
	{sheet: 1, row: 24, col: 33, rowEnd: 27, colEnd: 33, name: ""}, /*11*/
	{sheet: 1, row: 24, col: 34, rowEnd: 27, colEnd: 34, name: ""}, /*12*/
	{sheet: 2, row: 29, col: 7, rowEnd: 29, colEnd: 7, name: ""}, /*13*/
	{sheet: 2, row: 29, col: 7, rowEnd: 30, colEnd: 7, name: ""}, /*14*/
	{sheet: 2, row: 29, col: 7, rowEnd: 31, colEnd: 7, name: ""}, /*15*/
	{sheet: 2, row: 29, col: 7, rowEnd: 32, colEnd: 7, name: ""}, /*16*/
	{sheet: 2, row: 29, col: 7, rowEnd: 33, colEnd: 7, name: ""}, /*17*/
	{sheet: 2, row: 29, col: 7, rowEnd: 34, colEnd: 7, name: ""}, /*18*/
	{sheet: 2, row: 29, col: 7, rowEnd: 35, colEnd: 7, name: ""}, /*19*/
	{sheet: 2, row: 29, col: 7, rowEnd: 36, colEnd: 7, name: ""}, /*20*/
	{sheet: 2, row: 29, col: 7, rowEnd: 37, colEnd: 7, name: ""}, /*21*/
	{sheet: 2, row: 29, col: 7, rowEnd: 38, colEnd: 7, name: ""}, /*22*/
	{sheet: 2, row: 29, col: 7, rowEnd: 39, colEnd: 7, name: ""}, /*23*/
	{sheet: 2, row: 29, col: 7, rowEnd: 40, colEnd: 7, name: ""}, /*24*/
	{sheet: 2, row: 29, col: 7, rowEnd: 41, colEnd: 7, name: ""}, /*25*/
	{sheet: 2, row: 29, col: 7, rowEnd: 42, colEnd: 7, name: ""}, /*26*/
	{sheet: 2, row: 29, col: 7, rowEnd: 43, colEnd: 7, name: ""}, /*27*/
];
var named = {
	"_xlnm.Print_Area": "",
	"AB_SC1": AB_SC1(),
	"AB_SC2": AB_SC2(),
	"AGE": AGE(),
	"AP_YR1_EXCL_ST": AP_YR1_EXCL_ST(),
	"AP_YR2_EXCL_ST": AP_YR2_EXCL_ST(),
	"DB_SA": DB_SA(),
	"EMR": EMR(),
	"EMR_IND": EMR_IND(),
	"EMR_TAB": EMR_TAB(),
	"EXT_YR1_EXCL_ST": EXT_YR1_EXCL_ST(),
	"EXT_YR2_EXCL_ST": EXT_YR2_EXCL_ST(),
	"FB_SC1": FB_SC1(),
	"FB_SC2": FB_SC2(),
	"FLAT_Extra": FLAT_Extra(),
	"FLAT_EXTRA_IND": FLAT_EXTRA_IND(),
	"FREQUENCY": FREQUENCY(),
	"GSV_TAB": GSV_TAB(),
	"HIGH_SA_REBATE": HIGH_SA_REBATE(),
	"INSTL_YR1": INSTL_YR1(),
	"INSTL_YR2": INSTL_YR2(),
	"MB_SA1": MB_SA1(),
	"MB_SA2": MB_SA2(),
	"MB_SA3": MB_SA3(),
	"MB_TIME1": MB_TIME1(),
	"MB_TIME2": MB_TIME2(),
	"MB_TIME3": MB_TIME3(),
	"MMR_EXTRA": MMR_EXTRA(),
	"MMR_IND": MMR_IND(),
	"MODAL_FAC": MODAL_FAC(),
	"NASP_EXTRA": NASP_EXTRA(),
	"NASP_IND": NASP_IND(),
	"PPT": PPT(),
	"PREM_TAB": PREM_TAB(),
	"PT": PT(),
	"RATES": RATES(),
	"RATES_HEADINGS": RATES_HEADINGS(),
	"SA": SA(),
	"ST_Indicator": ST_Indicator(),
	"STAFF_DISCOUNT": STAFF_DISCOUNT(),
	"STAFF_IND": STAFF_IND(),
	"WORK_DISCOUNT": WORK_DISCOUNT(),
	"WORKSITE_IND": WORKSITE_IND(),
	"Z_62820361_09A2_4017_BBE8_24D19F84BCDB_.wvu.PrintArea": Z_62820361_09A2_4017_BBE8_24D19F84BCDB__wvu_PrintArea(),
};
function formula1_0_1(){
	return ['Yes'	,'No'	]}
function formula2_0_1(){
	return ['Yes','No']}
function formula1_0_3(){
	return ['Yes'	,'No'	]}
function formula2_0_3(){
	return ['Yes','No']}
function formula1_0_6(){
	return ['15'	]}
function formula2_0_6(){
	return ['15']}
function formula1_0_7(){
	return ['11'	]}
function formula2_0_7(){
	return ['11']}
function formula1_0_10(){
	return ['1'	,'12'	]}
function formula2_0_10(){
	return ['1','12']}
function formula1_0_11(){
	return ['MALE'	,' FEMALE'	]}
function formula2_0_11(){
	return ['MALE',' FEMALE']}
function doValidations(){
var tmp=null;
	tmp = null;
	if(_g.states['v_0_1']!==_g.evalCount){tmp = formula1_0_1();_g.states['c_0_1'] = tmp;_g.states['v_0_1'] = _g.evalCount;}
	else tmp=_g.states['c_0_1'];
	updateListValidations("0_17_2", tmp);
	tmp = null;
	if(_g.states['v_0_3']!==_g.evalCount){tmp = formula1_0_3();_g.states['c_0_3'] = tmp;_g.states['v_0_3'] = _g.evalCount;}
	else tmp=_g.states['c_0_3'];
	updateListValidations("0_11_2", tmp);
	tmp = null;
	if(_g.states['v_0_3']!==_g.evalCount){tmp = formula1_0_3();_g.states['c_0_3'] = tmp;_g.states['v_0_3'] = _g.evalCount;}
	else tmp=_g.states['c_0_3'];
	updateListValidations("0_12_2", tmp);
	tmp = null;
	if(_g.states['v_0_3']!==_g.evalCount){tmp = formula1_0_3();_g.states['c_0_3'] = tmp;_g.states['v_0_3'] = _g.evalCount;}
	else tmp=_g.states['c_0_3'];
	updateListValidations("0_13_2", tmp);
	tmp = null;
	if(_g.states['v_0_3']!==_g.evalCount){tmp = formula1_0_3();_g.states['c_0_3'] = tmp;_g.states['v_0_3'] = _g.evalCount;}
	else tmp=_g.states['c_0_3'];
	updateListValidations("0_14_2", tmp);
	tmp = null;
	if(_g.states['v_0_3']!==_g.evalCount){tmp = formula1_0_3();_g.states['c_0_3'] = tmp;_g.states['v_0_3'] = _g.evalCount;}
	else tmp=_g.states['c_0_3'];
	updateListValidations("0_15_2", tmp);
	tmp = null;
	if(_g.states['v_0_3']!==_g.evalCount){tmp = formula1_0_3();_g.states['c_0_3'] = tmp;_g.states['v_0_3'] = _g.evalCount;}
	else tmp=_g.states['c_0_3'];
	updateListValidations("0_16_2", tmp);
	tmp = null;
	if(_g.states['v_0_6']!==_g.evalCount){tmp = formula1_0_6();_g.states['c_0_6'] = tmp;_g.states['v_0_6'] = _g.evalCount;}
	else tmp=_g.states['c_0_6'];
	updateListValidations("0_7_2", tmp);
	tmp = null;
	if(_g.states['v_0_7']!==_g.evalCount){tmp = formula1_0_7();_g.states['c_0_7'] = tmp;_g.states['v_0_7'] = _g.evalCount;}
	else tmp=_g.states['c_0_7'];
	updateListValidations("0_8_2", tmp);
	tmp = null;
	if(_g.states['v_0_10']!==_g.evalCount){tmp = formula1_0_10();_g.states['c_0_10'] = tmp;_g.states['v_0_10'] = _g.evalCount;}
	else tmp=_g.states['c_0_10'];
	updateListValidations("0_10_2", tmp);
	tmp = null;
	if(_g.states['v_0_11']!==_g.evalCount){tmp = formula1_0_11();_g.states['c_0_11'] = tmp;_g.states['v_0_11'] = _g.evalCount;}
	else tmp=_g.states['c_0_11'];
	updateListValidations("0_6_2", tmp);
}
function _xlnm_Print_Area(){
	return aptg[0];
}
function AB_SC1(){
	return data["1_22_2"];
}
function AB_SC2(){
	return data["1_23_2"];
}
function AGE(){
	return data["0_5_2"];
}
function AP_YR1_EXCL_ST(){
	return data["1_20_30"];
}
function AP_YR2_EXCL_ST(){
	return data["1_23_30"];
}
function DB_SA(){
	return data["1_27_30"];
}
function EMR(){
	return data["0_13_3"];
}
function EMR_IND(){
	return data["0_13_2"];
}
function EMR_TAB(){
	return aptg[1];
}
function EXT_YR1_EXCL_ST(){
	return data["1_21_30"];
}
function EXT_YR2_EXCL_ST(){
	return data["1_24_30"];
}
function FB_SC1(){
	return data["1_22_3"];
}
function FB_SC2(){
	return data["1_23_3"];
}
function FLAT_Extra(){
	return data["0_12_3"];
}
function FLAT_EXTRA_IND(){
	return data["0_12_2"];
}
function FREQUENCY(){
	return data["0_10_2"];
}
function GSV_TAB(){
	return aptg[2];
}
function HIGH_SA_REBATE(){
	return aptg[3];
}
function INSTL_YR1(){
	return data["1_22_30"];
}
function INSTL_YR2(){
	return data["1_25_30"];
}
function MB_SA1(){
	return data["1_17_2"];
}
function MB_SA2(){
	return data["1_18_2"];
}
function MB_SA3(){
	return data["1_19_2"];
}
function MB_TIME1(){
	return data["1_17_1"];
}
function MB_TIME2(){
	return data["1_18_1"];
}
function MB_TIME3(){
	return data["1_19_1"];
}
function MMR_EXTRA(){
	return data["0_11_3"];
}
function MMR_IND(){
	return data["0_11_2"];
}
function MODAL_FAC(){
	return aptg[4];
}
function NASP_EXTRA(){
	return data["0_15_3"];
}
function NASP_IND(){
	return data["0_15_2"];
}
function PPT(){
	return data["0_8_2"];
}
function PREM_TAB(){
	return aptg[5];
}
function PT(){
	return data["0_7_2"];
}
function RATES(){
	return aptg[6];
}
function RATES_HEADINGS(){
	return aptg[7];
}
function SA(){
	return data["0_9_2"];
}
function ST_Indicator(){
	return data["0_17_2"];
}
function STAFF_DISCOUNT(){
	return data["0_14_3"];
}
function STAFF_IND(){
	return data["0_14_2"];
}
function WORK_DISCOUNT(){
	return data["0_16_3"];
}
function WORKSITE_IND(){
	return data["0_16_2"];
}
function Z_62820361_09A2_4017_BBE8_24D19F84BCDB__wvu_PrintArea(){
	return aptg[0];
}
_g.calc0_8_2 = function(){
};
_g.calc0_16_2 = function(){
};
_g.calc0_13_2 = function(){
};
_g.calc0_10_2 = function(){
};
_g.calc0_17_2 = function(){
};
_g.calc0_7_2 = function(){
};
_g.calc0_15_2 = function(){
};
_g.calc0_12_2 = function(){
};
_g.calc0_14_2 = function(){
};
_g.calc0_11_2 = function(){
};
_g.calc0_6_2 = function(){
};
_g.calc0_4_5 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["1_20_46"],data["1_22_46"],data["1_23_46"]);
	tmp[1]=_g.CONCATENATE(data["1_20_46"],data["1_21_46"],data["1_23_46"]);
	tmp[2]=0;
	if( (_g.equal(ST_Indicator(),"No")) ){
		tmp[2]=tmp[0];
	}else{
		tmp[2]=tmp[1];
	}
	data["0_4_5"]=tmp[2];
}
_g.calc0_7_8 = function(){
var tmp = [];
	tmp[0]=_g.IFERROR(data["1_1_27"],0);
	data["0_7_8"]=tmp[0];
}
_g.calc0_7_9 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["0_7_8"],0)) ){
		tmp[0]="The calculated Sum Assured is less than the minimum allowed, Thus input a higher Premium";
	}else{
		tmp[0]="";
	}
	data["0_7_9"]=tmp[0];
}
_g.calc0_9_2 = function(){
	data["0_9_2"]=data["0_7_8"];
}
_g.calc0_20_2 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(ST_Indicator(),"No")) ){
		tmp[0]=data["1_22_38"];
	}else{
		tmp[0]=data["1_22_40"];
	}
	data["0_20_2"]=tmp[0];
}
_g.calc0_26_2 = function(){
	data["0_26_2"]=_g.sub(data["0_20_2"],data["0_4_8"] );
}
_g.calc1_1_16 = function(){
	data["1_1_16"]=_g.add(data["1_0_15"],(((1))/100.0) );
}
_g.calc1_1_17 = function(){
	data["1_1_17"]=_g.add(data["1_0_16"],(((1))/100.0) );
}
_g.calc1_1_18 = function(){
	data["1_1_18"]=_g.add(data["1_0_17"],(((1))/100.0) );
}
_g.calc1_1_19 = function(){
	data["1_1_19"]=_g.add(data["1_0_18"],(((1))/100.0) );
}
_g.calc1_1_20 = function(){
	data["1_1_20"]=_g.add(data["1_0_19"],(((1))/100.0) );
}
_g.calc1_1_21 = function(){
	data["1_1_21"]=_g.add(data["1_0_20"],(((1))/100.0) );
}
_g.calc1_1_22 = function(){
	data["1_1_22"]=_g.add(data["1_0_21"],(((1))/100.0) );
}
_g.calc1_1_23 = function(){
	data["1_1_23"]=_g.add(data["1_0_22"],(((1))/100.0) );
}
_g.calc1_1_24 = function(){
	data["1_1_24"]=_g.add(data["1_0_23"],(((1))/100.0) );
}
_g.calc1_1_27 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP("OK",aptg[8],2,0);
	data["1_1_27"]=_g.ROUNDDOWN(tmp[0],0);
}
_g.calc1_2_15 = function(){
	data["1_2_15"]=_g.add(data["1_2_14"],1 );
}
_g.calc1_2_16 = function(){
	data["1_2_16"]=_g.add(data["1_2_15"],1 );
}
_g.calc1_2_17 = function(){
	data["1_2_17"]=_g.add(data["1_2_16"],1 );
}
_g.calc1_2_18 = function(){
	data["1_2_18"]=_g.add(data["1_2_17"],1 );
}
_g.calc1_2_19 = function(){
	data["1_2_19"]=_g.add(data["1_2_18"],1 );
}
_g.calc1_2_20 = function(){
	data["1_2_20"]=_g.add(data["1_2_19"],1 );
}
_g.calc1_2_21 = function(){
	data["1_2_21"]=_g.add(data["1_2_20"],1 );
}
_g.calc1_2_22 = function(){
	data["1_2_22"]=_g.add(data["1_2_21"],1 );
}
_g.calc1_2_23 = function(){
	data["1_2_23"]=_g.add(data["1_2_22"],1 );
}
_g.calc1_2_24 = function(){
	data["1_2_24"]=_g.add(data["1_2_23"],1 );
}
_g.calc1_2_27 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(AGE(),PREM_TAB(),2,1);
	tmp[1]=_g.MAX(1,_g.mul(MMR_EXTRA(),(_g.equal(MMR_IND(),"Yes")) ));
	tmp[2]=_g.MATCH(AGE(),aptg[9],0);
	tmp[3]=_g.HLOOKUP(EMR(),aptg[10],2,1);
	tmp[4]=_g.INDEX(EMR_TAB(),tmp[2],tmp[3]);
	tmp[5]=_g.VLOOKUP(FREQUENCY(),MODAL_FAC(),2,0);
	data["1_2_27"]=_g.ROUND(_g.mul((_g.add(_g.add(_g.add(_g.mul((_g.sub(_g.ROUND(_g.mul(tmp[0],(_g.sub(1,_g.mul(WORK_DISCOUNT(),(_g.equal(WORKSITE_IND(),"Yes")) ) )) ),2),data["1_8_3"] )),tmp[1] ),_g.mul((_g.equal(EMR_IND(),"Yes")),tmp[4] ) ),_g.mul(FLAT_Extra(),(_g.equal(FLAT_EXTRA_IND(),"Yes")) ) ),_g.mul(NASP_EXTRA(),(_g.equal(NASP_IND(),"Yes")) ) )),tmp[5] ),4);
}
_g.calc1_3_26 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_3_27"])) >= (_g.num(data["1_8_1"]))) ){
		tmp[0]="OK";
	}else{
		tmp[0]="Not OK";
	}
	data["1_3_26"]=tmp[0];
}
_g.calc1_3_27 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(ST_Indicator(),"No")) ){
		tmp[0]=(_g.div(_g.mul(data["0_4_8"],1000 ),data["1_2_27"] ));
	}else{
		tmp[0]=(_g.div(_g.mul((_g.div(data["0_4_8"],(_g.add(1,data["0_23_2"] )) )),1000 ),data["1_2_27"] ));
	}
	tmp[1]=_g.IFERROR(_g.ROUND(tmp[0],0),0);
	data["1_3_27"]=tmp[1];
}
_g.calc1_4_10 = function(){
	data["1_4_10"]=_g.add(data["1_3_10"],1 );
}
_g.calc1_4_13 = function(){
	data["1_4_13"]=_g.add(data["1_3_13"],1 );
}
_g.calc1_4_27 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(AGE(),PREM_TAB(),2,1);
	tmp[1]=_g.MAX(1,_g.mul(MMR_EXTRA(),(_g.equal(MMR_IND(),"Yes")) ));
	tmp[2]=_g.MATCH(AGE(),aptg[9],0);
	tmp[3]=_g.HLOOKUP(EMR(),aptg[10],2,1);
	tmp[4]=_g.INDEX(EMR_TAB(),tmp[2],tmp[3]);
	tmp[5]=_g.VLOOKUP(FREQUENCY(),MODAL_FAC(),2,0);
	data["1_4_27"]=_g.ROUND(_g.mul((_g.add(_g.add(_g.add(_g.mul((_g.sub(_g.ROUND(_g.mul(tmp[0],(_g.sub(1,_g.mul(WORK_DISCOUNT(),(_g.equal(WORKSITE_IND(),"Yes")) ) )) ),2),data["1_7_3"] )),tmp[1] ),_g.mul((_g.equal(EMR_IND(),"Yes")),tmp[4] ) ),_g.mul(FLAT_Extra(),(_g.equal(FLAT_EXTRA_IND(),"Yes")) ) ),_g.mul(NASP_EXTRA(),(_g.equal(NASP_IND(),"Yes")) ) )),tmp[5] ),4);
}
_g.calc1_5_10 = function(){
	data["1_5_10"]=_g.add(data["1_4_10"],1 );
}
_g.calc1_5_13 = function(){
	data["1_5_13"]=_g.add(data["1_4_13"],1 );
}
_g.calc1_5_26 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_5_27"])) >= (_g.num(data["1_7_1"]))) ){
		tmp[0]="OK";
	}else{
		tmp[0]="Not OK";
	}
	data["1_5_26"]=tmp[0];
}
_g.calc1_5_27 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(ST_Indicator(),"No")) ){
		tmp[0]=(_g.div(_g.mul(data["0_4_8"],1000 ),data["1_4_27"] ));
	}else{
		tmp[0]=(_g.div(_g.mul((_g.div(data["0_4_8"],(_g.add(1,data["0_23_2"] )) )),1000 ),data["1_4_27"] ));
	}
	tmp[1]=_g.IFERROR(_g.ROUND(tmp[0],0),0);
	data["1_5_27"]=tmp[1];
}
_g.calc1_6_10 = function(){
	data["1_6_10"]=_g.add(data["1_5_10"],1 );
}
_g.calc1_6_13 = function(){
	data["1_6_13"]=_g.add(data["1_5_13"],1 );
}
_g.calc1_6_27 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(AGE(),PREM_TAB(),2,1);
	tmp[1]=_g.MAX(1,_g.mul(MMR_EXTRA(),(_g.equal(MMR_IND(),"Yes")) ));
	tmp[2]=_g.MATCH(AGE(),aptg[9],0);
	tmp[3]=_g.HLOOKUP(EMR(),aptg[10],2,1);
	tmp[4]=_g.INDEX(EMR_TAB(),tmp[2],tmp[3]);
	tmp[5]=_g.VLOOKUP(FREQUENCY(),MODAL_FAC(),2,0);
	data["1_6_27"]=_g.ROUND(_g.mul((_g.add(_g.add(_g.add(_g.mul((_g.sub(_g.ROUND(_g.mul(tmp[0],(_g.sub(1,_g.mul(WORK_DISCOUNT(),(_g.equal(WORKSITE_IND(),"Yes")) ) )) ),2),data["1_6_3"] )),tmp[1] ),_g.mul((_g.equal(EMR_IND(),"Yes")),tmp[4] ) ),_g.mul(FLAT_Extra(),(_g.equal(FLAT_EXTRA_IND(),"Yes")) ) ),_g.mul(NASP_EXTRA(),(_g.equal(NASP_IND(),"Yes")) ) )),tmp[5] ),4);
}
_g.calc1_7_10 = function(){
	data["1_7_10"]=_g.add(data["1_6_10"],1 );
}
_g.calc1_7_13 = function(){
	data["1_7_13"]=_g.add(data["1_6_13"],1 );
}
_g.calc1_7_26 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_7_27"])) >= (_g.num(data["1_6_1"]))) ){
		tmp[0]="OK";
	}else{
		tmp[0]="Not OK";
	}
	data["1_7_26"]=tmp[0];
}
_g.calc1_7_27 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(ST_Indicator(),"No")) ){
		tmp[0]=(_g.div(_g.mul(data["0_4_8"],1000 ),data["1_6_27"] ));
	}else{
		tmp[0]=(_g.div(_g.mul((_g.div(data["0_4_8"],(_g.add(1,data["0_23_2"] )) )),1000 ),data["1_6_27"] ));
	}
	tmp[1]=_g.IFERROR(_g.ROUND(tmp[0],0),0);
	data["1_7_27"]=tmp[1];
}
_g.calc1_8_10 = function(){
	data["1_8_10"]=_g.add(data["1_7_10"],1 );
}
_g.calc1_8_13 = function(){
	data["1_8_13"]=_g.add(data["1_7_13"],1 );
}
_g.calc1_8_27 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(AGE(),PREM_TAB(),2,1);
	tmp[1]=_g.MAX(1,_g.mul(MMR_EXTRA(),(_g.equal(MMR_IND(),"Yes")) ));
	tmp[2]=_g.MATCH(AGE(),aptg[9],0);
	tmp[3]=_g.HLOOKUP(EMR(),aptg[10],2,1);
	tmp[4]=_g.INDEX(EMR_TAB(),tmp[2],tmp[3]);
	tmp[5]=_g.VLOOKUP(FREQUENCY(),MODAL_FAC(),2,0);
	data["1_8_27"]=_g.ROUND(_g.mul((_g.add(_g.add(_g.add(_g.mul((_g.sub(_g.ROUND(_g.mul(tmp[0],(_g.sub(1,_g.mul(WORK_DISCOUNT(),(_g.equal(WORKSITE_IND(),"Yes")) ) )) ),2),data["1_5_3"] )),tmp[1] ),_g.mul((_g.equal(EMR_IND(),"Yes")),tmp[4] ) ),_g.mul(FLAT_Extra(),(_g.equal(FLAT_EXTRA_IND(),"Yes")) ) ),_g.mul(NASP_EXTRA(),(_g.equal(NASP_IND(),"Yes")) ) )),tmp[5] ),4);
}
_g.calc1_9_10 = function(){
	data["1_9_10"]=_g.add(data["1_8_10"],1 );
}
_g.calc1_9_13 = function(){
	data["1_9_13"]=_g.add(data["1_8_13"],1 );
}
_g.calc1_9_26 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_9_27"])) >= (_g.num(data["1_5_1"]))) ){
		tmp[0]="OK";
	}else{
		tmp[0]="Not OK";
	}
	data["1_9_26"]=tmp[0];
}
_g.calc1_9_27 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(ST_Indicator(),"No")) ){
		tmp[0]=(_g.div(_g.mul(data["0_4_8"],1000 ),data["1_8_27"] ));
	}else{
		tmp[0]=(_g.div(_g.mul((_g.div(data["0_4_8"],(_g.add(1,data["0_23_2"] )) )),1000 ),data["1_8_27"] ));
	}
	tmp[1]=_g.IFERROR(_g.ROUND(tmp[0],0),0);
	data["1_9_27"]=tmp[1];
}
_g.calc1_10_10 = function(){
	data["1_10_10"]=_g.add(data["1_9_10"],1 );
}
_g.calc1_10_13 = function(){
	data["1_10_13"]=_g.add(data["1_9_13"],1 );
}
_g.calc1_10_27 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(AGE(),PREM_TAB(),2,1);
	tmp[1]=_g.MAX(1,_g.mul(MMR_EXTRA(),(_g.equal(MMR_IND(),"Yes")) ));
	tmp[2]=_g.MATCH(AGE(),aptg[9],0);
	tmp[3]=_g.HLOOKUP(EMR(),aptg[10],2,1);
	tmp[4]=_g.INDEX(EMR_TAB(),tmp[2],tmp[3]);
	tmp[5]=_g.VLOOKUP(FREQUENCY(),MODAL_FAC(),2,0);
	data["1_10_27"]=_g.ROUND(_g.mul((_g.add(_g.add(_g.add(_g.mul((_g.sub(_g.ROUND(_g.mul(tmp[0],(_g.sub(1,_g.mul(WORK_DISCOUNT(),(_g.equal(WORKSITE_IND(),"Yes")) ) )) ),2),data["1_4_3"] )),tmp[1] ),_g.mul((_g.equal(EMR_IND(),"Yes")),tmp[4] ) ),_g.mul(FLAT_Extra(),(_g.equal(FLAT_EXTRA_IND(),"Yes")) ) ),_g.mul(NASP_EXTRA(),(_g.equal(NASP_IND(),"Yes")) ) )),tmp[5] ),4);
}
_g.calc1_11_10 = function(){
	data["1_11_10"]=_g.add(data["1_10_10"],1 );
}
_g.calc1_11_13 = function(){
	data["1_11_13"]=_g.add(data["1_10_13"],1 );
}
_g.calc1_11_26 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_11_27"])) >= (_g.num(data["1_4_1"]))) ){
		tmp[0]="OK";
	}else{
		tmp[0]="Not OK";
	}
	data["1_11_26"]=tmp[0];
}
_g.calc1_11_27 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(ST_Indicator(),"No")) ){
		tmp[0]=(_g.div(_g.mul(data["0_4_8"],1000 ),data["1_10_27"] ));
	}else{
		tmp[0]=(_g.div(_g.mul((_g.div(data["0_4_8"],(_g.add(1,data["0_23_2"] )) )),1000 ),data["1_10_27"] ));
	}
	tmp[1]=_g.IFERROR(_g.ROUND(tmp[0],0),0);
	data["1_11_27"]=tmp[1];
}
_g.calc1_12_10 = function(){
	data["1_12_10"]=_g.add(data["1_11_10"],1 );
}
_g.calc1_12_13 = function(){
	data["1_12_13"]=_g.add(data["1_11_13"],1 );
}
_g.calc1_12_27 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(AGE(),PREM_TAB(),2,1);
	tmp[1]=_g.MAX(1,_g.mul(MMR_EXTRA(),(_g.equal(MMR_IND(),"Yes")) ));
	tmp[2]=_g.MATCH(AGE(),aptg[9],0);
	tmp[3]=_g.HLOOKUP(EMR(),aptg[10],2,1);
	tmp[4]=_g.INDEX(EMR_TAB(),tmp[2],tmp[3]);
	tmp[5]=_g.VLOOKUP(FREQUENCY(),MODAL_FAC(),2,0);
	data["1_12_27"]=_g.ROUND(_g.mul((_g.add(_g.add(_g.add(_g.mul((_g.sub(_g.ROUND(_g.mul(tmp[0],(_g.sub(1,_g.mul(WORK_DISCOUNT(),(_g.equal(WORKSITE_IND(),"Yes")) ) )) ),2),data["1_3_3"] )),tmp[1] ),_g.mul((_g.equal(EMR_IND(),"Yes")),tmp[4] ) ),_g.mul(FLAT_Extra(),(_g.equal(FLAT_EXTRA_IND(),"Yes")) ) ),_g.mul(NASP_EXTRA(),(_g.equal(NASP_IND(),"Yes")) ) )),tmp[5] ),4);
}
_g.calc1_13_10 = function(){
	data["1_13_10"]=_g.add(data["1_12_10"],1 );
}
_g.calc1_13_13 = function(){
	data["1_13_13"]=_g.add(data["1_12_13"],1 );
}
_g.calc1_13_26 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_13_27"])) >= (_g.num(data["1_3_1"]))) ){
		tmp[0]="OK";
	}else{
		tmp[0]="Not OK";
	}
	data["1_13_26"]=tmp[0];
}
_g.calc1_13_27 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(ST_Indicator(),"No")) ){
		tmp[0]=(_g.div(_g.mul(data["0_4_8"],1000 ),data["1_12_27"] ));
	}else{
		tmp[0]=(_g.div(_g.mul((_g.div(data["0_4_8"],(_g.add(1,data["0_23_2"] )) )),1000 ),data["1_12_27"] ));
	}
	tmp[1]=_g.IFERROR(_g.ROUND(tmp[0],0),0);
	data["1_13_27"]=tmp[1];
}
_g.calc1_14_10 = function(){
	data["1_14_10"]=_g.add(data["1_13_10"],1 );
}
_g.calc1_14_13 = function(){
	data["1_14_13"]=_g.add(data["1_13_13"],1 );
}
_g.calc1_15_10 = function(){
	data["1_15_10"]=_g.add(data["1_14_10"],1 );
}
_g.calc1_15_13 = function(){
	data["1_15_13"]=_g.add(data["1_14_13"],1 );
}
_g.calc1_16_10 = function(){
	data["1_16_10"]=_g.add(data["1_15_10"],1 );
}
_g.calc1_16_13 = function(){
	data["1_16_13"]=_g.add(data["1_15_13"],1 );
}
_g.calc1_17_10 = function(){
	data["1_17_10"]=_g.add(data["1_16_10"],1 );
}
_g.calc1_17_13 = function(){
	data["1_17_13"]=_g.add(data["1_16_13"],1 );
}
_g.calc1_18_10 = function(){
	data["1_18_10"]=_g.add(data["1_17_10"],1 );
}
_g.calc1_18_13 = function(){
	data["1_18_13"]=_g.add(data["1_17_13"],1 );
}
_g.calc1_19_10 = function(){
	data["1_19_10"]=_g.add(data["1_18_10"],1 );
}
_g.calc1_19_13 = function(){
	data["1_19_13"]=_g.add(data["1_18_13"],1 );
}
_g.calc1_19_33 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(AGE(),PREM_TAB(),2,1);
	data["1_19_33"]=tmp[0];
}
_g.calc1_19_34 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(AGE(),PREM_TAB(),2,1);
	data["1_19_34"]=tmp[0];
}
_g.calc1_19_38 = function(){
	data["1_19_38"]=_g.mul(_g.div(SA(),1000 ),data["1_28_33"] );
}
_g.calc1_20_10 = function(){
	data["1_20_10"]=_g.add(data["1_19_10"],1 );
}
_g.calc1_20_13 = function(){
	data["1_20_13"]=_g.add(data["1_19_13"],1 );
}
_g.calc1_20_30 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(FREQUENCY(),MODAL_FAC(),2,1);
	data["1_20_30"]=_g.mul(_g.ROUND(_g.mul(data["1_19_38"],tmp[0] ),0),FREQUENCY() );
}
_g.calc1_20_33 = function(){
	data["1_20_33"]=_g.ROUND(_g.mul(data["1_19_33"],(_g.sub(1,_g.mul(WORK_DISCOUNT(),(_g.equal(WORKSITE_IND(),"Yes")) ) )) ),2);
}
_g.calc1_20_34 = function(){
	data["1_20_34"]=_g.ROUND(_g.mul(data["1_19_34"],(_g.sub(1,_g.mul(WORK_DISCOUNT(),(_g.equal(WORKSITE_IND(),"Yes")) ) )) ),2);
}
_g.calc1_20_38 = function(){
	data["1_20_38"]=_g.mul(_g.div(SA(),1000 ),data["1_29_33"] );
}
_g.calc1_21_10 = function(){
	data["1_21_10"]=_g.add(data["1_20_10"],1 );
}
_g.calc1_21_13 = function(){
	data["1_21_13"]=_g.add(data["1_20_13"],1 );
}
_g.calc1_21_30 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(FREQUENCY(),MODAL_FAC(),2,1);
	data["1_21_30"]=_g.mul(_g.ROUND(_g.mul(data["1_20_38"],tmp[0] ),0),FREQUENCY() );
}
_g.calc1_21_33 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(SA(),HIGH_SA_REBATE(),3,1);
	data["1_21_33"]=tmp[0];
}
_g.calc1_21_34 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(SA(),HIGH_SA_REBATE(),3,1);
	data["1_21_34"]=tmp[0];
}
_g.calc1_21_38 = function(){
	data["1_21_38"]=_g.add(data["1_19_38"],data["1_20_38"] );
}
_g.calc1_22_10 = function(){
	data["1_22_10"]=_g.add(data["1_21_10"],1 );
}
_g.calc1_22_13 = function(){
	data["1_22_13"]=_g.add(data["1_21_13"],1 );
}
_g.calc1_22_30 = function(){
	data["1_22_30"]=data["1_22_40"];
}
_g.calc1_22_33 = function(){
	data["1_22_33"]=_g.sub(data["1_20_33"],data["1_21_33"] );
}
_g.calc1_22_34 = function(){
	data["1_22_34"]=_g.sub(data["1_20_34"],data["1_21_34"] );
}
_g.calc1_22_38 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(FREQUENCY(),MODAL_FAC(),2,1);
	data["1_22_38"]=_g.ROUND(_g.mul(data["1_21_38"],tmp[0] ),0);
}
_g.calc1_22_39 = function(){
	data["1_22_39"]=_g.ROUND(_g.mul(data["1_22_38"],(data["0_23_2"]) ),0);
}
_g.calc1_22_40 = function(){
	data["1_22_40"]=_g.add(data["1_22_38"],data["1_22_39"] );
}
_g.calc1_23_10 = function(){
	data["1_23_10"]=_g.add(data["1_22_10"],1 );
}
_g.calc1_23_13 = function(){
	data["1_23_13"]=_g.add(data["1_22_13"],1 );
}
_g.calc1_23_30 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(FREQUENCY(),MODAL_FAC(),2,1);
	data["1_23_30"]=_g.mul(_g.ROUND(_g.mul(data["1_25_38"],tmp[0] ),0),FREQUENCY() );
}
_g.calc1_23_33 = function(){
	data["1_23_33"]=_g.ROUND(_g.mul(data["1_22_33"],(_g.sub(1,_g.mul(STAFF_DISCOUNT(),(_g.equal(STAFF_IND(),"Yes")) ) )) ),2);
}
_g.calc1_23_34 = function(){
	data["1_23_34"]=_g.ROUND(_g.mul(data["1_22_34"],(_g.sub(1,_g.mul(_g.mul(STAFF_DISCOUNT(),(_g.equal(STAFF_IND(),"Yes")) ),0 ) )) ),2);
}
_g.calc1_24_10 = function(){
	data["1_24_10"]=_g.add(data["1_23_10"],1 );
}
_g.calc1_24_13 = function(){
	data["1_24_13"]=_g.add(data["1_23_13"],1 );
}
_g.calc1_24_30 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(FREQUENCY(),MODAL_FAC(),2,1);
	data["1_24_30"]=_g.mul(_g.ROUND(_g.mul(data["1_26_38"],tmp[0] ),0),FREQUENCY() );
}
_g.calc1_24_33 = function(){
var tmp = [];
	tmp[0]=_g.MATCH(AGE(),aptg[9],0);
	tmp[1]=_g.HLOOKUP(EMR(),aptg[10],2,1);
	tmp[2]=_g.INDEX(EMR_TAB(),tmp[0],tmp[1]);
	data["1_24_33"]=_g.mul((_g.equal(EMR_IND(),"Yes")),tmp[2] );
}
_g.calc1_24_34 = function(){
var tmp = [];
	tmp[0]=_g.MATCH(AGE(),aptg[9],0);
	tmp[1]=_g.HLOOKUP(EMR(),aptg[10],2,TRUE);
	tmp[2]=_g.INDEX(EMR_TAB(),tmp[0],tmp[1]);
	data["1_24_34"]=_g.mul((_g.equal(EMR_IND(),"Yes")),tmp[2] );
}
_g.calc1_25_10 = function(){
	data["1_25_10"]=_g.add(data["1_24_10"],1 );
}
_g.calc1_25_13 = function(){
	data["1_25_13"]=_g.add(data["1_24_13"],1 );
}
_g.calc1_25_30 = function(){
	data["1_25_30"]=data["1_28_40"];
}
_g.calc1_25_33 = function(){
	data["1_25_33"]=_g.mul(NASP_EXTRA(),(_g.equal(NASP_IND(),"Yes")) );
}
_g.calc1_25_34 = function(){
	data["1_25_34"]=_g.mul(NASP_EXTRA(),(_g.equal(NASP_IND(),"Yes")) );
}
_g.calc1_25_38 = function(){
	data["1_25_38"]=_g.mul(_g.div(SA(),1000 ),data["1_28_34"] );
}
_g.calc1_26_10 = function(){
	data["1_26_10"]=_g.add(data["1_25_10"],1 );
}
_g.calc1_26_13 = function(){
	data["1_26_13"]=_g.add(data["1_25_13"],1 );
}
_g.calc1_26_33 = function(){
	data["1_26_33"]=_g.mul(FLAT_Extra(),(_g.equal(FLAT_EXTRA_IND(),"Yes")) );
}
_g.calc1_26_34 = function(){
	data["1_26_34"]=_g.mul(FLAT_Extra(),(_g.equal(FLAT_EXTRA_IND(),"Yes")) );
}
_g.calc1_26_38 = function(){
	data["1_26_38"]=_g.mul(_g.div(SA(),1000 ),data["1_29_34"] );
}
_g.calc1_27_10 = function(){
	data["1_27_10"]=_g.add(data["1_26_10"],1 );
}
_g.calc1_27_13 = function(){
	data["1_27_13"]=_g.add(data["1_26_13"],1 );
}
_g.calc1_27_30 = function(){
var tmp = [];
	tmp[0]=_g.MAX(SA(),_g.mul(10,AP_YR2_EXCL_ST() ));
	data["1_27_30"]=tmp[0];
}
_g.calc1_27_33 = function(){
var tmp = [];
	tmp[0]=_g.MAX((_g.sub(_g.mul(MMR_EXTRA(),(_g.equal(MMR_IND(),"Yes")) ),1 )),0);
	data["1_27_33"]=_g.mul(tmp[0],data["1_23_33"] );
}
_g.calc1_27_34 = function(){
var tmp = [];
	tmp[0]=_g.MAX((_g.sub(_g.mul(MMR_EXTRA(),(_g.equal(MMR_IND(),"Yes")) ),1 )),0);
	data["1_27_34"]=_g.mul(tmp[0],data["1_23_34"] );
}
_g.calc1_27_38 = function(){
	data["1_27_38"]=_g.add(data["1_25_38"],data["1_26_38"] );
}
_g.calc1_28_10 = function(){
	data["1_28_10"]=_g.add(data["1_27_10"],1 );
}
_g.calc1_28_13 = function(){
	data["1_28_13"]=_g.add(data["1_27_13"],1 );
}
_g.calc1_28_30 = function(){
	data["1_28_30"]=data["2_22_3"];
}
_g.calc1_28_33 = function(){
	data["1_28_33"]=data["1_23_33"];
}
_g.calc1_28_34 = function(){
	data["1_28_34"]=data["1_23_34"];
}
_g.calc1_28_38 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(FREQUENCY(),MODAL_FAC(),2,1);
	data["1_28_38"]=_g.ROUND(_g.mul(data["1_27_38"],tmp[0] ),0);
}
_g.calc1_28_39 = function(){
	data["1_28_39"]=_g.ROUND(_g.mul(data["1_28_38"],(data["0_24_2"]) ),0);
}
_g.calc1_28_40 = function(){
	data["1_28_40"]=_g.add(data["1_28_38"],data["1_28_39"] );
}
_g.calc1_29_10 = function(){
	data["1_29_10"]=_g.add(data["1_28_10"],1 );
}
_g.calc1_29_13 = function(){
	data["1_29_13"]=_g.add(data["1_28_13"],1 );
}
_g.calc1_29_30 = function(){
	data["1_29_30"]=data["2_23_3"];
}
_g.calc1_29_33 = function(){
	data["1_29_33"]=_g.SUM(aptg[11]);
}
_g.calc1_29_34 = function(){
	data["1_29_34"]=_g.SUM(aptg[12]);
}
_g.calc1_30_10 = function(){
	data["1_30_10"]=_g.add(data["1_29_10"],1 );
}
_g.calc1_30_13 = function(){
	data["1_30_13"]=_g.add(data["1_29_13"],1 );
}
_g.calc1_31_10 = function(){
	data["1_31_10"]=_g.add(data["1_30_10"],1 );
}
_g.calc1_31_13 = function(){
	data["1_31_13"]=_g.add(data["1_30_13"],1 );
}
_g.calc1_32_10 = function(){
	data["1_32_10"]=_g.add(data["1_31_10"],1 );
}
_g.calc1_32_13 = function(){
	data["1_32_13"]=_g.add(data["1_31_13"],1 );
}
_g.calc1_33_10 = function(){
	data["1_33_10"]=_g.add(data["1_32_10"],1 );
}
_g.calc1_33_13 = function(){
	data["1_33_13"]=_g.add(data["1_32_13"],1 );
}
_g.calc1_34_10 = function(){
	data["1_34_10"]=_g.add(data["1_33_10"],1 );
}
_g.calc1_34_13 = function(){
	data["1_34_13"]=_g.add(data["1_33_13"],1 );
}
_g.calc1_35_10 = function(){
	data["1_35_10"]=_g.add(data["1_34_10"],1 );
}
_g.calc1_35_13 = function(){
	data["1_35_13"]=_g.add(data["1_34_13"],1 );
}
_g.calc1_36_10 = function(){
	data["1_36_10"]=_g.add(data["1_35_10"],1 );
}
_g.calc1_36_13 = function(){
	data["1_36_13"]=_g.add(data["1_35_13"],1 );
}
_g.calc1_37_10 = function(){
	data["1_37_10"]=_g.add(data["1_36_10"],1 );
}
_g.calc1_37_13 = function(){
	data["1_37_13"]=_g.add(data["1_36_13"],1 );
}
_g.calc1_38_10 = function(){
	data["1_38_10"]=_g.add(data["1_37_10"],1 );
}
_g.calc1_38_13 = function(){
	data["1_38_13"]=_g.add(data["1_37_13"],1 );
}
_g.calc1_39_10 = function(){
	data["1_39_10"]=_g.add(data["1_38_10"],1 );
}
_g.calc1_39_13 = function(){
	data["1_39_13"]=_g.add(data["1_38_13"],1 );
}
_g.calc1_40_10 = function(){
	data["1_40_10"]=_g.add(data["1_39_10"],1 );
}
_g.calc1_40_13 = function(){
	data["1_40_13"]=_g.add(data["1_39_13"],1 );
}
_g.calc1_41_10 = function(){
	data["1_41_10"]=_g.add(data["1_40_10"],1 );
}
_g.calc1_41_13 = function(){
	data["1_41_13"]=_g.add(data["1_40_13"],1 );
}
_g.calc1_42_10 = function(){
	data["1_42_10"]=_g.add(data["1_41_10"],1 );
}
_g.calc1_42_13 = function(){
	data["1_42_13"]=_g.add(data["1_41_13"],1 );
}
_g.calc1_43_10 = function(){
	data["1_43_10"]=_g.add(data["1_42_10"],1 );
}
_g.calc1_43_13 = function(){
	data["1_43_13"]=_g.add(data["1_42_13"],1 );
}
_g.calc1_44_10 = function(){
	data["1_44_10"]=_g.add(data["1_43_10"],1 );
}
_g.calc1_44_13 = function(){
	data["1_44_13"]=_g.add(data["1_43_13"],1 );
}
_g.calc1_45_10 = function(){
	data["1_45_10"]=_g.add(data["1_44_10"],1 );
}
_g.calc1_45_13 = function(){
	data["1_45_13"]=_g.add(data["1_44_13"],1 );
}
_g.calc1_46_10 = function(){
	data["1_46_10"]=_g.add(data["1_45_10"],1 );
}
_g.calc1_46_13 = function(){
	data["1_46_13"]=_g.add(data["1_45_13"],1 );
}
_g.calc1_47_10 = function(){
	data["1_47_10"]=_g.add(data["1_46_10"],1 );
}
_g.calc1_47_13 = function(){
	data["1_47_13"]=_g.add(data["1_46_13"],1 );
}
_g.calc1_48_10 = function(){
	data["1_48_10"]=_g.add(data["1_47_10"],1 );
}
_g.calc1_48_13 = function(){
	data["1_48_13"]=_g.add(data["1_47_13"],1 );
}
_g.calc1_49_10 = function(){
	data["1_49_10"]=_g.add(data["1_48_10"],1 );
}
_g.calc1_49_13 = function(){
	data["1_49_13"]=_g.add(data["1_48_13"],1 );
}
_g.calc1_50_10 = function(){
	data["1_50_10"]=_g.add(data["1_49_10"],1 );
}
_g.calc1_50_13 = function(){
	data["1_50_13"]=_g.add(data["1_49_13"],1 );
}
_g.calc2_12_3 = function(){
	data["2_12_3"]="#REF!";
}
_g.calc2_13_3 = function(){
	data["2_13_3"]=AGE();
}
_g.calc2_15_3 = function(){
	data["2_15_3"]=data["0_6_2"];
}
_g.calc2_17_3 = function(){
	data["2_17_3"]=data["0_4_2"];
}
_g.calc2_17_7 = function(){
	data["2_17_7"]=PT();
}
_g.calc2_19_3 = function(){
	data["2_19_3"]=SA();
}
_g.calc2_19_7 = function(){
	data["2_19_7"]=PPT();
}
_g.calc2_20_3 = function(){
	data["2_20_3"]=DB_SA();
}
_g.calc2_20_7 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(FREQUENCY(),12)) ){
		tmp[0]="Monthly";
	}else{
		tmp[0]="Yearly";
	}
	data["2_20_7"]=tmp[0];
}
_g.calc2_21_7 = function(){
	data["2_21_7"]=data["2_30_3"];
}
_g.calc2_22_3 = function(){
	data["2_22_3"]=_g.add(data["2_45_9"],data["2_43_7"] );
}
_g.calc2_22_7 = function(){
	data["2_22_7"]=INSTL_YR2();
}
_g.calc2_23_3 = function(){
	data["2_23_3"]=_g.add(data["2_45_10"],data["2_43_7"] );
}
_g.calc2_29_2 = function(){
	data["2_29_2"]=_g.sub(_g.add(AGE(),data["2_29_1"] ),1 );
}
_g.calc2_29_3 = function(){
	data["2_29_3"]=_g.mul(FREQUENCY(),data["1_22_38"] );
}
_g.calc2_29_4 = function(){
	data["2_29_4"]=_g.ROUND(_g.mul(data["2_29_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_29_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_29_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_29_5 = function(){
	data["2_29_5"]=_g.add(data["2_29_3"],data["2_29_4"] );
}
_g.calc2_29_6 = function(){
	data["2_29_6"]=DB_SA();
}
_g.calc2_29_7 = function(){
	data["2_29_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_29_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_29_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_29_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_29_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_29_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_29_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_29_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[13]) ),0);
	data["2_29_8"]=tmp[2];
}
_g.calc2_29_9 = function(){
	data["2_29_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_29_1"] );
}
_g.calc2_29_10 = function(){
	data["2_29_10"]=_g.mul(_g.mul(AB_SC2(),data["2_29_1"] ),SA() );
}
_g.calc2_30_2 = function(){
	data["2_30_2"]=_g.sub(_g.add(AGE(),data["2_30_1"] ),1 );
}
_g.calc2_30_3 = function(){
	data["2_30_3"]=_g.mul(_g.mul(((_g.num(data["2_30_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_30_4 = function(){
	data["2_30_4"]=_g.ROUND(_g.mul(data["2_30_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_30_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_30_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_30_5 = function(){
	data["2_30_5"]=_g.add(data["2_30_3"],data["2_30_4"] );
}
_g.calc2_30_6 = function(){
	data["2_30_6"]=DB_SA();
}
_g.calc2_30_7 = function(){
	data["2_30_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_30_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_30_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_30_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_30_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_30_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_30_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_30_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[14]) ),0);
	data["2_30_8"]=tmp[2];
}
_g.calc2_30_9 = function(){
	data["2_30_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_30_1"] );
}
_g.calc2_30_10 = function(){
	data["2_30_10"]=_g.mul(_g.mul(AB_SC2(),data["2_30_1"] ),SA() );
}
_g.calc2_31_2 = function(){
	data["2_31_2"]=_g.sub(_g.add(AGE(),data["2_31_1"] ),1 );
}
_g.calc2_31_3 = function(){
	data["2_31_3"]=_g.mul(_g.mul(((_g.num(data["2_31_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_31_4 = function(){
	data["2_31_4"]=_g.ROUND(_g.mul(data["2_31_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_31_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_31_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_31_5 = function(){
	data["2_31_5"]=_g.add(data["2_31_3"],data["2_31_4"] );
}
_g.calc2_31_6 = function(){
	data["2_31_6"]=DB_SA();
}
_g.calc2_31_7 = function(){
	data["2_31_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_31_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_31_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_31_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_31_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_31_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_31_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_31_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[15]) ),0);
	data["2_31_8"]=tmp[2];
}
_g.calc2_31_9 = function(){
	data["2_31_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_31_1"] );
}
_g.calc2_31_10 = function(){
	data["2_31_10"]=_g.mul(_g.mul(AB_SC2(),data["2_31_1"] ),SA() );
}
_g.calc2_32_2 = function(){
	data["2_32_2"]=_g.sub(_g.add(AGE(),data["2_32_1"] ),1 );
}
_g.calc2_32_3 = function(){
	data["2_32_3"]=_g.mul(_g.mul(((_g.num(data["2_32_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_32_4 = function(){
	data["2_32_4"]=_g.ROUND(_g.mul(data["2_32_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_32_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_32_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_32_5 = function(){
	data["2_32_5"]=_g.add(data["2_32_3"],data["2_32_4"] );
}
_g.calc2_32_6 = function(){
	data["2_32_6"]=DB_SA();
}
_g.calc2_32_7 = function(){
	data["2_32_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_32_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_32_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_32_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_32_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_32_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_32_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_32_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[16]) ),0);
	data["2_32_8"]=tmp[2];
}
_g.calc2_32_9 = function(){
	data["2_32_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_32_1"] );
}
_g.calc2_32_10 = function(){
	data["2_32_10"]=_g.mul(_g.mul(AB_SC2(),data["2_32_1"] ),SA() );
}
_g.calc2_33_2 = function(){
	data["2_33_2"]=_g.sub(_g.add(AGE(),data["2_33_1"] ),1 );
}
_g.calc2_33_3 = function(){
	data["2_33_3"]=_g.mul(_g.mul(((_g.num(data["2_33_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_33_4 = function(){
	data["2_33_4"]=_g.ROUND(_g.mul(data["2_33_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_33_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_33_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_33_5 = function(){
	data["2_33_5"]=_g.add(data["2_33_3"],data["2_33_4"] );
}
_g.calc2_33_6 = function(){
	data["2_33_6"]=DB_SA();
}
_g.calc2_33_7 = function(){
	data["2_33_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_33_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_33_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_33_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_33_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_33_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_33_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_33_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[17]) ),0);
	data["2_33_8"]=tmp[2];
}
_g.calc2_33_9 = function(){
	data["2_33_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_33_1"] );
}
_g.calc2_33_10 = function(){
	data["2_33_10"]=_g.mul(_g.mul(AB_SC2(),data["2_33_1"] ),SA() );
}
_g.calc2_34_2 = function(){
	data["2_34_2"]=_g.sub(_g.add(AGE(),data["2_34_1"] ),1 );
}
_g.calc2_34_3 = function(){
	data["2_34_3"]=_g.mul(_g.mul(((_g.num(data["2_34_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_34_4 = function(){
	data["2_34_4"]=_g.ROUND(_g.mul(data["2_34_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_34_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_34_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_34_5 = function(){
	data["2_34_5"]=_g.add(data["2_34_3"],data["2_34_4"] );
}
_g.calc2_34_6 = function(){
	data["2_34_6"]=DB_SA();
}
_g.calc2_34_7 = function(){
	data["2_34_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_34_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_34_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_34_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_34_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_34_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_34_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_34_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[18]) ),0);
	data["2_34_8"]=tmp[2];
}
_g.calc2_34_9 = function(){
	data["2_34_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_34_1"] );
}
_g.calc2_34_10 = function(){
	data["2_34_10"]=_g.mul(_g.mul(AB_SC2(),data["2_34_1"] ),SA() );
}
_g.calc2_35_2 = function(){
	data["2_35_2"]=_g.sub(_g.add(AGE(),data["2_35_1"] ),1 );
}
_g.calc2_35_3 = function(){
	data["2_35_3"]=_g.mul(_g.mul(((_g.num(data["2_35_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_35_4 = function(){
	data["2_35_4"]=_g.ROUND(_g.mul(data["2_35_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_35_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_35_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_35_5 = function(){
	data["2_35_5"]=_g.add(data["2_35_3"],data["2_35_4"] );
}
_g.calc2_35_6 = function(){
	data["2_35_6"]=DB_SA();
}
_g.calc2_35_7 = function(){
	data["2_35_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_35_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_35_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_35_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_35_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_35_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_35_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_35_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[19]) ),0);
	data["2_35_8"]=tmp[2];
}
_g.calc2_35_9 = function(){
	data["2_35_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_35_1"] );
}
_g.calc2_35_10 = function(){
	data["2_35_10"]=_g.mul(_g.mul(AB_SC2(),data["2_35_1"] ),SA() );
}
_g.calc2_36_2 = function(){
	data["2_36_2"]=_g.sub(_g.add(AGE(),data["2_36_1"] ),1 );
}
_g.calc2_36_3 = function(){
	data["2_36_3"]=_g.mul(_g.mul(((_g.num(data["2_36_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_36_4 = function(){
	data["2_36_4"]=_g.ROUND(_g.mul(data["2_36_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_36_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_36_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_36_5 = function(){
	data["2_36_5"]=_g.add(data["2_36_3"],data["2_36_4"] );
}
_g.calc2_36_6 = function(){
	data["2_36_6"]=DB_SA();
}
_g.calc2_36_7 = function(){
	data["2_36_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_36_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_36_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_36_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_36_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_36_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_36_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_36_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[20]) ),0);
	data["2_36_8"]=tmp[2];
}
_g.calc2_36_9 = function(){
	data["2_36_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_36_1"] );
}
_g.calc2_36_10 = function(){
	data["2_36_10"]=_g.mul(_g.mul(AB_SC2(),data["2_36_1"] ),SA() );
}
_g.calc2_37_2 = function(){
	data["2_37_2"]=_g.sub(_g.add(AGE(),data["2_37_1"] ),1 );
}
_g.calc2_37_3 = function(){
	data["2_37_3"]=_g.mul(_g.mul(((_g.num(data["2_37_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_37_4 = function(){
	data["2_37_4"]=_g.ROUND(_g.mul(data["2_37_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_37_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_37_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_37_5 = function(){
	data["2_37_5"]=_g.add(data["2_37_3"],data["2_37_4"] );
}
_g.calc2_37_6 = function(){
	data["2_37_6"]=DB_SA();
}
_g.calc2_37_7 = function(){
	data["2_37_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_37_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_37_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_37_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_37_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_37_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_37_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_37_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[21]) ),0);
	data["2_37_8"]=tmp[2];
}
_g.calc2_37_9 = function(){
	data["2_37_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_37_1"] );
}
_g.calc2_37_10 = function(){
	data["2_37_10"]=_g.mul(_g.mul(AB_SC2(),data["2_37_1"] ),SA() );
}
_g.calc2_38_2 = function(){
	data["2_38_2"]=_g.sub(_g.add(AGE(),data["2_38_1"] ),1 );
}
_g.calc2_38_3 = function(){
	data["2_38_3"]=_g.mul(_g.mul(((_g.num(data["2_38_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_38_4 = function(){
	data["2_38_4"]=_g.ROUND(_g.mul(data["2_38_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_38_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_38_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_38_5 = function(){
	data["2_38_5"]=_g.add(data["2_38_3"],data["2_38_4"] );
}
_g.calc2_38_6 = function(){
	data["2_38_6"]=DB_SA();
}
_g.calc2_38_7 = function(){
	data["2_38_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_38_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_38_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_38_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_38_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_38_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_38_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_38_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[22]) ),0);
	data["2_38_8"]=tmp[2];
}
_g.calc2_38_9 = function(){
	data["2_38_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_38_1"] );
}
_g.calc2_38_10 = function(){
	data["2_38_10"]=_g.mul(_g.mul(AB_SC2(),data["2_38_1"] ),SA() );
}
_g.calc2_39_2 = function(){
	data["2_39_2"]=_g.sub(_g.add(AGE(),data["2_39_1"] ),1 );
}
_g.calc2_39_3 = function(){
	data["2_39_3"]=_g.mul(_g.mul(((_g.num(data["2_39_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_39_4 = function(){
	data["2_39_4"]=_g.ROUND(_g.mul(data["2_39_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_39_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_39_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_39_5 = function(){
	data["2_39_5"]=_g.add(data["2_39_3"],data["2_39_4"] );
}
_g.calc2_39_6 = function(){
	data["2_39_6"]=DB_SA();
}
_g.calc2_39_7 = function(){
	data["2_39_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_39_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_39_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_39_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_39_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_39_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_39_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_39_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[23]) ),0);
	data["2_39_8"]=tmp[2];
}
_g.calc2_39_9 = function(){
	data["2_39_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_39_1"] );
}
_g.calc2_39_10 = function(){
	data["2_39_10"]=_g.mul(_g.mul(AB_SC2(),data["2_39_1"] ),SA() );
}
_g.calc2_40_2 = function(){
	data["2_40_2"]=_g.sub(_g.add(AGE(),data["2_40_1"] ),1 );
}
_g.calc2_40_3 = function(){
	data["2_40_3"]=_g.mul(_g.mul(((_g.num(data["2_40_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_40_4 = function(){
	data["2_40_4"]=_g.ROUND(_g.mul(data["2_40_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_40_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_40_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_40_5 = function(){
	data["2_40_5"]=_g.add(data["2_40_3"],data["2_40_4"] );
}
_g.calc2_40_6 = function(){
	data["2_40_6"]=DB_SA();
}
_g.calc2_40_7 = function(){
	data["2_40_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_40_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_40_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_40_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_40_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_40_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_40_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_40_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[24]) ),0);
	data["2_40_8"]=tmp[2];
}
_g.calc2_40_9 = function(){
	data["2_40_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_40_1"] );
}
_g.calc2_40_10 = function(){
	data["2_40_10"]=_g.mul(_g.mul(AB_SC2(),data["2_40_1"] ),SA() );
}
_g.calc2_41_2 = function(){
	data["2_41_2"]=_g.sub(_g.add(AGE(),data["2_41_1"] ),1 );
}
_g.calc2_41_3 = function(){
	data["2_41_3"]=_g.mul(_g.mul(((_g.num(data["2_41_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_41_4 = function(){
	data["2_41_4"]=_g.ROUND(_g.mul(data["2_41_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_41_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_41_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_41_5 = function(){
	data["2_41_5"]=_g.add(data["2_41_3"],data["2_41_4"] );
}
_g.calc2_41_6 = function(){
	data["2_41_6"]=DB_SA();
}
_g.calc2_41_7 = function(){
	data["2_41_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_41_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_41_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_41_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_41_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_41_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_41_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_41_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[25]) ),0);
	data["2_41_8"]=tmp[2];
}
_g.calc2_41_9 = function(){
	data["2_41_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_41_1"] );
}
_g.calc2_41_10 = function(){
	data["2_41_10"]=_g.mul(_g.mul(AB_SC2(),data["2_41_1"] ),SA() );
}
_g.calc2_42_2 = function(){
	data["2_42_2"]=_g.sub(_g.add(AGE(),data["2_42_1"] ),1 );
}
_g.calc2_42_3 = function(){
	data["2_42_3"]=_g.mul(_g.mul(((_g.num(data["2_42_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_42_4 = function(){
	data["2_42_4"]=_g.ROUND(_g.mul(data["2_42_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_42_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_42_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_42_5 = function(){
	data["2_42_5"]=_g.add(data["2_42_3"],data["2_42_4"] );
}
_g.calc2_42_6 = function(){
	data["2_42_6"]=DB_SA();
}
_g.calc2_42_7 = function(){
	data["2_42_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_42_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_42_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_42_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_42_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_42_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_42_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_42_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[26]) ),0);
	data["2_42_8"]=tmp[2];
}
_g.calc2_42_9 = function(){
	data["2_42_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_42_1"] );
}
_g.calc2_42_10 = function(){
	data["2_42_10"]=_g.mul(_g.mul(AB_SC2(),data["2_42_1"] ),SA() );
}
_g.calc2_43_2 = function(){
	data["2_43_2"]=_g.sub(_g.add(AGE(),data["2_43_1"] ),1 );
}
_g.calc2_43_3 = function(){
	data["2_43_3"]=_g.mul(_g.mul(((_g.num(data["2_43_1"])) <= (_g.num(PPT()))),FREQUENCY() ),data["1_28_38"] );
}
_g.calc2_43_4 = function(){
	data["2_43_4"]=_g.ROUND(_g.mul(data["2_43_3"],(_g.add(_g.mul(((((3.75))/100.0)),(_g.equal(data["2_43_1"],1)) ),_g.mul(((((1.875))/100.0)),((_g.num(data["2_43_1"])) >= (_g.num(2))) ) )) ),2);
}
_g.calc2_43_5 = function(){
	data["2_43_5"]=_g.add(data["2_43_3"],data["2_43_4"] );
}
_g.calc2_43_6 = function(){
	data["2_43_6"]=DB_SA();
}
_g.calc2_43_7 = function(){
	data["2_43_7"]=_g.add(_g.add(_g.add(_g.mul(_g.mul((_g.equal(MB_TIME1(),data["2_43_1"])),SA() ),MB_SA1() ),_g.mul(_g.mul((_g.equal(MB_TIME2(),data["2_43_1"])),SA() ),MB_SA2() ) ),_g.mul(_g.mul((_g.equal(MB_TIME3(),data["2_43_1"])),SA() ),MB_SA3() ) ),_g.mul(_g.mul((_g.equal(PT(),data["2_43_1"])),(_g.sub(_g.sub(_g.sub(1,MB_SA1() ),MB_SA2() ),MB_SA3() )) ),SA() ) );
}
_g.calc2_43_8 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["2_43_1"],GSV_TAB(),3,1);
	tmp[1]=_g.MIN(_g.sub(data["2_43_1"],1 ),_g.sub(PPT(),1 ));
	tmp[2]=_g.MAX(_g.sub(_g.mul(tmp[0],(_g.add(AP_YR1_EXCL_ST(),_g.mul(AP_YR2_EXCL_ST(),tmp[1] ) )) ),_g.SUM(aptg[27]) ),0);
	data["2_43_8"]=tmp[2];
}
_g.calc2_43_9 = function(){
	data["2_43_9"]=_g.mul(_g.mul(AB_SC1(),SA() ),data["2_43_1"] );
}
_g.calc2_43_10 = function(){
	data["2_43_10"]=_g.mul(_g.mul(AB_SC2(),data["2_43_1"] ),SA() );
}
_g.calc2_44_9 = function(){
	data["2_44_9"]=_g.mul(FB_SC1(),SA() );
}
_g.calc2_44_10 = function(){
	data["2_44_10"]=_g.mul(FB_SC2(),SA() );
}
_g.calc2_45_9 = function(){
	data["2_45_9"]=_g.add(data["2_44_9"],data["2_43_9"] );
}
_g.calc2_45_10 = function(){
	data["2_45_10"]=_g.add(data["2_44_10"],data["2_43_10"] );
}
var SSF={};var make_ssf=function(t){function n(e){var t="",n=e.length-1;while(n>=0)t+=e.charAt(n--);return t}function r(e,t){var n="";while(n.length<t)n+=e;return n}function i(e,t){var n=""+e;return n.length>=t?n:r("0",t-n.length)+n}function s(e,t){var n=""+e;return n.length>=t?n:r(" ",t-n.length)+n}function o(e,t){var n=""+e;return n.length>=t?n:n+r(" ",t-n.length)}function u(e,t){var n=""+Math.round(e);return n.length>=t?n:r("0",t-n.length)+n}function a(e,t){var n=""+e;return n.length>=t?n:r("0",t-n.length)+n}function l(e,t){if(e>f||e<-f)return u(e,t);var n=Math.round(e);return a(n,t)}function c(e,t){return e.length>=7+t&&(e.charCodeAt(t)|32)===103&&(e.charCodeAt(t+1)|32)===101&&(e.charCodeAt(t+2)|32)===110&&(e.charCodeAt(t+3)|32)===101&&(e.charCodeAt(t+4)|32)===114&&(e.charCodeAt(t+5)|32)===97&&(e.charCodeAt(t+6)|32)===108}function p(e){for(var t=0;t!=h.length;++t)if(e[h[t][0]]===undefined)e[h[t][0]]=h[t][1]}function g(e,t,n){var r=e<0?-1:1;var i=e*r;var s=0,o=1,u=0;var a=1,f=0,l=0;var c=Math.floor(i);while(f<t){c=Math.floor(i);u=c*o+s;l=c*f+a;if(i-c<5e-10)break;i=1/(i-c);s=o;o=u;a=f;f=l}if(l>t){l=f;u=o}if(l>t){l=a;u=s}if(!n)return[0,r*u,l];if(l===0)throw"Unexpected state: "+u+" "+o+" "+s+" "+l+" "+f+" "+a;var h=Math.floor(r*u/l);return[h,r*u-h*l,l]}function y(e,t){return""+e}function w(e,t){switch(typeof e){case"string":return e;case"boolean":return e?"TRUE":"FALSE";case"number":return(e|0)===e?y(e,t):b(e,t)}throw new Error("unsupported value in General format: "+e)}function E(e,t){return 0}function S(e,t,n){if(e>2958465||e<0)return null;var r=e|0,i=Math.floor(86400*(e-r)),s=0;var o=[];var u={D:r,T:i,u:86400*(e-r)-i,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(u.u)<1e-6)u.u=0;p(t!=null?t:t=[]);if(t.date1904)r+=1462;if(u.u>.999){u.u=0;if(++i==86400){i=0;++r}}if(r===60){o=n?[1317,10,29]:[1900,2,29];s=3}else if(r===0){o=n?[1317,8,29]:[1900,1,0];s=6}else{if(r>60)--r;var a=new Date(1900,0,1);a.setDate(a.getDate()+r-1);o=[a.getFullYear(),a.getMonth()+1,a.getDate()];s=a.getDay();if(r<60)s=(s+6)%7;if(n)s=E(a,o)}u.y=o[0];u.m=o[1];u.d=o[2];u.S=i%60;i=Math.floor(i/60);u.M=i%60;i=Math.floor(i/60);u.H=i;u.q=s;return u}function x(e,t,n,r){var s="",o=0,u=0,a=n.y,f,l=0;switch(e){case 98:a=n.y+543;case 121:switch(t.length){case 1:case 2:f=a%100;l=2;break;default:f=a%1e4;l=4;break}break;case 109:switch(t.length){case 1:case 2:f=n.m;l=t.length;break;case 3:return m[n.m-1][1];case 5:return m[n.m-1][0];default:return m[n.m-1][2]}break;case 100:switch(t.length){case 1:case 2:f=n.d;l=t.length;break;case 3:return v[n.q][0];default:return v[n.q][1]}break;case 104:switch(t.length){case 1:case 2:f=1+(n.H+11)%12;l=t.length;break;default:throw"bad hour format: "+t}break;case 72:switch(t.length){case 1:case 2:f=n.H;l=t.length;break;default:throw"bad hour format: "+t}break;case 77:switch(t.length){case 1:case 2:f=n.M;l=t.length;break;default:throw"bad minute format: "+t}break;case 115:if(n.u===0)switch(t){case"s":case"ss":return i(n.S,t.length);case".0":case".00":case".000":}switch(t){case"s":case"ss":case".0":case".00":case".000":if(r>=2)u=r===3?1e3:100;else u=r===1?10:1;o=Math.round(u*(n.S+n.u));if(o>=60*u)o=0;if(t==="s")return o===0?"0":""+o/u;s=i(o,2+r);if(t==="ss")return s.substr(0,2);return"."+s.substr(2,t.length-1);default:throw"bad second format: "+t};case 90:switch(t){case"[h]":case"[hh]":f=n.D*24+n.H;break;case"[m]":case"[mm]":f=(n.D*24+n.H)*60+n.M;break;case"[s]":case"[ss]":f=((n.D*24+n.H)*60+n.M)*60+Math.round(n.S+n.u);break;default:throw"bad abstime format: "+t}l=t.length===3?1:2;break;case 101:f=a;l=1}if(l>0)return i(f,l);else return""}function T(e){if(e.length<=3)return e;var t=e.length%3,n=e.substr(0,t);for(;t!=e.length;t+=3)n+=(n.length>0?",":"")+e.substr(t,3);return n}function C(e){var t=[];var n=false,r;for(var i=0,s=0;i<e.length;++i)switch(r=e.charCodeAt(i)){case 34:n=!n;break;case 95:case 42:case 92:++i;break;case 59:t[t.length]=e.substr(s,i-s);s=i+1}t[t.length]=e.substr(s);if(n===true)throw new Error("Format |"+e+"| unterminated string ");return t}function L(e,t,n,r,i){var s=[],o="",u=0,a="",f="t",l,h,p,d;var v="H";while(u<e.length){switch(a=e[u]){case"G":if(!c(e,u))throw new Error("unrecognized character "+a+" in "+e);s[s.length]={t:"G",v:"General"};u+=7;break;case'"':for(o="";(d=e.charCodeAt(++u))!==34&&u<e.length;)o+=String.fromCharCode(d);s[s.length]={t:"t",v:o};++u;break;case"\\":var m=e[++u],g=m==="("||m===")"?m:"t";s[s.length]={t:g,v:m};++u;break;case"_":s[s.length]={t:"t",v:" "};u+=2;break;case"@":s[s.length]={t:"T",v:t};++u;break;case"B":case"b":if(e[u+1]==="1"||e[u+1]==="2"){if(h==null){h=S(t,n,e[u+1]==="2");if(h==null)return""}s[s.length]={t:"X",v:e.substr(u,2)};f=a;u+=2;break};case"M":case"D":case"Y":case"H":case"S":case"E":a=a.toLowerCase();case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(t<0)return"";if(h==null){h=S(t,n);if(h==null)return""}o=a;while(++u<e.length&&e[u].toLowerCase()===a)o+=a;if(a==="m"&&f.toLowerCase()==="h")a="M";if(a==="h")a=v;s[s.length]={t:a,v:o};f=a;break;case"A":l={t:a,v:"A"};if(h==null)h=S(t,n);if(e.substr(u,3)==="A/P"){if(h!=null)l.v=h.H>=12?"P":"A";l.t="T";v="h";u+=3}else if(e.substr(u,5)==="AM/PM"){if(h!=null)l.v=h.H>=12?"PM":"AM";l.t="T";u+=5;v="h"}else{l.t="t";++u}if(h==null&&l.t==="T")return"";s[s.length]=l;f=a;break;case"[":o=a;while(e[u++]!=="]"&&u<e.length)o+=e[u];if(o.substr(-1)!=="]")throw'unterminated "[" block: |'+o+"|";if(o.match(k)){if(h==null){h=S(t,n);if(h==null)return""}s[s.length]={t:"Z",v:o.toLowerCase()}}else{o=""}break;case".":if(i===true){s[s.length]={t:"t",v:a};++u;break}if(h!=null){o=a;while((a=e[++u])==="0")o+=a;s[s.length]={t:"s",v:o};break};case"0":case"#":o=a;while("0#?.,E+-%".indexOf(a=e[++u])>-1||a=="\\"&&e[u+1]=="-"&&"0#".indexOf(e[u+2])>-1)o+=a;s[s.length]={t:"n",v:o};break;case"?":o=a;while(e[++u]===a)o+=a;l={t:a,v:o};s[s.length]=l;f=a;break;case"*":++u;if(e[u]==" "||e[u]=="*")++u;break;case"(":case")":s[s.length]={t:r===1?"t":a,v:a};++u;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":o=a;while("0123456789".indexOf(e[++u])>-1)o+=e[u];s[s.length]={t:"D",v:o};break;case" ":s[s.length]={t:a,v:a};++u;break;default:if(",$-+/():!^&'~{}<>=â‚¬acfijklopqrtuvwxz".indexOf(a)===-1)throw new Error("unrecognized character "+a+" in "+e);s[s.length]={t:"t",v:a};++u;break}}var y=0,b=0,E;for(u=s.length-1,f="t";u>=0;--u){switch(s[u].t){case"h":case"H":s[u].t=v;f="h";if(y<1)y=1;break;case"s":if(E=s[u].v.match(/\.0+$/))b=Math.max(b,E[0].length-1);if(y<3)y=3;case"d":case"y":case"M":case"e":f=s[u].t;break;case"m":if(f==="s"){s[u].t="M";if(y<2)y=2}break;case"X":if(s[u].v==="B2");break;case"Z":if(y<1&&s[u].v.match(/[Hh]/))y=1;if(y<2&&s[u].v.match(/[Mm]/))y=2;if(y<3&&s[u].v.match(/[Ss]/))y=3}}switch(y){case 0:break;case 1:if(h.u>=.5){h.u=0;++h.S}if(h.S>=60){h.S=0;++h.M}if(h.M>=60){h.M=0;++h.H}break;case 2:if(h.u>=.5){h.u=0;++h.S}if(h.S>=60){h.S=0;++h.M}break}var T="",C;for(u=0;u<s.length;++u){switch(s[u].t){case"t":case"T":case" ":case"D":break;case"X":s[u]=undefined;break;case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":s[u].v=x(s[u].t.charCodeAt(0),s[u].v,h,b);s[u].t="t";break;case"n":case"(":case"?":C=u+1;while(s[C]!=null&&((a=s[C].t)==="?"||a==="D"||(a===" "||a==="t")&&s[C+1]!=null&&(s[C+1].t==="?"||s[C+1].t==="t"&&s[C+1].v==="/")||s[u].t==="("&&(a===" "||a==="n"||a===")")||a==="t"&&(s[C].v==="/"||"$â‚¬".indexOf(s[C].v)>-1||s[C].v===" "&&s[C+1]!=null&&s[C+1].t=="?"))){s[u].v+=s[C].v;s[C]=undefined;++C}T+=s[u].v;u=C-1;break;case"G":s[u].t="t";s[u].v=w(t,n);break}}var L="",A,O;if(T.length>0){A=t<0&&T.charCodeAt(0)===45?-t:t;O=N(T.charCodeAt(0)===40?"(":"n",T,A);C=O.length-1;var M=s.length;for(u=0;u<s.length;++u)if(s[u]!=null&&s[u].v.indexOf(".")>-1){M=u;break}var _=s.length;if(M===s.length&&O.indexOf("E")===-1){for(u=s.length-1;u>=0;--u){if(s[u]==null||"n?(".indexOf(s[u].t)===-1)continue;if(C>=s[u].v.length-1){C-=s[u].v.length;s[u].v=O.substr(C+1,s[u].v.length)}else if(C<0)s[u].v="";else{s[u].v=O.substr(0,C+1);C=-1}s[u].t="t";_=u}if(C>=0&&_<s.length)s[_].v=O.substr(0,C+1)+s[_].v}else if(M!==s.length&&O.indexOf("E")===-1){C=O.indexOf(".")-1;for(u=M;u>=0;--u){if(s[u]==null||"n?(".indexOf(s[u].t)===-1)continue;p=s[u].v.indexOf(".")>-1&&u===M?s[u].v.indexOf(".")-1:s[u].v.length-1;L=s[u].v.substr(p+1);for(;p>=0;--p){if(C>=0&&(s[u].v[p]==="0"||s[u].v[p]==="#"))L=O[C--]+L}s[u].v=L;s[u].t="t";_=u}if(C>=0&&_<s.length)s[_].v=O.substr(0,C+1)+s[_].v;C=O.indexOf(".")+1;for(u=M;u<s.length;++u){if(s[u]==null||"n?(".indexOf(s[u].t)===-1&&u!==M)continue;p=s[u].v.indexOf(".")>-1&&u===M?s[u].v.indexOf(".")+1:0;L=s[u].v.substr(0,p);for(;p<s[u].v.length;++p){if(C<O.length)L+=O[C++]}s[u].v=L;s[u].t="t";_=u}}}for(u=0;u<s.length;++u)if(s[u]!=null&&"n(?".indexOf(s[u].t)>-1){A=r>1&&t<0&&u>0&&s[u-1].v==="-"?-t:t;s[u].v=N(s[u].t,s[u].v,A);s[u].t="t"}var D="";for(u=0;u!==s.length;++u)if(s[u]!=null)D+=s[u].v;return D}function M(e,t){if(t==null)return false;var n=parseFloat(t[2]);switch(t[1]){case"=":if(e==n)return true;break;case">":if(e>n)return true;break;case"<":if(e<n)return true;break;case"<>":if(e!=n)return true;break;case">=":if(e>=n)return true;break;case"<=":if(e<=n)return true;break}return false}function _(e,t){var n=C(e);var r=n.length,i=n[r-1].indexOf("@");if(r<4&&i>-1)--r;if(n.length>4)throw"cannot find right format for |"+n+"|";if(typeof t!=="number")return[4,n.length===4||i>-1?n[n.length-1]:"@"];switch(n.length){case 1:n=i>-1?["General","General","General",n[0]]:[n[0],n[0],n[0],"@"];break;case 2:n=i>-1?[n[0],n[0],n[0],n[1]]:[n[0],n[1],n[0],"@"];break;case 3:n=i>-1?[n[0],n[1],n[0],n[2]]:[n[0],n[1],n[2],"@"];break;case 4:break}var s=t>0?n[0]:t<0?n[1]:n[2];if(n[0].indexOf("[")===-1&&n[1].indexOf("[")===-1)return[r,s];if(n[0].match(A)!=null||n[1].match(A)!=null){var o=n[0].match(O);var u=n[1].match(O);return M(t,o)?[r,n[0]]:M(t,u)?[r,n[1]]:[r,n[o!=null&&u!=null?2:1]]}return[r,s]}function D(e,t,n,r){p(n!=null?n:n=[]);var i="";switch(typeof e){case"string":i=e;break;case"number":i=(n.table!=null?n.table:d)[e];break}if(c(i,0))return w(t,n);var s=_(i,t);if(c(s[1]))return w(t,n);if(t===true)t="TRUE";else if(t===false)t="FALSE";else if(t===""||t==null)return"";return L(s[1],t,n,s[0],r)}t.version="0.8.1";var f=Math.pow(2,32);var h=[["date1904",0],["output",""],["WTF",false]];t.opts=h;var d={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"ä¸Šå?ˆ/ä¸‹å?ˆ "hh"æ™‚"mm"åˆ†"ss"ç§’ "',65535:"General"};var v=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]];var m=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];t._general_int=y;var b=function(){function o(e){var t=e<0?12:11;var n=f(e.toFixed(12));if(n.length<=t)return n;n=e.toPrecision(10);if(n.length<=t)return n;return e.toExponential(5)}function u(e){var n=e.toFixed(11).replace(t,".$1");if(n.length>(e<0?12:11))n=e.toPrecision(6);return n}function a(e){for(var t=0;t!=e.length;++t)if((e.charCodeAt(t)|32)===101)return e.replace(r,".$1").replace(i,"E").replace("e","E").replace(s,"$10$2");return e}function f(e){return e.indexOf(".")>-1?e.replace(n,"").replace(t,".$1"):e}var t=/\.(\d*[1-9])0+$/,n=/\.0*$/,r=/\.(\d*[1-9])0+/,i=/\.0*[Ee]/,s=/(E[+-])(\d)$/;return function(t,n){var r=Math.floor(Math.log(Math.abs(t))*Math.LOG10E),i;if(r>=-4&&r<=-1)i=t.toPrecision(10+r);else if(Math.abs(r)<=9)i=o(t);else if(r===10)i=t.toFixed(10).substr(0,12);else i=u(t);return f(a(i))}}();t._general_num=b;t._general=w;t.parse_date_code=S;var N=function(){function u(e,n,i){var s=n.replace(t,""),o=n.length-s.length;return N(e,s,i*Math.pow(10,2*o))+r("%",o)}function a(e,t,n){var r=t.length-1;while(t.charCodeAt(r-1)===44)--r;return N(e,t.substr(0,r),n/Math.pow(10,3*(t.length-r)))}function f(e,t){var n;var r=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){var i=e.indexOf(".");if(i===-1)i=e.indexOf("E");var s=Math.floor(Math.log(Math.abs(t))*Math.LOG10E)%i;if(s<0)s+=i;n=(t/Math.pow(10,s)).toPrecision(r+1+(i+s)%i);if(n.indexOf("e")===-1){var o=Math.floor(Math.log(Math.abs(t))*Math.LOG10E);if(n.indexOf(".")===-1)n=n[0]+"."+n.substr(1)+"E+"+(o-n.length+s);else n+="E+"+(o-s);while(n.substr(0,2)==="0."){n=n[0]+n.substr(2,i)+"."+n.substr(2+i);n=n.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.")}n=n.replace(/\+-/,"-")}n=n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,t,n,r){return t+n+r.substr(0,(i+s)%i)+"."+r.substr(s)+"E"})}else n=t.toExponential(r);if(e.match(/E\+00$/)&&n.match(/e[+-]\d$/))n=n.substr(0,n.length-1)+"0"+n[n.length-1];if(e.match(/E\-/)&&n.match(/e\+/))n=n.replace(/e\+/,"e");return n.replace("e","E")}function h(e,t,n){var o=parseInt(e[4]),u=Math.round(t*o),a=Math.floor(u/o);var f=u-a*o,l=o;return n+(a===0?"":""+a)+" "+(f===0?r(" ",e[1].length+1+e[4].length):s(f,e[1].length)+e[2]+"/"+e[3]+i(l,e[4].length))}function p(e,t,n){return n+(t===0?"":""+t)+r(" ",e[1].length+2+e[4].length)}function y(e){var t="",n;for(var r=0;r!=e.length;++r)switch(n=e.charCodeAt(r)){case 35:break;case 63:t+=" ";break;case 48:t+="0";break;default:t+=String.fromCharCode(n)}return t}function b(e,t){var n=Math.pow(10,t);return""+Math.round(e*n)/n}function w(e,t){return Math.round((e-Math.floor(e))*Math.pow(10,t))}function E(e){if(e<2147483647&&e>-2147483648)return""+(e>=0?e|0:e-1|0);return""+Math.floor(e)}function S(e,t,p){if(e.charCodeAt(0)===40&&!t.match(v)){var x=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");if(p>=0)return S("n",x,p);return"("+S("n",x,-p)+")"}if(t.charCodeAt(t.length-1)===44)return a(e,t,p);if(t.indexOf("%")!==-1)return u(e,t,p);if(t.indexOf("E")!==-1)return f(t,p);if(t.charCodeAt(0)===36)return"$"+S(e,t.substr(t[1]==" "?2:1),p);var C,k;var L,A,O,M=Math.abs(p),_=p<0?"-":"";if(t.match(/^00+$/))return _+l(M,t.length);if(t.match(/^[#?]+$/)){C=l(p,0);if(C==="0")C="";return C.length>t.length?C:y(t.substr(0,t.length-C.length))+C}if((L=t.match(c))!==null)return h(L,M,_);if(t.match(/^#+0+$/)!==null)return _+l(M,t.length-t.indexOf("0"));if((L=t.match(d))!==null){C=b(p,L[1].length).replace(/^([^\.]+)$/,"$1."+L[1]).replace(/\.$/,"."+L[1]).replace(/\.(\d*)$/,function(e,t){return"."+t+r("0",L[1].length-t.length)});return t.indexOf("0.")!==-1?C:C.replace(/^0\./,".")}t=t.replace(/^#+([0.])/,"$1");if((L=t.match(/^(0*)\.(#*)$/))!==null){return _+b(M,L[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,L[1].length?"0.":".")}if((L=t.match(/^#,##0(\.?)$/))!==null)return _+T(l(M,0));if((L=t.match(/^#,##0\.([#0]*0)$/))!==null){return p<0?"-"+S(e,t,-p):T(""+Math.floor(p))+"."+i(w(p,L[1].length),L[1].length)}if((L=t.match(/^#,#*,#0/))!==null)return S(e,t.replace(/^#,#*,/,""),p);if((L=t.match(/^([0#]+)(\\?-([0#]+))+$/))!==null){C=n(S(e,t.replace(/[\\-]/g,""),p));A=0;return n(n(t.replace(/\\/g,"")).replace(/[0#]/g,function(e){return A<C.length?C[A++]:e==="0"?"0":""}))}if(t.match(m)!==null){C=S(e,"##########",p);return"("+C.substr(0,3)+") "+C.substr(3,3)+"-"+C.substr(6)}var D="";if((L=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))!==null){A=Math.min(L[4].length,7);O=g(M,Math.pow(10,A)-1,false);C=""+_;D=N("n",L[1],O[1]);if(D[D.length-1]==" ")D=D.substr(0,D.length-1)+"0";C+=D+L[2]+"/"+L[3];D=o(O[2],A);if(D.length<L[4].length)D=y(L[4].substr(L[4].length-D.length))+D;C+=D;return C}if((L=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))!==null){A=Math.min(Math.max(L[1].length,L[4].length),7);O=g(M,Math.pow(10,A)-1,true);return _+(O[0]||(O[1]?"":"0"))+" "+(O[1]?s(O[1],A)+L[2]+"/"+L[3]+o(O[2],A):r(" ",2*A+1+L[2].length+L[3].length))}if((L=t.match(/^[#0?]+$/))!==null){C=l(p,0);if(t.length<=C.length)return C;return y(t.substr(0,t.length-C.length))+C}if((L=t.match(/^([#0?]+)\.([#0]+)$/))!==null){C=""+p.toFixed(Math.min(L[2].length,10)).replace(/([^0])0+$/,"$1");A=C.indexOf(".");var P=t.indexOf(".")-A,H=t.length-C.length-P;return y(t.substr(0,P)+C+t.substr(t.length-H))}if((L=t.match(/^00,000\.([#0]*0)$/))!==null){A=w(p,L[1].length);return p<0?"-"+S(e,t,-p):T(E(p)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(e){return"00,"+(e.length<3?i(0,3-e.length):"")+e})+"."+i(A,L[1].length)}switch(t){case"#,###":var B=T(l(M,0));return B!=="0"?_+B:"";default:}throw new Error("unsupported format |"+t+"|")}function x(e,t,n){var r=t.length-1;while(t.charCodeAt(r-1)===44)--r;return N(e,t.substr(0,r),n/Math.pow(10,3*(t.length-r)))}function C(e,n,i){var s=n.replace(t,""),o=n.length-s.length;return N(e,s,i*Math.pow(10,2*o))+r("%",o)}function k(e,t){var n;var r=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){var i=e.indexOf(".");if(i===-1)i=e.indexOf("E");var s=Math.floor(Math.log(Math.abs(t))*Math.LOG10E)%i;if(s<0)s+=i;n=(t/Math.pow(10,s)).toPrecision(r+1+(i+s)%i);if(!n.match(/[Ee]/)){var o=Math.floor(Math.log(Math.abs(t))*Math.LOG10E);if(n.indexOf(".")===-1)n=n[0]+"."+n.substr(1)+"E+"+(o-n.length+s);else n+="E+"+(o-s);n=n.replace(/\+-/,"-")}n=n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,t,n,r){return t+n+r.substr(0,(i+s)%i)+"."+r.substr(s)+"E"})}else n=t.toExponential(r);if(e.match(/E\+00$/)&&n.match(/e[+-]\d$/))n=n.substr(0,n.length-1)+"0"+n[n.length-1];if(e.match(/E\-/)&&n.match(/e\+/))n=n.replace(/e\+/,"e");return n.replace("e","E")}function L(e,t,u){if(e.charCodeAt(0)===40&&!t.match(v)){var a=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");if(u>=0)return L("n",a,u);return"("+L("n",a,-u)+")"}if(t.charCodeAt(t.length-1)===44)return x(e,t,u);if(t.indexOf("%")!==-1)return C(e,t,u);if(t.indexOf("E")!==-1)return k(t,u);if(t.charCodeAt(0)===36)return"$"+L(e,t.substr(t[1]==" "?2:1),u);var f;var l,h,b,w=Math.abs(u),E=u<0?"-":"";if(t.match(/^00+$/))return E+i(w,t.length);if(t.match(/^[#?]+$/)){f=""+u;if(u===0)f="";return f.length>t.length?f:y(t.substr(0,t.length-f.length))+f}if((l=t.match(c))!==null)return p(l,w,E);if(t.match(/^#+0+$/)!==null)return E+i(w,t.length-t.indexOf("0"));if((l=t.match(d))!==null){f=(""+u).replace(/^([^\.]+)$/,"$1."+l[1]).replace(/\.$/,"."+l[1]).replace(/\.(\d*)$/,function(e,t){return"."+t+r("0",l[1].length-t.length)});return t.indexOf("0.")!==-1?f:f.replace(/^0\./,".")}t=t.replace(/^#+([0.])/,"$1");if((l=t.match(/^(0*)\.(#*)$/))!==null){return E+(""+w).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,l[1].length?"0.":".")}if((l=t.match(/^#,##0(\.?)$/))!==null)return E+T(""+w);if((l=t.match(/^#,##0\.([#0]*0)$/))!==null){return u<0?"-"+L(e,t,-u):T(""+u)+"."+r("0",l[1].length)}if((l=t.match(/^#,#*,#0/))!==null)return L(e,t.replace(/^#,#*,/,""),u);if((l=t.match(/^([0#]+)(\\?-([0#]+))+$/))!==null){f=n(L(e,t.replace(/[\\-]/g,""),u));h=0;return n(n(t.replace(/\\/g,"")).replace(/[0#]/g,function(e){return h<f.length?f[h++]:e==="0"?"0":""}))}if(t.match(m)!==null){f=L(e,"##########",u);return"("+f.substr(0,3)+") "+f.substr(3,3)+"-"+f.substr(6)}var S="";if((l=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))!==null){h=Math.min(l[4].length,7);b=g(w,Math.pow(10,h)-1,false);f=""+E;S=N("n",l[1],b[1]);if(S[S.length-1]==" ")S=S.substr(0,S.length-1)+"0";f+=S+l[2]+"/"+l[3];S=o(b[2],h);if(S.length<l[4].length)S=y(l[4].substr(l[4].length-S.length))+S;f+=S;return f}if((l=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))!==null){h=Math.min(Math.max(l[1].length,l[4].length),7);b=g(w,Math.pow(10,h)-1,true);return E+(b[0]||(b[1]?"":"0"))+" "+(b[1]?s(b[1],h)+l[2]+"/"+l[3]+o(b[2],h):r(" ",2*h+1+l[2].length+l[3].length))}if((l=t.match(/^[#0?]+$/))!==null){f=""+u;if(t.length<=f.length)return f;return y(t.substr(0,t.length-f.length))+f}if((l=t.match(/^([#0]+)\.([#0]+)$/))!==null){f=""+u.toFixed(Math.min(l[2].length,10)).replace(/([^0])0+$/,"$1");h=f.indexOf(".");var A=t.indexOf(".")-h,O=t.length-f.length-A;return y(t.substr(0,A)+f+t.substr(t.length-O))}if((l=t.match(/^00,000\.([#0]*0)$/))!==null){return u<0?"-"+L(e,t,-u):T(""+u).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(e){return"00,"+(e.length<3?i(0,3-e.length):"")+e})+"."+i(0,l[1].length)}switch(t){case"#,###":var M=T(""+w);return M!=="0"?E+M:"";default:}throw new Error("unsupported format |"+t+"|")}var t=/%/g;var c=/# (\?+)( ?)\/( ?)(\d+)/;var d=/^#*0*\.(0+)/;var v=/\).*[0#]/;var m=/\(###\) ###\\?-####/;return function(t,n,r){return(r|0)===r?L(t,n,r):S(t,n,r)}}();t._split=C;var k=/\[[HhMmSs]*\]/;t._eval=L;var A=/\[[=<>]/;var O=/\[([=<>]*)(-?\d+\.?\d*)\]/;t._table=d;t.load=function(t,n){d[n]=t};t.format=D;t.get_table=function(){return d};t.load_table=function(n){for(var r=0;r!=392;++r)if(n[r]!==undefined)t.load(n[r],r)}};make_ssf(SSF)
