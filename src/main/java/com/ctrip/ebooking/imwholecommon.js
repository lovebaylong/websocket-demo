function Guid(e) {
    var o = new Array;
    function t(e) {
        for (var o = 32; o--; )
            e.push("0")
    }
    function i(e, o) {
        switch (o) {
        case "N":
            return e.toString().replace(/,/g, "");
        case "D":
            return (e.slice(0, 8) + "-" + e.slice(8, 12) + "-" + e.slice(12, 16) + "-" + e.slice(16, 20) + "-" + e.slice(20, 32)).replace(/,/g, "");
        case "B":
            return "{" + i(e, "D") + "}";
        case "P":
            return "(" + i(e, "D") + ")";
        default:
            return new Guid
        }
    }
    "string" == typeof e ? function(e, o) {
        if (32 != (o = (o = o.replace(/\{|\(|\)|\}|-/g, "")).toLowerCase()).length || -1 != o.search(/[^0-9,a-f]/i))
            t(e);
        else
            for (var i = 0; i < o.length; i++)
                e.push(o[i])
    }(o, e) : t(o),
    this.Equals = function(e) {
        return !(!e || !e.IsGuid) && this.ToString() == e.ToString()
    }
    ,
    this.IsGuid = function() {}
    ,
    this.ToString = function(e) {
        return i(o, "string" == typeof e && ("N" == e || "D" == e || "B" == e || "P" == e) ? e : "D")
    }
}
function IsEmptyOrSpace(e) {
    return void 0 === e || "null" == e || "undefined" == e || null == e || 0 == e.length || e == undefined
}
function html_encode(e) {
    var o = document.createElement("div");
    return o.appendChild(document.createTextNode(e)),
    o.innerHTML
}
define(["jquery", "IMClient", "jscookie", "IMPlusACD"], function($, IMClient, jscookie, IMPlusACD) {
    var self;
    Date.prototype.pattern = function(e) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours() % 24 == 0 ? 24 : this.getHours() % 24,
            "H+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        for (var t in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))),
        /(E+)/.test(e) && (e = e.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + {
            0: "天",
            1: "一",
            2: "二",
            3: "三",
            4: "四",
            5: "五",
            6: "六"
        }[this.getDay() + ""])),
        o)
            new RegExp("(" + t + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? o[t] : ("00" + o[t]).substr(("" + o[t]).length)));
        return e
    }
    ;
    var parentSelf = null;
    return {
        sendMsgIds: [],
        myUid: "",
        msgcontent: "",
        now: new Date,
        isoversea: 0,
        hasorderseachchat: 0,
        hasserviceroomchat: 0,
        hasauditchat: 0,
        hasfinancechat: 0,
        haspromotion: 0,
        hasoverseaenglishchat: 0,
        hasoverseaJapanesechat: 0,
        hasoverseaKoreanchat: 0,
        hasoverseaThailandchat: 0,
        hasbookingchat: 0,
        hasbusinessmanage: 0,
        hasclient: 0,
        clientlevel: 0,
        firstloaddata: 0,
        arrGroupDelayCount: [],
        sessionRiskTip: "",
        init: function() {
            (self = this).bindEvent(),
            self.onShow(),
            self.parentClickFun(),
            parentSelf = this
        },
        onShow: function() {
            console.log(111);
            var e = this;
            e.startCheckIMLogin(),
            setTimeout(function() {
                e.ShowIMAccountModuleInfo()
            }, 1e3)
        },
        bindEvent: function() {
            self = this,
            $("body").on("click", "#id2CloseSessionBtn", function(e) {
                var o = IMWholeviewmodel.$data.currentGroupInfo;
                if (null != o && "" != o.sessionid && 1003 != o.biztype && 1383 != o.biztype && "" != o.taskkey && "" != o.conversationType) {
                    var t;
                    (t = {}).isoversea = window.IMWholeviewmodel.isoversea,
                    t.star = window.IMWholeviewmodel.star,
                    t.iconname = "关闭",
                    window.__bfi.push(["_tracklog", "ebk_im_icon_click", JSON.stringify(t)]),
                    (t = {}).huid = window.IMWholeviewmodel.getCurrentHuid(),
                    t.usertype = "酒店",
                    t.masterhotelid = window.IMWholeviewmodel.MasterHotelId,
                    t.subtab = window.IMWholeviewmodel.isoversea,
                    t.language = $.cookie("CurrentLanguage"),
                    window.__bfi.push(["_tracklog", "ebk_im_bot_close", JSON.stringify(t)]);
                    var i = o.taskkey;
                    IMPlusACD.finishConv({
                        conversationKey: o.taskkey,
                        conversationType: o.conversationType,
                        sessionId: o.sessionid,
                        onSuccess: function(e) {
                            console.log("onSuccess"),
                            console.log(e),
                            $("#id2GuestDiv").hasClass("cur") && (window.IMWholeviewmodel.$data.GuestGoingGroupList = $.grep(window.IMWholeviewmodel.$data.GuestGoingGroupList, function(e) {
                                return e.taskkey != i
                            })),
                            $("#id2CustomServiceDiv").hasClass("cur") && (window.IMWholeviewmodel.$data.BookingGoingGroupList = $.grep(window.IMWholeviewmodel.$data.BookingGoingGroupList, function(e) {
                                return e.taskkey != i
                            })),
                            self.clearData()
                        },
                        onError: function(e) {
                            console.log("onError"),
                            console.log(e)
                        }
                    })
                }
            }),
            $("body").on("click", "#imShowHistoryButton", function(e) {
                if ($("#imDemoHistory").hasClass("hide")) {
                    var o = {};
                    o.isoversea = window.IMWholeviewmodel.isoversea,
                    o.star = window.IMWholeviewmodel.star,
                    o.iconname = "历史消息",
                    window.__bfi.push(["_tracklog", "ebk_im_icon_click", JSON.stringify(o)]),
                    window.IMWholeviewmodel.clickTracklog("ebk_im_bot_his");
                    var t = IMWholeviewmodel.$data.currentGroupInfo;
                    null != t && null != t.biztype && null != t.groupId && (EbkWholeIMMaster.clearAllInfoDiv(),
                    $("#id2GuestDiv").hasClass("cur") || $("#id2CustomServiceDiv").hasClass("cur") || $("#id2BusinessDiv").hasClass("cur") ? ($("#imDemoHistory").hasClass("hide") && $("#imDemoHistory").removeClass("hide"),
                    $("#imHistoryList").hasClass("hide") || $("#imHistoryList").addClass("hide"),
                    $("#showHistory").hasClass("hide") && ($("#showHistory").removeClass("hide"),
                    $("#showHistory").show()),
                    EbkWholeIMMaster.clearGuestHistoryList(),
                    EbkWholeIMMaster.initHistoryList(t.groupId)) : $("#id2ServiceDiv").hasClass("cur") && (EbkWholeIMMaster.clearServiceDoneHistoryList(),
                    self.initServiceChatList(t.biztype),
                    $("#imDemoHistory").hasClass("hide") && $("#imDemoHistory").removeClass("hide"),
                    $("#imHistoryList").hasClass("hide") && ($("#imHistoryList").removeClass("hide"),
                    $("#imHistoryList").show()),
                    $("#showHistory").hasClass("hide") || $("#showHistory").addClass("hide")))
                } else
                    $("#imDemoHistory").addClass("hide")
            }),
            $("body").on("click", "#ImNoticeDetailsLink", function(e) {
                null != window.IMWholeviewmodel.$data.IMNoticeToDetailLink && window.open(window.IMWholeviewmodel.$data.IMNoticeToDetailLink)
            }),
            window.onblur = function(e) {
                console.log("offline"),
                IMWholeviewmodel.$data.isFocusThisWindow = !1
            }
            ,
            window.onfocus = function(e) {
                if (console.log("online"),
                IMWholeviewmodel.$data.isFocusThisWindow = !0,
                !IsEmptyOrSpace(window.IMWholeviewmodel.$data.currentGroupId)) {
                    var o = window.IMWholeviewmodel.getGroupInfo(window.IMWholeviewmodel.$data.currentGroupId);
                    null != o && window.IMWholeviewmodel.hasUnReadMessage(o.groupId) && self.loadMsg(o.groupId.toString(), o.sessionid)
                }
            }
            ,
            $("#id2ChatMsgDiv").scroll(function(e) {
                e.stopPropagation();
                var o = $(this).height()
                  , t = $(this).get(0).scrollHeight;
                if ($(this).scrollTop() / (t - o) == 0 && IMWholeviewmodel.$data.isOpenScroll) {
                    var i = IMWholeviewmodel.$data.currentGroupInfo.biztype;
                    null != i && self.loadHistoryMessage(i)
                }
            }),
            $("body").on("click", "#showHistoryBtn", function(e) {
                e.stopPropagation();
                var o = IMWholeviewmodel.$data.currentGroupInfo.biztype;
                null != o && self.loadHistoryMessage(o)
            }),
            $("body").on("click", ".sendCustomerOrder", function(e) {
                var o = IMWholeviewmodel.$data.currentGroupInfo;
                if (null != o) {
                    var t = {};
                    t.isoversea = window.IMWholeviewmodel.isoversea,
                    t.star = window.IMWholeviewmodel.star,
                    t.iconname = "发送订单",
                    window.__bfi.push(["_tracklog", "ebk_im_icon_click", JSON.stringify(t)]);
                    var i = window.IMWholeviewmodel.getOrderEntity();
                    i.orderID = $(e.target).data("orderid").replace(multimasterLanguageText.IMOrderNum, ""),
                    i.hotelName = $(e.target).data("hotelname") + "   " + $(e.target).data("roomname"),
                    i.roomName = $(e.target).data("roomname"),
                    i.totalPrince = $(e.target).data("totalprince"),
                    i.departure = $(e.target).data("departuredate"),
                    i.arrivalDate = $(e.target).data("arrivaldate"),
                    i.quantity = "/" + $(e.target).data("quantity") + multimasterLanguageText.IMRooms,
                    i.night = $(e.target).data("nights") + multimasterLanguageText.IMNights,
                    i.button = !1,
                    i.orderLink = "http://supplierweb.order.hotel.ctripcorp.com/main/index?module=71522&Orderid=" + i.orderID,
                    i.orderStatus = $(e.target).data("orderstatusdes"),
                    i.currency = $(e.target).data("currency");
                    var n = o.groupId;
                    self.sendOrderMsgToCustomer(i, n),
                    self.addSendOrderMsgToCustomerRecord(i.orderID, o.uid, n, o.sessionid)
                }
            })
        },
        initServiceChatList: function(e) {
            var o = new Array;
            o.push(e);
            var t = this
              , i = {
                customerUid: IMWholeviewmodel.$data.myUid,
                bizType: null,
                startDate: null,
                endDate: null,
                pageIndex: 1,
                pageSize: 50,
                bizTypeList: o
            };
            console.log(JSON.stringify(i)),
            $.ajax({
                url: "/ebkovsassembly/api/getImSessionHistoryList",
                type: "post",
                contentType: "application/json;charset=UTF-8",
                dataType: "json",
                data: JSON.stringify(i),
                error: function(e, o) {
                    console.log(o)
                },
                success: function(e) {
                    if (e && e.data && e.data.length > 0 && (console.log("initServiceChatList:", e.data),
                    null != e.data))
                        for (var o = 0; o < e.data.length; o++) {
                            var i = e.data[o]
                              , n = window.EbkWholeIMMaster.getSharkValue("客人", "Key.IM.062")
                              , s = i.customerUid;
                            t.imClient.getUserByUid(s, function(e) {
                                e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && (n = e.userinfo.nickname);
                                var o = n || window.IMWholeviewmodel.confuseUid(s);
                                "".length > 0 && (o = "");
                                var a = window.IMWholeviewmodel.getServiceDoneHistoryItemInfo();
                                a.username = o,
                                a.timeStr = t.dateformat(i.lastMessageTime),
                                a.groupid = i.groupId,
                                window.IMWholeviewmodel.$data.ServiceDoneHistoryItemList.push(a)
                            }, function(e) {
                                console.log("getUserByUidonError"),
                                console.log(e);
                                n || window.IMWholeviewmodel.confuseUid(window.IMWholeviewmodel.truncateUID(s))
                            })
                        }
                }
            })
        },
        loadHistoryMessage: function(e) {
            self.imClient.getHistoryMessagesPaging({
                paging: {
                    pageSize: 50
                },
                isAll: "true"
            }, function(e) {
                if (e && e.ResponseStatus && e.ResponseStatus.Ack && "success" == e.ResponseStatus.Ack.toLocaleLowerCase())
                    if (e.messages && 0 == e.messages.length) {
                        var o = []
                          , t = window.IMWholeviewmodel.getMsgEntity();
                        t.isSystemMsg = !0,
                        t.sysText = window.EbkWholeIMMaster.getSharkValue("无更多历史消息", "Key.IM.058"),
                        o.push(t);
                        for (var i = 0; i < window.IMWholeviewmodel.$data.MsgList.length; i++)
                            o.push(window.IMWholeviewmodel.$data.MsgList[i]);
                        window.IMWholeviewmodel.$data.MsgList = o
                    } else
                        self.loadCurrentMessage(e.messages, !0);
                else
                    console.log("loadHistoryMessage error", e)
            }, function(e) {
                console.log("loadHistoryMessage error", e)
            })
        },
        getIMPlusMockQuestionsUrl: function() {
            self = this,
            $.ajax("/ebkovsassembly/api/getIMPlusMockQuestionUrl", {
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=UTF-8",
                data: null,
                success: function(e) {
                    null != e.data && (window.IMWholeviewmodel.$data.imPlusMockQuestionsUrl = e.data,
                    $("#imPlusMockQuestionsTxt1").html(e.data.imPlusMockQuestionsTxt1),
                    $("#imPlusMockQuestionsTxt2").html(e.data.imPlusMockQuestionsTxt2))
                }
            })
        },
        ShowIMAccountModuleInfo: function() {
            self = this,
            $("#id2BusinessDiv").show(),
            $("#id2ServiceDiv").show(),
            $("#id2GuestDiv").show(),
            $("#id2CustomServiceDiv").show(),
            $.ajax({
                url: "/ebkovsassembly/api/checkImLoginToken",
                type: "post",
                contentType: "application/json;charset=UTF-8",
                dataType: "json",
                data: null,
                error: function(e, o) {
                    console.log(o)
                },
                success: function(e) {
                    if (null != e && null != e.data) {
                        window.EbkWholeIMMaster.hideAllBu();
                        var o = e.data;
                        self.isoversea = o.country > 1 ? 1 : 0,
                        window.IMWholeviewmodel.isTaiwan = 53 == o.province ? 1 : 0,
                        window.IMWholeviewmodel.isHotelCompany = o.hotelCompany,
                        window.IMWholeviewmodel.isoversea = self.isoversea,
                        1 == window.IMWholeviewmodel.isoversea && $("#id2sendidbtn").hide(),
                        window.IMWholeviewmodel.star = o.star,
                        window.IMWholeviewmodel.MasterHotelId = o.masterHotelId;
                        var t = {
                            pageid: 10650020120
                        };
                        t.masterhotelid = window.IMWholeviewmodel.MasterHotelId,
                        t.usertype = "酒店",
                        t.resourcepageid = IsEmptyOrSpace($("#resourcepageid").val()) ? null : $("#resourcepageid").val(),
                        t.resource = $("#resource").val(),
                        window.__bfi.push(["_tracklog", "ebk_im_page_load", JSON.stringify(t)]);
                        var i = o.imAccountModuleInfoList;
                        if (null != i && i.length > 0)
                            for (var n = 0; n < i.length; n++) {
                                var s = i[n];
                                "OrderSearch" == s.moduleName && "T" == s.status && (self.hasorderseachchat = 1,
                                $("#id2ServiceDiv").show(),
                                $("#id2ServiceChatDiv").show(),
                                $("#id2ServiceOrder").show()),
                                "Service" == s.moduleName && "T" == s.status && (self.hasserviceroomchat = 1,
                                $("#id2ServiceDiv").show(),
                                $("#id2ServiceChatDiv").show(),
                                $("#id2ServiceRoom").show(),
                                $("#id2ServiceSystem").show(),
                                $("#id2ServiceOther").show()),
                                "Audit" == s.moduleName && "T" == s.status && (self.hasauditchat = 1,
                                $("#id2ServiceDiv").show(),
                                $("#id2ServiceChatDiv").show(),
                                $("#id2ServiceAudit").show()),
                                "Finance" == s.moduleName && "T" == s.status && (self.hasfinancechat = 1,
                                $("#id2ServiceDiv").show(),
                                $("#id2ServiceChatDiv").show(),
                                $("#id2ServiceFinance").show()),
                                "Promotion" == s.moduleName && "T" == s.status && (self.haspromotion = 1,
                                $("#id2ServiceDiv").show(),
                                $("#id2ServiceChatDiv").show(),
                                $("#id2ServicePromotion").show()),
                                "Oversea" == s.moduleName && "T" == s.status && (self.hasoverseaenglishchat = 1,
                                $("#id2ServiceDiv").show(),
                                $("#id2ServiceChatDiv").show(),
                                $("#id2ServiceOverSeaOrder").show(),
                                $("#id2ServiceOverSeaRoom").show(),
                                self.getOverSeaFinaceSwitch()),
                                "OverseaJapanese" == s.moduleName && "T" == s.status && (self.hasoverseaJapanesechat = 1,
                                $("#id2ServiceDiv").show(),
                                $("#id2ServiceChatDiv").show(),
                                $("#id2ServiceOverSeaOrder").show(),
                                $("#id2ServiceOverSeaRoom").show(),
                                self.getOverSeaFinaceSwitch()),
                                "OverseaKorean" == s.moduleName && "T" == s.status && (self.hasoverseaKoreanchat = 1,
                                $("#id2ServiceDiv").show(),
                                $("#id2ServiceChatDiv").show(),
                                $("#id2ServiceOverSeaOrder").show(),
                                $("#id2ServiceOverSeaRoom").show(),
                                self.getOverSeaFinaceSwitch()),
                                "OverseaThailand" == s.moduleName && "T" == s.status && (self.hasoverseaThailandchat = 1,
                                $("#id2ServiceDiv").show(),
                                $("#id2ServiceChatDiv").show(),
                                $("#id2ServiceOverSeaOrder").show(),
                                $("#id2ServiceOverSeaRoom").show(),
                                self.getOverSeaFinaceSwitch()),
                                "Booking" == s.moduleName && "T" == s.status && (self.hasbookingchat = 1,
                                $("#id2CustomServiceDiv").show(),
                                $("#id2CustomServiceChatDiv").show()),
                                "BusinessManage" == s.moduleName && "T" == s.status && (self.hasbusinessmanage = 1,
                                $("#id2BusinessDiv").show(),
                                $("#id2BusinessChatDiv").show(),
                                window.EbkIMWholeBusinessManageModule.getBusinessManageContactPersons()),
                                "Client" == s.moduleName && (2 == s.status ? (self.hasclient = 1,
                                self.clientlevel = 2,
                                $("#id2AppliedDiv").show(),
                                $("#id2Unapply").hide(),
                                $("#id2GuestDiv").show()) : (self.clientlevel = 0,
                                1 == s.status && (self.clientlevel = 1,
                                $("#id2AppliedDiv").hide(),
                                $("#id2Unapply").show(),
                                $("#id2GuestDiv").show())),
                                window.IMWholeviewmodel.$data.clientlevel = self.clientlevel,
                                "T" == $("#guestDoneSwitch").val() && $("#id2GuestDoneTab").show(),
                                self.clientlevel > 0 && ($("#setclientstatusdiv").show(),
                                2 == self.clientlevel ? $('input[name="clientswitch"][value="T"]').prop("checked", !0) : $('input[name="clientswitch"][value="F"]').prop("checked", !0)))
                            }
                    }
                    "T" == $("#imSupplierSwitch").val() && $("#id2SupplierDiv").show(),
                    window.EbkIMWholeGuestModule.isFirstClickGuestDone = 0,
                    window.EbkIMWholeBookingModule.isFirstClickCustomServiceDone = 0,
                    window.IMWholeviewmodel.$data.GuestGoingGroupList = [],
                    window.IMWholeviewmodel.$data.BookingGoingGroupList = [],
                    self.initData(),
                    self.initServiceSetting(),
                    self.setVoiceAndTitleListener(),
                    self.initIMNoticeDetails(),
                    self.getTelephoneNums(),
                    self.getIMPlusMockQuestionsUrl(),
                    "T" == $("#imStartegy").val() && self.getBatchGetPromotionStrategy()
                }
            })
        },
        initServiceSetting: function() {
            (window.EbkIMWholeSettingModule.clearSetting(),
            window.EbkIMWholeSettingModule.clearSettingDiv(),
            2 == this.clientlevel || 1 == this.clientlevel ? ($("#servicehours").removeClass("hide"),
            $("#servicehoursDiv").show(),
            $("#servicehours").addClass("cur"),
            $("#servicehours").click(),
            this.initServiceHours(),
            $("#fastreply").removeClass("hide"),
            window.EbkIMWholeSettingModule.initFastReply(),
            window.IMWholeviewmodel.isHotelCompany && ($("#quickanswers").removeClass("hide"),
            $("#quickanswersDiv").show(),
            0 == this.isoversea && $(".clsmessagePhone").show())) : ($("#messageDiv").removeClass("hide"),
            $("#message").addClass("cur"),
            $("#message").click()),
            2 == this.clientlevel && window.IMWholeviewmodel.isHotelCompany) && (1 == Math.round(Math.random()) && 0 == this.isoversea && (window.IMWholeviewmodel.selfAnswerORSetPhoneRemind = 0,
            $("#selfAnswerAndPhoneRemind").removeClass("hide"),
            $("#selfAnswerAndPhoneRemind").show(),
            $("#answerOrPhoneRemind").html(window.EbkWholeIMMaster.getSharkValue("请点击配置自动问答", "Key.IM.059"))));
            $("#servicehours").hasClass("hide") || window.EbkIMWholeSettingModule.initServiceTime(),
            1 == this.hasbookingchat && $("#notifications").removeClass("hide"),
            "T" == $("#imHotelUserPicSetting").val() && window.IMWholeviewmodel.isHotelCompany && ($("#avator").removeClass("hide"),
            window.EbkIMWholeSettingModule.getHotelPictureLog(),
            window.EbkIMWholeSettingModule.initAvator()),
            window.EbkIMWholeSettingModule.initMessage()
        },
        startCheckIMLogin: function() {
            window.setInterval(function() {
                var e = window.EbkWholeIMMaster.getToken()
                  , o = $("#isImAutoLogin").val();
                IsEmptyOrSpace(e) && "F" === o && (window.location.href = "//" + document.domain + "/ebkovsassembly/Login")
            }, 500)
        },
        getOverSeaFinaceSwitch: function() {
            $.ajax("/ebkovsassembly/api/getOverSeaFinaceSwitch", {
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=UTF-8",
                data: null,
                error: function(e, o) {
                    console.log(o)
                },
                success: function(e) {
                    null != e && null != e.data && "T" == e.data && $("#id2ServiceOverSeaFinance").show()
                }
            })
        },
        getTelephoneNums: function() {
            $.ajax("/ebkovsassembly/api/getTelephoneNums", {
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=UTF-8",
                data: null,
                error: function(e, o) {
                    console.log(o)
                },
                success: function(e) {
                    null != e && null != e.data && ($(".telephone").html(e.data.telephone),
                    $(".telephoneOVS").html(e.data.telephoneOversea),
                    $(".chinese_special_line").html(e.data.chinese_special_line),
                    $(".chinese_special_line2").html(e.data.chinese_special_line2))
                }
            })
        },
        getBatchGetPromotionStrategy: function() {
            $.ajax("/ebkovsassembly/api/batchGetPromotionStrategy", {
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=UTF-8",
                data: null,
                error: function(e, o) {
                    console.log(o)
                },
                success: function(e) {
                    null != e && null != e.data && e.data.length > 0 && (window.IMWholeviewmodel.$data.isShowStrategy = !0,
                    window.IMWholeviewmodel.bindPromotionStrategyList(e.data))
                }
            })
        },
        setVoiceAndTitleListener: function() {
            var e = this;
            2 == e.clientlevel && (window.setInterval(function() {
                e.alertIntervalIMVoice()
            }, 2e4),
            IsEmptyOrSpace(window.IMWholeviewmodel.$data.scrollText) && (window.IMWholeviewmodel.$data.scrollText = "您有新的携程客人消息，请及时回复"),
            window.setInterval(function() {
                e.alertIntervalIMTitleRoll()
            }, 1e3))
        },
        initIMNoticeDetails: function() {
            var e = this;
            $("#ImNoticeDetailsLink").hide(),
            $("#ImNoticeDetails").html(""),
            $.ajax("/ebkovsassembly/api/getIMNoticeMessages", {
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=UTF-8",
                data: null,
                error: function(e, o) {
                    console.log(o)
                },
                success: function(o) {
                    if (null != o && null != o.data) {
                        var t = o.data.text;
                        if (!IsEmptyOrSpace(t)) {
                            if ($("#ImNoticeDetailsDev").show(),
                            t.indexOf("过去一周回复率差的酒店，将会关闭IM对客功能两周") > -1) {
                                var i = window.i18n_100012428["Key.IM.010"];
                                IsEmptyOrSpace(i) && (i = "过去一周回复率差的酒店，将会关闭IM对客功能两周；被关闭过但回复率依然不达标的酒店，将会不定期长时间关闭IM对客功能"),
                                t = i
                            }
                            t.length > 100 ? (window.IMWholeviewmodel.$data.IMNoticeMsg = t,
                            window.setInterval(function() {
                                e.alertIntervalIMNoticeMessage()
                            }, 1e3)) : $("#ImNoticeDetails").html(t)
                        }
                        null != o.data.textLink && ($("#ImNoticeDetailsLink").show(),
                        window.IMWholeviewmodel.$data.IMNoticeToDetailLink = o.data.textLink)
                    }
                }
            })
        },
        alertIntervalIMNoticeMessage: function() {
            var e = window.IMWholeviewmodel.$data.IMNoticeMsg
              , o = e.split("")
              , t = o.shift();
            o.push(t),
            e = o.join(""),
            window.IMWholeviewmodel.$data.IMNoticeMsg = e,
            $("#ImNoticeDetails").html(e)
        },
        alertIntervalIMVoice: function() {
            var e = window.IMWholeviewmodel.getCookie("voiceswitch");
            if ((null == e || 1 != e) && EbkPageTool.BeSelectedPage() && (window.IMWholeviewmodel.calculatTotalUnreadCount(),
            window.IMWholeviewmodel.$data.guestunreadtotalcount > 0 || window.IMWholeviewmodel.$data.bookingunreadtotalcount > 0 || window.IMWholeviewmodel.$data.serviceunreadtotalcount > 0 || window.IMWholeviewmodel.$data.supplierunreadtotalcount > 0 || IMWholeviewmodel.$data.businessGroupInfo.unreadcount > 0)) {
                var o, t = navigator.userAgent.toLowerCase(), i = this.getIMNotify();
                /msie/i.test(t) && !/opera/.test(t) ? ($("#MusicIM").append($('<bgsound id="bgPlayerIM" loop="-1" autostart="true"></bgsound>')),
                document.getElementById("bgPlayerIM").src = i) : (o = /firefox/i.test(t) ? '<video controls="" autoplay="" name="media"  width="0" height="0"><source src=' + i + ' type="audio/mpeg"></video>' : /chrome/i.test(t) && /webkit/i.test(t) && /mozilla/i.test(t) ? '<video controls="" autoplay="" name="media"  width="0" height="0"><source src=' + i + ' type="audio/mpeg"></video>' : /opera/i.test(t) ? ' <object id="PlayerIM" data="' + i + '" type="application/x-mplayer2" width="0" height="0">  <param name="src" value="Music/7.mp3"> </param>  <param name="autostart" value="1"> </param>  <param name="playcount" value="infinite">  </param> </object>' : t.indexOf("safari") > -1 ? '<audio id="PlayerIM" src="' + i + '" autoplay preload loop controls></audio>' : (!/webkit/i.test(t) || /chrome/i.test(t) && /webkit/i.test(t) && /mozilla/i.test(t),
                ' <object id="PlayerIM" data="' + i + '" type="application/x-mplayer2" width="0" height="0">  <param name="src" value="Music/7.mp3"> </param>  <param name="autostart" value="1"> </param>  <param name="playcount" value="infinite">  </param> </object>'),
                document.getElementById("MusicIM").innerHTML = o)
            }
        },
        alertIntervalIMTitleRoll: function() {
            var e = window.IMWholeviewmodel.getCookie("tipswitch");
            null == e || 1 != e ? (window.IMWholeviewmodel.calculatTotalUnreadCount(),
            window.IMWholeviewmodel.$data.guestunreadtotalcount > 0 || window.IMWholeviewmodel.$data.bookingunreadtotalcount > 0 || window.IMWholeviewmodel.$data.serviceunreadtotalcount > 0 || window.IMWholeviewmodel.$data.supplierunreadtotalcount > 0 || IMWholeviewmodel.$data.businessGroupInfo.unreadcount > 0 ? (document.title = window.IMWholeviewmodel.$data.scrollText.toString().substring(1, window.IMWholeviewmodel.$data.scrollText.length) + window.IMWholeviewmodel.$data.scrollText.substring(0, 1),
            window.IMWholeviewmodel.$data.scrollText = document.title.substring(0, window.IMWholeviewmodel.$data.scrollText.length)) : document.title = window.EbkWholeIMMaster.getSharkValue("在线咨询", "Key.IM.061")) : document.title = window.EbkWholeIMMaster.getSharkValue("在线咨询", "Key.IM.061")
        },
        loadMsg: function(e, o) {
            (self = this).imClient.getNewConversationMessagesByJid({
                conversationType: IMClient.CommonEnum.ConversationType.GroupChat,
                partnerJid: e.toString(),
                paging: {
                    pageSize: 100
                },
                isAll: "true"
            }, function(t) {
                t && t.ResponseStatus && t.ResponseStatus.Ack && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && self.imClient.getCurrentGroupAllMembers({
                    paging: {
                        sortField: "create_at"
                    }
                }, function(i) {
                    if (i && "success" == i.ResponseStatus.Ack.toLowerCase() && null != i.members && i.members.length > 0) {
                        var n = window.IMWholeviewmodel.getGroupInfo(e)
                          , s = window.EbkWholeIMMaster.getSharkValue("客人", "Key.IM.062");
                        s += n.groupId.toString().substring(n.groupId.length - 4, n.groupId.length),
                        1801 == n.biztype && (s = ndow.EbkWholeIMMaster.getSharkValue("去哪儿客人", "Key.IM.063"));
                        for (var a = 0; a < i.members.length; a++) {
                            var r = i.members[a];
                            if (!(r.uid.indexOf("_eid") >= 0)) {
                                window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + r.uid.toLocaleLowerCase()] = {
                                    avatar: r.avatar,
                                    nickname: r.nickname || s,
                                    headphoto: r.avatar
                                };
                                n = window.IMWholeviewmodel.getGroupInfo(e);
                                if (null != r.roles && r.roles.length >= 3 && 1003 != n.biztype && 1383 != n.biztype) {
                                    var l = window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + r.uid].nickname;
                                    if (1 == r.roles[1] || 5 == r.roles[0])
                                        window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + r.uid].nickname = s;
                                    else if (2 == r.roles[1])
                                        (IsEmptyOrSpace(window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + r.uid].nickname) || window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + r.uid].nickname.indexOf("***") >= 0) && (window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + r.uid].nickname = multimasterLanguageText.aI_Customer_Service_Agent),
                                        IsEmptyOrSpace(window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + r.uid].avatar) && (window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + r.uid].avatar = "//pic.c-ctrip.com/ebooking/intebk/im_02.png");
                                    else if (r.uid.indexOf("_imebk") >= 0)
                                        ;
                                    else if ($("#id2GuestDiv").hasClass("cur")) {
                                        var d = EbkWholeIMMaster.getSharkValue("携程管家：", "Key.IM.064");
                                        window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + r.uid].nickname = d + l
                                    }
                                    if (r.uid.indexOf("_imebk") >= 0 && l.indexOf("酒店客服") < 0) {
                                        d = window.EbkWholeIMMaster.getSharkValue("酒店客服：", "Key.IM.065");
                                        window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + r.uid].nickname = d + l
                                    }
                                }
                            }
                        }
                    }
                    t.conversationSummaries && 0 == t.conversationSummaries.length || (self.loadCurrentMessage(t.messages, !1),
                    self.setChatTitle(e, o))
                }, function(e) {})
            }, function(e) {
                console.log("getNewConversationMessagesByJid error", e)
            })
        },
        loadCurrentMessage: function(e, o) {
            self = this;
            var t = [];
            if (e != undefined && 0 != e.length) {
                var i = 0
                  , n = !1
                  , s = window.IMWholeviewmodel.getDoneGroupInfo(IMWholeviewmodel.$data.currentGroupInfo.sessionid)
                  , a = window.EbkWholeIMMaster.needReadMsgInfo()
                  , r = IMWholeviewmodel.$data.currentGroupInfo;
                null != s && (a = !1);
                for (var l = 0; l < e.length; l++) {
                    var d = e[l];
                    if (0 != window.EbkWholeIMMaster.isSupportMsgType(d.messageType, d.title, d.actionCode, d) && (!(null != d.content && d.content.indexOf("宝贵的意见") > -1) && !(null != d.content && d.content.indexOf("星评价") > -1) && (1007 != d.messageType || IsEmptyOrSpace(d.actionCode) || "NBZ12" != d.actionCode || IsEmptyOrSpace(d.extPropertys) || IsEmptyOrSpace(d.extPropertys.recipients)))) {
                        var u = !0
                          , c = self.truncateGroupID(d.fromJid);
                        self.myUid.toLowerCase() == self.truncateGroupID(d.fromJid) ? (c = self.truncateUID(d.toJid),
                        u = !1) : u = !0;
                        var m = "";
                        null != window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + c.toLocaleLowerCase()] && window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + c.toLocaleLowerCase()].avatar != undefined && (m = window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + c].avatar),
                        null != r && "1357" == r.biztype && (m = window.IMWholeviewmodel.$data.commentConnectGuestImg),
                        c.indexOf("_imebk") >= 0 && (m = window.EbkIMWholeSettingModule.changeHotelAvator("//pic.c-ctrip.com/ebooking/intebk/im_01.png")),
                        c.indexOf("_eid") >= 0 && (m = "//pic.c-ctrip.com/ebooking/intebk/im_03.png"),
                        m != undefined && "" != m || (m = "http://pic.c-ctrip.com/ebooking/intebk/im_01.png");
                        var w = "";
                        null != window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + c.toLocaleLowerCase()] ? w = window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + c].nickname : c.indexOf("_eid") < 0 ? (self.getDoneUserInfo(c, ""),
                        n = !0) : w = self.confuseUid(c);
                        var g = window.EbkIMWholeSettingModule.changeHotelAvator("//pic.c-ctrip.com/ebooking/intebk/im_01.png");
                        if (self.sendMsgIds.push(d.messageId),
                        window.IMWholeviewmodel.$data.sendMsgIds.push(d.messageId),
                        !u || d.messageType != IMClient.CommonEnum.MessageType.TextMessage || self.msgcontent != d.content) {
                            var p = self.dateformat(d.createTime, i);
                            if ("error" == p)
                                ;
                            else if ("" == p)
                                ;
                            else if ("CARD06" == d.actionCode)
                                ;
                            else {
                                var h = window.IMWholeviewmodel.getMsgEntity();
                                h.isTimeMsg = !0,
                                h.timeStr = p,
                                t.push(h),
                                i = d.createTime
                            }
                            var v = !1;
                            7 == d.messageType && null != d.title && d.title.indexOf("您的评价") > -1 && (v = !0);
                            var I = window.EbkWholeIMMaster.getContentByMsgType(d.messageType, d.title, d, r, w);
                            null != s && 1007 == d.messageType && d.actionCode != undefined && null != d.actionCode && "NBZ22" == d.actionCode && (I = d.title);
                            var M = window.EbkWholeIMMaster.isSystemMsg(d.messageType, d.title, d);
                            if (v) {
                                var f = window.IMWholeviewmodel.getMsgEntity();
                                f.isTextMsg = !0,
                                f.content = IsEmptyOrSpace(I) ? I : html_encode(I).replace(/\r|\n|↵/g, "<br/>"),
                                f.avator = u ? m : g,
                                f.sendername = w,
                                f.isMyself = !u,
                                f.createtime = d.createTime,
                                f.uid = c.toLocaleLowerCase(),
                                f.msgid = d.messageId,
                                f.isshowreadtip = a && !u,
                                f.isread = r.lastreadedid >= d.messageId,
                                t.push(f)
                            } else
                                switch (d.messageType) {
                                case IMClient.CommonEnum.MessageType.TextMessage:
                                    (T = window.IMWholeviewmodel.getMsgEntity()).isTextMsg = !0,
                                    T.content = IsEmptyOrSpace(d.content) ? d.content : html_encode(d.content).replace(/\r|\n|↵/g, "<br/>"),
                                    T.avator = u ? m : g,
                                    T.sendername = w,
                                    T.isMyself = !u,
                                    T.createtime = d.createTime,
                                    T.uid = c.toLocaleLowerCase(),
                                    T.msgid = d.messageId,
                                    T.isshowreadtip = a && !u,
                                    T.isread = r.lastreadedid >= d.messageId,
                                    T.isshowtranslatetip = u && (1356 == d.bizType || 1357 == d.bizType || 1801 == d.bizType || 1399 == d.bizType || 1479 == d.bizType || 1488 == d.bizType) && 1 == $("#showtranslatefunc").val(),
                                    t.push(T);
                                    break;
                                case IMClient.CommonEnum.MessageType.ImageMessage:
                                    var y = window.IMWholeviewmodel.getMsgEntity();
                                    y.isPicMsg = !0,
                                    y.picStr = d.imageUrl,
                                    y.avator = u ? m : g,
                                    y.sendername = w,
                                    y.isMyself = !u,
                                    y.createtime = d.createTime,
                                    y.uid = c.toLocaleLowerCase(),
                                    y.msgid = d.messageId,
                                    y.isshowreadtip = a && !u,
                                    y.isread = r.lastreadedid >= d.messageId,
                                    t.push(y);
                                    break;
                                case 2:
                                case 7:
                                    if (null != I) {
                                        if ("CBZ35" == d.action || "CBZ35" == d.actionCode || "CBZ36" == d.action || "CBZ36" == d.actionCode || "CBZ37" == d.action || "CBZ37" == d.actionCode) {
                                            (T = window.IMWholeviewmodel.getMsgEntity()).isTextMsg = !0,
                                            T.content = IsEmptyOrSpace(I) ? I : I.replace(/\r|\n|↵/g, "<br/>"),
                                            T.avator = u ? m : g,
                                            T.sendername = "",
                                            T.isMyself = !1,
                                            T.createtime = d.createTime,
                                            T.msgid = d.messageId,
                                            T.isshowreadtip = a && !u,
                                            T.isread = r.lastreadedid >= d.messageId,
                                            T.uid = c.toLocaleLowerCase(),
                                            t.push(T);
                                            break
                                        }
                                        if ("CBZ43" == d.action || "CBZ43" == d.actionCode) {
                                            for (var C = 0; C < I.length; C++) {
                                                var b = window.IMWholeviewmodel.getMsgEntity();
                                                "img" == I[C].textType ? (b.isPicMsg = !0,
                                                b.picStr = I[C].textContent) : "text" == I[C].textType && (b.isTextMsg = !0,
                                                b.content = IsEmptyOrSpace(I[C].textContent) ? I[C].textContent : I[C].textContent.replace(/\r|\n|↵/g, "<br/>")),
                                                b.avator = u ? m : g,
                                                b.sendername = w,
                                                b.isMyself = !u,
                                                b.createtime = d.createTime,
                                                b.uid = c.toLocaleLowerCase(),
                                                b.isshowreadtip = a && !u,
                                                b.isread = r.lastreadedid >= d.messageId,
                                                b.msgid = d.messageId,
                                                t.push(b)
                                            }
                                            break
                                        }
                                        if ("CBZ16" == d.actionCode && null != d.extPropertys && null != d.extPropertys.dataInfoList && d.extPropertys.dataInfoList.length > 0) {
                                            (T = window.IMWholeviewmodel.getMsgEntity()).isTextMsg = !0,
                                            T.content = I,
                                            T.avator = u ? m : g,
                                            T.sendername = "",
                                            T.isMyself = !1,
                                            T.createtime = d.createTime,
                                            T.msgid = d.messageId,
                                            T.isshowreadtip = a && !u,
                                            T.isread = r.lastreadedid >= d.messageId,
                                            T.uid = c.toLocaleLowerCase(),
                                            t.push(T);
                                            break
                                        }
                                        if ("CBZ03" == d.actionCode && d.title.indexOf(multimasterLanguageText.order) > -1) {
                                            (T = window.IMWholeviewmodel.getMsgEntity()).isOrderTextMsg = !0,
                                            T.content = self.getOrderContent(I),
                                            T.avator = u ? m : g,
                                            T.sendername = w,
                                            T.isMyself = !u,
                                            T.createtime = d.createTime,
                                            T.uid = c.toLocaleLowerCase(),
                                            T.msgid = d.messageId,
                                            T.isshowreadtip = a && !u,
                                            T.isread = r.lastreadedid >= d.messageId,
                                            t.push(T);
                                            break
                                        }
                                        if ("CBZ11" == d.actionCode && "找不到酒店客服？快试试点击下方" != d.title) {
                                            (T = window.IMWholeviewmodel.getMsgEntity()).isTextMsg = !0;
                                            var k = '<div class=" txt12 clearall" style="padding-left:90px;"><i class="im-file-icon im-did-icon"></i><div class="txt14 file-tit">' + window.EbkWholeIMMaster.getSharkValue("酒店已发送联系方式，点击联系酒店。", "Key.IM.066") + '</div><div class="msg-coll">' + window.EbkWholeIMMaster.getSharkValue("电话联系酒店", "Key.IM.067") + "电话联系酒店</div></div>";
                                            T.content = k,
                                            T.avator = "//pic.c-ctrip.com/ebooking/intebk/im_01.png",
                                            T.sendername = "",
                                            T.isMyself = !0,
                                            T.createtime = d.createTime,
                                            T.msgid = d.messageId,
                                            T.uid = c.toLocaleLowerCase(),
                                            T.isshowreadtip = a && !u,
                                            T.isread = r.lastreadedid >= d.messageId,
                                            T.isshowreadtip = a,
                                            t.push(T);
                                            break
                                        }
                                        if ("CBZ25" == d.actionCode && I.toString().indexOf("酒店红包") > -1) {
                                            (T = window.IMWholeviewmodel.getMsgEntity()).isCommonPromotionTextMsg = !0,
                                            T.content = self.formatToHotelRedPackageEntity(JSON.parse(I)),
                                            T.avator = u ? m : g,
                                            T.sendername = w,
                                            T.isMyself = !u,
                                            T.createtime = d.createTime,
                                            T.uid = c.toLocaleLowerCase(),
                                            T.msgid = d.messageId,
                                            T.isshowreadtip = a && !u,
                                            T.isread = r.lastreadedid >= d.messageId,
                                            t.push(T);
                                            break
                                        }
                                        if ("CBZ25" == d.actionCode && d.title.indexOf("商家向您发出了特别优惠") > -1) {
                                            (T = window.IMWholeviewmodel.getMsgEntity()).isTextMsg = !0,
                                            T.content = I,
                                            T.avator = u ? m : g,
                                            T.sendername = w,
                                            T.isMyself = !u,
                                            T.createtime = d.createTime,
                                            T.uid = c.toLocaleLowerCase(),
                                            T.msgid = d.messageId,
                                            T.isshowreadtip = a && !u,
                                            T.isread = r.lastreadedid >= d.messageId,
                                            t.push(T);
                                            break
                                        }
                                        if ("CBZ26" == d.actionCode && (I.toString().indexOf("今夜甩卖") > -1 || I.toString().indexOf("限时抢购") > -1 || I.toString().indexOf("天天特价") > -1)) {
                                            (T = window.IMWholeviewmodel.getMsgEntity()).isCommonPromotionTextMsg = !0;
                                            try {
                                                T.content = self.formatToPromotionEntity(JSON.parse(I))
                                            } catch (O) {
                                                T.content = IsEmptyOrSpace(I) ? I : I.replace(/\r|\n|↵/g, "<br/>")
                                            }
                                            T.avator = u ? m : g,
                                            T.sendername = w,
                                            T.isMyself = !u,
                                            T.createtime = d.createTime,
                                            T.uid = c.toLocaleLowerCase(),
                                            T.isshowreadtip = a && !u,
                                            T.isread = r.lastreadedid >= d.messageId,
                                            T.msgid = d.messageId,
                                            t.push(T);
                                            break
                                        }
                                        if ("CBZ04" == d.actionCode && null != d.extPropertys && null != d.extPropertys.decorates && d.extPropertys.decorates.length > 0 && !IsEmptyOrSpace(d.title)) {
                                            if (!IsEmptyOrSpace(d.extPropertys.suggest))
                                                for (C = 0; C < I.length; C++) {
                                                    b = window.IMWholeviewmodel.getMsgEntity();
                                                    "img" == I[C].textType ? (b.isPicMsg = !0,
                                                    b.picStr = I[C].textContent) : "text" == I[C].textType && (b.isTextMsg = !0,
                                                    b.content = IsEmptyOrSpace(I[C].textContent) ? I[C].textContent : I[C].textContent.replace(/\r|\n|↵/g, "<br/>")),
                                                    b.avator = u ? m : g,
                                                    b.sendername = w,
                                                    b.isMyself = !u,
                                                    b.createtime = d.createTime,
                                                    b.uid = c.toLocaleLowerCase(),
                                                    b.isshowreadtip = a && !u,
                                                    b.isread = r.lastreadedid >= d.messageId,
                                                    b.msgid = d.messageId,
                                                    IsEmptyOrSpace(d.extPropertys.answer) || "Robot message" != d.title || (b.aitoken = d.extPropertys.aiToken,
                                                    b.isShowAIAnswerComment = !0),
                                                    t.push(b)
                                                }
                                            break
                                        }
                                        if ("CARD05" == d.actionCode) {
                                            (T = window.IMWholeviewmodel.getMsgEntity()).confirmCard = !0,
                                            T.content = window.EbkWholeIMMaster.getConfirmCardInfo(d.extPropertys),
                                            T.avator = u ? m : g,
                                            T.sendername = "",
                                            T.isMyself = !1,
                                            T.createtime = d.createTime,
                                            T.msgid = d.messageId,
                                            T.isshowreadtip = a && !u,
                                            T.isread = r.lastreadedid >= d.messageId,
                                            T.uid = c.toLocaleLowerCase(),
                                            null != T.content && t.push(T);
                                            break
                                        }
                                        if ("CARD06" == d.actionCode) {
                                            var W = d.extPropertys.actionInput;
                                            t = window.EbkWholeIMMaster.changeMsgList(d.extPropertys.guid, W, t);
                                            break
                                        }
                                        if ("CBZ53" == d.actionCode) {
                                            (T = window.IMWholeviewmodel.getMsgEntity()).isTextMsg = !0,
                                            T.content = I,
                                            T.avator = u ? m : g,
                                            T.sendername = w,
                                            T.isMyself = !u,
                                            T.createtime = d.createTime,
                                            T.uid = c.toLocaleLowerCase(),
                                            T.msgid = d.messageId,
                                            T.isshowreadtip = a && !u,
                                            T.isread = r.lastreadedid >= d.messageId,
                                            t.push(T);
                                            break
                                        }
                                    }
                                case 8:
                                case 1007:
                                    if (M)
                                        (S = window.IMWholeviewmodel.getMsgEntity()).isSystemMsg = !0,
                                        S.sysText = I,
                                        console.log(d),
                                        t.push(S);
                                    else
                                        (T = window.IMWholeviewmodel.getMsgEntity()).isTextMsg = !0,
                                        T.content = IsEmptyOrSpace(I) ? I : I.replace(/\r|\n|↵/g, "<br/>"),
                                        T.avator = u ? m : g,
                                        T.sendername = w,
                                        T.isMyself = !u,
                                        T.createtime = d.createTime,
                                        T.uid = c.toLocaleLowerCase(),
                                        T.msgid = d.messageId,
                                        T.isshowreadtip = a && !u,
                                        T.isread = r.lastreadedid >= d.messageId,
                                        t.push(T);
                                    break;
                                case 5:
                                    (T = window.IMWholeviewmodel.getMsgEntity()).isTextMsg = !0;
                                    k = '<div class="clsFileDown" data-url="' + d.url + '" data-name="' + d.filename + '"><div class=" txt12 clearall" style="padding-left:90px;"><i class="im-file-icon ' + window.IMWholeviewmodel.getFileIconClass(d.filename) + '"></i><p class="txt14 file-tit">' + d.filename + '</p><div class="msg-m">' + window.IMWholeviewmodel.getFileSizeDesc(d.size) + '</div></div><i class="upload-file-icon"></i></div>';
                                    T.content = k,
                                    T.isTextMsg = !0,
                                    T.avator = u ? m : g,
                                    T.sendername = w,
                                    T.isMyself = !u,
                                    T.isFileMsg = !0,
                                    T.createtime = d.createTime,
                                    T.uid = c.toLocaleLowerCase(),
                                    T.msgid = d.messageId,
                                    T.isshowreadtip = a && !u,
                                    T.isread = r.lastreadedid >= d.messageId,
                                    t.push(T);
                                    break;
                                case 1009:
                                    var S;
                                    (S = window.IMWholeviewmodel.getMsgEntity()).isSystemMsg = !0,
                                    S.sysText = I,
                                    console.log(d),
                                    (t = $.grep(t, function(e) {
                                        return e.msgid != d.recallMessageId
                                    })).push(S);
                                    break;
                                default:
                                    var T;
                                    (T = window.IMWholeviewmodel.getMsgEntity()).isTextMsg = !0,
                                    T.content = IsEmptyOrSpace(I) ? I : html_encode(I).replace(/\r|\n|↵/g, "<br/>"),
                                    T.avator = u ? m : g,
                                    T.sendername = w,
                                    T.isMyself = !u,
                                    T.createtime = d.createTime,
                                    T.uid = c.toLocaleLowerCase(),
                                    T.msgid = d.messageId,
                                    T.isshowreadtip = a && !u,
                                    T.isread = r.lastreadedid >= d.messageId,
                                    t.push(T)
                                }
                        }
                    }
                }
                if (!o && IMWholeviewmodel.$data.isFocusThisWindow) {
                    if (window.IMWholeviewmodel.$data.MsgList = t,
                    t.length > 0) {
                        for (i = 0,
                        l = 0; l < t.length && ((i = t[t.length - 1 - l].createtime) == undefined || null == i || 0 == i); l++)
                            ;
                        self.sendReceipt(window.IMWholeviewmodel.$data.currentGroupId, i)
                    }
                    setTimeout(function() {
                        parentSelf.scrolltobuttom()
                    }, 100);
                    var G = window.IMWholeviewmodel.$data.currentGroupId
                      , D = window.IMWholeviewmodel.getGroupInfo(G)
                      , L = 0;
                    null != D && (L = D.biztype),
                    1361 != L && 1367 != L && 1368 != L && 1369 != L || 0 == window.IMWholeviewmodel.$data.firstSelectAndSendMsgByOrderId && "" != $("#toOrderId").val() && self.getOrderDetails($("#toOrderId").val(), D, "false"),
                    1364 == L && 0 == window.IMWholeviewmodel.$data.firstSelectAndSendMsgByOrderId && "" != $("#id2auditorderid").val() && self.getOrderDetails($("#id2auditorderid").val(), D, "false"),
                    1399 != L && 1356 != L || "" == $("#isForGuest").val() || "" == $("#orderIdForGuest").val() || "" == $("#toGid").val() || "" == $("#sendOrderMsgForGuest").val() || 0 != window.IMWholeviewmodel.$data.firstSelectAndSendMsgByOrderId || self.getOrderDetails($("#orderIdForGuest").val(), D, $("#sendOrderMsgForGuest").val())
                } else {
                    var E = [];
                    for (l = 0; l < t.length; l++)
                        E.push(t[l]);
                    for (l = 0; l < window.IMWholeviewmodel.$data.MsgList.length; l++)
                        E.push(window.IMWholeviewmodel.$data.MsgList[l]);
                    window.IMWholeviewmodel.$data.MsgList = E
                }
                var x = !1;
                e.length >= 100 && (x = !0),
                setTimeout(function() {
                    self.isShowMoreHistoryBtn(x)
                }, 500),
                self.queryMessageTranslation(e[e.length - 1].messageId),
                a && self.getLatestMessageInBulkOffline(),
                n && setTimeout(function() {
                    self.reloadMsg()
                }, 500)
            }
        },
        queryMessageTranslation: function(e) {
            self = this;
            var o = window.IMWholeviewmodel.$data.currentGroupInfo;
            if ((1356 == o.biztype || 1357 == o.biztype || 1801 == o.biztype || 1399 == o.biztype || 1479 == o.biztype || 1488 == o.biztype) && 1 == $("#showtranslatefunc").val()) {
                var t = {
                    ownerId: o.currentopreduid,
                    sessionId: o.sessionid,
                    groupId: o.groupId,
                    beginMessageTime: e
                };
                $.ajax("/ebkovsassembly/api/queryMessageTranslation", {
                    type: "post",
                    dataType: "json",
                    contentType: "application/json;charset=UTF-8",
                    data: JSON.stringify(t),
                    error: function(e, o) {
                        console.log(o)
                    },
                    success: function(e) {
                        if (null != e.data)
                            for (var o = 0; o < window.IMWholeviewmodel.$data.MsgList.length; o++)
                                for (var t = window.IMWholeviewmodel.$data.MsgList[o], i = 0; i < e.data.length; i++) {
                                    var n = e.data[i];
                                    if (t.msgid == n.messageId && n.translateText.length > 0) {
                                        t.translatedstatus = 2,
                                        t.translatedcontent = n.translateText,
                                        t.translatedsource = n.source;
                                        break
                                    }
                                }
                    }
                })
            }
        },
        reloadMsg: function() {
            self = this;
            for (var e = [], o = 0; o < window.IMWholeviewmodel.$data.MsgList.length; o++) {
                var t = window.IMWholeviewmodel.$data.MsgList[o];
                if (e.push(t),
                !t.isMyself && (t.isTextMsg || t.isPicMsg || t.isOrderTextMsg) && null != window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + t.uid]) {
                    var i = window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + t.uid];
                    t.sendername = i.nickname,
                    t.avator = i.avatar,
                    t.uid.indexOf("_imebk") >= 0 && (t.avator = window.EbkIMWholeSettingModule.changeHotelAvator("//pic.c-ctrip.com/ebooking/intebk/im_01.png")),
                    t.uid.indexOf("_eid") >= 0 && (t.avator = "//pic.c-ctrip.com/ebooking/intebk/im_03.png")
                }
            }
            window.IMWholeviewmodel.$data.MsgList = e
        },
        sendReceipt: function(e, o) {
            if (self = this,
            null != e && "" != e) {
                var t = window.IMWholeviewmodel.getGroupInfo(e);
                if (null != t) {
                    self.imClient.getConversationMessagesByJidPaging({
                        conversationType: "groupchat",
                        isAll: !0,
                        partnerJid: e.toString(),
                        paging: {
                            beginTimestamp: 0,
                            endTimestamp: 0,
                            direction: "prev",
                            pageSize: 30
                        }
                    }, function(o) {
                        if (o && o.ResponseStatus && o.ResponseStatus.Ack && "success" == o.ResponseStatus.Ack.toLocaleLowerCase()) {
                            if (console.log(o),
                            null == o || null == o.messages)
                                return;
                            var i = "0";
                            if (o.messages.length > 0)
                                for (var n = o.messages.length - 1; n >= 0; n--) {
                                    var s = o.messages[n];
                                    if (s.messageType < 1e3) {
                                        i = s.messageId;
                                        break
                                    }
                                }
                            if ("0" === i)
                                return;
                            self.imClient.putAdviceOfReadByMsgId({
                                conversationType: IMClient.CommonEnum.ConversationType.GroupChat,
                                partnerJid: e.toString(),
                                msgId: i
                            }, function(e) {
                                null != t && (t.unreadcount = 0,
                                window.IMWholeviewmodel.calculatTotalUnreadCount())
                            }, function(e) {})
                        } else
                            console.log("getHistoryMessagesPaging error", o)
                    }, function(e) {
                        console.log("getConversationMessagesByJidPaging error", e)
                    })
                }
            }
        },
        toCommonOrderEntity: function(e) {
            var o = {};
            return null != e && (o.productUrl = "",
            o.productNum = e.night + e.quantity,
            o.useDate = e.arrivalDate,
            o.total = e.totalPrince,
            o.discription = "入住日期：" + e.discription,
            o.title = e.hotelName,
            "" != e.totalPrince ? o.price = e.totalPrince.replace(e.currency, "") : o.price = "",
            o.bizTypeCN = "酒店",
            o.orderId = e.orderID,
            o.expireDate = e.departure,
            o.bizType = "hoteldomestic",
            o.jumpUrl = e.orderLink,
            o.currency = e.currency,
            o.status = e.orderStatus),
            o
        },
        toCommonHotelRedPackageEntity: function(e) {
            var o = {};
            if (null != e) {
                o.cardTitle = "酒店优惠券 基于您的聊天和收藏为您推荐",
                o.activityId = e.promotionType.toString();
                var t = []
                  , i = {};
                if (i.promotionTitle = e.promotionName,
                i.promotionDesp = "",
                i.promotionId = e.ruleId.toString(),
                i.productLineId = 88,
                i.promotionType = 0,
                null != e.showDiscount && e.showDiscount.length > 0) {
                    var n = e.showDiscount[0].split("减");
                    if (null != n && 2 == n.length) {
                        if (null != n[0]) {
                            var s = n[0].split(",");
                            null != s && (i.promotionDesp = s[0].substring(1, s[0].length - 1) + "可领",
                            i.useCondition = s[1] + "减")
                        }
                        i.deductionAmount = n[1]
                    }
                }
                t.push(i);
                var a = {}
                  , r = "ctrip://wireless/InlandHotel?hotelId=" + e.masterHotelId + "&hotelDataType=1&checkInDate=&checkOutDate=&couponStrategyIdFromChat=" + e.ruleId;
                a.app = r,
                a.online = "",
                a.web = "",
                i.jumpUrl = a,
                o.promotionList = t
            }
            return o
        },
        toCommonPromotionStrategyEntity: function(e, o) {
            var t = {};
            if (null == e)
                return t;
            t.cardTitle = "商家特别优惠",
            t.activityId = "",
            t.promotionList = [];
            var i = {};
            i.promotionTitle = e.displayName,
            i.promotionDesp = "领取后30日内有效",
            i.promotionId = e.promotionId,
            i.promotionType = "0",
            i.productLineId = "2",
            i.deductionAmount = e.deduction.deductionAmount,
            i.currency = "￥",
            i.useCondition = "满" + e.deduction.startAmount + "立减";
            var n = {}
              , s = "/rn_hotelPkgCouponModal/main.js?CRNModuleName=hotelPkgCouponModal&initialPage=IMCouponModalPage&CRNType=1&isHideNavBar=YES&hideDefaultLoading=YES&couponCode=" + e.couponCode + "&promotionID=" + e.promotionId + "&groupID=" + o.groupId + "&hotelID=" + window.IMWholeviewmodel.MasterHotelId + "&sessionID=" + o.sessionid;
            return n.app = "ctrip://wireless/hotel_rn_modal?url=" + Base64.encode(encodeURIComponent(s)) + "&disableAnim=1",
            i.jumpUrl = n,
            t.promotionList.push(i),
            t
        },
        toCommonPromotionEntity: function(e) {
            var o = {};
            if (null != e) {
                if (o.cardTitle = e.promotionName + " 基于您的聊天和收藏为您推荐",
                o.activityId = e.promotionType.toString(),
                null != e.showDiscount && e.showDiscount.length > 0) {
                    var t = e.showDiscount[0].split(",");
                    null != t && t.length > 1 && (o.promotionTitle = "活动房型 " + t[1])
                }
                var i = "促销房型:";
                e.roomName.length > 0 && (i += e.roomName[0].substring(1, e.roomName[0].length - 1) + "等部分房型\n"),
                i.indexOf("<") > -1 && i.replace(/\</g, "("),
                i.indexOf(">") > -1 && i.replace(/\>/g, ")"),
                i.indexOf("[") > -1 && i.replace(/\[/g, "("),
                i.indexOf("]") > -1 && i.replace(/\]/g, ")");
                var n = e.showDate.split(",");
                null != n && (n.length > 0 && (i += "促销时间:" + n[0].substring(1, n[0].length - 1)),
                n.length > 1 && (i += "," + n[1])),
                i += "\n抢购页面有『" + e.promotionName + "』的为活动房型\n以活动页面实际展示为准",
                o.promotionDesp = i,
                o.promotionImg = this.getPromotionImg(e.promotionName),
                o.startTime = e.startDate,
                o.endTime = e.endDate,
                o.btnList = this.getPromotionBtnList(e.promotionType, e.masterHotelId)
            }
            return o
        },
        formatToHotelRedPackageEntity: function(e) {
            var o = window.IMWholeviewmodel.getPromotionTypeEntity()
              , t = ""
              , i = ""
              , n = "";
            if (null != e) {
                o.promotionType = e.activityId;
                var s = e.promotionList;
                if (null != s && s.length > 0) {
                    var a = s[0];
                    null != a && (o.promotionName = a.promotionTitle,
                    t = a.useCondition,
                    i = a.deductionAmount,
                    n = "【" + a.promotionDesp + "】",
                    o.showDiscount.push("促销优惠:" + n + t + i),
                    o.ruleId = a.promotionId,
                    o.showDate = "促销时间:" + n)
                }
                o.roomName.push("促销房型:【全部预付房型】")
            }
            return o
        },
        formatToPromotionEntity: function(e) {
            var o = window.IMWholeviewmodel.getPromotionTypeEntity();
            if (null != e) {
                o.promotionType = e.activityId,
                o.promotionName = e.cardTitle,
                o.startDate = this.transformPHPTime(e.startTime),
                o.endDate = this.transformPHPTime(e.endTime),
                o.showDiscount.push("促销优惠:" + e.promotionTitle);
                var t = e.promotionDesp;
                if (null != t && t.length > 0) {
                    var i = t.split("促销时间:");
                    if (null != i && i.length > 0 && o.roomName.push(i[0]),
                    null != i && i.length > 1) {
                        var n = i[1].split(",");
                        null != n && n.length > 0 && (o.showDate = "促销时间:【" + n[0] + "】,"),
                        null != n && n.length > 1 && (o.showDate += n[1])
                    }
                }
            }
            return o
        },
        getPromotionImg: function(e) {
            var o = ""
              , t = window.IMWholeviewmodel.promotionImgList;
            return "天天特价" == e ? o = t.everyDaySpecialPriceImg : "今夜甩卖" == e ? o = t.todayNightSaleImg : "限时抢购" == e && (o = t.limitHoursSaleImg),
            o
        },
        getPromotionBtnList: function(e, o) {
            var t = []
              , i = "ctrip://wireless/InlandHotel?hotelId=" + o + "&hotelDataType=1&checkInDate=&checkOutDate="
              , n = {
                btnTitle: "去抢购"
            }
              , s = {};
            return s.app = i,
            s.online = "",
            s.web = "",
            n.jumpUrl = s,
            t.push(n),
            t
        },
        scrolltobuttom: function() {
            self = this;
            var e = $("#id2ChatMsgDiv");
            $("#id2ChatMsgDiv").scrollTop(e[0].scrollHeight)
        },
        sendmsg: function(e, o, t) {
            self = this;
            var i = window.IMWholeviewmodel.getGroupInfo(e);
            if (null != i) {
                var n = i.threadid
                  , s = self.generateLocalID();
                0 != o.length && (1356 != t && 1357 != t && 1479 != t && 1488 != t && 1695 != t && 1696 != t && 1697 != t || window.IMWholeviewmodel.isPuretEmojiToImg(o) ? self.sendMsgRequest(t, s, o, n, e) : self.getIMTextRiskControl(t, s, o, i.sessionid, n, e))
            }
        },
        getIMTextRiskControl: function(e, o, t, i, n, s) {
            var a = this
              , r = [];
            a.imClient.getConversationMessagesByJidPaging({
                conversationType: "groupchat",
                isAll: !0,
                partnerJid: s,
                paging: {
                    beginTimestamp: 0,
                    endTimestamp: 0,
                    direction: "prev",
                    pageSize: 30
                }
            }, function(l) {
                if (l && l.ResponseStatus && l.ResponseStatus.Ack && "success" == l.ResponseStatus.Ack.toLocaleLowerCase()) {
                    if (console.log(l),
                    null == l || null == l.messages)
                        return;
                    if (!(l.messages.length > 0))
                        return;
                    for (var d = 0; d < l.messages.length; d++) {
                        var u = l.messages[d];
                        0 == u.messageType && r.push(u.content)
                    }
                    r.push(t.replace(/\r|\n|↵/g, ""));
                    var c = {
                        lstTxt: r,
                        messageid: o,
                        sessionid: i,
                        uid: window.IMWholeviewmodel.$data.myUid,
                        gid: s
                    };
                    $.ajax("/ebkovsassembly/api/getIMTextRiskControl", {
                        type: "post",
                        dataType: "json",
                        contentType: "application/json;charset=UTF-8",
                        data: JSON.stringify(c),
                        success: function(r) {
                            if (null != r.data && null != r.data.ugcService && null != r.data.riskControl && (1 == r.data.ugcService || r.data.riskControl > 0)) {
                                var l = window.EbkIMWholeSettingModule.changeHotelAvator("//pic.c-ctrip.com/ebooking/intebk/im_01.png")
                                  , d = window.IMWholeviewmodel.getMsgEntity();
                                d.isTextMsg = !0,
                                d.content = '<i class="clsSensitive ebk3-ico ebk3-ico-alert-16" style="position:absolute;left:-24px;"></i>' + html_encode(t),
                                d.avator = l,
                                d.sendername = "",
                                d.isMyself = !0,
                                d.createtime = 0,
                                window.IMWholeviewmodel.$data.MsgList.push(d);
                                var u = "";
                                if (1 == r.data.ugcService)
                                    u = '<div class="did-phone DIDCardCls"><p class="pb10"><font size="5" color="#FF0000">' + window.EbkWholeIMMaster.getSharkValue("警告！", "Key.IM.068") + '</font></p><p class="">' + window.EbkWholeIMMaster.getSharkValue("您的聊天内容疑似违反", "Key.IM.069") + '<a target="_blank" href="http://www.gov.cn/gongbao/content/2011/content_1860864.htm?IDTc6TT2Il0[d]">' + window.EbkWholeIMMaster.getSharkValue("《互联网信息服务管理办法》", "Key.IM.070") + "</a>" + window.EbkWholeIMMaster.getSharkValue("第十五条规定，", "Key.IM.071") + '</p><p class="">' + window.EbkWholeIMMaster.getSharkValue("我们会定期对您的行为进行核实，如发现有恶劣违规行为，将对酒店进行处罚，如无违规行为，请忽略此消息", "Key.IM.072") + "</p></div>";
                                else if (2 == r.data.riskControl && 1695 != e && 1696 != e && 1697 != e)
                                    u = '<div class="did-phone DIDCardCls"><p class="pb10">' + window.EbkWholeIMMaster.getSharkValue("无法在对话中直接发送联系方式，如有联系客人需要，请发送酒店DID电话", "Key.IM.074") + '</p><button class="btn btn-default clswhatdidphone"  type="button">' + window.EbkWholeIMMaster.getSharkValue("什么是DID电话？", "Key.IM.075") + '</button><button type="button" class="btn btn-primary clssenddidphone">' + window.EbkWholeIMMaster.getSharkValue("发送DID电话", "Key.IM.076") + "</button></div>",
                                    (c = {}).uid = IMWholeviewmodel.$data.currentGroupInfo.uid,
                                    c.masterhotelid = window.IMWholeviewmodel.MasterHotelId,
                                    c.isoversea = window.IMWholeviewmodel.isoversea,
                                    c.star = window.IMWholeviewmodel.star,
                                    c.iconname = "命中did提示",
                                    window.__bfi.push(["_tracklog", "ebk_im_icon_click", JSON.stringify(c)]);
                                else if (1 == r.data.riskControl && -1 == a.sessionRiskTip.indexOf(i)) {
                                    var c;
                                    a.sessionRiskTip += i,
                                    u = '<div class="did-phone DIDCardCls"><p class="pb10"><font size="5" color="#FF0000">' + window.EbkWholeIMMaster.getSharkValue("警告！", "Key.IM.068") + '</font></p><p class="">' + window.EbkWholeIMMaster.getSharkValue("您的聊天内容疑似违反", "Key.IM.069") + '<a target="_blank" href="https://hotels.ctrip.com/HotelSpecification.html">' + window.EbkWholeIMMaster.getSharkValue("《携程商家经营规则》", "Key.IM.073") + '</a></p><p class="">' + window.EbkWholeIMMaster.getSharkValue("我们会定期对您的行为进行核实，如发现有恶劣违规行为，将对酒店进行处罚，如无违规行为，请忽略此消息", "Key.IM.072") + "</p></div>",
                                    (c = {}).uid = IMWholeviewmodel.$data.currentGroupInfo.uid,
                                    c.masterhotelid = window.IMWholeviewmodel.MasterHotelId,
                                    c.isoversea = window.IMWholeviewmodel.isoversea,
                                    c.star = window.IMWholeviewmodel.star,
                                    c.iconname = "命中did提示"
                                }
                                setTimeout(function() {
                                    $("#contentDiv").append(u),
                                    $(".noContentDiv").hide(),
                                    parentSelf.scrolltobuttom()
                                }, 100)
                            } else
                                a.sendMsgRequest(e, o, t, n, s)
                        }
                    })
                } else
                    console.log("getHistoryMessagesPaging error", l)
            }, function(e) {
                console.log("getConversationMessagesByJidPaging error", e)
            }),
            window.EbkWholeIMMaster.needReadMsgInfo()
        },
        sendRoomCardMsg: function(e, o, t) {
            self = this;
            var i = window.IMWholeviewmodel.getGroupInfo(e);
            if (null != i) {
                var n = i.threadid;
                self.sendCustomContentMessageRequest(t, n, e, "CBZ24", "为您推荐以下房型", o.productTitle, o.productDesp, o.productDetail, o.productImg, o.appurl)
            }
        },
        sendSystemMsg: function(e, o, t) {
            self = this;
            var i = window.IMWholeviewmodel.getGroupInfo(e);
            if (null != i) {
                var n = i.threadid
                  , s = self.generateLocalID();
                self.sendSystemMsgRequest(t, s, n, e, o)
            }
        },
        sendSystemMsgRequest: function(e, o, t, i, n) {
            var s = new IMClient.MessageFactory.SystemMessage;
            s.ownerJid = window.IMWholeviewmodel.$data.myUid,
            s.localId = o,
            s.bizType = e,
            s.partnerJid = i.toString(),
            s.msgType = 1007,
            s.messageType = 1007,
            s.toJid = i.toString(),
            s.title = n,
            s.extPropertys = '{"title":"' + n + '"}',
            s.isPresent = !0,
            s.actionCode = "NBZ14",
            s.type = "groupchat",
            s.conversationType = IMClient.CommonEnum.ConversationType.GroupChat,
            s.threadId = t,
            self.imClient.sendMessage(s, function(o) {
                o && "success" == o.ResponseStatus.Ack.toLocaleLowerCase() && o.msgId && (console.log(o),
                window.EbkIMWholeServiceModule.translateNewBusinessGroup(e))
            }, function(e) {
                console.log(e)
            })
        },
        addIMPlusMockQuestionsRedis: function(e, o) {
            self = this;
            var t = {
                uid: e,
                gid: o
            };
            $.ajax("/ebkovsassembly/api/addIMPlusMockQuestionRedis/" + e + "/" + o, {
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify(t),
                success: function(e) {
                    console.log("已经推出了卡片")
                }
            })
        },
        getIMPlusMockQuestions: function(e, o) {
            self = this;
            var t = {
                uid: e.uid,
                gid: o
            };
            $.ajax("/ebkovsassembly/api/imPlusMockQuestion/" + e.uid + "/" + o, {
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify(t),
                success: function(t) {
                    if (t && 200 == t.code && null != t.data) {
                        self.addIMPlusMockQuestionsRedis(e.uid, o),
                        e.implusmockquestions = 1;
                        var i = t.data;
                        if ("信息" == i.qtype && "弹框" == i.triggerFormat) {
                            if (window.IMWholeviewmodel.$data.imPlusMockQuestionType = i.qtype,
                            null != i.scoreKey && "" != i.scoreKey)
                                window.IMWholeviewmodel.$data.imPlusMockQuestionScoreKey = i.scoreKey,
                                $("#imPlusMockQuestionsTxt1").html(window.IMWholeviewmodel.$data.imPlusMockQuestionsUrl.imPlusMockQuestionsTxt1),
                                $("#imPlusMockQuestionsTxt2").html(window.IMWholeviewmodel.$data.imPlusMockQuestionsUrl.imPlusMockQuestionsTxt2),
                                null != (n = i.qurl) && "" != n && ($("#imPlusMockQuestionsUrl").val(n),
                                $("#imPlusMockQuestionsDiv").show())
                        } else if ("促销" == i.qtype && "弹框" == i.triggerFormat) {
                            var n;
                            window.IMWholeviewmodel.$data.imPlusMockQuestionType = i.qtype,
                            $("#imPlusMockQuestionsTxt1").html(window.IMWholeviewmodel.$data.imPlusMockQuestionsUrl.imPlusMockQuestionsPromotionTxt),
                            $("#imPlusMockQuestionsTxt2").html(""),
                            null != (n = i.qurl) && "" != n && ($("#imPlusMockQuestionsUrl").val(n),
                            $("#imPlusMockQuestionsDiv").show())
                        }
                    }
                }
            })
        },
        sendMsgRequest: function(e, o, t, i, n) {
            self = this;
            var s = window.EbkIMWholeSettingModule.changeHotelAvator("//pic.c-ctrip.com/ebooking/intebk/im_01.png")
              , a = new IMClient.MessageFactory.TextMessage;
            a.content = t,
            a.conversationType = IMClient.CommonEnum.ConversationType.GroupChat,
            a.bizType = parseInt(e),
            a.type = "test",
            a.threadId = i,
            a.toJid = n.toString(),
            self.imClient.sendMessage(a, function(o) {
                if (o && "success" == o.ResponseStatus.Ack.toLocaleLowerCase() && o.msgId) {
                    var i = window.IMWholeviewmodel.getMsgEntity();
                    i.isTextMsg = !0,
                    i.content = html_encode(t).replace(/\r|\n|↵/g, "<br/>"),
                    i.avator = s,
                    i.sendername = "",
                    i.isMyself = !0,
                    i.createtime = o.msgCreateTime,
                    i.isread = !1,
                    i.isshowreadtip = window.EbkWholeIMMaster.needReadMsgInfo(),
                    i.isgetreadinfodone = !0;
                    var a = self.dateformat(o.msgCreateTime, window.EbkIMWholeServiceModule.getCurrentGroupInfoLastMsgTime());
                    if ("error" != a && "" != a) {
                        var r = window.IMWholeviewmodel.getMsgEntity();
                        r.isTimeMsg = !0,
                        r.timeStr = a,
                        window.IMWholeviewmodel.$data.MsgList.push(r)
                    }
                    window.IMWholeviewmodel.$data.MsgList.push(i);
                    var l = window.IMWholeviewmodel.getGroupInfo(n);
                    if (null != l && (l.lastmsgtime = o.msgCreateTime,
                    l.lastcontent = html_encode(t).replace(/\r|\n|↵/g, "<br/>"),
                    window.IMWholeviewmodel.refreshGuestGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshBookingGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshSupplierGoingGroupInfo()),
                    setTimeout(function() {
                        parentSelf.scrolltobuttom()
                    }, 100),
                    self.sendReceipt(window.IMWholeviewmodel.$data.currentGroupId, o.msgCreateTime),
                    window.IMWholeviewmodel.$data.sendContent = "default",
                    1479 == e) {
                        var d = self.getCurrentGroupInfo(n);
                        null == d || 0 != d.implusmockquestions || IsEmptyOrSpace(d.uid) || self.getIMPlusMockQuestions(d, n)
                    }
                }
            }, function(e) {
                console.log(e)
            })
        },
        sendCustomContentMessageRequest: function(bizType, threadid, groupId, actionCode, cardTitle, productTitle, productDesp, productDetail, productImg, appurl) {
            self = this;
            var onSuccess = function(e) {
                if (e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.msgId) {
                    var o = window.IMWholeviewmodel.getMsgEntity();
                    o.isTextMsg = !0;
                    var t = '<div class="p10 txt12 clearall" style="padding-left:100px;background-color:#fff;"><img class="fl p10 txt14" style="margin-left:-100px;" width="100" src="' + productImg + '" alt=""><b class="txt14">' + productDesp + "</b><br/>" + productDetail.replace(/\\n/g, "<br/>");
                    o.content = t,
                    o.avator = "//pic.c-ctrip.com/ebooking/intebk/im_01.png",
                    o.sendername = "",
                    o.isMyself = !0,
                    o.createtime = e.msgCreateTime,
                    o.isshowreadtip = window.EbkWholeIMMaster.needReadMsgInfo(),
                    o.isgetreadinfodone = !0,
                    window.IMWholeviewmodel.$data.MsgList.push(o);
                    var i = window.IMWholeviewmodel.getGroupInfo(groupId);
                    null != i && (i.lastmsgtime = e.msgCreateTime,
                    i.lastcontent = t,
                    window.IMWholeviewmodel.refreshGuestGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshBookingGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshSupplierGoingGroupInfo()),
                    setTimeout(function() {
                        parentSelf.scrolltobuttom()
                    }, 100),
                    self.sendReceipt(window.IMWholeviewmodel.$data.currentGroupId, e.msgCreateTime)
                }
            }
              , onError = function(e) {
                console.log(e)
            }
              , customContentMessage = new IMClient.MessageFactory.CustomContentMessage;
            customContentMessage.actionCode = actionCode,
            customContentMessage.title = cardTitle;
            var msgbody = '{"cardTitle": "' + cardTitle + '","productTitle": "' + productTitle + '","productDesp": "' + productDesp + '","productDetail": "' + productDetail + '","productImg": "' + productImg + '","btnList": [{\n"btnTitle": "详情","jumpUrl": {"app": "' + appurl + '"}}]}';
            customContentMessage.extPropertys = eval("(" + msgbody + ")"),
            customContentMessage.conversationType = IMClient.CommonEnum.ConversationType.GroupChat,
            customContentMessage.bizType = parseInt(bizType),
            customContentMessage.threadId = threadid,
            customContentMessage.toJid = groupId.toString(),
            self.imClient.sendMessage(customContentMessage, onSuccess, onError)
        },
        sendFileMsg: function(e, o, t, i) {
            if ("" != window.IMWholeviewmodel.$data.currentGroupId && 0 != window.IMWholeviewmodel.$data.currentGroupId.length) {
                var n = window.IMWholeviewmodel.$data.currentGroupId;
                self = this;
                var s = window.IMWholeviewmodel.getGroupInfo(n);
                if (null != s) {
                    var a = s.threadid;
                    self.sendFileMessageRequest(i, a, n, e, o, t)
                }
            }
        },
        sendFileMessageRequest: function(e, o, t, i, n, s) {
            self = this;
            var a = new IMClient.MessageFactory.FileMessage;
            a.messageCategory = IMClient.CommonEnum.MessageType.FileMessage,
            a.messageType = IMClient.CommonEnum.MessageType.FileMessage,
            a.filename = n,
            a.url = i,
            a.size = s,
            a.conversationType = IMClient.CommonEnum.ConversationType.GroupChat,
            a.bizType = parseInt(e),
            a.threadId = o,
            a.toJid = t.toString(),
            self.imClient.sendMessage(a, function(e) {
                if (e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.msgId) {
                    var o = window.IMWholeviewmodel.getMsgEntity();
                    o.isTextMsg = !0;
                    var a = '<div class="clsFileDown" data-url="' + i + '" data-name="' + n + '"><div class=" txt12 clearall" style="padding-left:90px;"><i class="im-file-icon ' + window.IMWholeviewmodel.getFileIconClass(n) + '"></i><p class="txt14 file-tit">' + n + '</p><div class="msg-m">' + window.IMWholeviewmodel.getFileSizeDesc(s) + '</div></div><i class="upload-file-icon"></i></div>';
                    o.content = a,
                    o.avator = "//pic.c-ctrip.com/ebooking/intebk/im_01.png",
                    o.sendername = "",
                    o.isMyself = !0,
                    o.isFileMsg = !0,
                    o.createtime = e.msgCreateTime,
                    o.isshowreadtip = window.EbkWholeIMMaster.needReadMsgInfo(),
                    o.isgetreadinfodone = !0,
                    window.IMWholeviewmodel.$data.MsgList.push(o);
                    var r = window.IMWholeviewmodel.getGroupInfo(t);
                    null != r && (r.lastmsgtime = e.msgCreateTime,
                    r.lastcontent = "[文件]" + n,
                    window.IMWholeviewmodel.refreshGuestGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshBookingGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshSupplierGoingGroupInfo()),
                    setTimeout(function() {
                        parentSelf.scrolltobuttom()
                    }, 100),
                    self.sendReceipt(window.IMWholeviewmodel.$data.currentGroupId, e.msgCreateTime)
                }
            }, function(e) {
                console.log(e)
            })
        },
        sendPicMsgRequest: function(e, o, t, i, n, s) {
            self = this;
            var a = new IMClient.MessageFactory.ImageMessage;
            a.imageUrl = t,
            a.thumbUrl = i,
            a.width = 1200,
            a.height = 900,
            a.toJid = s.toString(),
            a.conversationType = IMClient.CommonEnum.ConversationType.GroupChat,
            a.bizType = parseInt(e),
            a.type = "test",
            a.threadId = n,
            self.imClient.sendMessage(a, function(e) {
                if (e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.msgId) {
                    var o = window.IMWholeviewmodel.getMsgEntity();
                    o.isPicMsg = !0,
                    o.picStr = t,
                    o.avator = "//pic.c-ctrip.com/ebooking/intebk/im_01.png",
                    o.sendername = "",
                    o.isMyself = !0,
                    o.createtime = e.msgCreateTime;
                    var i = window.IMWholeviewmodel.getGroupInfo(s);
                    o.isshowreadtip = window.EbkWholeIMMaster.needReadMsgInfo(),
                    o.isgetreadinfodone = !0,
                    window.IMWholeviewmodel.$data.MsgList.push(o),
                    null != i && (i.lastmsgtime = e.msgCreateTime,
                    i.lastcontent = "图片",
                    window.IMWholeviewmodel.refreshGuestGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshBookingGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshSupplierGoingGroupInfo()),
                    setTimeout(function() {
                        parentSelf.scrolltobuttom()
                    }, 100),
                    self.sendReceipt(window.IMWholeviewmodel.$data.currentGroupId, e.msgCreateTime)
                }
            }, function(e) {})
        },
        sendOrderMsgRequest: function(e, o, t, i, n) {
            self = this;
            var s = new IMClient.MessageFactory.CustomContentMessage;
            s.actionCode = "CBZ03",
            s.title = "[" + multimasterLanguageText.order + "]",
            s.bizType = parseInt(e),
            s.extPropertys = self.toCommonOrderEntity(t),
            self.imClient.sendMessage(s, function(e) {
                e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.msgId && (console.log("sendOrderMsgSuccess"),
                self.loadMsg(n),
                self.sendReceipt(window.IMWholeviewmodel.$data.currentGroupId, e.msgCreateTime))
            }, function(e) {
                console.log(e)
            })
        },
        sendPromotionMsgRequest: function(bizType, localid, msgcontent, threadid, groupId) {
            self = this;
            var onSuccess = function(e) {
                if (e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.msgId) {
                    var o = window.IMWholeviewmodel.getMsgEntity();
                    o.isPromotionTextMsg = !0,
                    o.content = self.createPromotionEntity(msgcontent),
                    o.avator = "//pic.c-ctrip.com/ebooking/intebk/im_01.png",
                    o.sendername = "",
                    o.isMyself = !0,
                    o.createtime = e.msgCreateTime;
                    var t = window.IMWholeviewmodel.getGroupInfo(groupId);
                    o.isshowreadtip = window.EbkWholeIMMaster.needReadMsgInfo(),
                    o.isgetreadinfodone = !0,
                    window.IMWholeviewmodel.$data.MsgList.push(o),
                    null != t && (t.lastmsgtime = e.msgCreateTime,
                    t.lastcontent = "促销信息",
                    window.IMWholeviewmodel.refreshGuestGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshBookingGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshSupplierGoingGroupInfo()),
                    setTimeout(function() {
                        parentSelf.scrolltobuttom()
                    }, 100),
                    self.sendReceipt(window.IMWholeviewmodel.$data.currentGroupId, e.msgCreateTime)
                }
            }
              , onError = function(e) {
                console.log(e)
            }
              , customContentMessage = new IMClient.MessageFactory.CustomContentMessage;
            customContentMessage.actionCode = "CBZ26",
            customContentMessage.title = "【活动链接】" + msgcontent.promotionName,
            customContentMessage.bizType = parseInt(bizType);
            var jstr = JSON.stringify(self.toCommonPromotionEntity(msgcontent));
            customContentMessage.extPropertys = eval("(" + jstr + ")"),
            self.imClient.sendMessage(customContentMessage, onSuccess, onError)
        },
        sendHotelRedPackageRequest: function(bizType, localid, msgcontent, threadid, groupId) {
            self = this;
            var onSuccess = function(e) {
                if (e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.msgId) {
                    var o = window.IMWholeviewmodel.getMsgEntity();
                    o.isPromotionTextMsg = !0,
                    o.content = self.createPromotionEntity(msgcontent),
                    o.avator = "//pic.c-ctrip.com/ebooking/intebk/im_01.png",
                    o.sendername = "",
                    o.isMyself = !0,
                    o.createtime = e.msgCreateTime;
                    var t = window.IMWholeviewmodel.getGroupInfo(groupId);
                    o.isshowreadtip = window.EbkWholeIMMaster.needReadMsgInfo(),
                    o.isgetreadinfodone = !0,
                    window.IMWholeviewmodel.$data.MsgList.push(o),
                    null != t && (t.lastmsgtime = e.msgCreateTime,
                    t.lastcontent = "酒店红包",
                    window.IMWholeviewmodel.refreshGuestGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshBookingGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshSupplierGoingGroupInfo()),
                    setTimeout(function() {
                        parentSelf.scrolltobuttom()
                    }, 100),
                    self.sendReceipt(window.IMWholeviewmodel.$data.currentGroupId, e.msgCreateTime)
                }
            }
              , onError = function(e) {
                console.log(e)
            }
              , customContentMessage = new IMClient.MessageFactory.CustomContentMessage;
            customContentMessage.actionCode = "CBZ25",
            customContentMessage.title = "【活动链接】" + msgcontent.promotionName;
            var jstr = JSON.stringify(self.toCommonHotelRedPackageEntity(msgcontent));
            customContentMessage.extPropertys = eval("(" + jstr + ")"),
            self.imClient.sendMessage(customContentMessage, onSuccess, onError)
        },
        sendPromotionStrategyRequest: function(bizType, localid, msgcontent, threadid, groupinfo) {
            self = this;
            var onSuccess = function(e) {
                if (e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.msgId) {
                    var o = '<div class="im-coupon-list-box"><div class="im-coupon-list"><div class="coupon-sum"><div class="sum"><dfn>￥</dfn><strong>' + msgcontent.deduction.deductionAmount + "</strong>\n</div><p>" + window.EbkWholeIMMaster.getSharkValue("满", "Key.IM.077") + +msgcontent.deduction.startAmount + window.EbkWholeIMMaster.getSharkValue("立减", "Key.IM.078") + "NaN</div><h6>" + window.EbkWholeIMMaster.getSharkValue("IM专属优惠券", "Key.IM.079") + '</h6><p class="coupon-time">' + window.EbkWholeIMMaster.getSharkValue("客人领取后30天内有效", "Key.IM.080") + "</p></div></div>"
                      , t = window.IMWholeviewmodel.getMsgEntity();
                    t.isTextMsg = !0,
                    t.content = o,
                    t.avator = "//pic.c-ctrip.com/ebooking/intebk/im_01.png",
                    t.sendername = "",
                    t.isMyself = !0,
                    t.createtime = e.msgCreateTime,
                    t.isshowreadtip = window.EbkWholeIMMaster.needReadMsgInfo(),
                    t.isgetreadinfodone = !0,
                    window.IMWholeviewmodel.$data.MsgList.push(t),
                    null != groupinfo && (groupinfo.lastmsgtime = e.msgCreateTime,
                    groupinfo.lastcontent = msgcontent.displayName,
                    window.IMWholeviewmodel.refreshGuestGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshBookingGoingGroupInfo(),
                    window.IMWholeviewmodel.refreshSupplierGoingGroupInfo()),
                    setTimeout(function() {
                        parentSelf.scrolltobuttom()
                    }, 100),
                    self.sendReceipt(window.IMWholeviewmodel.$data.currentGroupId, e.msgCreateTime)
                }
            }
              , onError = function(e) {
                console.log(e)
            }
              , customContentMessage = new IMClient.MessageFactory.CustomContentMessage;
            customContentMessage.actionCode = "CBZ25",
            customContentMessage.title = "您好，商家向您发出了特别优惠";
            var jstr = JSON.stringify(self.toCommonPromotionStrategyEntity(msgcontent, groupinfo));
            customContentMessage.extPropertys = eval("(" + jstr + ")"),
            self.imClient.sendMessage(customContentMessage, onSuccess, onError)
        },
        createPromotionEntity: function(e) {
            var o = window.IMWholeviewmodel.getPromotionTypeEntity();
            return o.promotionType = e.promotionType,
            o.showDate = e.showDate,
            o.promotionName = e.promotionName,
            o.startDate = e.startDate,
            o.status = e.status,
            o.endDate = e.endDate,
            o.ruleId = e.ruleId,
            o.showDiscount = e.showDiscount,
            o.roomName = e.roomName,
            o
        },
        sendPicMsg: function(e, o, t) {
            if ("" != window.IMWholeviewmodel.$data.currentGroupId && 0 != window.IMWholeviewmodel.$data.currentGroupId.length) {
                var i = window.IMWholeviewmodel.$data.currentGroupId;
                self = this;
                var n = window.IMWholeviewmodel.getGroupInfo(i);
                if (null != n) {
                    var s = n.threadid;
                    self.sendPicMsgRequest(t, self.generateLocalID(), e, o, s, i)
                }
            }
        },
        getOrdersEntity: function(e, o, t, i) {
            var n = window.IMWholeviewmodel.getOrderEntity();
            n.orderID = e.orderID,
            n.hotelName = e.hotelName;
            var s = $.cookie("CurrentLanguage");
            return n.roomName = "SimpChinese" == s ? e.roomName : e.roomEnName,
            t ? (n.totalPrince = e.currency + e.totalPrice,
            n.currency = e.currency,
            n.arrivalDate = e.arrivalDate,
            n.departure = e.departureDate) : n.discription = e.arrivalDate,
            n.quantity = "/" + e.quantity + multimasterLanguageText.IMRooms,
            n.night = e.nights + multimasterLanguageText.IMNights,
            n.button = !0,
            n.orderLink = "http://supplierweb.order.hotel.ctripcorp.com/main/index?module=71522&Orderid=" + e.orderID,
            IsEmptyOrSpace(n.orderStatus) && (n.orderStatus = this.getAuditStatusCN($("#id2auditstatus").val())),
            IsEmptyOrSpace(i) || (n.orderStatus = i),
            n
        },
        sendOrderMsg: function(e, o, t, i, n, s) {
            var a = this.getOrdersEntity(e, i, n, s)
              , r = window.IMWholeviewmodel.getMsgEntity();
            r.isOrderTextMsg = !0,
            r.content = a,
            r.avator = "//pic.c-ctrip.com/ebooking/intebk/im_01.png",
            r.sendername = "",
            r.isMyself = !0,
            r.createtime = (new Date).getTime(),
            window.IMWholeviewmodel.$data.MsgList.push(r);
            var l = window.IMWholeviewmodel.getGroupInfo(o);
            null != l && (l.lastmsgtime = r.createtime,
            l.lastcontent = multimasterLanguageText.order,
            window.IMWholeviewmodel.refreshGuestGoingGroupInfo(),
            window.IMWholeviewmodel.refreshBookingGoingGroupInfo(),
            window.IMWholeviewmodel.refreshSupplierGoingGroupInfo()),
            setTimeout(function() {
                parentSelf.scrolltobuttom()
            }, 100),
            window.IMWholeviewmodel.$data.orderEntityToGroupInfo = a
        },
        getOrderStatusTip: function(e, o) {
            var t = o;
            IsEmptyOrSpace(o) && (t = "SimpChinese");
            var i = "";
            return "SimpChinese" == t ? (e.pp && (i += "预付-"),
            e.fg && (i += "现付-"),
            e.creditOrder && (i += "闪住-"),
            e.guaranteed && (i += "担保-")) : (e.pp && (i += "Pre-paid-"),
            e.fg && (i += "Pay at hotel-"),
            e.creditOrder && (i += "Quick check in-"),
            e.guaranteed && (i += "Full stay guarantee-")),
            i.substring(0, i.length - 1)
        },
        ConvertDateTime: function(e, o) {
            var t = new Date(e)
              , i = new Date(o) - t;
            return i = Math.abs(i),
            Math.floor(i / 864e5)
        },
        transformPHPTime: function(e) {
            var o = new Date(1e3 * e);
            return Y = o.getFullYear() + "-",
            M = (o.getMonth() + 1 < 10 ? "0" + (o.getMonth() + 1) : o.getMonth() + 1) + "-",
            D = o.getDate() + " ",
            Y + M + D
        },
        getOrderDetails: function(e, o, t) {
            var i = this;
            if (null != o && !IsEmptyOrSpace(o.groupId) && !IsEmptyOrSpace(o.biztype)) {
                o.groupId,
                o.biztype;
                $.ajax({
                    url: "/ebkovsassembly/api/getOrderDetailByOrderId/" + e,
                    type: "post",
                    contentType: "application/json;charset=UTF-8",
                    dataType: "json",
                    data: null,
                    error: function(e, o) {
                        console.log(o)
                    },
                    success: function(e) {
                        if (null != e && null != e.data) {
                            var o = e.data;
                            if ("false" == t) {
                                var n = window.IMWholeviewmodel.$data.currentGroupId
                                  , s = IMWholeviewmodel.$data.currentGroupInfo.biztype
                                  , a = i.getOrderStatusTip(o, $.cookie("CurrentLanguage"));
                                "" != $("#toOrderId").val() ? i.sendOrderMsg(o, n, s, "", !0, a) : "" != $("#orderIdForGuest").val() ? i.sendOrderMsg(o, n, s, "", !1) : "" != $("#id2auditstatus").val() && i.sendOrderMsg(o, n, s, i.getAuditStatusCN($("#id2auditstatus").val()), !0),
                                window.IMWholeviewmodel.$data.firstSelectAndSendMsgByOrderId = 1
                            } else
                                window.IMWholeviewmodel.$data.orderEntityToGroupInfo = i.getOrdersEntity(o, "", !1),
                                window.IMWholeviewmodel.$data.sendOrderMsg = window.IMWholeviewmodel.$data.orderEntityToGroupInfo,
                                window.IMWholeviewmodel.$data.firstSelectAndSendMsgByOrderId = 1
                        }
                    }
                })
            }
        },
        getAuditStatusCN: function(e) {
            var o = "";
            return "N" == e ? o = "未审" : "I" == e ? o = "在店" : "T" != e && "F" != e || (o = "复审"),
            o
        },
        clearOldIMUidCookie: function(e) {
            var o = new Date;
            o.setDate(o.getDate() - 1),
            expires = "; expires=" + o.toGMTString(),
            document.cookie = e + "=" + expires + ";domain=ebooking.ctrip.com;path=/"
        },
        initData: function() {
            console.log("initData"),
            self = this,
            $.removeCookie("imticket", {
                path: "/"
            }),
            $.removeCookie("imislogin", {
                path: "/"
            }),
            $.removeCookie("imuid", {
                path: "/"
            }),
            $.removeCookie("imticketforhe", {
                path: "/"
            }),
            $.removeCookie("imisloginforhe", {
                path: "/"
            });
            var e = window.EbkWholeIMMaster.getToken()
              , o = $.cookie("imuid");
            "" == e && (o = ""),
            self.imClient = IMClient.IMClient;
            self.myUid = o.toLowerCase(),
            window.IMWholeviewmodel.$data.myUid = self.myUid,
            $("#myUid").val(window.IMWholeviewmodel.$data.myUid),
            self.imClient.init({
                conversationType: IMClient.CommonEnum.ConversationType.ConversationList,
                token: e,
                partnerJid: "",
                channelCode: "HT03",
                initPageSize: 9
            }, function(o) {
                console.log("success"),
                self.setReceiveListener(),
                self.imClient.connect(function() {}, function() {}),
                self.clientlevel;
                var t = $("#id2Evn").val();
                console.log("dev:" + t),
                IMPlusACD.config({
                    env: t,
                    auth: e
                });
                var i = 20;
                try {
                    i = Number($("#imPlusACDConnectTime").val())
                } catch (n) {}
                (IsEmptyOrSpace(i) || i < 10) && (i = 10),
                IMPlusACD.connect({
                    timeout: 1e3 * i,
                    connetParam: {
                        timeout: 1e4,
                        env: t,
                        listener: {
                            onConvList: function(e) {
                                console.log("convList"),
                                console.log(e),
                                self.initGroupInfoList(e),
                                setTimeout(function() {
                                    parentSelf.initGroupUnreadcount(o),
                                    parentSelf.firstloaddata = 1
                                }, 500),
                                setTimeout(function() {
                                    var e;
                                    "" != $("#isForGuest").val() && "" != $("#orderIdForGuest").val() && "" != $("#toGid").val() && "" != $("#sendOrderMsgForGuest").val() && 0 == window.IMWholeviewmodel.$data.firstSelectAndSendMsgByOrderId && (self.toGuestDiv(),
                                    null != (e = window.IMWholeviewmodel.getGroupInfo($("#toGid").val())) && self.toGuestGid(e)),
                                    "" != $("#isForSupplier").val() && "" != $("#toGid").val() && (self.toSupplierDiv(),
                                    null != (e = window.IMWholeviewmodel.getGroupInfo($("#toGid").val())) && self.toSupplierGid(e))
                                }, 600)
                            },
                            onStatusChange: function(e) {
                                console.log(e)
                            }
                        }
                    },
                    onSuccess: function(e) {
                        console.log("onSuccess"),
                        console.log(e),
                        setTimeout(function() {
                            console.log("online"),
                            IMWholeviewmodel.$data.isFocusThisWindow = !0,
                            "" != $("#toOrderId").val() && 0 == window.IMWholeviewmodel.$data.firstSendMsgByOrderId ? self.toOrderBusiness() : "order" == $("#id2fromsource").val() && 0 == window.IMWholeviewmodel.$data.firstSendMsgByOrderId ? $("#id2ServiceDiv").click() : "orderBiz" == $("#id2fromsource").val() && 0 == window.IMWholeviewmodel.$data.firstSendMsgByOrderId ? self.toOrderBusiness() : "room" == $("#id2fromsource").val() && 0 == window.IMWholeviewmodel.$data.openRoomManageDiv ? self.toRoomBusiness() : "finance" == $("#id2fromsource").val() && 0 == window.IMWholeviewmodel.$data.openFinanceManageDiv ? self.toFinanceBusiness() : "audit" == $("#id2fromsource").val() && 0 == window.IMWholeviewmodel.$data.openAuditManageDiv ? self.toAuditBusiness() : "system" == $("#id2fromsource").val() && 0 == window.IMWholeviewmodel.$data.openSystemManageDiv ? self.toSystemBusiness() : "other" == $("#id2fromsource").val() && 0 == window.IMWholeviewmodel.$data.openOtherManageDiv ? self.toOtherBusiness() : "" != $("#imServiceScore").val() && 0 == window.IMWholeviewmodel.$data.openIMServiceScoreDiv ? $(".clsShowIMServiceScoreDetails").click() : "" != $("#isForBusiness").val() && 0 == window.IMWholeviewmodel.$data.openBusinessManageDiv ? self.toBusinessDiv() : "" != $("#isForGuest").val() && 0 == window.IMWholeviewmodel.$data.openGuestDiv ? self.toGuestDiv() : "" != $("#isForSupplier").val() && 0 == window.IMWholeviewmodel.$data.openGuestDiv ? self.toSupplierDiv() : 0 == self.firstloaddata && (window.IMWholeviewmodel.$data.guestunreadtotalcount > 0 ? $("#id2GuestDiv").trigger("click") : window.IMWholeviewmodel.$data.serviceunreadtotalcount > 0 ? $("#id2ServiceDiv").trigger("click") : IMWholeviewmodel.$data.businessGroupInfo.unreadcount > 0 ? $("#id2BusinessDiv").trigger("click") : window.IMWholeviewmodel.$data.bookingunreadtotalcount > 0 ? $("#id2CustomServiceDiv").trigger("click") : "none" != $("#id2ServiceDiv").css("display") ? "none" != $("#id2GuestDiv").css("display") && window.IMWholeviewmodel.$data.GuestGoingGroupList.length > 0 ? $("#id2GuestDiv").trigger("click") : $("#id2ServiceDiv").trigger("click") : "none" != $("#id2GuestDiv").css("display") && $("#id2GuestDiv").trigger("click"))
                        }, 700),
                        setTimeout(function() {
                            var e = $("#id2fromsource").val();
                            IsEmptyOrSpace(e) || "servicehours" != e && "message" != e && "notifications" != e && "quickanswers" != e && "avator" != e && "fastreply" != e || self.toSettingDiv(e)
                        }, 500)
                    },
                    onError: function(e) {
                        console.log("onError"),
                        console.log(e)
                    }
                })
            }, function(e) {
                console.log(e)
            })
        },
        initGroupInfoList: function(e) {
            self = this;
            var o = []
              , t = []
              , i = [];
            if (null == window.IMWholeviewmodel.getGroupInfo(IMWholeviewmodel.$data.currentGroupInfo.groupId) && window.IMWholeviewmodel.clearCurrent(),
            null != e && e.length > 0)
                for (var n = 0; n < e.length; n++) {
                    var s = e[n];
                    if (4 != s.status) {
                        var a = s.serviceType
                          , r = window.IMWholeviewmodel.getGroupInfoEntity();
                        r.biztype = a,
                        r.groupId = s.gid,
                        r.threadid = s.threadId,
                        r.sessionid = s.sessionId,
                        r.taskkey = s.conversationKey,
                        r.iscurrent = !1,
                        r.uid = s.uid,
                        r.isOwner = s.isOwner,
                        r.id = s.id,
                        r.sourceType = "IMService",
                        r.ctripAgentId = s.ctripAgentId,
                        r.conversationType = s.conversationType,
                        r.hotelName = s.vendorName,
                        r.ext = s.ext,
                        null != s.ownerDisplayName && "" != s.ownerDisplayName && (r.currentopreduid = s.ownerDisplayName),
                        null != s.languageInfo && null != s.languageInfo.lang && "" != s.languageInfo.lang && (r.language = s.languageInfo.lang.toLowerCase());
                        var l = window.IMWholeviewmodel.getGroupInfo(s.gid);
                        null != l && (r.iscurrent = l.iscurrent),
                        null != s.ext && null != s.ext.orderid && "" != s.ext.orderid && (r.orderid = s.ext.orderid),
                        window.EbkIMWholeServiceModule.isServiceBizType(a) && (r.mode = 0,
                        1 == s.status && (r.mode = 1)),
                        1356 != r.biztype && 1357 != r.biztype && 1801 != r.biztype && 1399 != r.biztype && 1479 != r.biztype && 1488 != r.biztype && 1695 != r.biztype && 1696 != r.biztype && 1697 != r.biztype || (s.isRead != undefined && (r.isRead = s.isRead),
                        r.tipMsg = window.IMWholeviewmodel.getTipMsg(r),
                        1356 != r.biztype && 1357 != r.biztype || r.tipMsgLst.push("C"),
                        1488 == r.biztype && r.tipMsgLst.push("T"),
                        1695 != r.biztype && 1696 != r.biztype && 1697 != r.biztype || r.tipMsgLst.push("TJ"),
                        self.exitInGoingGroupList(r, window.IMWholeviewmodel.$data.GuestGoingGroupList) || self.exitInGoingGroupList(r, o) || (1 != self.firstloaddata && 0 != r.isRead || (r.unreadcount = 1),
                        1357 == r.biztype && self.SetConnectCommentGroupIDAndSessionIdToDictionary(self.myUid, r.groupId, r.sessionid),
                        o.push(r))),
                        1377 != r.biztype && 1378 != r.biztype || self.exitInGoingGroupList(r, window.IMWholeviewmodel.$data.BookingGoingGroupList) || self.exitInGoingGroupList(r, t) || t.push(r),
                        1503 == r.biztype && (self.exitInGoingGroupList(r, window.IMWholeviewmodel.$data.SupplierGoingGroupList) || self.exitInGoingGroupList(r, i) || i.push(r)),
                        1361 == r.biztype && (window.IMWholeviewmodel.$data.orderGroupInfo = r),
                        1362 == r.biztype && (window.IMWholeviewmodel.$data.roomGroupInfo = r),
                        1363 == r.biztype && (window.IMWholeviewmodel.$data.systemGroupInfo = r),
                        1364 == r.biztype && (window.IMWholeviewmodel.$data.auditGroupInfo = r),
                        1365 == r.biztype && (window.IMWholeviewmodel.$data.financeGroupInfo = r),
                        1366 == r.biztype && (window.IMWholeviewmodel.$data.otherGroupInfo = r),
                        1384 == r.biztype && (window.IMWholeviewmodel.$data.servicePromotionGroupInfo = r),
                        1367 == r.biztype && (window.IMWholeviewmodel.$data.overseaOrderGroupInfo = r),
                        1368 == r.biztype && (window.IMWholeviewmodel.$data.overseaOrderGroupInfo = r),
                        1369 == r.biztype && (window.IMWholeviewmodel.$data.overseaOrderGroupInfo = r),
                        1370 == r.biztype && (window.IMWholeviewmodel.$data.overseaRoomGroupInfo = r),
                        1371 == r.biztype && (window.IMWholeviewmodel.$data.overseaRoomGroupInfo = r),
                        1372 == r.biztype && (window.IMWholeviewmodel.$data.overseaRoomGroupInfo = r),
                        1373 != r.biztype && 1374 != r.biztype && 1375 != r.biztype && 1376 != r.biztype || (window.IMWholeviewmodel.$data.financeOverSeaGroupInfo = r),
                        r.biztype == IMWholeviewmodel.$data.currentGroupInfo.biztype && r.groupId == IMWholeviewmodel.$data.currentGroupInfo.groupId && (IMWholeviewmodel.$data.currentGroupInfo = r)
                    } else {
                        var d = window.IMWholeviewmodel.getGroupInfo(s.gid);
                        null !== d && d.sessionid == s.sessionId && (null == IMWholeviewmodel.$data.currentGroupInfo || IMWholeviewmodel.$data.currentGroupInfo.sessionid != s.sessionId || "1356" != s.serviceType.toString() && "1357" != s.serviceType.toString() && "1399" != s.serviceType.toString() && "1377" != s.serviceType.toString() && "1378" != s.serviceType.toString() && "1479" != s.serviceType.toString() && "1488" != s.serviceType.toString() && "1503" != s.serviceType.toString() && "1695" != s.serviceType.toString() && "1696" != s.serviceType.toString() && "1697" != s.serviceType.toString() || window.IMWholeviewmodel.clearCurrent(),
                        self.deleteClosedGroupInfo(s.sessionId, s.serviceType))
                    }
                }
            for (n = 0; n < o.length; n++)
                window.IMWholeviewmodel.$data.GuestGoingGroupList.push(o[n]);
            1 == self.firstloaddata && window.IMWholeviewmodel.calculatTotalUnreadCount();
            for (n = 0; n < t.length; n++)
                window.IMWholeviewmodel.$data.BookingGoingGroupList.push(t[n]);
            for (n = 0; n < i.length; n++)
                window.IMWholeviewmodel.$data.SupplierGoingGroupList.push(i[n]);
            self.loadLastMessage()
        },
        deleteClosedGroupInfo: function(e, o) {
            1356 != o && 1357 != o && 1801 != o && 1399 != o && 1479 != o && 1488 != o && 1695 != o && 1696 != o && 1697 != o || (window.IMWholeviewmodel.$data.GuestGoingGroupList = $.grep(window.IMWholeviewmodel.$data.GuestGoingGroupList, function(o) {
                return o.sessionid != e
            })),
            1377 != o && 1378 != o || (window.IMWholeviewmodel.$data.BookingGoingGroupList = $.grep(window.IMWholeviewmodel.$data.BookingGoingGroupList, function(o) {
                return o.sessionid != e
            })),
            1503 == o && (window.IMWholeviewmodel.$data.SuppliergGoingGroupList = $.grep(window.IMWholeviewmodel.$data.SuppliergGoingGroupList, function(o) {
                return o.sessionid != e
            }))
        },
        exitInGoingGroupList: function(e, o) {
            if (o.length >= 0)
                for (var t = 0; t < o.length; t++) {
                    var i = o[t];
                    if (i.sessionid == e.sessionid)
                        return !0;
                    if (i.groupId == e.groupId)
                        return !0
                }
            return !1
        },
        getUserInfo: function(e, o) {
            var t = ""
              , i = window.IMWholeviewmodel.getGroupInfo(o);
            self.imClient.getUserByUid(e, function(e) {
                e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && (t = e.userinfo.nickname);
                var o = window.EbkWholeIMMaster.getSharkValue("客人", "Key.IM.062");
                o += i.groupId.toString().substring(i.groupId.length - 4, i.groupId.length),
                1801 == i.biztype && (o = window.EbkWholeIMMaster.getSharkValue("去哪儿客人", "Key.IM.063")),
                1377 != i.biztype && 1378 != i.biztype || (o = t);
                var n = o
                  , s = e.userinfo.avatar;
                s != undefined && 0 != s.length || (s = "//pic.c-ctrip.com/ebooking/intebk/im_00.png"),
                null != i && (i.nickName = n,
                "1357" == i.biztype ? i.avator = window.IMWholeviewmodel.$data.commentConnectGuestImg : i.avator = s)
            }, function(o) {
                var n = t || self.confuseUid(self.truncateUID(e));
                null != i && (i.nickName = n)
            })
        },
        getUserInfo4Supplier: function(e, o, t) {
            var i = ""
              , n = window.IMWholeviewmodel.getGroupInfo(o);
            self.imClient.getUserByUid(e, function(e) {
                e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && (i = e.userinfo.nickname);
                var o = window.EbkWholeIMMaster.getSharkValue("客人", "Key.IM.062");
                o += n.groupId.toString().substring(n.groupId.length - 4, n.groupId.length),
                1801 == n.biztype && (o = window.EbkWholeIMMaster.getSharkValue("去哪儿客人", "Key.IM.063")),
                1377 != n.biztype && 1378 != n.biztype || (o = i),
                1503 == n.biztype && null != t && "" != t && (o = t);
                var s = o
                  , a = e.userinfo.avatar;
                a != undefined && 0 != a.length || (a = "//pic.c-ctrip.com/ebooking/intebk/im_00.png"),
                null != n && (n.nickName = s,
                "1357" == n.biztype ? n.avator = window.IMWholeviewmodel.$data.commentConnectGuestImg : n.avator = a)
            }, function(o) {
                var t = i || self.confuseUid(self.truncateUID(e));
                null != n && (n.nickName = t)
            })
        },
        getDoneUserInfo: function(e, o) {
            var t = ""
              , i = window.IMWholeviewmodel.getDoneGroupInfo(o);
            self.imClient.getUserByUid(e, function(o) {
                o && "success" == o.ResponseStatus.Ack.toLocaleLowerCase() && (t = o.userinfo.nickname);
                var n = t;
                IsEmptyOrSpace(i) || IsEmptyOrSpace(i.groupId) || (n += window.EbkWholeIMMaster.getSharkValue("客人", "Key.IM.062"),
                n += i.groupId.toString().substring(i.groupId.length - 4, i.groupId.length)),
                null != i && 1801 == i.biztype && (n = window.EbkWholeIMMaster.getSharkValue("去哪儿客人", "Key.IM.063")),
                null == i || 1377 != i.biztype && 1378 != i.biztype || (n = t);
                var s = n || self.confuseUid(e)
                  , a = o.userinfo.avatar;
                a != undefined && 0 != a.length || (a = "//pic.c-ctrip.com/ebooking/intebk/im_00.png"),
                window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + e.toLocaleLowerCase()] = {
                    avatar: a,
                    nickname: s,
                    headphoto: a
                },
                null != i && (i.nickName = s,
                "1357" == i.biztype ? i.avator = window.IMWholeviewmodel.$data.commentConnectGuestImg : i.avator = a)
            }, function(o) {
                var n = t || self.confuseUid(self.truncateUID(e));
                null != i && (i.nickName = n)
            })
        },
        initGroupUnreadcount: function(e) {
            if (null != e && null != e.conversationSummaries) {
                for (var o = 0; o < e.conversationSummaries.length; o++) {
                    var t = e.conversationSummaries[o]
                      , i = window.IMWholeviewmodel.getGroupInfo(t.partnerJid);
                    null != i && (t.unReadCount > 0 && (i.unreadcount = t.unReadCount))
                }
                window.IMWholeviewmodel.calculatTotalUnreadCount(),
                "" != $("#toOrderId").val() ? this.toOrderBusiness() : "" != $("#isForBusiness").val() ? this.toBusinessDiv() : "" != $("#isForSupplier").val() ? this.toSupplierDiv() : "business" == $("#toAnchor").val() ? this.toBusinessDiv() : "service" == $("#toAnchor").val() ? $("#id2ServiceDiv").click() : "guest" == $("#toAnchor").val() ? this.toGuestDiv() : "order" == $("#toAnchor").val() ? this.toOrderBusiness() : "orderBiz" == $("#id2fromsource").val() ? this.toOrderBusiness() : "order" == $("#id2fromsource").val() ? $("#id2ServiceDiv").click() : "room" == $("#id2fromsource").val() ? this.toRoomBusiness() : "finance" == $("#id2fromsource").val() ? this.toFinanceBusiness() : "audit" == $("#id2fromsource").val() ? this.toAuditBusiness() : "system" == $("#id2fromsource").val() ? this.toSystemBusiness() : "other" == $("#id2fromsource").val() ? this.toOtherBusiness() : "" != $("#isForGuest").val() && 0 == window.IMWholeviewmodel.$data.openGuestDiv ? this.toGuestDiv() : 0 == this.firstloaddata && (window.IMWholeviewmodel.$data.guestunreadtotalcount > 0 ? $("#id2GuestDiv").trigger("click") : window.IMWholeviewmodel.$data.serviceunreadtotalcount > 0 ? $("#id2ServiceDiv").trigger("click") : IMWholeviewmodel.$data.businessGroupInfo.unreadcount > 0 ? $("#id2BusinessDiv").trigger("click") : window.IMWholeviewmodel.$data.bookingunreadtotalcount > 0 ? $("#id2CustomServiceDiv").trigger("click") : "none" != $("#id2ServiceDiv").css("display") ? "none" != $("#id2GuestDiv").css("display") && window.IMWholeviewmodel.$data.GuestGoingGroupList.length > 0 ? $("#id2GuestDiv").trigger("click") : $("#id2ServiceDiv").trigger("click") : "none" != $("#id2GuestDiv").css("display") && $("#id2GuestDiv").trigger("click")),
                "" != $("#imServiceScore").val() && (window.IMWholeviewmodel.$data.openIMServiceScoreDiv = 1,
                $(".clsShowIMServiceScoreDetails").click())
            }
        },
        toOrderBusiness: function() {
            1 != this.isoversea ? "none" != $("#id2ServiceDiv").css("display") && ($("#id2ServiceDiv").trigger("click"),
            $("#id2ServiceOrder").is(":hidden") || ($("#id2ServiceOrder").trigger("click"),
            window.IMWholeviewmodel.$data.firstSendMsgByOrderId = 1)) : "none" != $("#id2ServiceDiv").css("display") && ($("#id2ServiceDiv").trigger("click"),
            $("#id2ServiceOverSeaOrder").is(":hidden") || ($("#id2ServiceOverSeaOrder").trigger("click"),
            window.IMWholeviewmodel.$data.firstSendMsgByOrderId = 1))
        },
        toRoomBusiness: function() {
            1 != this.isoversea ? "none" != $("#id2ServiceDiv").css("display") && ($("#id2ServiceDiv").trigger("click"),
            $("#id2ServiceRoom").is(":hidden") || ($("#id2ServiceRoom").trigger("click"),
            window.IMWholeviewmodel.$data.openRoomManageDiv = 1)) : "none" != $("#id2ServiceDiv").css("display") && ($("#id2ServiceDiv").trigger("click"),
            $("#id2ServiceOverSeaRoom").is(":hidden") || ($("#id2ServiceOverSeaRoom").trigger("click"),
            window.IMWholeviewmodel.$data.openRoomManageDiv = 1))
        },
        toFinanceBusiness: function() {
            1 != this.isoversea ? "none" != $("#id2ServiceDiv").css("display") && ($("#id2ServiceDiv").trigger("click"),
            $("#id2ServiceFinance").is(":hidden") || ($("#id2ServiceFinance").trigger("click"),
            window.IMWholeviewmodel.$data.openFinanceManageDiv = 1)) : "none" != $("#id2ServiceDiv").css("display") && ($("#id2ServiceDiv").trigger("click"),
            $("#id2ServiceOverSeaFinance").is(":hidden") || ($("#id2ServiceOverSeaFinance").trigger("click"),
            window.IMWholeviewmodel.$data.openFinanceManageDiv = 1))
        },
        toAuditBusiness: function() {
            1 != this.isoversea ? "none" != $("#id2ServiceDiv").css("display") && ($("#id2ServiceDiv").trigger("click"),
            $("#id2ServiceAudit").is(":hidden") || ($("#id2ServiceAudit").trigger("click"),
            window.IMWholeviewmodel.$data.openAuditManageDiv = 1)) : window.IMWholeviewmodel.$data.openAuditManageDiv = 1
        },
        toSystemBusiness: function() {
            1 != this.isoversea ? "none" != $("#id2ServiceDiv").css("display") && ($("#id2ServiceDiv").trigger("click"),
            $("#id2ServiceSystem").is(":hidden") || ($("#id2ServiceSystem").trigger("click"),
            window.IMWholeviewmodel.$data.openSystemManageDiv = 1)) : window.IMWholeviewmodel.$data.openSystemManageDiv = 1
        },
        toOtherBusiness: function() {
            1 != this.isoversea ? "none" != $("#id2ServiceDiv").css("display") && ($("#id2ServiceDiv").trigger("click"),
            $("#id2ServiceOther").is(":hidden") || ($("#id2ServiceOther").trigger("click"),
            window.IMWholeviewmodel.$data.openOtherManageDiv = 1)) : window.IMWholeviewmodel.$data.openOtherManageDiv = 1
        },
        toBusinessDiv: function() {
            "none" != $("#id2BusinessDiv").css("display") && ($("#id2BusinessDiv").trigger("click"),
            $("#id2BusinessItem").trigger("click"),
            window.IMWholeviewmodel.$data.openBusinessManageDiv = 1)
        },
        toGuestDiv: function() {
            "none" != $("#id2GuestDiv").css("display") && ($("#id2GuestDiv").trigger("click"),
            window.IMWholeviewmodel.$data.openGuestDiv = 1)
        },
        toSupplierDiv: function() {
            "none" != $("#id2SupplierDiv").css("display") && ($("#id2SupplierDiv").trigger("click"),
            window.IMWholeviewmodel.$data.openGuestDiv = 1)
        },
        toGuestGid: function(e) {
            window.EbkIMWholeGuestModule.toGuestItem(),
            window.EbkWholeIMMaster.showSendPicDiv();
            var o = {};
            o.groupid = e.groupId,
            o.sessionid = e.sessionid,
            IMWholeviewmodel.$data.currentGroupId = o.groupid,
            IMWholeviewmodel.$data.currentGroupInfo = o
        },
        toSupplierGid: function(e) {
            window.EbkIMWholeSupplierModule.toSupplierItem();
            var o = {};
            o.groupid = e.groupId,
            o.sessionid = e.sessionid,
            IMWholeviewmodel.$data.currentGroupId = o.groupid,
            IMWholeviewmodel.$data.currentGroupInfo = o
        },
        toSettingDiv: function(e) {
            $("#demoConfig")[0].click(),
            $("#message").click(),
            "servicehours" != e || $("#servicehours").hasClass("hide") ? "notifications" != e || $("#notifications").hasClass("hide") ? "quickanswers" != e || $("#quickanswers").hasClass("hide") ? "avator" != e || $("#avator").hasClass("hide") ? "fastreply" != e || $("#fastreply").hasClass("hide") || $("#fastreply").click() : $("#avator").click() : $("#quickanswers").click() : $("#notifications").click() : $("#servicehours").click()
        },
        setReceiveListener: function() {
            (self = this).imClient.setOnReceiveMessageListener({
                onReceived: function(e) {
                    self.toprefresh = !1,
                    e && e.messages && (console.log(e.messages),
                    self.printHtml(e.messages))
                }
            }),
            self.imClient.setConnectionStatusListener({
                onChanged: function(e) {
                    var o = !1;
                    switch (e) {
                    case IMClient.CommonEnum.ConnectionStatus.CONNECTED:
                    case IMClient.CommonEnum.ConnectionStatus.CONNECTING:
                    case IMClient.CommonEnum.ConnectionStatus.DISCONNECTED:
                        break;
                    case IMClient.CommonEnum.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
                        o = !0,
                        "其他设备登陆";
                        break;
                    case IMClient.CommonEnum.ConnectionStatus.DOMAIN_INCORRECT:
                        break;
                    case IMClient.CommonEnum.ConnectionStatus.CURRENT_TOKEN_UNAVAILABLE:
                        console.log("setConnectionStatusListener", "token失败"),
                        o = !0,
                        "token失败";
                        break;
                    case IMClient.CommonEnum.ConnectionStatus.NETWORK_UNAVAILABLE:
                        console.log("setConnectionStatusListener", "网络不可用")
                    }
                    o && window.EbkWholeIMMaster.logoutClog()
                }
            })
        },
        printHtml: function(e) {
            self = this;
            for (var o = !1, t = 0; t < e.length; t++) {
                var i = e[t];
                if (console.log(i),
                i.actionCode == undefined || "NBZ99" != i.actionCode) {
                    if ((1022 == i.messageType || 1023 == i.messageType || window.EbkWholeIMMaster.isSupportMsgType(i.messageType, i.title, i.actionCode, i)) && (i.actionCode == undefined || "CBZ11" != i.actionCode)) {
                        var n = self.truncateUID(i.fromJid);
                        if (o = self.myUid.toLowerCase() != self.truncateGroupID(i.fromJid).toLowerCase(),
                        1022 == i.messageType && (n = self.truncateUID(i.fromJid)),
                        i.actionCode != undefined && "NBZ22" == i.actionCode && i.title.indexOf("请对酒店的回复进行评价") >= 0)
                            ;
                        else if ("CARD05" == i.actionCode || "CARD06" == i.actionCode)
                            ;
                        else if (!o && 1022 != i.messageType && 1023 != i.messageType)
                            continue;
                        var s = window.IMWholeviewmodel.getGroupInfo(n);
                        if (null != s) {
                            if (1023 != i.messageType) {
                                var a = s.biztype;
                                if (null != a) {
                                    if (1383 == a || 1003 == a)
                                        window.EbkIMWholeBusinessManageModule.printHtml(i, a);
                                    else if (1356 == a || 1357 == a || 1801 == a || 1399 == a || 1479 == a || 1488 == a || 1695 == a || 1696 == a || 1697 == a)
                                        window.EbkIMWholeGuestModule.printHtml(i, a);
                                    else if (window.EbkIMWholeServiceModule.isServiceBizType(a))
                                        window.EbkIMWholeServiceModule.printHtml(i, a);
                                    else if (1377 == a || 1378 == a)
                                        window.EbkIMWholeBookingModule.printHtml(i, a);
                                    else {
                                        if (1503 != a)
                                            continue;
                                        window.EbkIMWholeSupplierModule.printHtml(i, a)
                                    }
                                    if (IMWholeviewmodel.$data.isFocusThisWindow && 1022 != i.messageType && 1023 != i.messageType && window.IMWholeviewmodel.$data.currentGroupId == n && self.sendReceipt(window.IMWholeviewmodel.$data.currentGroupId, i.createTime),
                                    window.IMWholeviewmodel.$data.currentGroupId == n && "CBZ04" == i.actionCode && null != i.extPropertys && null != i.extPropertys.question && null != i.extPropertys.question.questionList && i.extPropertys.question.questionList.length > 0) {
                                        var r = {};
                                        r.sessionid = IMWholeviewmodel.$data.currentGroupInfo.sessionid,
                                        r.aiToken = i.extPropertys.aiToken,
                                        r.bizType = a,
                                        window.__bfi.push(["_tracklog", "o_implus_faq", JSON.stringify(r)])
                                    }
                                    setTimeout(function() {
                                        parentSelf.scrolltobuttom()
                                    }, 200)
                                } else
                                    console.log("bizType is null")
                            } else if (IMWholeviewmodel.$data.currentGroupInfo.groupId == n && window.EbkWholeIMMaster.needReadMsgInfo())
                                for (t = 0; t < window.IMWholeviewmodel.$data.MsgList.length; t++) {
                                    var l = window.IMWholeviewmodel.$data.MsgList[t];
                                    l.isgetreadinfodone = !0,
                                    l.isread = !0
                                }
                        } else {
                            IMPlusACD.ping({});
                            var d = i;
                            i.bizType,
                            setTimeout(function() {
                                self.delayPrintMessage(d)
                            }, 4e3)
                        }
                    }
                } else
                    self.setOwnerForGroup(i)
            }
        },
        setOwnerForGroup: function(e) {
            self = this;
            var o = IMWholeviewmodel.$data.myUid.toLowerCase()
              , t = self.truncateUID(e.fromJid);
            if (e.fromJid.indexOf(o) > -1) {
                t == IMWholeviewmodel.$data.currentGroupId && window.EbkWholeIMMaster.showCloseSessionDiv();
                var i = window.IMWholeviewmodel.getGroupInfo(t);
                i.currentopreduid = $("#id2MyName").text(),
                i.tipMsg = window.IMWholeviewmodel.getTipMsg(i)
            }
        },
        delayPrintMessage: function(e) {
            self = this;
            var o = [];
            o.push(e);
            var t = "id_" + e.messageId;
            null == self.arrGroupDelayCount[t] && (self.arrGroupDelayCount[t] = 0),
            self.arrGroupDelayCount[t]++,
            self.arrGroupDelayCount[t] <= 3 && self.printHtml(o)
        },
        clearData: function() {
            self = this,
            window.IMWholeviewmodel.$data.MsgList = [],
            $("#id2GuestDiv").hasClass("cur") || $("#imDemoOrderinfo").addClass("hide"),
            $("#imDemoHistory").addClass("hide"),
            $("#emojiBox").addClass("hide"),
            $("#imDemoContactinfo").addClass("hide"),
            $("#id2SendMessageDiv").addClass("hide")
        },
        loadLastMessage: function() {
            self = this;
            for (var e = 0; e < window.IMWholeviewmodel.$data.GuestGoingGroupList.length; e++) {
                var o = window.IMWholeviewmodel.$data.GuestGoingGroupList[e];
                self.getUserInfo(o.uid, o.groupId),
                self.loadLastMessageInternal(o, (new Date).getTime())
            }
            for (e = 0; e < window.IMWholeviewmodel.$data.BookingGoingGroupList.length; e++) {
                o = window.IMWholeviewmodel.$data.BookingGoingGroupList[e];
                self.getUserInfo(o.uid, o.groupId),
                self.loadLastMessageInternal(o, (new Date).getTime())
            }
            for (e = 0; e < window.IMWholeviewmodel.$data.SupplierGoingGroupList.length; e++) {
                o = window.IMWholeviewmodel.$data.SupplierGoingGroupList[e];
                self.getGroupNickName(o)
            }
        },
        getGroupNickName: function(e) {
            var o = this
              , t = $.cookie("CurrentLanguage")
              , i = window.EbkWholeIMMaster.getToken()
              , n = {
                groupid: e.groupId,
                language: t,
                auth: i
            };
            $.ajax("/ebkovsassembly/api/getGroupNickName", {
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify(n),
                success: function(t) {
                    t && (o.getUserInfo4Supplier(e.uid, e.groupId, t.data),
                    o.loadLastMessageInternal(e, (new Date).getTime()))
                }
            })
        },
        loadLastMessageInternal: function(e, o) {
            (self = this).imClient.getConversationMessagesByJidPaging({
                conversationType: "groupchat",
                isAll: !0,
                partnerJid: e.groupId.toString(),
                paging: {
                    beginTimestamp: 0,
                    endTimestamp: 0,
                    direction: "prev",
                    pageSize: 50
                }
            }, function(o) {
                if (o && o.ResponseStatus && o.ResponseStatus.Ack && "success" == o.ResponseStatus.Ack.toLocaleLowerCase()) {
                    if (console.log(o),
                    null == o || null == o.messages)
                        return;
                    for (var t = 0; t < o.messages.length; t++) {
                        var i = o.messages[o.messages.length - 1 - t];
                        if (0 != window.EbkWholeIMMaster.isSupportMsgType(i.messageType, i.title, i.actionCode, i) && !(null != i.content && i.content.indexOf("宝贵的意见") > -1 || null != i.content && i.content.indexOf("星评价") > -1 || 7 == i.messageType && null != i.title && i.title.indexOf("您的评价") > -1)) {
                            var n = window.EbkWholeIMMaster.getContentByMsgType(i.messageType, i.title, i, e);
                            if (!(1007 == i.messageType && n.indexOf("去评价") > -1 || null != n && n.toString().indexOf("imGoComment") > -1 || (null != i.extPropertys && null != i.extPropertys.question && null != i.extPropertys.question.questionList && i.extPropertys.question.questionList.length > 0 && (n = i.title),
                            window.EbkWholeIMMaster.isSystemMsg(i.messageType, i.title, i)))) {
                                switch (i.messageType) {
                                case IMClient.CommonEnum.MessageType.TextMessage:
                                    e.lastcontent = html_encode(i.content);
                                    break;
                                case IMClient.CommonEnum.MessageType.ImageMessage:
                                    e.lastcontent = window.EbkWholeIMMaster.getSharkValue("图片", "Key.EbkAssembly.052");
                                    break;
                                case 2:
                                case 7:
                                    if (null != n) {
                                        if (n.indexOf("status") > -1) {
                                            e.lastcontent = window.EbkWholeIMMaster.getSharkValue("订单", "Key.EbkAssembly.109");
                                            break
                                        }
                                        if (n.indexOf("如您需要联系携程客服") > -1) {
                                            e.lastcontent = window.EbkWholeIMMaster.getSharkValue("卡片", "Key.IM.054");
                                            break
                                        }
                                    }
                                    if ("CBZ43" == i.action || "CBZ43" == i.actionCode) {
                                        e.lastcontent = window.EbkWholeIMMaster.getSharkValue("业务群发消息", "Key.IM.081");
                                        break
                                    }
                                    if ("CBZ04" == i.action || "CBZ04" == i.actionCode) {
                                        e.lastcontent = window.EbkWholeIMMaster.getSharkValue("问答消息", "Key.IM.082");
                                        break
                                    }
                                    if ("CBZ16" == i.action || "CBZ16" == i.actionCode) {
                                        e.lastcontent = window.EbkWholeIMMaster.getSharkValue("订单卡片", "Key.IM.083");
                                        break
                                    }
                                    if ("CARD05" == i.action || "CARD05" == i.actionCode) {
                                        e.lastcontent = i.title;
                                        break
                                    }
                                    if ("CBZ53" == i.action) {
                                        e.lastcontent = i.title;
                                        break
                                    }
                                    e.lastcontent = n;
                                    break;
                                case 5:
                                    e.lastcontent = window.EbkWholeIMMaster.getSharkValue("文件", "Key.IM.057") + i.filename;
                                    break;
                                case 8:
                                case 1007:
                                    e.lastcontent = n;
                                    break;
                                case 1009:
                                    e.lastcontent = window.EbkWholeIMMaster.getSharkValue("撤回一条消息", "Key.IM.084");
                                    break;
                                default:
                                    e.lastcontent = n
                                }
                                e.lastmsgtime = i.createTime;
                                break
                            }
                        }
                    }
                } else
                    console.log("getHistoryMessagesPaging error", o)
            }, function(e) {
                console.log("getConversationMessagesByJidPaging error", e)
            })
        },
        loadLastDoneMessageInternal: function(e, o) {
            (self = this).imClient.getRangeMessageOnline({
                groupId: e.groupId,
                beginTimestamp: 0,
                endTimestamp: o,
                direction: "prev",
                pageSize: 50
            }, function(o) {
                if (o && o.ResponseStatus && o.ResponseStatus.Ack && "success" == o.ResponseStatus.Ack.toLocaleLowerCase()) {
                    if (console.log(o),
                    null == o || null == o.messages)
                        return;
                    for (var t = 0; t < o.messages.length; t++) {
                        var i = o.messages[o.messages.length - 1 - t];
                        if (0 != window.EbkWholeIMMaster.isSupportMsgType(i.messageType, i.title, i.actionCode, i) && !(null != i.content && i.content.indexOf("宝贵的意见") > -1 || null != i.content && i.content.indexOf("星评价") > -1 || 7 == i.messageType && i.title.indexOf("您的评价") > -1)) {
                            var n = window.EbkWholeIMMaster.getContentByMsgType(i.messageType, i.title, i);
                            if (1007 == i.messageType && i.actionCode != undefined && null != i.actionCode && "NBZ22" == i.actionCode && (n = i.title),
                            null != i.extPropertys && null != i.extPropertys.question && null != i.extPropertys.question.questionList && i.extPropertys.question.questionList.length > 0 && (n = i.title),
                            !window.EbkWholeIMMaster.isSystemMsg(i.messageType, i.title, i)) {
                                switch (i.messageType) {
                                case IMClient.CommonEnum.MessageType.TextMessage:
                                    e.lastcontent = i.content;
                                    break;
                                case IMClient.CommonEnum.MessageType.ImageMessage:
                                    e.lastcontent = "图片";
                                    break;
                                case 2:
                                case 7:
                                case 8:
                                case 1007:
                                default:
                                    e.lastcontent = n
                                }
                                e.lastmsgtime = i.createTime;
                                break
                            }
                        }
                    }
                } else
                    console.log("getHistoryMessagesPaging error", o)
            }, function(e) {
                console.log("getConversationMessagesByJidPaging error", e)
            })
        },
        SetConnectCommentGroupIDAndSessionIdToDictionary: function(e, o, t) {
            var i = {
                uid: e,
                groupId: o,
                sessionid: t
            };
            $.ajax({
                url: "/ebkovsassembly/api/setImClientCallback",
                type: "post",
                contentType: "application/json;charset=UTF-8",
                dataType: "json",
                data: JSON.stringify(i),
                timeout: 3e4,
                error: function(e, o) {
                    console.log(o)
                },
                success: function(e) {
                    null != e && console.log("SetConnectCommentGroupIDAndSessionIdToDictionary", e)
                }
            })
        },
        setcurrent: function(e, o) {
            self = this,
            window.IMWholeviewmodel.clearCurrent();
            var t = self.getCurrentGroupInfo(e, o);
            null != t && (t.iscurrent = !0,
            window.IMWholeviewmodel.$data.currentGroupId = e,
            IMWholeviewmodel.$data.currentGroupInfo = t,
            window.IMWholeviewmodel.isHotelCompany && (1356 == t.biztype && window.EbkWholeIMMaster.showSendPromotionMsgDiv(),
            1356 == t.biztype || 1357 == t.biztype ? ($("#id2sendidbtn").show(),
            1 == $("#id2showcardbtn").val() && $("#id2sendctripcardbtn").show()) : ($("#id2sendidbtn").hide(),
            1399 == t.biztype ? $("#id2sendctripcardbtn").show() : $("#id2sendctripcardbtn").hide())),
            1356 != t.biztype && 1357 != t.biztype && 1801 != t.biztype && 1399 != t.biztype && 1479 != t.biztype && 1488 != t.biztype && 1695 != t.biztype && 1696 != t.biztype && 1697 != t.biztype || 0 != t.isRead || (t.isRead = 1,
            window.IMWholeviewmodel.SetReadedForVendorActiveConversations()),
            window.EbkIMWholeServiceModule.recommendInternalCheckChatStatusFunction(window.EbkWholeIMMaster.getToken(), e, t.biztype))
        },
        getCurrentGroupInfo: function(e, o) {
            var t = window.IMWholeviewmodel.getGroupInfo(e);
            return null == t && (o == undefined || null != t && t.sessionid == o || ($("#id2GuestDoneTab").hasClass("active") || $("#id2CustomServiceDoneTab").hasClass("active")) && (t = window.IMWholeviewmodel.getDoneGroupInfo(o))),
            t
        },
        getCustomerLanguage: function(e) {
            var o = "";
            if (IsEmptyOrSpace(e))
                return "未知";
            try {
                switch (e) {
                case "zh_cn":
                    o = "简体中文";
                    break;
                case "zh_tw":
                case "zh_hk":
                    o = "繁体中文";
                    break;
                case "ja_jp":
                    o = "日语";
                    break;
                case "ko_kr":
                    o = "韩语";
                    break;
                case "en_us":
                    o = "英语";
                    break;
                case "th_th":
                    o = "泰语";
                    break;
                default:
                    o = "未知"
                }
            } catch (t) {
                console(t)
            } finally {
                return o
            }
        },
        setChatTitle: function(e, o) {
            if ($("#id2BusinessDiv").hasClass("cur"))
                $("#id2GuestName").text(EbkIMWholeBusinessManageModule.businessChatTitle);
            else if ($("#id2ServiceDiv").hasClass("cur")) {
                "1361" == (n = self.getCurrentGroupInfo(e, o)).biztype || 1361 == n.biztype ? $("#id2GuestName").text(multimasterLanguageText.orderSearch) : "1362" == n.biztype || 1362 == n.biztype ? $("#id2GuestName").text(multimasterLanguageText.roomStatus) : "1363" == n.biztype || 1363 == n.biztype ? $("#id2GuestName").text(multimasterLanguageText.serviceSystem) : "1364" == n.biztype || 1364 == n.biztype ? $("#id2GuestName").text(multimasterLanguageText.serviceAudit) : "1365" == n.biztype || 1365 == n.biztype ? $("#id2GuestName").text(multimasterLanguageText.finance_Settlement) : "1366" == n.biztype || 1366 == n.biztype ? $("#id2GuestName").text(multimasterLanguageText.serviceOther) : "1384" != n.biztype && 1384 != n.biztype || $("#id2GuestName").text(window.EbkWholeIMMaster.getSharkValue("促销活动", "Key.IM.085")),
                "1367" != n.biztype && 1367 != n.biztype && "1368" != n.biztype && 1368 != n.biztype && "1369" != n.biztype && 1369 != n.biztype || $("#id2GuestName").text(multimasterLanguageText.bookings),
                "1370" != n.biztype && 1370 != n.biztype && "1371" != n.biztype && 1371 != n.biztype && "1372" != n.biztype && 1372 != n.biztype || $("#id2GuestName").text(window.EbkWholeIMMaster.getSharkValue("房态&其他", "Key.IM.086")),
                "1373" != n.biztype && 1373 != n.biztype && "1374" != n.biztype && 1374 != n.biztype && "1375" != n.biztype && 1375 != n.biztype && "1376" != n.biztype && 1376 != n.biztype || $("#id2GuestName").text(multimasterLanguageText.finance_Settlement)
            } else if ($("#id2GuestDiv").hasClass("cur")) {
                var t = window.EbkWholeIMMaster.getSharkValue("客人", "Key.IM.062") + ":";
                if ($("#id2GuestDoneTab").hasClass("active"))
                    t += window.EbkWholeIMMaster.getSharkValue("历史会话", "Key.IM.089"),
                    $("#id2GuestName").text(t);
                else {
                    if ($("#id2CloseSessionBtn").hide(),
                    t += (n = self.getCurrentGroupInfo(e, o)).nickName + "," + window.EbkWholeIMMaster.getSharkValue("主客服", "Key.IM.088") + ":",
                    null != n.currentopreduid && "" != n.currentopreduid)
                        if (n.currentopreduid == $("#id2MyName").text() || self.isCurrentOpredUid(n.currentopreduid.toLowerCase(), window.IMWholeviewmodel.$data.myUid.toLowerCase()))
                            $("#id2CloseSessionBtn").show(),
                            t += $("#id2MyName").text();
                        else if (n.currentopreduid.toLowerCase().indexOf("_imebk") > -1) {
                            var i = window.IMWholeviewmodel.$data.groupMemberInfoList["id_" + n.currentopreduid];
                            null != i && (t += i.nickname)
                        } else
                            t += n.currentopreduid;
                    else
                        t += window.EbkWholeIMMaster.getSharkValue("待确定", "Key.IM.090");
                    $("#id2GuestName").html(t)
                }
            } else if ($("#id2CustomServiceDiv").hasClass("cur")) {
                var n = self.getCurrentGroupInfo(e, o);
                $("#id2CustomServiceDoneTab").hasClass("active") ? $("#id2GuestName").text(n.nickName + ":" + window.EbkWholeIMMaster.getSharkValue("历史会话", "Key.IM.089")) : $("#id2GuestName").text(n.nickName)
            } else
                $("#id2SupplierDiv").hasClass("cur") && ($("#id2GuestName").text(window.EbkWholeIMMaster.getSharkValue("服务市场——供应商", "Key.IM.087")),
                $("#id2CloseSessionBtn").hide())
        },
        isCurrentOpredUid: function(e, o) {
            var t = !1;
            e.indexOf("_imeb") > -1 && null != o && (e.substring(e.length - 5) == o.substring(o.length - 5) && (t = !0));
            return t
        },
        confuseUid: function(e) {
            if (!e)
                return "";
            if (1 == e.length)
                return e;
            if (2 == e.length)
                return e.charAt(0) + "*";
            var o = e.length / 3
              , t = "";
            t = e.substring(0, o);
            for (var i = o, n = Math.min(o + 1, e.length - o), s = 0; s < n; s++)
                t += "*";
            var a = i + n;
            return a == e.length ? t : ((t += e.substring(a, e.length)).length > 14 && (t = t.substring(0, 11) + "..."),
            t)
        },
        parentClickFun: function() {
            self = this,
            window.IMWholeviewmodel.$watch("currentGroupInfo", function(e, o) {
                if (e != o && e != undefined && e.groupid != undefined && null != e.groupid && 0 != e.groupid.length && "" != window.IMWholeviewmodel.$data.currentGroupId && 0 != window.IMWholeviewmodel.$data.currentGroupId.length) {
                    var t = null != e.sessionid && "" != e.sessionid ? e.sessionid : "";
                    self.setcurrent(e.groupid, t),
                    self.clearData(),
                    $("#id2SendMessageDiv").removeClass("hide"),
                    window.EbkWholeIMMaster.clearChatMsgDiv(),
                    IMWholeviewmodel.$data.isOpenScroll = !0,
                    window.IMWholeviewmodel.$data.sendMsgIds.length = 0,
                    self.loadMsg(e.groupid.toString(), t)
                }
            }),
            window.IMWholeviewmodel.$watch("fileInfo", function(e, o) {
                e != undefined && null != e && e.fileUrl != undefined && null != e.fileUrl && 0 != e.fileUrl.length && "" != window.IMWholeviewmodel.$data.currentGroupId && 0 != window.IMWholeviewmodel.$data.currentGroupId.length && self.sendFileMsg(e.fileUrl, e.fileName, e.fileSize, IMWholeviewmodel.$data.currentGroupInfo.biztype)
            }),
            window.IMWholeviewmodel.$watch("NeedSetReadedGroupId", function(e, o) {
                e != undefined && null != e && "" != e && self.sendReceipt(e, 0)
            }),
            window.IMWholeviewmodel.$watch("picUrl", function(e, o) {
                e != undefined && null != e && 0 != e.length && "" != window.IMWholeviewmodel.$data.currentGroupId && 0 != window.IMWholeviewmodel.$data.currentGroupId.length && self.sendPicMsg(e, e, IMWholeviewmodel.$data.currentGroupInfo.biztype)
            }),
            window.IMWholeviewmodel.$watch("sendContent", function(e, o) {
                if (e != undefined && null != e && 0 != e.length && "default" != e && "" != window.IMWholeviewmodel.$data.currentGroupId && 0 != window.IMWholeviewmodel.$data.currentGroupId.length) {
                    var t = window.IMWholeviewmodel.$data.currentGroupId
                      , i = IMWholeviewmodel.$data.currentGroupInfo.biztype;
                    $("#emojiBox").addClass("hide"),
                    1 == IMWholeviewmodel.$data.currentGroupInfo.mode ? (window.EbkIMWholeServiceModule.sendAIChatMessageByInput(window.EbkWholeIMMaster.getToken(), t, i, e, null),
                    setTimeout(function() {
                        window.IMWholeviewmodel.$data.sendContent = "default",
                        parentSelf.scrolltobuttom()
                    }, 500)) : self.sendmsg(window.IMWholeviewmodel.$data.currentGroupId, e, i);
                    var n = {};
                    n.isoversea = window.IMWholeviewmodel.isoversea,
                    n.star = window.IMWholeviewmodel.star,
                    n.masterhotelid = window.IMWholeviewmodel.MasterHotelId,
                    n.isbusiness = 1383 == i ? 1 : 0,
                    n.usertype = "酒店",
                    n.groupid = IMWholeviewmodel.$data.currentGroupInfo.groupId,
                    n.iconname = "发送",
                    window.__bfi.push(["_tracklog", "ebk_im_icon_click", JSON.stringify(n)]),
                    null != IMWholeviewmodel.$data.currentGroupInfo && ("1383" != IMWholeviewmodel.$data.currentGroupInfo.biztype && "1003" != IMWholeviewmodel.$data.currentGroupInfo.biztype || window.EbkWholeIMMaster.updateLastMsgTime(IMWholeviewmodel.$data.currentGroupInfo.groupId))
                }
            }),
            window.IMWholeviewmodel.$watch("sendTranslateContent", function(e, o) {
                var t = e.content;
                if ((t = (t = t.replace(/↵/g, "")).replace(/[\r\n]/g, "")) != undefined && null != t && 0 != t.length) {
                    var i = e.groupId
                      , n = e.biztype;
                    $("#emojiBox").addClass("hide"),
                    self.sendSystemMsg(i, t, n)
                }
            }),
            window.IMWholeviewmodel.$watch("sendRoomCard", function(e, o) {
                if (e != undefined && null != e && 0 != e.length && "" != window.IMWholeviewmodel.$data.currentGroupId && 0 != window.IMWholeviewmodel.$data.currentGroupId.length) {
                    var t = IMWholeviewmodel.$data.currentGroupInfo.biztype;
                    $("#emojiBox").addClass("hide"),
                    self.sendRoomCardMsg(window.IMWholeviewmodel.$data.currentGroupId, e, t)
                }
            }),
            window.IMWholeviewmodel.$watch("NeedGetLastMessageGroupList", function(e, o) {
                if (e != undefined && 0 != e.length)
                    for (var t = 0; t < window.IMWholeviewmodel.$data.NeedGetLastMessageGroupList.length; t++) {
                        var i = window.IMWholeviewmodel.$data.NeedGetLastMessageGroupList[t];
                        null != i.groupId && 0 != i.groupId.length && (i.lastmsgtime > 0 || self.loadLastMessageInternal(i, (new Date).getTime()))
                    }
            }),
            window.IMWholeviewmodel.$watch("NeedGetLastMessageAndUserInfoGroupList", function(e, o) {
                if (e != undefined && 0 != e.length)
                    for (var t = 0; t < window.IMWholeviewmodel.$data.NeedGetLastMessageAndUserInfoGroupList.length; t++) {
                        var i = window.IMWholeviewmodel.$data.NeedGetLastMessageAndUserInfoGroupList[t];
                        0 != i.groupId.length && (self.getUserInfo(i.uid, i.groupId),
                        self.loadLastMessageInternal(i, (new Date).getTime()))
                    }
            }),
            window.IMWholeviewmodel.$watch("needLoadGuestDoneGroupInfo", function(e, o) {
                if (e != undefined && 0 != e)
                    for (var t = 0; t < window.IMWholeviewmodel.$data.GuestDoneGroupList.length; t++) {
                        var i = window.IMWholeviewmodel.$data.GuestDoneGroupList[t];
                        0 != i.groupId.length && (i.lastmsgtime > 0 || (null != i.uid && null != i.sessionid && self.getDoneUserInfo(i.uid, i.sessionid),
                        self.loadLastDoneMessageInternal(i, (new Date).getTime())))
                    }
            }),
            window.IMWholeviewmodel.$watch("needLoadBookingDoneGroupInfo", function(e, o) {
                if (e != undefined && 0 != e)
                    for (var t = 0; t < window.IMWholeviewmodel.$data.BookingDoneGroupList.length; t++) {
                        var i = window.IMWholeviewmodel.$data.BookingDoneGroupList[t];
                        0 != i.groupId.length && (i.lastmsgtime > 0 || (self.getDoneUserInfo(i.uid, i.sessionid),
                        self.loadLastDoneMessageInternal(i, (new Date).getTime())))
                    }
            }),
            window.IMWholeviewmodel.$watch("needLoadSupplierDoneGroupInfo", function(e, o) {
                if (e != undefined && 0 != e)
                    for (var t = 0; t < window.IMWholeviewmodel.$data.BookingDoneGroupList.length; t++) {
                        var i = window.IMWholeviewmodel.$data.BookingDoneGroupList[t];
                        0 != i.groupId.length && (i.lastmsgtime > 0 || (self.getDoneUserInfo(i.uid, i.sessionid),
                        self.loadLastDoneMessageInternal(i, (new Date).getTime())))
                    }
            }),
            window.IMWholeviewmodel.$watch("sendOrderMsg", function(e, o) {
                if (e != undefined && null != e && 0 != e.length && "" != window.IMWholeviewmodel.$data.currentGroupId && 0 != window.IMWholeviewmodel.$data.currentGroupId.length) {
                    var t = window.IMWholeviewmodel.$data.currentGroupId
                      , i = IMWholeviewmodel.$data.currentGroupInfo.biztype
                      , n = window.IMWholeviewmodel.getGroupInfo(t);
                    if (null != n && null != i && 0 != i) {
                        var s = n.threadid;
                        self.sendOrderMsgRequest(i, self.generateLocalID(), e, s, t),
                        window.IMWholeviewmodel.clickTracklog("ebk_im_bot_send_order")
                    }
                }
            }),
            window.IMWholeviewmodel.$watch("sendPromotionMsg", function(e, o) {
                if (e != undefined && null != e && 0 != e.length && "" != window.IMWholeviewmodel.$data.currentGroupId && 0 != window.IMWholeviewmodel.$data.currentGroupId.length) {
                    var t = window.IMWholeviewmodel.$data.currentGroupId
                      , i = IMWholeviewmodel.$data.currentGroupInfo.biztype
                      , n = window.IMWholeviewmodel.getGroupInfo(t);
                    if (null != n && null != i && 0 != i) {
                        var s = n.threadid;
                        self.sendPromotionMsgRequest(i, self.generateLocalID(), e, s, t)
                    }
                }
            }),
            window.IMWholeviewmodel.$watch("sendHotelRedPackage", function(e, o) {
                if (e != undefined && null != e && 0 != e.length && "" != window.IMWholeviewmodel.$data.currentGroupId && 0 != window.IMWholeviewmodel.$data.currentGroupId.length) {
                    var t = window.IMWholeviewmodel.$data.currentGroupId
                      , i = IMWholeviewmodel.$data.currentGroupInfo.biztype
                      , n = window.IMWholeviewmodel.getGroupInfo(t);
                    if (null != n) {
                        var s = n.threadid;
                        self.sendHotelRedPackageRequest(i, self.generateLocalID(), e, s, t)
                    }
                }
            }),
            window.IMWholeviewmodel.$watch("sendPromotionStrategy", function(e, o) {
                if (e != undefined && null != e && 0 != e.length && "" != window.IMWholeviewmodel.$data.currentGroupId && 0 != window.IMWholeviewmodel.$data.currentGroupId.length) {
                    var t = window.IMWholeviewmodel.$data.currentGroupId
                      , i = IMWholeviewmodel.$data.currentGroupInfo.biztype
                      , n = window.IMWholeviewmodel.getGroupInfo(t);
                    if (null != n) {
                        var s = n.threadid;
                        self.sendPromotionStrategyRequest(i, self.generateLocalID(), e, s, n)
                    }
                }
            })
        },
        truncateGroupID: function(e) {
            return e.indexOf("/") > -1 ? e.substr(e.indexOf("/") + 1, e.length) : e
        },
        truncateUID: function(e) {
            for (var o = e || "", t = 0; t < o.length; t++)
                if ("@" == e[t])
                    return e.substr(0, t);
            return e
        },
        generateLocalID: function() {
            return Guid.NewGuid().ToString()
        },
        dateformat: function(e, o) {
            try {
                e = parseInt(e),
                o = parseInt(o)
            } catch (i) {}
            var t = new Date(e);
            return !this.toprefresh && e - o < 0 ? "error" : e - o < 12e4 ? "" : t.pattern("yyyy-MM-dd") == this.now.pattern("yyyy-MM-dd") ? t.pattern("hh:mm") : t.pattern("yyyy-MM-dd") == new Date((new Date).setDate(this.now.getDate() - 1)).pattern("yyyy-MM-dd") ? window.IMWholeviewmodel.multimasterYesterday(t.pattern("昨天 hh:mm")) : this.now.getTime() - e < 6048e5 && this.now.getTime() - e > 0 ? window.IMWholeviewmodel.multimasterWeekDay(t.pattern("EEE hh:mm")) : t.getYear() < this.now.getYear() ? t.pattern("yyyy-MM-dd hh:mm") : t.pattern("MM-dd hh:mm")
        },
        sendOrderMsgToCustomer: function(e, o) {
            var t = window.IMWholeviewmodel.getGroupInfo(o);
            null != t && (t.lastmsgtime = (new Date).getTime(),
            t.lastcontent = multimasterLanguageText.order,
            window.IMWholeviewmodel.refreshGuestGoingGroupInfo()),
            setTimeout(function() {
                parentSelf.scrolltobuttom()
            }, 100),
            window.IMWholeviewmodel.$data.sendOrderMsg = e
        },
        getLatestMessageInBulkOffline: function() {
            var e = window.IMWholeviewmodel.$data.currentGroupInfo;
            if (window.EbkWholeIMMaster.needReadMsgInfo()) {
                var o = {
                    groupid: e.groupId,
                    userId: window.IMWholeviewmodel.$data.myUid
                };
                $.ajax("/ebkovsassembly/api/getLatestMessageInBulkOffline", {
                    type: "post",
                    dataType: "json",
                    contentType: "application/json;charset=UTF-8",
                    data: JSON.stringify(o),
                    success: function(o) {
                        if (null != o.data && o.data.length > 0) {
                            e.lastreadedid = o.data[0].msgId;
                            for (var t = 0; t < window.IMWholeviewmodel.$data.MsgList.length; t++) {
                                var i = window.IMWholeviewmodel.$data.MsgList[t];
                                i.isgetreadinfodone = !0,
                                i.isread || (i.isread = e.lastreadedid >= i.msgid)
                            }
                        }
                    }
                })
            }
        },
        addSendOrderMsgToCustomerRecord: function(e, o, t, i) {
            var n = {
                orderId: e,
                uid: o,
                groupId: t,
                sessionid: i
            };
            $.ajax("/ebkovsassembly/api/addSendOrderMsgToCustomerRecord", {
                type: "post",
                dataType: "json",
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify(n),
                success: function(e) {
                    console.log("addSendOrderMsgToCustomerRecord 成功")
                }
            })
        },
        getIMNotify: function() {
            var e = $.cookie("CurrentLanguage");
            return "English" == e ? $("#id2jsurl").val() + "/imvoice/English7.mp3" : "Japanese" == e ? $("#id2jsurl").val() + "/imvoice/Japanese7.mp3" : "Korean" == e ? $("#id2jsurl").val() + "/imvoice/Korean7.mp3" : "Thai" == e ? $("#id2jsurl").val() + "/imvoice/Thai7.mp3" : $("#id2jsurl").val() + "/imvoice/7.mp3"
        },
        initServiceHours: function() {
            $("#servicehourstxt").show(),
            $("#onlinetimeDiv").show(),
            $("#saveservicehours").show()
        },
        isShowMoreHistoryBtn: function(e) {
            e && $("#showHistoryBtn").show();
            var o = $("#id2ChatMsgDiv").height();
            $("#contentDiv").height() > o && $("#showHistoryBtn").hide()
        },
        getOrderContent: function(e) {
            try {
                return window.EbkWholeIMMaster.formatToOrderEntity(JSON.parse(e))
            } catch (t) {
                var o = window.IMWholeviewmodel.getOrderEntity();
                return o.orderID = e,
                o
            }
        }
    }
}),
Guid.Empty = new Guid,
Guid.NewGuid = function() {
    for (var e = "", o = 32; o--; )
        e += Math.floor(16 * Math.random()).toString(16);
    return new Guid(e)
}
;
//# sourceMappingURL=imwholecommon.js.579699c6.map
