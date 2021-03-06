/**
 * @license TOTVS | HTML Framework 12.1.17-fix007
 * (c) 2015-2018 TOTVS S/A https://www.totvs.com
 * License: Comercial
 */

! function () {
    "use strict";
    angular.module("totvsHtmlFramework", ["totvsInterceptors", "totvsConfigs", "totvsProviders", "totvsServices", "totvsFactories", "totvsFilters", "totvsDirectives"])
}(),
function () {
    "use strict";
    angular.module("totvsConfigs", ["totvsApiConfig", "totvsHttpConfig", "totvsKendoCultureConfig"])
}(),
function () {
    "use strict";
    angular.module("totvsDirectives", ["autonumeric", "bsswitch", "chart", "totvsMaskDate", "datePicker", "datePickerRange", "decimal", "decimalRange", "field", "inputRange", "multipleSelected", "numbersOnly", "onKeyEnter", "selectConector", "templatePopover", "templatePopoverRemoveAll", "timePicker", "totvsButton", "totvsCarousel", "totvsChart", "totvsCheckbox", "totvsCombo", "totvsDatepicker", "totvsDateRange", "totvsDecimal", "totvsDiagram", "totvsDivider", "totvsEditable", "totvsEditor", "totvsEmail", "totvsExecution", "totvsField", "totvsGantt", "totvsGrid", "totvsGroupContent", "totvsInput", "totvsListItem", "totvsListItemAction", "totvsListItemContent", "totvsListItemContentDetail", "totvsListItemHeader", "totvsListItemInfo", "totvsListItemTitle", "totvsListPagination", "totvsListView", "totvsMap", "totvsMashupCaptcha", "totvsModalBody", "totvsModalFooter", "totvsModalHeader", "totvsMultiSelect", "totvsNumber", "totvsOnRepeatFinish", "totvsPage", "totvsPageAlert", "totvsPageBreadcrumb", "totvsPageChild", "totvsPageContent", "totvsPageContentHeader", "totvsPageDetail", "totvsPageDetailInfo", "totvsPageDetailInfoGroup", "totvsPageDisclaimers", "totvsPageForm", "totvsPageHeader", "totvsPageHeaderOperation", "totvsPageHeaderOperationAction", "totvsPageHeaderOperationFilter", "totvsPageHeaderTitle", "totvsPageNavbar", "totvsPageQuickFilter", "totvsPageQuickSelect", "totvsPageTags", "totvsPivotGrid", "totvsPhone", "totvsQrcode", "totvsRadio", "totvsRow", "totvsSelect", "totvsSchedule", "totvsScheduler", "totvsTab", "totvsTabContentTransclude", "totvsTabDropdown", "totvsTabDropdownItem", "totvsTabHeadingTransclude", "totvsTable", "totvsTabset", "totvsTime", "totvsUpload", "totvsWidget", "totvsWidgetBody", "totvsWidgetFooter", "totvsWidgetFooterActions", "totvsWidgetFooterBody", "totvsWidgetHeader", "zoom"])
}(),
function () {
    "use strict";
    angular.module("totvsFactories", ["totvsCustom"])
}(),
function () {
    "use strict";
    angular.module("totvsFilters", ["i18nFilter", "maskFilter", "progressDateFilter"])
}(),
function () {
    "use strict";
    angular.module("totvsInterceptors", ["totvsHttpInterceptor"])
}(),
function () {
    "use strict";
    angular.module("totvsProviders", ["TOTVSMashup", "TOTVSProfile", "TOTVSResource", "TOTVSLocalDatabase", "TOTVSLocalResource", "TOTVSKendoCulture"])
}(),
function () {
    "use strict";
    angular.module("totvsServices", ["notification", "totvsUtils", "totvsUtilsBrowser", "totvsUtilsKendo", "totvsUtilsDirective"])
}(),
function () {
    "use strict";
    angular.module("TOTVSKendoCulture", [])
}(),
function () {
    "use strict";
    angular.module("TOTVSLocalDatabase", [])
}(),
function () {
    "use strict";
    angular.module("TOTVSLocalResource", ["TOTVSLocalDatabase"])
}(),
function () {
    "use strict";
    angular.module("TOTVSMashup", ["TOTVSResource"])
}(),
function () {
    "use strict";
    angular.module("TOTVSProfile", ["ngResource"])
}(),
function () {
    "use strict";
    angular.module("TOTVSResource", ["ngResource"])
}(),
function () {
    "use strict";
    angular.module("totvsApiConfig", [])
}(),
function () {
    "use strict";
    angular.module("totvsHttpConfig", ["notification"])
}(),
function () {
    "use strict";
    angular.module("totvsKendoCultureConfig", ["TOTVSKendoCulture"])
}(),
function () {
    "use strict";
    angular.module("totvsHttpInterceptor", ["notification"])
}(),
function () {
    "use strict";
    angular.module("totvsCustom", [])
}(),
function () {
    "use strict";
    angular.module("notification", ["ngAnimate", "ui.bootstrap", "toaster"])
}(),
function () {
    "use strict";
    angular.module("totvsUtilsBrowser", [])
}(),
function () {
    "use strict";
    angular.module("totvsUtilsDirective", [])
}(),
function () {
    "use strict";
    angular.module("totvsUtilsKendo", [])
}(),
function () {
    "use strict";
    angular.module("totvsUtils", ["totvsUtilsBrowser"])
}(),
function () {
    "use strict";
    angular.module("i18nFilter", ["totvsUtilsBrowser"])
}(),
function () {
    "use strict";
    angular.module("maskFilter", [])
}(),
function () {
    "use strict";
    angular.module("progressDateFilter", [])
}(),
function () {
    "use strict";
    angular.module("autonumeric", [])
}(),
function () {
    "use strict";
    angular.module("bsswitch", ["totvsUtilsBrowser"])
}(),
function () {
    "use strict";
    angular.module("chart", [])
}(),
function () {
    "use strict";
    angular.module("datePicker", [])
}(),
function () {
    "use strict";
    angular.module("datePickerRange", [])
}(),
function () {
    "use strict";
    angular.module("decimal", [])
}(),
function () {
    "use strict";
    angular.module("decimalRange", [])
}(),
function () {
    "use strict";
    angular.module("field", ["autonumeric", "datePicker", "datePickerRange", "decimalRange", "inputRange", "numbersOnly", "onKeyEnter", "selectConector", "cfp.hotkeys"])
}(),
function () {
    "use strict";
    angular.module("inputRange", [])
}(),
function () {
    "use strict";
    angular.module("multipleSelected", ["totvsPageHeaderOperationAction"])
}(),
function () {
    "use strict";
    angular.module("numbersOnly", [])
}(),
function () {
    "use strict";
    angular.module("onKeyEnter", [])
}(),
function () {
    "use strict";
    angular.module("selectConector", [])
}(),
function () {
    "use strict";
    angular.module("templatePopover", [])
}(),
function () {
    "use strict";
    angular.module("templatePopoverRemoveAll", [])
}(),
function () {
    "use strict";
    angular.module("totvsButton", ["kendo.directives", "totvsUtils"])
}(),
function () {
    "use strict";
    angular.module("timePicker", [])
}(),
function () {
    "use strict";
    angular.module("totvsCarousel", [])
}(),
function () {
    "use strict";
    angular.module("totvsChart", ["kendo.directives"])
}(),
function () {
    "use strict";
    angular.module("totvsCheckbox", ["totvsField", "totvsUtils", "totvsUtilsDirective", "bsswitch"])
}(),
function () {
    "use strict";
    angular.module("totvsCombo", ["totvsField"])
}(),
function () {
    "use strict";
    angular.module("totvsDateRange", ["totvsUtils", "totvsField", "totvsMaskDate"])
}(),
function () {
    "use strict";
    angular.module("totvsDatepicker", ["totvsUtils", "totvsField", "totvsMaskDate", "totvsUtilsDirective"])
}(),
function () {
    "use strict";
    angular.module("totvsDecimal", ["decimal", "totvsUtilsDirective", "totvsField"])
}(),
function () {
    "use strict";
    angular.module("totvsDiagram", ["kendo.directives", "totvsUtilsKendo"])
}(),
function () {
    "use strict";
    angular.module("totvsDivider", [])
}(),
function () {
    "use strict";
    angular.module("totvsEditable", [])
}(),
function () {
    "use strict";
    angular.module("totvsEditor", ["ngSanitize", "kendo.directives"])
}(),
function () {
    "use strict";
    angular.module("totvsEmail", ["totvsField", "totvsUtilsDirective"])
}(),
function () {
    "use strict";
    angular.module("totvsExecution", ["duScroll", "totvsCheckbox", "totvsInput", "totvsSchedule", "totvsUtils"])
}(),
function () {
    "use strict";
    angular.module("totvsField", ["cfp.hotkeys", "ngMask"])
}(),
function () {
    "use strict";
    angular.module("totvsGantt", ["kendo.directives", "totvsUtilsKendo"])
}(),
function () {
    "use strict";
    angular.module("totvsGrid", ["cfp.hotkeys", "kendo.directives", "totvsUtilsKendo"])
}(),
function () {
    "use strict";
    angular.module("totvsGroupContent", [])
}(),
function () {
    "use strict";
    angular.module("totvsInput", ["ngMask", "totvsField", "totvsUtilsDirective"])
}(),
function () {
    "use strict";
    angular.module("totvsListItem", [])
}(),
function () {
    "use strict";
    angular.module("totvsListItemAction", [])
}(),
function () {
    "use strict";
    angular.module("totvsListItemContent", [])
}(),
function () {
    "use strict";
    angular.module("totvsListItemContentDetail", [])
}(),
function () {
    "use strict";
    angular.module("totvsListItemHeader", [])
}(),
function () {
    "use strict";
    angular.module("totvsListItemInfo", [])
}(),
function () {
    "use strict";
    angular.module("totvsListItemTitle", [])
}(),
function () {
    "use strict";
    angular.module("totvsListPagination", [])
}(),
function () {
    "use strict";
    angular.module("totvsListView", ["kendo.directives"])
}(),
function () {
    "use strict";
    angular.module("totvsMap", ["kendo.directives"])
}(),
function () {
    "use strict";
    angular.module("totvsMashupCaptcha", ["TOTVSMashup", "totvsUtils"])
}(),
function () {
    "use strict";
    angular.module("totvsMaskDate", [])
}(),
function () {
    "use strict";
    angular.module("totvsModalBody", [])
}(),
function () {
    "use strict";
    angular.module("totvsModalFooter", [])
}(),
function () {
    "use strict";
    angular.module("totvsModalHeader", [])
}(),
function () {
    "use strict";
    angular.module("totvsMultiSelect", ["kendo.directives"])
}(),
function () {
    "use strict";
    angular.module("totvsNumber", ["ngMask", "totvsField", "totvsUtils", "numbersOnly"])
}(),
function () {
    "use strict";
    angular.module("totvsOnRepeatFinish", [])
}(),
function () {
    "use strict";
    angular.module("totvsPage", ["cfp.hotkeys"])
}(),
function () {
    "use strict";
    angular.module("totvsPageAlert", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageBreadcrumb", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageChild", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageContent", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageContentHeader", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageDetail", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageDetailInfo", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageDetailInfoGroup", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageDisclaimers", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageForm", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageHeader", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageHeaderOperation", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageHeaderOperationAction", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageHeaderOperationFilter", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageHeaderTitle", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageNavbar", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageQuickFilter", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageQuickSelect", [])
}(),
function () {
    "use strict";
    angular.module("totvsPageTags", [])
}(),
function () {
    "use strict";
    angular.module("totvsPhone", ["ngMask", "totvsField"])
}(),
function () {
    "use strict";
    angular.module("totvsPivotGrid", ["kendo.directives", "totvsUtilsBrowser"])
}(),
function () {
    "use strict";
    angular.module("totvsQrcode", ["kendo.directives", "totvsUtilsDirective"])
}(),
function () {
    "use strict";
    angular.module("totvsRadio", ["totvsField", "totvsUtils"])
}(),
function () {
    "use strict";
    angular.module("totvsRow", [])
}(),
function () {
    "use strict";
    angular.module("totvsSchedule", ["notification", "ui.bootstrap", "totvsCheckbox", "totvsCombo", "totvsDatepicker", "totvsModalBody", "totvsModalHeader", "totvsModalFooter", "totvsRadio", "totvsTime", "TOTVSKendoCulture", "totvsUtils", "kendo.directives"])
}(),
function () {
    "use strict";
    angular.module("totvsScheduler", ["kendo.directives", "TOTVSKendoCulture"])
}(),
function () {
    "use strict";
    angular.module("totvsSelect", ["kendo.directives", "totvsField", "totvsUtils"])
}(),
function () {
    "use strict";
    angular.module("totvsTab", [])
}(),
function () {
    "use strict";
    angular.module("totvsTabContentTransclude", [])
}(),
function () {
    "use strict";
    angular.module("totvsTabDropdown", [])
}(),
function () {
    "use strict";
    angular.module("totvsTabDropdownItem", [])
}(),
function () {
    "use strict";
    angular.module("totvsTabHeadingTransclude", ["totvsTab"])
}(),
function () {
    "use strict";
    angular.module("totvsTable", ["totvsOnRepeatFinish"])
}(),
function () {
    "use strict";
    angular.module("totvsTabset", ["cfp.hotkeys"])
}(),
function () {
    "use strict";
    angular.module("totvsTime", ["totvsField", "totvsUtils"])
}(),
function () {
    "use strict";
    angular.module("totvsUpload", ["kendo.directives", "totvsField", "totvsUtils"])
}(),
function () {
    "use strict";
    angular.module("totvsWidget", [])
}(),
function () {
    "use strict";
    angular.module("totvsWidgetBody", [])
}(),
function () {
    "use strict";
    angular.module("totvsWidgetFooter", [])
}(),
function () {
    "use strict";
    angular.module("totvsWidgetFooterActions", [])
}(),
function () {
    "use strict";
    angular.module("totvsWidgetFooterBody", [])
}(),
function () {
    "use strict";
    angular.module("totvsWidgetHeader", [])
}(),
function () {
    "use strict";
    angular.module("zoom", ["i18nFilter", "totvsTable", "ui.bootstrap", "ng-nestable", "cfp.hotkeys", "totvsModalHeader", "totvsModalBody", "totvsModalFooter", "onKeyEnter", "ui.select", "ngSanitize", "field", "totvsUtils"])
}(),
function () {
    "use strict";

    function e() {
        var t = function () {
            var e;
            navigator.browserLanguage ? e = navigator.browserLanguage.substring(0, 2) : navigator.language && (e = navigator.language.substring(0, 2));
            return "es" === e || "en" === e ? e : "pt-BR"
        }();
        this.setCulture = function (e) {
            kendo.culture(e || t)
        }, this.$get = function () {
            return {
                getCulture: function () {
                    return kendo.culture().name
                }
            }
        }
    }
    angular.module("TOTVSKendoCulture").provider("TotvsKendoCulture", e), e.inject = []
}(),
function () {
    "use strict";

    function e() {
        function e() {
            var a, i, o, r;
            return a = {
                mode: (r = {
                    NORMAL: 0,
                    ROWSTATES: 1
                }).NORMAL,
                tables: {},
                hasPendingChanges: !(o = {
                    UNCHANGED: 0,
                    INSERTED: 1,
                    MODIFIED: 2,
                    DELETED: 3
                }),
                getModes: function () {
                    return r
                },
                getTable: function (e) {
                    return this.tables[e]
                },
                getTableByURL: function (e) {
                    var t = e.indexOf(":"),
                        n = -1 === t ? e : e.substring(0, t);
                    return this.getTable(n)
                },
                setTable: function (e, t) {
                    var n = i(e, t);
                    return this.tables[e] = n
                },
                removeTable: function (e) {
                    this.tables.hasOwnProperty(e) && delete this.tables[e]
                },
                shallowCopy: function (e) {
                    var t, n = {};
                    for (t in e) e.hasOwnProperty(t) && (null !== e[t] && e[t].constructor === Array || (n[t] = e[t]));
                    return n
                }
            }, i = function (e, t) {
                return {
                    name: e,
                    rows: t,
                    query: function (e, t) {
                        var n, a, i, o, r = [];
                        for (n in this.rows)
                            if (this.rows.hasOwnProperty(n) && (a = this.rows[n])) {
                                if (!t && this.isDeleted(a)) continue;
                                for (o in i = !0, e) e.hasOwnProperty(o) && a[o] && a[o] !== e[o] && (i = !1);
                                i && r.push(a)
                            }
                        return r
                    },
                    indexOf: function (e) {
                        var t, n, a, i;
                        for (t in this.rows)
                            if (this.rows.hasOwnProperty(t) && (n = this.rows[t]) && !this.isDeleted(n)) {
                                for (i in a = !0, e) e.hasOwnProperty(i) && n[i] && n[i] !== e[i] && (a = !1);
                                if (a) return t
                            }
                        return -1
                    },
                    find: function (e) {
                        var t;
                        if (-1 < (t = this.indexOf(e))) return jQuery.extend(!0, {}, this.rows[t])
                    },
                    add: function (e) {
                        var t = this.rows.length;
                        this.rows.push(e), a.mode === r.ROWSTATES && this.canSetAsInserted(this.rows[t]) && this.setRowState(this.rows[t], o.INSERTED)
                    },
                    update: function (e, t) {
                        var n = void 0 === e ? -1 : this.indexOf(e);
                        return -1 < n ? (this.rows[n] = t, a.mode === r.ROWSTATES && this.canSetAsModified(this.rows[n]) && this.setRowState(this.rows[n], o.MODIFIED)) : (n = this.rows.length, this.add(t)), n
                    },
                    remove: function (e) {
                        var t = this.indexOf(e);
                        return -1 < t && (a.mode === r.ROWSTATES && this.canSetAsDeleted(this.rows[t]) ? this.setRowState(this.rows[t], o.DELETED) : this.rows.splice(t, 1)), t
                    },
                    isDeleted: function (e) {
                        return a.mode === r.ROWSTATES && (e.$state && e.$state === o.DELETED)
                    },
                    setRowState: function (e, t) {
                        e.$state = t
                    },
                    resetRowState: function (e) {
                        e.$state = o.UNCHANGED
                    },
                    canSetAsInserted: function (e) {
                        var t = e.$state;
                        return !t || t !== o.MODIFIED && t !== o.DELETED
                    },
                    canSetAsModified: function (e) {
                        var t = e.$state;
                        return !t || t !== o.INSERTED && t !== o.DELETED
                    },
                    canSetAsDeleted: function (e) {
                        var t = e.$state;
                        return !t || t !== o.INSERTED
                    }
                }
            }, a
        }(this.$get = e).$inject = []
    }
    angular.module("TOTVSLocalDatabase").provider("$totvslocaldatabase", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        function e(e, t, n, c) {
            return this.services = {}, this.services.DATABASE = c, this.services.DATABASEMODE = c.getModes(), this.services.loadFromJSON = function (e, t, n) {
                var a = c.getTable(t);
                void 0 === a && (a = c.setTable(t, [])), e.forEach(function (t) {
                    var e = c.shallowCopy(t);
                    a.add(e), a.resetRowState(e), n && n.forEach(function (e) {
                        e(t)
                    })
                })
            }, this.services.saveToJSON = function (e, t, n) {
                var a, i = [];
                return i = void 0 === (a = c.getTable(e)) ? [] : jQuery.isEmptyObject(t) ? a.rows : a.query(t, !0), n && i.forEach(function (t) {
                    n.forEach(function (e) {
                        e(t)
                    })
                }), i
            }, this.services.initTable = function (e) {
                var t = c.getTable(e);
                return void 0 === t && (t = c.setTable(e, [])), t
            }, this.services.cleanTables = function (e) {
                e && e.constructor === Array && e.forEach(function (e) {
                    c.removeTable(e)
                })
            }, this.services.setDatabaseMode = function (e) {
                c.mode = e
            }, this.services.REST = function (r, e, t) {
                var l, s;
                return s = function (e) {
                    this.proc = e, this.init = function () {
                        this.deferred = n.defer(), this.$promise = this.deferred.promise, setTimeout(this.proc, 10)
                    }
                }, (l = {
                    url: r,
                    options: e,
                    actions: t
                }).TOTVSGet = function (n, e) {
                    var a = new s(function () {
                        var e, t;
                        (e = c.getTableByURL(r)) && (t = e.find(n)) ? a.deferred.resolve(t): a.deferred.reject()
                    });
                    return a.init(), l.processPromise(a, e)
                }, l.TOTVSQuery = function (i, e) {
                    var o = new s(function () {
                        var e, t, n, a;
                        if ((e = c.getTableByURL(r)) && e.rows) {
                            for (a in n = (t = e.query(i)).length, t = t.slice(i.start, i.start + i.limit)) t.hasOwnProperty(a) && (t[a].$length = n);
                            o.deferred.resolve(t)
                        } else o.deferred.reject()
                    });
                    return o.init(), l.processPromise(o, e)
                }, l.TOTVSPost = function (t, n, e) {
                    var a = new s(function () {
                        var e;
                        (e = c.getTableByURL(r)) && -1 < e.update(t, n) ? a.deferred.resolve(n) : a.deferred.reject()
                    });
                    return a.init(), l.processPromise(a, e)
                }, l.TOTVSSave = function (t, n, e) {
                    var a = new s(function () {
                        var e;
                        (e = c.getTableByURL(r)) && -1 < e.update(t, n) ? a.deferred.resolve(n) : a.deferred.reject()
                    });
                    return a.init(), l.processPromise(a, e)
                }, l.TOTVSUpdate = function (t, n, e) {
                    var a = new s(function () {
                        var e;
                        (e = c.getTableByURL(r)) && -1 < e.update(t, n) ? a.deferred.resolve(n) : a.deferred.reject()
                    });
                    return a.init(), l.processPromise(a, e)
                }, l.TOTVSRemove = function (n, e) {
                    var a = new s(function () {
                        var e, t;
                        (e = c.getTableByURL(r)) && -1 < (t = e.remove(n)) ? a.deferred.resolve(t) : a.deferred.reject()
                    });
                    return a.init(), l.processPromise(a, e)
                }, l.processPromise = function (e, t) {
                    return e.$promise.then(function (e) {
                        t(e)
                    }), e.$promise
                }, l
            }, this.services
        }(this.$get = e).$inject = ["$resource", "$http", "$q", "$totvslocaldatabase"]
    }
    angular.module("TOTVSLocalResource").provider("$totvslocalresource", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        var a = "";

        function e(e) {
            var t = e.REST(a + "/:method"),
                n = {
                    getGeneric: i,
                    queryGeneric: o,
                    getConsultaCNPJCaptcha: function (e) {
                        return i({
                            method: "getConsultaCNPJCaptcha"
                        }, e)
                    },
                    queryCNPJ: function (e, t, n, a) {
                        return o({
                            method: "getCNPJ",
                            CNPJ: e,
                            Codigo: t,
                            ServiceExecutionId: n
                        }, a)
                    },
                    getConsultaCPFCaptcha: function (e) {
                        return i({
                            method: "getConsultaCPFCaptcha"
                        }, e)
                    },
                    queryCPF: function (e, t, n, a, i) {
                        return o({
                            method: "getCPF",
                            CPF: e,
                            DataNasc: t,
                            Codigo: n,
                            ServiceExecutionId: a
                        }, i)
                    },
                    queryMunicipiosNFSE: function (e) {
                        return o({
                            method: "consultaMunicipiosNFSE"
                        }, e)
                    },
                    queryPesquisaCEP: function (e, t) {
                        return o({
                            method: "correiosPesquisaCEP",
                            CEP: e
                        }, t)
                    },
                    queryConversionCoinList: function (e) {
                        return o({
                            method: "getConversionCoinList"
                        }, e)
                    },
                    queryConversaoMoeda: function (e, t, n, a, i) {
                        return o({
                            method: "conversaoMoeda",
                            MoedaOrigem: e,
                            MoedaDestino: t,
                            Valor: n,
                            Data: a
                        }, i)
                    },
                    queryCBOList: function (e, t, n) {
                        return o({
                            method: "getCBOList",
                            Pesquisa: e,
                            Texto: t
                        }, n)
                    },
                    queryMotoristas: function (e, t, n, a, i) {
                        return o({
                            method: "getMotoristas",
                            CPF: e,
                            Prontuario: t,
                            CNPJ: n,
                            NomeMotorista: a
                        }, i)
                    },
                    queryIdiomas: function (e) {
                        return o({
                            method: "getIdiomas"
                        }, e)
                    },
                    queryGoogleTranslate: function (e, t, n, a) {
                        return o({
                            method: "googleTranslate",
                            Texto: e,
                            Origem: t,
                            Destino: n
                        }, a)
                    },
                    queryEstados: function (e) {
                        return o({
                            method: "getEstados"
                        }, e)
                    },
                    getSintegraParcial: function (e, t, n) {
                        return i({
                            method: "sintegraParcial",
                            CNPJ: e,
                            Estado: t
                        }, n)
                    },
                    getSintegraContinuacaoCaptcha: function (e, t, n) {
                        return i({
                            method: "sintegraContinuacaoCaptcha",
                            Codigo: e,
                            ServiceExecutionId: t
                        }, n)
                    },
                    querySintegraContinuacaoInscricao: function (e, t, n) {
                        return o({
                            method: "sintegraContinuacaoInscricao",
                            Inscricao: e,
                            ServiceExecutionId: t
                        }, n)
                    },
                    getSuframaCaptcha: function (e) {
                        return i({
                            method: "suframaGetCaptcha"
                        }, e)
                    },
                    getSuframaInscricoes: function (e, t, n, a) {
                        return i({
                            method: "suframaGetInscricoes",
                            ServiceExecutionId: e,
                            CNPJ: t,
                            Codigo: n
                        }, a)
                    },
                    querySuframaDados: function (e, t, n, a) {
                        return o({
                            method: "suframaGetDados",
                            ServiceExecutionId: e,
                            Codigo: t,
                            Inscricao: n
                        }, a)
                    }
                };
            return Object.setPrototypeOf(n, t), n;

            function i(e, t) {
                return n.TOTVSGet(e, t)
            }

            function o(e, t) {
                return n.TOTVSQuery(e, t)
            }
        }
        this.setRestMashup = function (e) {
            a = e
        }, (this.$get = e).$inject = ["$totvsresource"]
    }
    angular.module("TOTVSMashup").provider("TotvsMashup", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        var n = "";

        function e(l, s, e, t) {
            var c = e(n + "/:method", {}),
                d = t("totvs.profile.cache");
            return {
                remote: {
                    get: function (e, t, n) {
                        var a, i = l.currentuser.login,
                            o = i + ":~:" + e + ":~:" + t,
                            r = d.get(o);
                        if (r) {
                            for (a = 0; a < r.length; a++) try {
                                r[a].dataValue = angular.fromJson(r[a].dataValue)
                            } catch (e) {}
                            return n(r)
                        }
                        return c.query({
                            method: "getProfile",
                            userCode: i,
                            pageId: e,
                            dataCode: t
                        }, {}, function (e) {
                            if (e) {
                                var t;
                                for (t = 0; t < e.length; t++) try {
                                    e[t].dataValue = angular.fromJson(e[t].dataValue)
                                } catch (e) {}
                                d.put(o, e)
                            }
                            n(e)
                        }, {})
                    },
                    set: function (e, t, n) {
                        var a, i, o, r = l.currentuser.login;
                        for (t = t || [], angular.isArray(t) || (t = [t]), a = r + ":~:" + e + ":~:" + t[0].dataCode, (i = t)[0].pageId = e, d.put(a, i), o = 0; o < t.length; o++) t[o].dataValue = angular.toJson(t[o].dataValue);
                        return c.save({
                            method: "setProfile",
                            userCode: r,
                            pageId: e
                        }, t, function (e) {
                            n && n(e)
                        })
                    },
                    remove: function (e, t, n) {
                        var a = l.currentuser.login;
                        return c.save({
                            method: "removeProfile",
                            userCode: a,
                            pageId: e,
                            dataCode: t
                        }, {}, function (e) {
                            n && n(e)
                        })
                    },
                    clearCache: function (e, t) {
                        var n = l.currentuser.login + ":~:" + e + ":~:" + t;
                        d.remove(n)
                    }
                },
                local: {
                    get: function (e, t, n) {
                        if (s.localStorage) {
                            var a, i, o, r, l = [];
                            if (t) l.push(s.localStorage.getItem(e + ":~:" + t));
                            else if (!t)
                                for (i = s.localStorage.length, a = 0; a < i; a++) null !== (o = s.localStorage.key(a)) && -1 !== o.indexOf(e) && (r = o.indexOf(":~:"), t = o.substring(r + 3, o.length), l.push({
                                    pageId: e,
                                    dataCode: t,
                                    dataValue: angular.fromJson(s.localStorage.getItem(o))
                                }));
                            n && n(l)
                        }
                    },
                    set: function (e, t, n) {
                        var a, i;
                        if (s.localStorage) {
                            for (t = t || [], angular.isArray(t) || (t = [t]), i = t.length, a = 0; a < i; a++) s.localStorage.setItem(e + ":~:" + t[a].dataCode, angular.toJson(t[a].dataValue));
                            n && n()
                        }
                    },
                    remove: function (e, t, n) {
                        var a, i, o, r = [];
                        if (s.localStorage) {
                            if (t) s.localStorage.removeItem(e + ":~:" + t);
                            else
                                for (i = (r = function () {
                                        var e, t = s.localStorage.length,
                                            n = [];
                                        for (e = 0; e < t; e++) null !== s.localStorage.key(e) && n.push(s.localStorage.key(e));
                                        return n
                                    }()).length, a = 0; a < i; a++) - 1 !== r[a].indexOf(e) && (o = r[a].indexOf(":~:"), t = r[a].substring(o + 3, r[a].length), s.localStorage.removeItem(e + ":~:" + t));
                            n && n()
                        }
                    }
                },
                actions: {
                    effective: function (e, t) {
                        var n, a, i;
                        for (e = e || [], angular.isArray(e) || (e = [e]), a = e.length, n = 0; n < a; n++)
                            if ((i = $('field[id^="' + e[n].dataCode.fieldId + '"]')) && e[n].dataCode.totvsAction) switch (e[n].dataCode.totvsAction) {
                                case "enableField":
                                    o(i, e[n].dataValue);
                                    break;
                                case "applyMaxLength":
                                    i.find("input").attr("maxlength", e[n].dataValue)
                            }

                        function o(e, t) {
                            !1 === t ? (e.attr("disabled", !0), e.find("button").attr("disabled", !0), e.find("input").attr("disabled", !0)) : !0 === t && (e.removeAttr("disabled"), e.find("button").removeAttr("disabled"), e.find("input").removeAttr("disabled"))
                        }
                        t && t()
                    }
                }
            }
        }
        this.setRestProfile = function (e) {
            n = e
        }, (this.$get = e).$inject = ["$rootScope", "$window", "$resource", "$cacheFactory"]
    }
    angular.module("TOTVSProfile").provider("$totvsprofile", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        function e(a, i) {
            return {
                REST: function (e, t, n) {
                    var o;
                    angular.isUndefined(n) && (n = {});
                    return n.update = {
                        method: "PUT",
                        isArray: !1
                    }, n.post = {
                        method: "POST",
                        isArray: !1
                    }, n.getWithCache = {
                        method: "GET",
                        isArray: !1,
                        cache: !0
                    }, n.queryWithCache = {
                        method: "GET",
                        isArray: !0,
                        cache: !0
                    }, (o = a(e, t, n)).TOTVSGet = function (e, t, n, a) {
                        var i;
                        return o.parseHeaders(n), i = a ? this.getWithCache(e) : this.get(e), o.processPromise(i, t)
                    }, o.TOTVSQuery = function (e, t, n, a) {
                        var i;
                        return o.parseHeaders(n), i = a ? this.queryWithCache(e) : this.query(e), o.processPromise(i, t)
                    }, o.TOTVSPost = function (e, t, n, a) {
                        var i;
                        return o.parseHeaders(a), i = this.post(e, t), o.processPromise(i, n)
                    }, o.TOTVSSave = function (e, t, n, a) {
                        var i;
                        return o.parseHeaders(a), i = this.save(e, t), o.processPromise(i, n)
                    }, o.TOTVSUpdate = function (e, t, n, a) {
                        var i;
                        return o.parseHeaders(a), i = this.update(e, t), o.processPromise(i, n)
                    }, o.TOTVSRemove = function (e, t, n) {
                        var a;
                        return o.parseHeaders(n), a = this.remove(e), o.processPromise(a, t)
                    }, o.processPromise = function (e, t) {
                        return o.parseHeaders(), t && e.$promise.then(function (e) {
                            t && (e && e.hasOwnProperty("data") && e.hasOwnProperty("length") && e.hasOwnProperty("messages") ? t(e.data) : t(e))
                        }, function (e) {
                            t && t(void 0, e)
                        }), e.$promise
                    }, o.parseHeaders = function (e) {
                        e ? (i.defaults.headers.common.noCount = e.noCount, i.defaults.headers.common.noCountRequest = e.noCountRequest, i.defaults.headers.common.noErrorMessage = e.noErrorMessage) : (i.defaults.headers.common.noCount = void 0, i.defaults.headers.common.noCountRequest = void 0, i.defaults.headers.common.noErrorMessage = void 0)
                    }, o
                }
            }
        }(this.$get = e).$inject = ["$resource", "$http"]
    }
    angular.module("TOTVSResource").provider("$totvsresource", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(e) {
        e.defaults.transformResponse.push(function (e, t, n) {
            var a = e;
            o = e, r = t, null !== r("content-type") && 0 <= r("content-type").indexOf("application/json") && angular.isObject(o) && !angular.isArray(o) && (400 <= n && n <= 599 ? a = function (e) {
                var t;
                e.hasOwnProperty("code") && e.hasOwnProperty("message") ? (t = {
                    messages: [{
                        type: "error",
                        code: e.code,
                        detail: e.message
                    }]
                }, e.hasOwnProperty("details") && angular.forEach(e.details, function (e) {
                    this.push({
                        type: "error",
                        code: e.code,
                        detail: e.message
                    })
                }, t.messages)) : t = e;
                return t
            }(e) : (i = e).hasOwnProperty("data") && i.hasOwnProperty("length") && i.hasOwnProperty("messages") || (a = e.hasOwnProperty("items") ? function (e) {
                var t = {
                    data: angular.copy(e.items)
                };
                e.hasOwnProperty("totvs_length") ? t.length = e.totvs_length : (t.length = e.items.length, e.hasOwnProperty("hasNext") && e.hasNext && t.length++);
                return t
            }(e) : function (e) {
                var t = {
                    data: angular.copy(e)
                };
                e.hasOwnProperty("totvs_messages") && delete t.data.totvs_messages;
                e.hasOwnProperty("totvs_length") ? (t.length = e.totvs_length, delete t.data.totvs_length) : t.length = 1;
                return t
            }(e), e.hasOwnProperty("totvs_messages") ? a.messages = e.totvs_messages : a.messages = []));
            var i;
            var o, r;
            return a
        })
    }
    angular.module("totvsApiConfig").run(e), e.$inject = ["$http"]
}(),
function () {
    "use strict";

    function e(e, s) {
        e.defaults.transformResponse.push(function (e, t) {
            var n, a, i, o = [];
            if (r = e, l = t, null === l("content-type") || l("content-type").indexOf("application/json") < 0 || !r) return e;
            var r, l;
            if (a = angular.fromJson(e), i = !1, a.hasOwnProperty("messages") && 0 < a.messages.length)
                if (i = function (e) {
                        var t;
                        for (t = 0; t < e.messages.length; t++)
                            if ("error" === e.messages[t].type) return !0;
                        return !1
                    }(a)) s.businessMessage(a.messages);
                else {
                    for (n = 0; n < a.messages.length; n++) o.push({
                        type: a.messages[n].type,
                        title: a.messages[n].code,
                        detail: a.messages[n].detail
                    });
                    s.notify(o)
                }
            if (a.hasOwnProperty("data") && a.hasOwnProperty("length") && a.hasOwnProperty("messages")) return a.data instanceof Array ? function (e, t) {
                if (0 < e.length && e.data[0]) e.data[0].$length = e.length, e.data[0].$messages = e.messages;
                else if (0 === e.length && 0 === e.data.length) return e = void 0;
                t && e.data[0] && (e.data[0].$hasError = !0)
            }(a, i) : function (e, t) {
                t && (e.data || null === e.data) && (null === e.data && (e.data = {}), e.data.$hasError = !0);
                e.data && (e.data.$messages = e.messages)
            }(a, i), a.data;
            return a
        })
    }
    angular.module("totvsHttpConfig").run(e), e.$inject = ["$http", "totvs.app-notification.Service"]
}(),
function () {
    "use strict";

    function e(e) {
        e.setCulture()
    }
    angular.module("totvsKendoCultureConfig").config(e), e.$inject = ["TotvsKendoCultureProvider"]
}(),
function () {
    "use strict";

    function e(a, i, o) {
        var e = {
            request: function (n) {
                n.url = n.url.replace(/%2F/gi, "/"), a.isFluig && (n.headers.tenantId = a.tenantId);
                a.hasOwnProperty("currentcontext") && a.currentcontext.hasOwnProperty("headers") && angular.forEach(a.currentcontext.headers, function (e, t) {
                    n.headers[t] = e
                });
                "true" !== l("noCountRequest", n.headers, n.params) && a.pendingRequests++;
                return n || i.when(n)
            },
            requestError: function (e) {
                return n(e)
            },
            response: function (e) {
                var t;
                if ("application/json" === e.headers("content-type") && null === angular.fromJson(e)) return n(e);
                if ("string" == typeof e.data && (0 < e.data.indexOf('<body class="login"') || 0 < e.data.indexOf('<div id="login-container"></div>') && 0 < e.data.indexOf("function doLogin() {"))) return e.status = 419, "undefined" == typeof WCMAPI || a.fluiglogin || (t = e.config.url.split("/"), a.fluiglogin = window.open("/" + t[1] + "/" + t[2] + "/fluig/login.html", "Login do ERP", "width=650, height=550, top=100, left=100, location=no")), n(e);
                "true" !== l("noCountRequest", e.config.headers, e.config.params) && a.pendingRequests--;
                return e
            },
            responseError: function (e) {
                return n(e)
            }
        };
        return a.pendingRequests = 0, a.errorConnServer = !1, e;

        function r(e) {
            var t;
            return e.data && e.data.detail && (t = e.data.data && e.data.data.detail ? e.data.data.detail : e.data.detail), t || (t = e.data), {
                title: void 0,
                text: e.statusText,
                help: t,
                callback: e.callback
            }
        }

        function n(e) {
            var t = l("noCountRequest", e.config.headers, e.config.params),
                n = l("noErrorMessage", e.config.headers, e.config.params);
            return "true" !== t && a.pendingRequests--, 401 === e.status || 419 === e.status ? (e.callback = function () {
                location.reload()
            }, e.data = "Sua sessão expirou, você deverá fazer o login novamente", e.statusText = void 0, a.$broadcast(o.showMessage, r(e)), i.reject(e)) : 0 === e.status ? (a.errorConnServer || (console.error("A conexão com o sistema foi perdida. Verifique se o servidor de aplicação está em execução e operando corretamente."), a.errorConnServer = !0), i.reject(e)) : ("true" !== n && a.$broadcast(o.showMessage, r(e)), 401 !== e.status && 419 !== e.status ? i.reject(e) : void 0)
        }

        function l(e, t, n) {
            var a;
            return (a = (t = t || {})[e] ? t[e].toString() : void 0) || (a = (n = n || {})[e] ? n[e].toString() : void 0), a
        }
    }
    angular.module("totvsHttpInterceptor").factory("totvsHttpInterceptor", e), e.$inject = ["$rootScope", "$q", "TOTVSEvent"]
}(),
function () {
    "use strict";

    function e(o, i, r, l) {
        return {
            receiveEvent: function (e, t, n, a) {
                if (e && t && e[t]) return e[t](n, a);
                return "ok"
            },
            callEvent: s,
            callCustomEvent: function (e, t, n) {
                var a = l.path().split("/");
                return s(a[1] + "." + a[2] + "." + a[3], e, t, n)
            },
            compileHTML: function (e, t) {
                var n = r.$new(!0),
                    a = angular.element(t);
                return angular.extend(n, e), i(a)(n)
            }
        };

        function s(e, t, n, a) {
            if (o.has("custom." + e)) try {
                var i = o.get("custom." + e);
                if (i) return i.receiveEvent(i, t, n, a)
            } catch (e) {}
        }
    }
    angular.module("totvsCustom").factory("customization.generic.Factory", e), e.$inject = ["$injector", "$compile", "$rootScope", "$location"]
}(),
function () {
    "use strict";

    function e(l, s) {
        return {
            restrict: "A",
            link: function (e, t, n) {
                var a = {},
                    i = n.totvsCustomService,
                    o = n.totvsCustomElement || "customElement",
                    r = [];
                (function e(n, t) {
                    var a = 0;
                    angular.forEach(t, function (e, t) {
                        "$" !== t.charAt(0) && "this" !== t && (n[t] = e, a++)
                    }), 0 === a && t.$parent && e(n, t.$parent)
                })(a, e), i || (r = s.path().split("/"), i = r[1] + "." + r[2] + "." + r[3]);
                l.callEvent(i, o, a, t)
            }
        }
    }
    angular.module("totvsCustom").directive("totvsCustomElement", e), e.$inject = ["customization.generic.Factory", "$location"]
}(),
function () {
    "use strict";
    angular.module("notification").constant("TOTVSEvent", {
        updateViewsScope: "event:root-scope-update.app.views",
        showNotification: "event:scope-notify.app.service",
        showMessage: "event:scope-message.app.service",
        showBusinessMessage: "event:scope-businessmessage.app.service",
        showQuestion: "event:scope-question.app.service",
        currentuserLoaded: "event:rootscope-currentuser-loaded",
        currentcompanyLoaded: "event:rootscope-currentcompany-loaded",
        currentTenantLoaded: "event:rootscope-currenttenant-loaded",
        rootScopeInitialize: "event:rootscope-currentuser-loaded"
    })
}(),
function () {
    "use strict";
    angular.module("notification").constant("notificationConstant", {
        templateMessage: '<div ng-controller="totvs.app-modal-notification.Control"><div class="modal-header"><h3 class="modal-title">{{ title | i18n }}</h3></div><div class="modal-body"><p ng-bind-html="text"></p><div class="row-fluid" ng-show="!questionForm" ng-hide="help === undefined"><a class="clickable" ng-click="changeShowDetails();">{{ "l-show-details" | i18n }}</a><div class="well message-details" ng-show="showDetails"><div class="row-fluid"><p ng-bind-html="help"></p></div></div></div></div><div class="modal-footer"><button class="btn btn-default" ng-click="cancel()" ng-show="questionForm">{{ cancelLabel | i18n }}</button><button class="btn btn-primary" ng-click="ok()" ng-show="!questionForm">{{ "btn-close" | i18n }}</button><button class="btn btn-primary" ng-click="confirm()" ng-show="questionForm">{{ confirmLabel | i18n }}</button></div></div>',
        templateMessageArray: '<div ng-controller="totvs.app-modal-notification.Control"><div class="modal-header"><h3 class="modal-title">{{ title | i18n }}</h3></div><div class="modal-body"><alert ng-repeat="m in messages" type="{{getMsgType(m.type)}}"><div class="row"><div class="col-sm-1 col-xs-6 glyphicon text-left" style="font-size: 40px; padding-bottom: 10px;" ng-class="{\'glyphicon-warning-sign\': m.type === \'warning\', \'glyphicon-info-sign\': m.type === \'info\', \'glyphicon-exclamation-sign\': m.type === \'error\'}" aria-hidden="true"></div><div class="col-sm-1 col-xs-6 text-right code-msg" ng-bind="m.code"></div><div class="col-sm-10 col-xs-12 text-justify" ng-bind-html="m.detail"></div></div></alert></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()" data-ng-show="!questionForm">{{ "btn-close" | i18n }}</button></div></div>'
    })
}(),
function () {
    "use strict";

    function e(r, l, i, s) {
        this.notify = function (e) {
            var t, n, a = 8e3;
            if (e instanceof Array)
                for (n = 0; n < e.length; n++) "warning" === (t = e[n].type ? e[n].type.toLowerCase() : "info") && (a = 0), i.pop(t, e[n].title, e[n].detail, a, "trustedHtml");
            else "warning" === (t = e.type ? e.type.toLowerCase() : "info") && (a = 0), i.pop(t, e.title, e.detail, a, "trustedHtml")
        }, this.message = function (e) {
            var t = r.appRootContext;
            void 0 === t && (t = "/" + window.location.pathname.split("/")[1] + "/");
            void 0 === e.title && (e.title = "l-internal-error");
            e.help && (e.help = e.help.replace(/(?:\r\n|\r|\n|\\r\\n|\\r|\\n)/g, "<br>"));
            void 0 === e.text && (e.text = e.help, e.help = void 0);

            function n(e, t, n) {
                e.text = n.text, e.title = n.title, e.help = n.help, e.questionForm = !1, e.showDetails = !1, e.ok = function () {
                    t.close(), n.callback && n.callback()
                }, e.changeShowDetails = function () {
                    e.showDetails = !e.showDetails
                }
            }
            e.size = /(lg|md|sm)/.exec(e.size) ? e.size : "lg", l.open({
                template: s.templateMessage,
                controller: n,
                size: e.size,
                resolve: {
                    messageObject: function () {
                        return e
                    }
                }
            }), n.$inject = ["$scope", "$modalInstance", "messageObject"]
        }, this.businessMessage = function (e, t) {
            var n, a = {},
                i = r.appRootContext;
            void 0 === i && (i = "/" + window.location.pathname.split("/")[1] + "/");
            for (t = t || {}, a.title = "l-bussiness-error", a.size = /(lg|md|sm)/.exec(t.size) ? t.size : "lg", n = 0; n < e.length; n++) e[n].detail = e[n].detail.replace(/(?:\r\n|\r|\n|\\r\\n|\\r|\\n)/g, "<br>");

            function o(e, t, n) {
                e.messages = n.messages, e.title = n.title, e.help = n.help, e.questionForm = !1, e.showDetails = !1, e.changeShowDetails = function () {
                    e.showDetails = !e.showDetails
                }, e.getMsgType = function (e) {
                    if ("error" === e) return "danger";
                    if ("warning" === e) return "warning";
                    if ("info" === e) return "success";
                    return "info"
                }, e.ok = function () {
                    t.close()
                }
            }
            a.messages = e, l.open({
                template: s.templateMessageArray,
                controller: o,
                size: a.size,
                resolve: {
                    messageObject: function () {
                        return a
                    }
                }
            }), o.$inject = ["$scope", "$modalInstance", "messageObject"]
        }, this.question = function (t) {
            var e = r.appRootContext;
            void 0 === e && (e = "/" + window.location.pathname.split("/")[1] + "/");

            function n(e, t, n) {
                e.questionForm = !0, e.title = n.title, e.text = n.text, e.cancel = function () {
                    t.close("cancel")
                }, e.confirm = function () {
                    t.close("confirm")
                }, n.cancelLabel ? e.cancelLabel = n.cancelLabel : e.cancelLabel = "btn-cancel", n.confirmLabel ? e.confirmLabel = n.confirmLabel : e.confirmLabel = "btn-ok"
            }
            t.size = /(lg|md|sm)/.exec(t.size) ? t.size : "lg", n.$inject = ["$scope", "$modalInstance", "questionObject"], l.open({
                template: s.templateMessage,
                controller: n,
                size: t.size,
                resolve: {
                    questionObject: function () {
                        return t
                    }
                }
            }).result.then(function (e) {
                t.callback && t.callback("confirm" === e)
            })
        }
    }
    angular.module("notification").service("totvs.app-notification.Service", e), e.$inject = ["$rootScope", "$modal", "toaster", "notificationConstant"]
}(),
function () {
    "use strict";

    function e() {
        this.getBrowserDialect = function () {
            var e;
            navigator.browserLanguage ? e = navigator.browserLanguage.substring(0, 2) : navigator.language && (e = navigator.language.substring(0, 2));
            return "pt" !== e && "es" !== e && "en" !== e ? "pt" : e
        }
    }
    angular.module("totvsUtilsBrowser").service("totvs.utils.browser.service", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        this.removeAttributesFromElement = function (t, n, e) {
            e.forEach(function (e) {
                t.removeAttr(n.$attr[e])
            })
        }, this.scopeToArray = function (e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && n.indexOf("$") < 0 && t.push(n);
            return t
        }
    }
    angular.module("totvsUtilsDirective").service("totvsUtilsDirectiveService", e), e.inject = []
}(),
function () {
    "use strict";

    function e(t) {
        this.getPaperSize = function (e) {
            if (e && "string" == typeof e) {
                return /(?:^)(auto|Executive|Folio|Legal|Letter|Tabloid|([a-d][0-9]|[a-d]10))(?:$)/i.test(e) ? e : "A4"
            }
            if (e && e.constructor === Array && 2 === e.length) return isNaN(e[0]) || isNaN(e[1]) ? "A4" : [e[0] + "mm", e[1] + "mm"];
            return "A4"
        }, this.getMargin = function (e) {
            var t = {
                large: {
                    top: "25.4mm",
                    right: "50.8mm",
                    bottom: "25.4mm",
                    left: "50.8mm"
                },
                normal: {
                    top: "25mm",
                    right: "30mm",
                    bottom: "25mm",
                    left: "30mm"
                },
                thin: {
                    top: "12.7mm",
                    right: "12.7mm",
                    bottom: "12.7mm",
                    left: "12.7mm"
                }
            };
            if (e && "string" == typeof e) {
                return /(?:^)(large|normal|thin)(?:$)/i.test(e) ? t[e] : t.normal
            }
            if (e && e.constructor === Array && 4 === e.length) return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? t.normal : {
                top: e[0] + "mm",
                right: e[1] + "mm",
                bottom: e[2] + "mm",
                left: e[3] + "mm"
            };
            return t.normal
        }, this.getKendoDateFormat = function (e) {
            t.DATETIME_FORMATS.hasOwnProperty(e) && (e = t.DATETIME_FORMATS[e]);
            return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/\bEEEE\b/g, "dddd")).replace(/\bEEE\b/g, "ddd")).replace(/\bsss\b/g, "fff")).replace(/\ba\b/g, "tt")).replace(/\by\b/g, "yyyy")).replace(/\bLLLL\b/g, "MMMM")).replace(/\bZ\b/g, "")).replace(/\bww\b/g, "")).replace(/\bG\b/g, "")).replace(/\bGG\b/g, "")).replace(/\bGGG\b/g, "")).replace(/\bGGGG\b/g, "")
        }
    }
    angular.module("totvsUtilsKendo").service("TotvsUtilsKendoService", e), e.$inject = ["$locale"]
}(),
function () {
    "use strict";

    function e(i) {
        this.focusOn = function (e) {
            var t, n;
            e = 0 === e.indexOf("#") ? e : "#" + e, t = $(e), "daterange" === (n = t.attr("type")) || "decimalrange" === n || "inputrange" === n ? t.find("input")[0].focus() : "textarea" === n ? t.find("textarea").focus() : "combo" === n ? t.find("select").focus() : t.find("input").focus()
        }, this.isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i)
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i)
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)
            },
            any: function () {
                return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows()
            }
        }, this.getBrowser = function () {
            var e, t = navigator.userAgent,
                n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(n[1])) return {
                name: "IE",
                version: (e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || ""
            };
            if ("Chrome" === n[1] && null !== (e = t.match(/\bOPR|Edge\/(\d+)/))) return {
                name: "Opera",
                version: e[1]
            };
            n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], null !== (e = t.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]);
            return {
                name: n[0],
                version: n[1]
            }
        }, this.configI18n = function (e) {
            var t = i.getBrowserDialect(),
                n = {};
            for (var a in e) e.hasOwnProperty(a) && (n[a] = e[a][t]);
            return n
        }
    }
    angular.module("totvsUtils").service("totvs.utils.Service", e), e.$inject = ["totvs.utils.browser.service"]
}(),
function () {
    "use strict";

    function e() {}
    angular.module("notification").controller("totvs.app-modal-notification.Control", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        var t = "/";
        this.setBaseContext = function (e) {
            t = e
        }, this.$get = function () {
            return {
                getBaseContext: function () {
                    return t || "/"
                }
            }
        }
    }
    angular.module("i18nFilter").provider("TotvsI18n", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(u, p, f, g) {
        var o = [];
        return function (e, t, n) {
            var a, i, o, r, l = 0,
                s = "",
                c = p.url(),
                d = u.appRootContext || g.getBaseContext();
            r = "/" !== c && 2 < c.length && "/loading" !== c && 2 < c.split("/").length ? "/" + c.split("/")[1] + "/" + c.split("/")[2] + "/" : d;
            i = u.currentuser && u.currentuser.dialect ? u.currentuser.dialect.toLowerCase().substr(0, 2) : f.getBrowserDialect();
            u.currentuser && (u.currentuser.dialect = i);
            n && 0 < n.length && (n = g.getBaseContext() + n + "/");
            (o = m(n || r, d)) && o[e] || d === r || (o = m(d));
            o && e && 0 < e.length && (s = o[e] && o[e][i] || e);
            t ? angular.isArray(t) || (t = [t]) : t = [];
            for (a = t.length, l = 0; l < a; l += 1) s = s.replace("{" + l + "}", t[l]);
            return s
        };

        function m(t, e) {
            var n, a, i;
            for (i = o.length, a = 0; a < i; a += 1)
                if (o[a][0] === t) {
                    n = o[a][1];
                    break
                }
            return n || $.ajax(t + "i18n/translations.js", {
                type: "GET",
                async: !1,
                noErrorMessage: !0
            }).done(function (e) {
                n = angular.fromJson(e)[0], o.push([t, n])
            }).fail(function () {
                e && (n = m(e), o.push([t, n]))
            }), n
        }
    }
    angular.module("i18nFilter").filter("i18n", e), e.$inject = ["$rootScope", "$location", "totvs.utils.browser.service", "TotvsI18n"]
}(),
function () {
    "use strict";

    function e() {
        return function (e, t) {
            return angular.isString(e) ? function (e, t) {
                var n, a, i, o = "",
                    r = 0;
                for (n = 0; n < t.length; n++)
                    if ("9" === (a = t.charAt(n)) || "A" === a || "*" === a) {
                        if (i = e.charAt(r++), "9" === a)
                            for (; !/[0-9]/.test(i);) {
                                if (r >= e.length) return o;
                                i = e.charAt(r++)
                            }
                        if (o += i, r >= e.length) return o
                    } else o += a;
                return o
            }(e, t) : e
        }
    }
    angular.module("maskFilter").filter("mask", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return function (e) {
            if (!e) return e;
            return e.substring(0, 10)
        }
    }
    angular.module("progressDateFilter").filter("progressDate", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(e) {
        e.useNgRoute = !1
    }
    angular.module("field").config(e), e.$inject = ["hotkeysProvider"]
}(),
function () {
    "use strict";

    function e(e) {
        e.useNgRoute = !1
    }
    angular.module("totvsField").config(e), e.$inject = ["hotkeysProvider"]
}(),
function () {
    "use strict";

    function e(e) {
        e.useNgRoute = !1
    }
    angular.module("totvsTabset").config(e), e.$inject = ["hotkeysProvider"]
}(),
function () {
    "use strict";

    function e(e) {
        e.useNgRoute = !1
    }
    angular.module("zoom").config(e), e.$inject = ["hotkeysProvider"]
}(),
function () {
    "use strict";
    var e;
    e = {
        pt: {
            yes: "Sim",
            no: "Não"
        },
        en: {
            yes: "Yes",
            no: "No"
        },
        es: {
            yes: "Sí",
            no: "No"
        }
    }, angular.module("bsswitch").constant("bsswitchConstant", e)
}(),
function () {
    "use strict";
    angular.module("field").constant("fieldConstant", {
        checkbox: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group">\x3c!--label class="checkbox-inline"--\x3e<input class="form-control" bind type="checkbox">\x3c!--/label--\x3e</div><div class="tooltip bottom" ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        combo: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group"><select class="form-control" bind ng-options="o.id as o.text for o in $options"></select></div><div class="tooltip bottom" ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        date: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group no-block date" bind date-picker  data-date-format="dd/mm/yyyy" data-date-language="pt-BR"><input class="form-control" type="text" maxlength="10"><span class="input-group-btn"><button class="btn btn-default" role="button" type="button"><span class="glyphicon glyphicon-calendar"></span></button></span>\x3c!--span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span--\x3e</div><div class="tooltip bottom" ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        daterange: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-daterange input-group no-block date" date-picker-range bind><input type="text" class="form-control" name="start"  data-date-format="dd/mm/yyyy" data-date-language="pt-BR" maxlength="10"/><span class="input-group-addon">{{ "l-to" | i18n }}</span><input type="text" class="form-control" name="end" data-date-format="dd/mm/yyyy"  data-date-language="pt-BR" maxlength="10"/><span class="input-group-btn"><button class="btn btn-default disabled" role="button" type="button"><span class="glyphicon glyphicon-calendar"></span></button></span></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        decimal: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group"><input class="form-control" bind type="text" autonumeric data-a-dec=","  data-a-sep="." ng-model-options="{ debounce: 100 }"></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        decimalrange: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group no-block col-md-12" decimal-range bind><input class="form-control" type="text" name="start" ng-model="start"  autonumeric data-a-dec="," data-a-sep="."/><span class="input-group-addon">{{ "l-to" | i18n }}</span><input class="form-control" type="text" name="end" ng-model="end"  autonumeric data-a-dec="," data-a-sep="."/></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        email: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group"><input class="form-control" bind type="email"></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        input: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group"><input class="form-control" bind type="text"></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        inputrange: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group no-block col-md-12" input-range bind><input type="text" class="form-control" name="start"/><span class="input-group-addon">{{ "l-to" | i18n }}</span><input type="text" class="form-control" name="end"/></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        number: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group"><input class="form-control" bind type="number"></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        password: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group"><input class="form-control" bind type="password"></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        radio: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group"><div ng-repeat="o in $options"><div class="radio"><label><input type="radio" bind value="{{o.id}}">{{o.text}}</label></div></div></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        select: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group"><ui-select bind theme="bootstrap" include style="display : flex;"></ui-select></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        select2: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group"><ui-select theme="bootstrap" style="display: flex;" ng-model="selectModel" ng-init="initSelectComponent($select);" on-select="updateSelectModel($item, $model)"><ui-select-match placeholder="{{selectPlaceholder}}">{{ getDescription($select.selected) }}</ui-select-match><ui-select-choices repeat="item in selectList | filter: $select.search track by $index" refresh="refreshSelectList($select.search)" refresh-delay="{{selectRefreshDelay}}"><span data-ng-bind-html="getDescription(item) | highlight: $select.search.toString()"></span></ui-select-choices></ui-select></div><div class="tooltip bottom" ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        textarea: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group" style="min-height: 100px;"><textarea class="form-control" bind rows="3"></textarea></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        time: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group no-block bootstrap-timepicker"><input bind type="text" class="form-control" time-picker  data-minute-step="5" data-show-meridian="false"><span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        typeahead: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group"><input class="form-control" bind type="text" typeahead-loading="loading"><span ng-show="loading" class="input-group-addon"><i class="glyphicon glyphicon-refresh"></i></span></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        url: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group"><input class="form-control" bind type="url"></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>',
        workflow: '<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group no-block"><input class="form-control" bind type="text"></div><div class="tooltip bottom"  ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}"><div class="tooltip-inner"><div class="help-inline" ng-repeat="error in $fieldErrors">{{ $validationMessages[error](this) }}</div></div><div class="tooltip-arrow"></div></div></div></div>'
    })
}(),
function () {
    "use strict";
    angular.module("totvsDateRange").constant("totvsDateRangeConstant", {
        initialDate: {
            pt: "Data inicial",
            en: "Initial date",
            es: "Fecha inicial"
        },
        finalDate: {
            pt: "Data final",
            en: "Final Date",
            es: "Fecha final"
        },
        to: {
            pt: "até",
            en: "to",
            es: "al"
        }
    })
}(),
function () {
    "use strict";
    var e;
    e = {
        CONNECTIONS: {
            style: "cascading",
            stroke: {
                color: "#586477",
                width: 1
            }
        },
        LAYOUT: {
            type: "tree",
            subtype: "down",
            horizontalSeparation: 30,
            verticalSeparation: 20
        },
        SHAPES: {
            types: {
                RECT: "rect",
                SQUARE: "square",
                CIRCLE: "circle"
            },
            rectShape: {
                width: 345,
                height: 76,
                stroke: {
                    width: 2,
                    color: "#586477"
                },
                fill: "#e8eff7"
            },
            squareShape: {
                width: 76,
                height: 76,
                stroke: {
                    width: 2,
                    color: "#586477"
                },
                fill: "#e8eff7"
            },
            circleShape: {
                type: "circle",
                radius: 60,
                stroke: {
                    width: 2,
                    color: "#586477"
                },
                fill: "#e8eff7"
            }
        }
    }, angular.module("totvsDiagram").constant("totvsDiagramConstant", e)
}(),
function () {
    "use strict";
    var e, t;
    e = {
        TOOL_GROUPS: t = {
            defaultTools: ["formatting", "bold", "italic", "underline", "justifyLeft", "justifyCenter", "justifyRight", "insertUnorderedList", "insertOrderedList", "indent", "createLink", "insertImage", "createTable", "addColumnLeft", "addColumnRight", "addRowAbove", "addRowBelow", "deleteRow", "deleteColumn"],
            basicTextFormatting: ["bold", "italic", "underline", "strikethrough", "subscript", "superscript"],
            fontAndColor: ["fontName", "fontSize", "foreColor", "backColor"],
            alignment: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
            lists: ["insertUnorderedList", "insertOrderedList", "indent", "outdent"],
            links: ["createLink", "unlink"],
            imagesAndFiles: ["insertImage", "insertFile"],
            tableEditing: ["createTable", "addColumnLeft", "addColumnRight", "addRowAbove", "addRowBelow", "deleteRow", "deleteColumn"],
            structuralMarkupAndStyles: ["formatting", "cleanFormatting"],
            snippets: ["insertHtml"],
            html: ["viewHtml"],
            print: ["print"],
            pdf: ["pdf"]
        },
        ALLOWED_TOOLS: [].concat(t.basicTextFormatting).concat(t.fontAndColor).concat(t.alignment).concat(t.lists).concat(t.links).concat(t.print).concat(t.pdf)
    }, angular.module("totvsEditor").constant("totvsEditorConstants", e)
}(),
function () {
    "use strict";
    angular.module("totvsExecution").constant("totvsExecutionConstant", {
        outputFilename: {
            pt: "Nome do arquivo de saída",
            en: "Output filename",
            es: "Nombre de archivo de salida"
        },
        sendNotificationProcessFinished: {
            pt: "Processo de envio de notificação conclúido",
            en: "Send notification process finished",
            es: "Proceso de envío de notificación concluido"
        },
        sendReportProcessFinished: {
            pt: "Processo de envio de relatório concluído",
            en: "Send report process finished",
            es: "Proceso de envío de informe completado"
        },
        addEmailRecipients: {
            pt: "Adicionar destinários de e-mail",
            en: "Add email recipients",
            es: "Agregar destinatarios de correo electrónico"
        },
        execution: {
            pt: "Execução",
            en: "Execution",
            es: "Ejecución"
        },
        notificationRecipients: {
            pt: "Destinários da notificação",
            en: "Notification Recipients",
            es: "Destinatarios de notificaciones"
        }
    })
}(),
function () {
    "use strict";
    var e;
    e = {
        pt: {
            actions: {
                addChild: "Adicionar filho",
                append: "Adicionar nova tarefa",
                insertAfter: "Adicionar tarefa abaixo",
                insertBefore: "Adicionar tarefa acima",
                pdf: "Exportar para PDF"
            },
            cancel: "Cancelar",
            deleteDependencyConfirmation: "Você tem certeza que quer deletar essa dependência?",
            deleteDependencyWindowTitle: "Deletar dependência",
            deleteTaskConfirmation: "Você tem certeza que deseja deletar essa tarefa?",
            deleteTaskWindowTitle: "Deletar tarefa",
            destroy: "Deletar",
            editor: {
                assignButton: "Atribuir",
                title: "Título",
                editorTitle: "Editar tarefa",
                start: "Início",
                end: "Fim",
                percentComplete: "Completo",
                resources: "Recursos",
                resourcesEditorTitle: "Recursos",
                resourcesHeader: "Recursos",
                unitsHeader: "Unidades"
            },
            save: "Salvar",
            views: {
                week: "Semana",
                month: "Mês",
                year: "Ano",
                day: "Dia",
                start: "Início",
                end: "Fim"
            }
        },
        en: {
            actions: {
                addChild: "Add Child",
                append: "Add Task",
                insertAfter: "Add Below",
                insertBefore: "Add Above",
                pdf: "Export to PDF"
            },
            cancel: "Cancel",
            deleteDependencyConfirmation: "Are you sure you want to delete this dependency?",
            deleteDependencyWindowTitle: "Delete dependency",
            deleteTaskConfirmation: "Are you sure you want to delete this task?",
            deleteTaskWindowTitle: "Delete task",
            destroy: "Delete",
            editor: {
                assignButton: "Assign",
                title: "Title",
                editorTitle: "Task",
                start: "Start",
                end: "End",
                percentComplete: "Complete",
                resources: "Resources",
                resourcesEditorTitle: "Resources",
                resourcesHeader: "Resources",
                unitsHeader: "Units"
            },
            save: "Save",
            views: {
                week: "Week",
                month: "Month",
                year: "Year",
                day: "Day",
                start: "Start",
                end: "End"
            }
        },
        es: {
            actions: {
                addChild: "Añadir niño",
                append: "Agregar tarea",
                insertAfter: "Añadir a continuación",
                insertBefore: "Sumar",
                pdf: "Exportar a PDF"
            },
            cancel: "Cancelar",
            deleteDependencyConfirmation: "¿Está seguro de que quiere eliminar esta dependencia?",
            deleteDependencyWindowTitle: "Eliminar la dependencia",
            deleteTaskConfirmation: "¿Está seguro de que quiere borrar esta tarea?",
            deleteTaskWindowTitle: "Eliminar tarea",
            destroy: "Borrar",
            editor: {
                assignButton: "Asignar",
                title: "Título",
                editorTitle: "Tarea",
                start: "Comienzo",
                end: "Fin",
                percentComplete: "Completar",
                resources: "recursos",
                resourcesEditorTitle: "recursos",
                resourcesHeader: "recursos",
                unitsHeader: "Unidades"
            },
            save: "Salvar",
            views: {
                week: "Semana",
                month: "Mes",
                year: "Año",
                day: "Día",
                start: "Comienzo",
                end: "Fin"
            }
        }
    }, angular.module("totvsGantt").constant("totvsGanttConstant", e)
}(),
function () {
    "use strict";
    angular.module("totvsMashupCaptcha").constant("totvsMashupCaptchaConstant", {
        typeYourTextHere: {
            pt: "Digite seu texto aqui",
            en: "Type your text here",
            es: "Escribe tu texto aquí"
        }
    })
}(),
function () {
    "use strict";
    angular.module("totvsPivotGrid").constant("totvsPivotGridConstant", {
        measures: {
            pt: "Medidas",
            en: "Measures",
            es: "Medidas"
        },
        columnFields: {
            pt: "Coloque os Campos de Colunas Aqui",
            en: "Drop Column Fields Here",
            es: "Colocar Campos de Columna Aquí"
        },
        measureFields: {
            pt: "Coloque os Campos de Medidas Aqui",
            en: "Drop Column Measure Here",
            es: "Coloque Medidas de Columna Aquí"
        },
        rowFields: {
            pt: "Coloque os Campos de Linhas Aqui",
            en: "Drop Column Rows Here",
            es: "Coloque Filas de Columna Aquí"
        },
        columns: {
            pt: "Colunas",
            en: "Columns",
            es: "Columnas"
        },
        rows: {
            pt: "Linhas",
            en: "Rows",
            es: "Filas"
        },
        measuresLabel: {
            pt: "Medidas",
            en: "Measures",
            es: "Medidas"
        },
        columnsLabel: {
            pt: "Colunas",
            en: "Columns",
            es: "Columnas"
        },
        rowsLabel: {
            pt: "Linhas",
            en: "Rows",
            es: "Filas"
        },
        fieldsLabel: {
            pt: "Campos",
            en: "Fields",
            es: "Campos"
        },
        info: {
            pt: "Informação",
            en: "Information",
            es: "Información"
        },
        sortAscending: {
            pt: "Ordem Ascedente",
            en: "Sort Ascending",
            es: "Ordem Ascedente"
        },
        sortDescending: {
            pt: "Ordem Descedente",
            en: "Sort Descending",
            es: "Ordem Descedente"
        },
        filterFields: {
            pt: "Campos",
            en: "Fields",
            es: "Campos"
        },
        filter: {
            pt: "Filtros",
            en: "Filter",
            es: "Filtrar"
        },
        include: {
            pt: "Incluir",
            en: "Include",
            es: "Incluir"
        },
        title: {
            pt: "Titulo",
            en: "Title",
            es: "Título"
        },
        clear: {
            pt: "Limpar",
            en: "Clear",
            es: "Clarear"
        },
        ok: {
            pt: "OK",
            en: "OK",
            es: "OK"
        }
    })
}(),
function () {
    "use strict";
    angular.module("totvsSchedule").constant("totvsScheduleConstant", {
        time: {
            pt: "Tempo",
            en: "Time",
            es: "Tiempo"
        },
        and: {
            pt: "e",
            en: "and",
            es: "y"
        },
        dateExecution: {
            pt: "Data de execução",
            en: "Date execution",
            es: "Fecha de ejecución"
        },
        executionToday: {
            pt: "Executar hoje",
            en: "Execute today",
            es: "Correr hoy"
        },
        repeatOccurrence: {
            pt: "Repetir ocorrência",
            en: "Repeat occurrence",
            es: "Repita ocurrencia"
        },
        scheduleTheExecution: {
            pt: "Agendar execução",
            en: "Scheduler execution",
            es: "Programa en ejecución"
        },
        scheduleTo: {
            pt: "Agendar para",
            en: "Schedule for",
            es: "Calendario de"
        },
        configuration: {
            pt: "Configuração",
            en: "Configuration",
            es: "Configuración"
        },
        repeatEveryDays: {
            pt: "Repita todo dia",
            en: "Repeat every days",
            es: "Repita todos los días"
        },
        repeatEveryXDays: {
            pt: "Repita a cada {x} dias",
            en: "Repeat every {x} days",
            es: "Repetir cada {x} días"
        },
        repeatEveryWeeks: {
            pt: "Repita toda semana",
            en: "Repeat every weeks",
            es: "Repite cada semana"
        },
        repeatEveryXWeeks: {
            pt: "Repita a cada {x} semanas",
            en: "Repeat every {x} weeks",
            es: "Repetir cada {x} semanas"
        },
        repeatEveryMonths: {
            pt: "Repita a cada mês",
            en: "Repeat every month",
            es: "Repetir cada mes"
        },
        repeatEveryXMonths: {
            pt: "Repita a cada {x} meses",
            en: "Repeat every {x} months",
            es: "Repetir cada {x} meses"
        },
        lastDayEachMonth: {
            pt: "Último dia de cada mês.",
            en: "Last day each month.",
            es: "Ultimo dia de cada mes."
        },
        onDayOfEachMonthX: {
            pt: "No {x}º dia de cada mês.",
            en: "On {x}º day of each month.",
            es: "El {x}º día de cada mes."
        },
        prepAt: {
            pt: "às",
            en: "at",
            es: "las"
        },
        prepOnM: {
            pt: "Nos",
            en: "At",
            es: "En"
        },
        prepOnF: {
            pt: "Nas",
            en: "At",
            es: "En"
        },
        dayMondays: {
            pt: "segundas",
            en: "modays",
            es: "los lunes"
        },
        dayMondaySingle: {
            pt: "Segunda",
            en: "Moday",
            es: "Lunes"
        },
        dayWednesdays: {
            pt: "quartas",
            en: "wednesdays",
            es: "miércoles"
        },
        dayFridays: {
            pt: "sextas",
            en: "fridays",
            es: "los viernes"
        },
        forever: {
            pt: "Para sempre",
            en: "Forever",
            es: "Para siempre"
        },
        finishIn: {
            pt: "Terminar em {x}.",
            en: "Finish in {x}.",
            es: "Finalizar en {x}."
        },
        repeatEvery: {
            pt: "Repete a cada",
            en: "Repeat every",
            es: "Se repite cada"
        },
        daySunday: {
            pt: "Domingo",
            en: "Sunday",
            es: "Domingo"
        },
        daySundays: {
            pt: "domingos",
            en: "sundays",
            es: "domingos"
        },
        dayTuesdaySingle: {
            pt: "Terça",
            en: "Tuesday",
            es: "Tercera"
        },
        dayTuesdays: {
            pt: "terças",
            en: "tuesday",
            es: "martes"
        },
        dayWednesdaySingle: {
            pt: "Quarta",
            en: "Wednesday",
            es: "Cuarto"
        },
        dayThursdaySingle: {
            pt: "Quinta",
            en: "Thursday",
            es: "Granja"
        },
        dayThursdays: {
            pt: "quintas",
            en: "thursdays",
            es: "jueves"
        },
        dayFridaySingle: {
            pt: "Sexta",
            en: "Friday",
            es: "Viernes"
        },
        daySaturday: {
            pt: "Sabádo",
            en: "Saturday",
            es: "Sabádo"
        },
        daySaturdays: {
            pt: "sabádos",
            en: "saturday",
            es: "sabádos"
        },
        week: {
            pt: "semana",
            en: "week",
            es: "semana"
        },
        repeatPattern: {
            pt: "Padrão de repetição",
            en: "Repeat pattern",
            es: "Patrón de repetición"
        },
        repeatDaily: {
            pt: "Diária",
            en: "Daily",
            es: "Tasa diaria"
        },
        repeatWeekly: {
            pt: "Semanal",
            en: "Weekly",
            es: "Semanal"
        },
        repeatMonthly: {
            pt: "Mensal",
            en: "Monthly",
            es: "mensual"
        },
        weeks: {
            pt: "semanas",
            en: "weeks",
            es: "semana"
        },
        day: {
            pt: "dia",
            en: "day",
            es: "día"
        },
        days: {
            pt: "dias",
            en: "days",
            es: "días"
        },
        month: {
            pt: "mês",
            en: "month",
            es: "meses"
        },
        months: {
            pt: "meses",
            en: "months",
            es: "mes"
        },
        untilToDate: {
            pt: "Até a data",
            en: "Until to date",
            es: "hasta la fecha"
        },
        dayOfTheMonth: {
            pt: "Dia do mês",
            en: "Day of the month",
            es: "Día del mes"
        },
        execute: {
            pt: "Executar",
            en: "Execute",
            es: "Ejecutar"
        },
        alwaysOn: {
            pt: "Sempre no",
            en: "Always on",
            es: "Siempre"
        },
        lastDayOfTheMonth: {
            pt: "Último dia do mês",
            en: "Last day of the month",
            es: "Último día del mes"
        },
        btnCancel: {
            pt: "Cancelar",
            en: "Cancel",
            es: "Cancelar"
        },
        btnEdit: {
            pt: "Editar",
            en: "Edit",
            es: "Editar"
        },
        btnSave: {
            pt: "Salvar",
            en: "Save",
            es: "Guardar"
        },
        msgSelectTimeExecutions: {
            pt: "Selecione Execuções de tempo",
            en: "Select Time Executions",
            es: "Seleccione Ejecuciones de tiempo"
        },
        msgSelectLeastOneDayForExecutions: {
            pt: "Selecione pelo um dia para execuções",
            en: "Select Least One Day For Executions",
            es: "Seleccione por un día para las ejecuciones"
        },
        msgSelectDateEndExecutions: {
            pt: "Selecione as execuções finais da data",
            en: "Select Least One Day For Executions",
            es: "Seleccionar ejecuciones finales de fecha"
        },
        msgSelectDateGreaterThanCurrentDateEndExecutions: {
            pt: "Selecione a data maior que as execuções finais da data final",
            en: "Select date greater than current date end executions",
            es: "Seleccione fecha mayor que las ejecuciones finales de fecha actual"
        },
        deadline: {
            pt: "Data limite",
            en: "Deadline",
            es: "Fecha limite"
        }
    })
}(),
function () {
    "use strict";
    angular.module("totvsScheduler").constant("totvsSchedulerConstant", {
        today: {
            pt: "Hoje",
            en: "Today",
            es: "Hoy"
        },
        save: {
            pt: "Salvar",
            en: "Save",
            es: "Guardar"
        },
        cancel: {
            pt: "Cancelar",
            en: "Cancel",
            es: "Cancelar"
        },
        destroy: {
            pt: "Apagar",
            en: "Delete",
            es: "Borrar"
        },
        event: {
            pt: "Evento",
            en: "Event",
            es: "Evento"
        },
        date: {
            pt: "Data",
            en: "Date",
            es: "Fecha"
        },
        time: {
            pt: "Hora",
            en: "Time",
            es: "Hora"
        },
        allDay: {
            pt: "Dia todo",
            en: "All day",
            es: "Todo el dia"
        },
        showFullDay: {
            pt: "Exibir dia completo",
            en: "Show full day",
            es: "Mostrar día completo"
        },
        showWorkDay: {
            pt: "Exibir horário comercial",
            en: "Show business hours",
            es: "Mostrar el horario comercial"
        },
        defaultRowText: {
            pt: "Todos os eventos",
            en: "All events",
            es: "Todos los eventos"
        },
        deleteWindowTitle: {
            pt: "Excluir evento",
            en: "Delete event",
            es: "Retirar un evento"
        },
        ariaEventLabel: {
            pt: "{0} em {1:D} às {2:t}"
        },
        ariaSlotLabel: {
            pt: "Selecionado de {0:t} a {1:t}"
        },
        views: {
            day: {
                pt: "Dia",
                en: "Day",
                es: "Día"
            },
            week: {
                pt: "Semana",
                en: "Week",
                es: "Semana"
            },
            month: {
                pt: "Mês",
                en: "Month",
                es: "Mes"
            },
            timeline: {
                pt: "Linha do tempo",
                en: "Timeline",
                es: "Linea del tiempo"
            },
            workWeek: {
                pt: "Semana de trabalho",
                en: "Work week",
                es: "Semana de trabajo"
            }
        },
        editable: {
            confirmation: {
                pt: "Tem certeza de que deseja excluir este evento?",
                en: "Are you sure you want to delete this event?",
                es: "¿Está seguro de que desea eliminar este evento?"
            }
        },
        editor: {
            allDayEvent: {
                pt: "Evento o dia todo",
                en: "All day event",
                es: "Evento todo el día"
            },
            description: {
                pt: "Descrição",
                en: "Description",
                es: "Descripción"
            },
            editorTitle: {
                pt: "Editar evento",
                en: "Edit event",
                es: "Editar evento"
            },
            end: {
                pt: "Fim",
                en: "End",
                es: "Fin"
            },
            endTimezone: {
                pt: "Data final do fuso horário",
                en: "End date timezone",
                es: "Fecha de finalización zona horaria"
            },
            repeat: {
                pt: "Repetir",
                en: "Repeat",
                es: "Repetición"
            },
            separateTimezones: {
                pt: "Definir diferentes fusos horários de início e fim",
                en: "Define different start and end timezones",
                es: "Establecer diferentes tiempos de inicio y fin de tiempo"
            },
            start: {
                pt: "Ínicio",
                en: "Start",
                es: "Comienzo"
            },
            startTimezone: {
                pt: "Data inicial fuso horário",
                en: "Start date timezone",
                es: "Fecha de inicio fuso horario"
            },
            timezone: {
                pt: "Ínicio",
                en: "Start",
                es: "Comienzo"
            },
            timezoneEditorButton: {
                pt: "Fuso Horário",
                en: "Timezone",
                es: "Huso horario"
            },
            timezoneEditorTitle: {
                pt: "Fuso horários",
                en: "Timezones",
                es: "Husos horarios"
            },
            title: {
                pt: "Título",
                en: "Title",
                es: "Título"
            }
        },
        recurrenceEditor: {
            daily: {
                interval: {
                    pt: "dias(s)",
                    en: "day(s)",
                    es: "día(s)"
                },
                repeatEvery: {
                    pt: "Repetir a cada:",
                    en: "Repeat every:",
                    es: "Repetir cada:"
                }
            },
            end: {
                after: {
                    pt: "Após",
                    en: "After",
                    es: "Después"
                },
                occurrence: {
                    pt: "ocorrências",
                    en: "occurences",
                    es: "ocurrencias"
                },
                label: {
                    pt: "Fim",
                    en: "End",
                    es: "Final"
                },
                never: {
                    pt: "Nunca",
                    en: "Never",
                    es: "Nunca"
                },
                mobileLabel: {
                    pt: "Termina",
                    en: "Ends",
                    es: "Termina"
                },
                on: {
                    pt: "em",
                    en: "on",
                    es: "en"
                }
            },
            frequencies: {
                daily: {
                    pt: "Diariamente",
                    en: "Daily",
                    es: "Diariamente"
                },
                monthly: {
                    pt: "Mensal",
                    en: "Monthly",
                    es: "Mensual"
                },
                never: {
                    pt: "Nunca",
                    en: "Never",
                    es: "Nunca"
                },
                weekly: {
                    pt: "Semanalmente",
                    en: "Weekly",
                    es: "Semanal"
                },
                yearly: {
                    pt: "Anualmente",
                    en: "Yearly",
                    es: "Anual"
                }
            },
            monthly: {
                day: {
                    pt: "Dia",
                    en: "Day",
                    es: "Día"
                },
                interval: {
                    pt: "mês (es)",
                    en: "month (s)",
                    es: ""
                },
                repeatEvery: {
                    pt: "Repetir a cada:",
                    en: "Repeat every:",
                    es: "Repetir cada:"
                },
                repeatOn: {
                    pt: "Repetir em:",
                    en: "Repeat on:",
                    es: "Repita el:"
                }
            },
            offsetPositions: {
                first: {
                    pt: "primeiro",
                    en: "first",
                    es: "primero"
                },
                second: {
                    pt: "segundo",
                    en: "second",
                    es: "segundo"
                },
                third: {
                    pt: "terceiro",
                    en: "third",
                    es: "tercero"
                },
                fourth: {
                    pt: "quarto",
                    en: "fourth",
                    es: "cuarto"
                },
                last: {
                    pt: "último",
                    en: "last",
                    es: "último"
                }
            },
            weekly: {
                interval: {
                    pt: " semana (s)",
                    en: " week (s)",
                    es: " semana (s)"
                },
                repeatEvery: {
                    pt: "Repetir a cada:",
                    en: "Repeat every:",
                    es: "Repetir cada:"
                },
                repeatOn: {
                    pt: "Repetir em:",
                    en: "Repeat on:",
                    es: "Repita el:"
                }
            },
            weekDays: {
                day: {
                    pt: "dia",
                    en: "day",
                    es: "día"
                },
                weekday: {
                    pt: "semana",
                    en: "week",
                    es: "semana"
                },
                weekend: {
                    pt: "final de semana",
                    en: "weekend",
                    es: "fin de semana"
                }
            },
            yearly: { of: {
                    pt: "de ",
                    en: "of ",
                    es: "de "
                },
                repeatEvery: {
                    pt: "Repetir a cada:",
                    en: "Repeat every:",
                    es: "Repetir cada:"
                },
                repeatOn: {
                    pt: "Repetir em:",
                    en: "Repeat on:",
                    es: "Repita el:"
                },
                interval: {
                    pt: " ano (s)",
                    en: " year (s)",
                    es: " año (s)"
                }
            }
        },
        recurrenceMessages: {
            deleteRecurring: {
                pt: "Deseja excluir somente esta ocorrência de evento ou toda a série?",
                en: "Do you want to exclude only this event occurrence or the entire series?",
                es: "¿Deseas excluir sólo la ocurrencia de un evento o una serie?"
            },
            deleteWindowOccurrence: {
                pt: "Excluir ocorrência atual",
                en: "Delete current occurrence",
                es: "Eliminar ocurrencia actual"
            },
            deleteWindowSeries: {
                pt: "Excluir a série",
                en: "Delete the series",
                es: "Eliminar la serie"
            },
            deleteWindowTitle: {
                pt: "Excluir item recorrente",
                en: "Delete recurring item",
                es: "Eliminar elemento recurrente"
            },
            editRecurring: {
                pt: "Deseja editar apenas esta ocorrência de evento ou toda a série?",
                en: "Do you want to edit only this event occurrence or the whole series?",
                es: "¿Deseas editar una versión de evento o de una serie?"
            },
            editWindowOccurrence: {
                pt: "Editar ocorrência atual",
                en: "Edit current occurrence",
                es: "Editar ocurrencia actual"
            },
            editWindowSeries: {
                pt: "Editar a série",
                en: "Edit series",
                es: "Editar serie"
            },
            editWindowTitle: {
                pt: "Editar item recorrente",
                en: "Edit recurring item",
                es: "Editar elemento periódico"
            }
        }
    })
}(),
function () {
    "use strict";
    angular.module("totvsSelect").constant("totvsSelectConstant", {
        btnAdd: {
            pt: "Adicionar",
            en: "Add",
            es: "Añadir"
        }
    })
}(),
function () {
    "use strict";
    angular.module("totvsTable").constant("totvsTableConstant", {
        TABLE_TEMPLATE: "<style>[data-thf^='totvs-table-col-']:not([data-thf='totvs-table-col-check']) {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;} [data-thf='totvs-table-col-check'] {width: 27px;} </style>" + '<div class="table-content" style="overflow: auto;"><div class="table-responsive" style="height: 100%;"><table class="table table-condensed" style="table-layout: fixed;"><thead><tr></tr></thead><tbody><tr class="clickable"></tr></tbody></table></div></div>',
        MULTI_SELECT_COLUMN_HEADER_TEMPLATE: '<th data-thf="totvs-table-col-check"><input type="checkbox" style="margin-left: 3px;" ng-model="$totvsTableController.isAllSelected" ng-click="$totvsTableController.selectAll()"></th>',
        SINGLE_SELECT_COLUMN_HEADER_TEMPLATE: '<th data-thf="totvs-table-col-check">&nbsp;</th>',
        SELECTION_TYPE: {
            OFF: "off",
            SINGLE: "single",
            MULTI: "multi"
        }
    })
}(),
function () {
    "use strict";
    angular.module("totvsUpload").constant("totvsUploadConstant", {
        selectFile: {
            pt: "Selecione o arquivo",
            en: "Select file",
            es: "Seleccione Archivo"
        },
        dropFiles: {
            pt: "Solte os arquivos",
            en: "Drop files",
            es: "Suelte los archivos"
        },
        statusUploaded: {
            pt: "Status de upload",
            en: "Status uploaded",
            es: "Estado subido"
        },
        retry: {
            pt: "Tentar novamente",
            en: "Retry",
            es: "Tentar de nuevo"
        },
        statusUploading: {
            pt: "Status de uploading",
            en: "Status Uploading",
            es: "Estado Subida"
        },
        uploadSelectedFiles: {
            pt: "Carregar arquivos selecionados",
            en: "Upload selected files",
            es: "Subir archivos seleccionados"
        },
        statusFailed: {
            pt: "Falhou",
            en: "Failed",
            es: "fallado"
        },
        remove: {
            pt: "Remover",
            en: "Remove",
            es: "Retirar"
        },
        btnCancel: {
            pt: "Cancelar",
            en: "Cancel",
            es: "Cancelar"
        }
    })
}(),
function () {
    "use strict";
    angular.module("zoom").constant("zoomConstant", {
        TEMPLATE: '<totvs-modal-header ng-init="controller.initialize();"><div class="row"><div ng-class="{\'col-xs-10\' : controller.isConfigurationEnabled === true,\'col-sm-11\' : controller.isConfigurationEnabled === true,\'col-xs-12\' : controller.isConfigurationEnabled !== true,\'col-sm-12\' : controller.isConfigurationEnabled !== true}">{{controller.zoomName | i18n }}<span ng-if="controller.isConfigurationOpen !== true && controller.isMultiple !== true">&nbsp;({{controller.resultTotal}})</span><span ng-if="controller.isConfigurationOpen === true">&nbsp;({{ \'l-configuration\' | i18n }})</span></div><div class="col-xs-2 col-sm-1"ng-animate="\'animate-if\'"ng-if="controller.isConfigurationEnabled === true && controller.isConfigurationOpen !== true"><a class="pull-right clickable"ng-click="controller.openCloseConfiguration();"><span class="glyphicon glyphicon-cog"></span></a></div></div></totvs-modal-header><totvs-modal-body class="modal-body-zoom" style="padding-bottom: 0; width: 100%; border: 0; display: inline-block;"><style type="text/css" scoped="true">.zoom-result {margin-top: 10px;} .zoom-advanced-search {border-bottom: 1px solid #ccc;border-top: 1px dashed #ccc;font-size: 12px;margin: 5px 0;padding: 5px 0;} </style><div ng-animate="\'animate-if\'" ng-if="controller.isConfigurationEnabled === true && controller.isConfigurationOpen === true"><div ng-animate="\'animate-if\'"ng-if="controller.isConfigurationEnabled === true && controller.isConfigurationOpen === true"><style type="text/css" scoped="true">fieldset > div.row.header {margin: 5px 0;padding: 5px 0;background-color: #f9f9f9;border-left: 5px solid #D0D0D0;border-bottom: 1px solid #D0D0D0;}.dd {max-width: none;}ol.dd-list > li.dd-item {cursor:move;}ol.dd-list > li.dd-item:nth-child(odd) > .dd-handle {border-left: 5px solid #D0D0D0;}ol.dd-list > li.dd-item:nth-child(even) > .dd-handle {border-left: 5px solid #C0C0C0;}@media (max-width: 767px) {fieldset .text-right,fieldset .visible-xs {padding-top: 5px;}fieldset .name {font-weight: bold;}fieldset {padding-bottom: 15px;}}</style><ul style="padding-left: 15px"><li class="text-danger"ng-if="controller.isConfigurationLocal === true"><span ng-if="controller.isLocalStorageAvaiable === true">{{ \'msg-grid-config-local\' | i18n }}</span><span ng-if="controller.isLocalStorageAvaiable === false">{{ \'msg-grid-config-local-off\' | i18n }}</span></li></ul><fieldset><div class="row header hidden-xs"><strong><div class="col-xs-12 col-sm-5">{{ \'l-column\' | i18n }}</div><div class="col-xs-12 col-sm-3 text-right">{{ \'l-width\' | i18n }}</div><div class="col-xs-12 col-sm-2 text-right">{{ \'l-visible\' | i18n }}</div></strong></div><div ng-nestable ng-model="controller.columns"><div class="row"><div class="col-xs-12 col-sm-5 name">{{ $item.title }}</div><div class="visible-xs col-xs-9">{{ \'l-width\' | i18n }}</div><div class="col-xs-3 col-sm-3 text-right" ng-mousedown="controller.onMousedown($event)"><input type="number" ng-model="$item.actualWidth" style="width: 100px;"></div><div class="visible-xs col-xs-9">{{ \'l-visible\' | i18n }}</div><div class="col-xs-3 col-sm-2 text-right"ng-mousedown="controller.onMousedown($event)"><input type="checkbox"ng-model="$item.visible"bsswitch></div></div></div></fieldset></div></div><div ng-show="controller.isConfigurationOpen !== true"><div ng-animate="\'animate-if\'"ng-if="controller.isAdvancedSearchOpen !== true"><div class="row"style="margin: 0 -15px;"role="form"><div class="no-gutter col-xs-12 col-sm-5 col-md-5"><field type="select"ng-model="controller.selectedFilter"ng-change="controller.onChangeFilter();"style="display: initial;"class="col-md-12"><include><ui-select-match placeholder="{{ (controller.selectedFilter ? controller.selectedFilter.label : \'\') | i18n }}">{{ $select.selected.label | i18n }}</ui-select-match><ui-select-choices repeat="property in controller.propertyFields | filter: $select.search | filter: controller.filterPropertyFields track by $index"><span ng-bind-html="(property.label  | i18n ) | highlight: $select.search"></span></ui-select-choices></include></field></div>\x3c!-- INI: OPTIONS --\x3e<div class="no-gutter col-xs-12 col-sm-7 col-md-5"ng-if="controller.selectedFilter.propertyList"><field type="select"ng-model="controller.selectedFilterValue"class="col-md-12"canclean><include><ui-select-match placeholder="{{ (controller.selectedFilter ? controller.selectedFilter.label : \'\') | i18n }}">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="item in controller.selectedFilter.propertyList | filter: $select.search track by $index"><span ng-bind-html="item.name | highlight: $select.search"></span></ui-select-choices></include></field></div><div class="no-gutter col-xs-12 col-sm-7 col-md-5"ng-if="!controller.selectedFilter.propertyList">\x3c!-- string (default) --\x3e<field type="input"class="col-md-12"maxlength="{{ controller.selectedFilter.maxlength }}"ng-if="controller.isChanging !== true && (controller.selectedFilter.type === \'string\' || controller.selectedFilter.type === undefined)"ng-model="controller.selectedFilterValue"placeholder="{{ (controller.selectedFilter ? controller.selectedFilter.label : \'\') | i18n }}"on-key-enter="controller.applyInternalFilter();"canclean></field>\x3c!-- string (extend) --\x3e<div class="col-xs-4 col-md-4 btn-group"ng-if="controller.isChanging !== true && controller.selectedFilter.type === \'stringextend\'"style="margin-top: 5px; display: inline-flex; margin-left: 0px; padding: 0px;"><button type="button"class="btn btn-default"style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: left;">{{ (controller.selectedFilter.extend.name || \'l-search-type-equals\') | i18n }}</button><button type="button"style="overflow: hidden"class="btn btn-default dropdown-toggle"data-toggle="dropdown" ><span class="caret"></span><span class="sr-only"></span></button><ul class="dropdown-menu dropdown-menu-right"><li><a class="clickable"ng-click="controller.selectedFilter.extend = { id : 1, name: \'l-search-type-equals\' };">{{ \'l-search-type-equals\'  | i18n }}</a></li><li><a class="clickable"ng-click="controller.selectedFilter.extend = { id : 2, name: \'l-search-type-matches\' };">{{ \'l-search-type-matches\'  | i18n }}</a></li><li><a class="clickable"ng-click="controller.selectedFilter.extend = { id : 3, name: \'l-search-type-start\' };">{{ \'l-search-type-start\'  | i18n }}</a></li></ul></div><field type="input"class="col-xs-8 col-md-8"maxlength="{{ controller.selectedFilter.maxlength }}"ng-if="controller.isChanging !== true && controller.selectedFilter.type === \'stringextend\'"ng-init="controller.selectedFilter.extend = { id : 1, name: \'l-search-type-equals\' };"ng-model="controller.selectedFilterValue"placeholder="{{ (controller.selectedFilter ? controller.selectedFilter.label : \'\') | i18n }}"on-key-enter="controller.applyInternalFilter();"canclean></field>\x3c!-- stringrange --\x3e<field type="inputrange"class="col-md-12"start-maxlength="{{ controller.selectedFilter.maxlength }}"end-maxlength="{{ controller.selectedFilter.maxlength }}"ng-if="controller.isChanging !== true && controller.selectedFilter.type === \'stringrange\'"ng-model="controller.selectedFilterValue"start-placeholder="{{ \'l-start\' | i18n }}"end-placeholder="{{ \'l-end\' | i18n }}"on-key-enter="controller.applyInternalFilter();"canclean></field>\x3c!-- date --\x3e<field type="date"class="col-md-12"ng-if="controller.isChanging !== true && controller.selectedFilter.type === \'date\'"ng-model="controller.selectedFilterValue"placeholder="{{ (controller.selectedFilter ? controller.selectedFilter.label : \'\') | i18n }}"on-key-enter="controller.applyInternalFilter();"></field>\x3c!-- daterange --\x3e<field type="daterange"class="col-md-12"ng-if="controller.isChanging !== true && controller.selectedFilter.type === \'daterange\'"ng-model="controller.selectedFilterValue"start-placeholder="{{ \'l-start\' | i18n }}"end-placeholder="{{ \'l-end\' | i18n }}"on-key-enter="controller.applyInternalFilter();"></field>\x3c!-- decimal --\x3e<field type="decimal"class="col-md-12"name-id="field_decimal"data-v-max="{{ controller.selectedFilter.vMax }}"data-v-min="{{ controller.selectedFilter.vMin }}"ng-if="controller.isChanging !== true && controller.selectedFilter.type === \'decimal\'"ng-model="controller.selectedFilterValue"placeholder="{{ (controller.selectedFilter ? controller.selectedFilter.label : \'\') | i18n }}"on-key-enter="controller.applyInternalFilter();"data-a-dec="{{ controller.selectedFilter.aDec }}"data-m-dec="{{ controller.selectedFilter.mDec }}"data-a-form="false"canclean></field>\x3c!-- decimalrange --\x3e<field type="decimalrange"class="col-md-12"data-v-max="{{ controller.selectedFilter.vMax }}"data-v-min="{{ controller.selectedFilter.vMin }}"ng-if="controller.isChanging !== true && controller.selectedFilter.type === \'decimalrange\'"ng-model="controller.selectedFilterValue"start-placeholder="{{ \'l-start\' | i18n }}"end-placeholder="{{ \'l-end\' | i18n }}"on-key-enter="controller.applyInternalFilter();"data-a-dec="{{ controller.selectedFilter.aDec }}"data-m-dec="{{ controller.selectedFilter.mDec }}"data-a-form="false"canclean></field>\x3c!-- integer --\x3e<field type="decimal"name-id="field_decimal"class="col-md-12"data-v-max="{{ controller.selectedFilter.vMax }}"data-v-min="{{ controller.selectedFilter.vMin }}"ng-if="controller.isChanging !== true && controller.selectedFilter.type === \'integer\'"ng-model="controller.selectedFilterValue"placeholder="{{ (controller.selectedFilter ? controller.selectedFilter.label : \'\') | i18n }}"on-key-enter="controller.applyInternalFilter();"data-a-dec=","data-alt-dec=""data-a-sep=""data-m-dec="0"data-a-pad="false"data-l-zero="deny"canclean></field>\x3c!-- integerrange --\x3e<field type="decimalrange"class="col-md-12"data-v-max="{{ controller.selectedFilter.vMax }}"data-v-min="{{ controller.selectedFilter.vMin }}"ng-if="controller.isChanging !== true && controller.selectedFilter.type === \'integerrange\'"ng-model="controller.selectedFilterValue"start-placeholder="{{ \'l-start\' | i18n }}"end-placeholder="{{ \'l-end\' | i18n }}"on-key-enter="controller.applyInternalFilter();"data-a-dec=","data-alt-dec=""data-a-sep=""data-m-dec="0"data-a-pad="false"data-l-zero="deny"canclean></field></div>\x3c!-- END: OPTIONS --\x3e<div class="col-xs-12 col-sm-offset-5 col-sm-7 col-md-offset-0 col-md-2"style="padding-top: 5px;">\x3c!-- Por algum motivo desconhecido quando é utilizado o ng-submit para o form,o controler não recebe as atualizações do model --\x3e<button class="btn btn-primary"style="width: 100%"ng-click="controller.applyInternalFilter();">{{ \'btn-apply\' | i18n }}</button></div></div></div><div ng-animate="\'animate-if\'"ng-if="controller.isAdvancedSearchOpen === true"><h4>{{ \'btn-advanced-search\' | i18n }}</h4></div><div class="zoom-advanced-search"ng-animate="\'animate-if\'"ng-if="controller.isAdvancedSearchEnabled === true"><div ng-animate="\'animate-if\'"ng-if="controller.isAdvancedSearchOpen === true"><div class="row no-gutters"style="margin: 0 -15px;"role="form"><div ng-repeat="filter in controller.propertyFields track by $index"><div ng-if="filter.isAvaiableInAdvancedSearch !== false"><div ng-if="filter.propertyList !== undefined"><field type="select"ng-model="filter.value"canclean><include><ui-select-match placeholder="{{ filter.label | i18n }}">{{ $select.selected.name }}</ui-select-match><ui-select-choices repeat="item in filter.propertyList | filter: $select.search track by $index"><span ng-bind-html="item.name | highlight: $select.search"></span></ui-select-choices></include><label>{{ filter.label | i18n }}</label></field></div><div ng-if="filter.propertyList === undefined">\x3c!-- string (default) --\x3e<field type="input"maxlength="{{ filter.maxlength }}"ng-if="filter.type === \'string\' || filter.type === undefined"ng-model="filter.value"placeholder="{{ filter.label | i18n }}"on-key-enter="controller.applyInternalFilter();"canclean><label>{{ filter.label | i18n }}</label></field>\x3c!-- string (extend) --\x3e<field type="input"class="col-xs-9 col-sm-4"maxlength="{{ filter.maxlength }}"ng-if="filter.type === \'stringextend\'"ng-init="filter.extend = {id : 1, name: \'l-search-type-equals\' };"ng-model="filter.value"placeholder="{{ filter.label | i18n }}"on-key-enter="controller.applyInternalFilter();"canclean><label>{{ filter.label | i18n }}</label></field><div class="col-xs-3 col-sm-2 btn-group"ng-if="filter.type === \'stringextend\'"style="display: inline-flex; margin-left: 0; margin-top: 27px; padding: 0 15px 0 0;"><button type="button"class="btn btn-default"style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; width: 100%; text-align: left;">{{ (filter.extend.name ||  \'l-search-type-equals\') | i18n }}</button><button type="button"style="overflow: hidden"class="btn btn-default dropdown-toggle"data-toggle="dropdown" ><span class="caret"></span><span class="sr-only"></span></button><ul class="dropdown-menu"><li><a class="clickable"ng-click="filter.extend = { id : 1, name: \'l-search-type-equals\' };">{{ \'l-search-type-equals\'  | i18n }}</a></li><li><a class="clickable"ng-click="filter.extend = { id : 2, name: \'l-search-type-matches\' };">{{ \'l-search-type-matches\'  | i18n }}</a></li><li><a class="clickable"ng-click="filter.extend = { id : 3, name: \'l-search-type-start\' };">{{ \'l-search-type-start\'  | i18n }}</a></li></ul></div>\x3c!-- stringrange --\x3e<field type="inputrange"start-maxlength="{{ filter.maxlength }}"end-maxlength="{{ filter.maxlength }}"ng-if="filter.type === \'stringrange\'"ng-model="filter.value"start-placeholder="{{ \'l-start\' | i18n }}"end-placeholder="{{ \'l-end\' | i18n }}"on-key-enter="controller.applyInternalFilter();"canclean><label>{{ filter.label | i18n }}</label></field>\x3c!-- date --\x3e<field type="date"ng-if="filter.type === \'date\'"ng-model="filter.value"on-key-enter="controller.applyInternalFilter();"placeholder="{{ filter.label | i18n }}"><label>{{ filter.label | i18n }}</label></field>\x3c!-- daterange --\x3e<field type="daterange"ng-if="filter.type === \'daterange\'"on-key-enter="controller.applyInternalFilter();"ng-model="filter.value"start-placeholder="{{ \'l-start\' | i18n }}"end-placeholder="{{ \'l-end\' | i18n }}"><label>{{ filter.label | i18n }}</label></field>\x3c!-- decimal --\x3e<field type="decimal"name-id="field_decimal"data-v-max="{{ filter.vMax }}"data-v-min="{{ filter.vMin }}"ng-if="filter.type === \'decimal\'"ng-model="filter.value"placeholder="{{ filter.label | i18n }}"data-a-dec="{{ filter.aDec }}"data-m-dec="{{ filter.mDec }}"on-key-enter="controller.applyInternalFilter();"canclean><label>{{ filter.label | i18n }}</label></field>\x3c!-- decimalrange --\x3e<field type="decimalrange"data-v-max="{{ filter.vMax }}"data-v-min="{{ filter.vMin }}"ng-if="filter.type === \'decimalrange\'"ng-model="filter.value"start-placeholder="{{ \'l-start\' | i18n }}"end-placeholder="{{ \'l-end\' | i18n }}"data-a-dec="{{ filter.aDec }}"data-m-dec="{{ filter.mDec }}"on-key-enter="controller.applyInternalFilter();"canclean><label>{{ filter.label | i18n }}</label></field>\x3c!-- integer --\x3e<field type="decimal"name-id="field_decimal"data-v-max="{{ filter.vMax }}"data-v-min="{{ filter.vMin }}"ng-if="filter.type === \'integer\'"ng-model="filter.value"placeholder="{{ filter.label | i18n }}"data-a-dec=","data-alt-dec=""data-a-sep=""data-m-dec="0"data-a-pad="false"data-l-zero="deny"on-key-enter="controller.applyInternalFilter();"canclean><label>{{ filter.label | i18n }}</label></field>\x3c!-- integerrange --\x3e<field type="decimalrange"data-v-max="{{ filter.vMax }}"data-v-min="{{ filter.vMin }}"ng-if="filter.type === \'integerrange\'"ng-model="filter.value"start-placeholder="{{ \'l-start\' | i18n }}"end-placeholder="{{ \'l-end\' | i18n }}"data-a-dec=","data-alt-dec=""data-a-sep=""data-m-dec="0"data-a-pad="false"data-l-zero="deny"on-key-enter="controller.applyInternalFilter();"canclean><label>{{ filter.label | i18n }}</label></field></div></div></div><div class="col-xs-12"style="padding: 5px 15px;"><div class="text-right" style="border-bottom: 1px dashed #ccc; padding-bottom: 5px"><button class="btn btn-sm btn-default advanced-search-btn"ng-click="controller.openCloseAdvancedSearch()">{{ \'btn-cancel\' | i18n }}</button><button class="btn btn-sm btn-primary"ng-click="controller.applyInternalFilter();">{{ \'btn-apply\' | i18n }}</button></div></div></div></div><div class="text-center"><a class="clickable"ng-click="controller.openCloseAdvancedSearch()"><span style="opacity:.8;">{{ controller.isAdvancedSearchOpen === true ? \'&#9650;\' : \'&#9660;\'}}&nbsp;</span>{{ \'btn-advanced-search\' | i18n }}</a></div></div><div class="accordion"ng-animate="\'animate-if\'"ng-if="controller.isMultiple === true"><style type="text/css" scoped="true">.accordion {padding-bottom: 15px;}accordion .panel-group {margin-top: 10px;margin-bottom: 0;}accordion .panel-group .panel {border: medium none !important;box-shadow: none !important;}accordion .panel-group .panel .panel-heading {background-color: #ebf0f0 !important;}accordion .panel-group .panel .panel-heading .panel-title {color: #777777;font-family: Arial;font-size: 13px;}accordion .panel-group .panel .panel-body {padding-top: 0;padding-bottom: 0;}accordion .panel-group .panel .panel-body .zoom-result {margin-top: 0;}</style><accordion close-others="false"><accordion-group id="foundAccordeon" ng-init="controller.isOpenFoundPanel = true" is-open="controller.isOpenFoundPanel"><accordion-heading><div class="row"><div class="{{ controller.isSelectedAllEnabled === true ? \'col-xs-4 col-sm-6\' : \'col-xs-5 col-sm-9\' }}"><span>{{ \'l-founds\' | i18n }} ({{controller.resultTotal}})</span></div><div class="text-right {{ controller.isSelectedAllEnabled === true ? \'col-xs-8 col-sm-6\' : \'col-xs-7 col-sm-3\' }}"><a class="clickable"style="padding-right: 10px"ng-if="controller.isSelectedAllEnabled === true"ng-click="controller.selectedAll($event)">{{ \'btn-select-all\' | i18n }}</a><a class="clickable"style="padding-right: 15px"ng-click="controller.invertSelected($event)">{{ \'btn-invert-select\' | i18n }}</a><i class="pull-right glyphicon" ng-class="{\'glyphicon-chevron-down\' : controller.isOpenFoundPanel, \'glyphicon-chevron-right\': !controller.isOpenFoundPanel}"></i></div></div></accordion-heading><div class="row no-gutter zoom-result" ng-class="{\'zoom-pagination\': controller.zoomResultList.length < controller.resultTotal && controller.zoomResultList.length}"><totvs-table items="controller.zoomResultList"  t-columns="controller.gridOptions.columns"  type-select="multi"  t-on-data="controller.onModelUpdated(event)"  t-on-change="controller.selectionChange(event)"  t-table="controller.zoomTable"></totvs-table><div style="height: 34px;" ng-animate="\'animate-hide\'" ng-hide="!controller.zoomResultList.length ||   controller.zoomResultList.length == controller.resultTotal"><totvs-list-pagination ng-click="controller.applyInternalFilter(true);"></totvs-list-pagination></div></div></accordion-group><accordion-group id="selectedAccordeon" ng-init="controller.isOpenSelectedPanel = false"is-open="controller.isOpenSelectedPanel"><accordion-heading><div class="row"><div class="col-xs-5 col-sm-8"><span>{{ \'l-selecteds\' | i18n }}  ({{controller.$selecteds.length}})</span></div><div class="col-xs-7 col-sm-4 text-right"><a class="clickable"style="padding-right: 15px"ng-click="controller.removeAllSelected($event)">{{ \'btn-clear-all\' | i18n }}</a><i class="pull-right glyphicon"ng-class="{\'glyphicon-chevron-down\' :  controller.isOpenSelectedPanel,\'glyphicon-chevron-right\' : !controller.isOpenSelectedPanel}"></i></div></div></accordion-heading><div id="selectedContainer" class="row" style="height: 150px"><totvs-table items="controller.$selecteds"  t-columns="controller.gridOptions.columns"  type-select="off"  t-highlight-selected="false"  t-table="controller.zoomSelectedTable"><column width="27" title="" id="check"><span style="cursor: pointer;" class="glyphicon glyphicon-trash" ng-click="controller.removeSelected(item)"></span></column></totvs-table></div></accordion-group></accordion></div><div class="row no-gutters zoom-result" ng-class="{\'zoom-pagination\' : controller.zoomResultList.length < controller.resultTotal && controller.zoomResultList.length}"ng-if="controller.isMultiple !== true"><totvs-table ng-class="{\'zoom-pagination\' : controller.zoomResultList.length < controller.resultTotal && controller.zoomResultList.length}" items="controller.zoomResultList"  t-columns="controller.gridOptions.columns"  type-select="single"  t-table="controller.zoomTable"></totvs-table><div style="height: 34px;" ng-animate="\'animate-hide\'" ng-hide="!controller.zoomResultList.length ||   controller.zoomResultList.length == controller.resultTotal"><totvs-list-pagination ng-click="controller.applyInternalFilter(true);"></totvs-list-pagination></div></div></div></totvs-modal-body><totvs-modal-footer><div ng-animate="\'animate-if\'"ng-if="controller.configuration !== false && controller.isConfigurationOpen === true"><button class="btn btn-default"ng-click="controller.openCloseConfiguration();">{{ \'btn-cancel\' | i18n }}</button><button class="btn btn-primary"ng-click="controller.saveConfiguration();">{{ \'btn-save\' | i18n }}</button></div><div ng-animate="\'animate-if\'" ng-if="controller.isConfigurationOpen !== true"><button class="btn btn-default"ng-click="controller.cancel()">{{ \'btn-cancel\' | i18n }}</button><button class="btn btn-primary"ng-click="controller.ok()">{{ \'btn-select\' | i18n }}</button></div></totvs-modal-footer>'
    })
}(),
function () {
    "use strict";

    function e(a, s, c) {
        function r(e, t) {
            var n;
            for (n in e.$attr)
                if (e.$attr.hasOwnProperty(n)) {
                    var a = e.$attr[n],
                        i = e[n];
                    if (-1 < a.indexOf("zoom")) {
                        if ("zoom-selected" === a) continue;
                        t.attr(a, i)
                    }
                }
        }
        this.pattern = function (e, t, n, a, i, o) {
            var r = "",
                l = t.label;
            t.$attr.nameId ? a.$fieldId = t.nameId : angular.isDefined(t.ngModel) && (a.$fieldId = t.ngModel.replace(/\-|\[|\./g, "_").toLowerCase(), a.$fieldId = a.$fieldId.replace(/\'|\]/g, ""));
            a.$field = i, o.attr("id", o.attr("id") || a.$fieldId), o.attr("name", o.attr("name") || a.$fieldId), l ? (a.$fieldLabel = s(l)(e), (r = n.find("label:first")).text(l), r.attr("for", a.$fieldId), r.attr("tooltip", l), r.attr("tooltip-placement", "top")) : (n.find("label:first").remove(), n.find("div.col-xs-8").removeClass());
            t.$attr.class ? n.addClass("col-xs-12") : n.addClass("col-xs-12 col-md-6");
            ! function (e, t) {
                var n, a, i;
                i = angular.element('<span class="help-inline" ng-repeat="error in $fieldErrors"></span>'), n = e.find("validator"), a = void 0, n && 0 < n.length && (e.find(".message-validate").attr("ng-class", '{"msg-error": $fieldErrors.length, "no-msg": !$fieldErrors.length}'), e.find(".input-group").attr("ng-class", '{"has-error": $fieldErrors.length, "no-error": !$fieldErrors.length}'), a = {}, angular.forEach(n, function (e) {
                    e = angular.element(e), a[e.attr("key")] = s(e.text())
                }));
                n && 0 < n.length ? t.$validationMessages = angular.copy(a) : e.find("span.message-validate").remove();
                e.find(".message-validate").append(i), e.find(".help-inline").html("{{$validationMessages[error](this)}}"), e.find("validator").remove()
            }(n, a)
        }, this.watchHasError = function (n, e, t) {
            n.$field = e.controller("ngModel") || t, n.$watchCollection("$field.$dirty && $field.$error", function (e) {
                n.$fieldErrors = [], angular.forEach(e, function (e, t) {
                    e && n.$fieldErrors.push(t)
                })
            })
        }, this.ngDisabled = function (e, t, n, a) {
            e.$watch(t.ngDisabled, function (e) {
                !0 === e ? (n.attr("disabled", !0), a.attr("disabled", !0), n.find("button").attr("disabled", !0)) : !1 === e && (n.removeAttr("disabled"), a.removeAttr("disabled"), n.find("button").removeAttr("disabled"))
            })
        }, this.canclean = function (t, e, n, a, i) {
            var o, r, l;
            t.$attr.canclean && (o = e.find(".input-group"), 0 === (r = o.find(".input-group-btn")).length && (r = angular.element('<span class="input-group-btn"></span>'), o.append(r), o.addClass("no-block")), l = angular.element('<button class="btn btn-default" bind role="button" type="button" data-ng-click="cleanValue()" tabindex=-1><span class="glyphicon glyphicon-remove"></span></button>'), t.$attr.totvsSelect || l.attr("ng-disabled", "ngDisabled()"), n.cleanValue = function () {
                if (i) return i();
                var e;
                e = "undefined" === t.canclean ? void 0 : "null" === t.canclean || "" === t.canclean ? null : t.canclean, this.control = a.controller("ngModel") || n.$field, this.control.$setViewValue(e), this.control.$render()
            }, c.bindTo(n).add({
                combo: "ctrl+del",
                allowIn: ["input"],
                callback: function (e) {
                    var t, n, a, i, o;
                    if ((t = e.srcElement).attributes.getNamedItem("canclean")) {
                        for ("undefined" === (i = t.attributes.getNamedItem("canclean").value) ? i = void 0 : "null" !== i && "" !== i || (i = null), n = t; n.className.split(" ").indexOf("input-group") < 0;) n = n.parentElement;
                        for (a = n.querySelectorAll("[canclean]"), o = 0; o < a.length; o += 1) a[o].value = i
                    }
                }
            }), r.append(l))
        }, this.zoom = function (e, t) {
            if (e.zoomService) {
                var n, a, i, o;
                if (e.$attr.totvsSelect) n = t.find(".input-group"), 0 === (a = n.find(".input-group-btn")).length && (a = angular.element('<span class="input-group-btn"></span>'), n.append(a), n.addClass("no-block")), (i = angular.element("<zoom></zoom>")).attr("zoom-selected-internal", "updateSelectModelZoom(selected, oldvalue)"), i.attr("ng-model", "zoomSelectedItem"), r(e, i), a.append(i);
                else(o = t.find("input.form-control")).attr("zoom", ""), o.attr("is-totvs-field", "true"), o.attr("zoom-selected", "zoomSelectedInternal(selected, oldvalue)"), r(e, o)
            }
        }, this.compile = function (e, t) {
            var n = t.find(".field-container");
            a(n)(e)
        }, this.addElementInTotvsField = function (e, t) {
            return t.find(".input-group").append(e)
        }, this.addAttributesInElement = function (e, t, n) {
            var a, i;
            for (a in e)
                if (e.hasOwnProperty(a)) {
                    if (-1 !== a.indexOf("$") || "ngModel" === a) continue;
                    for (i in t) t.hasOwnProperty(i) && a === i && (angular.isFunction(e[a]) ? n.attr(t.$attr[i], i + "()") : n.attr(t.$attr[i], t[i]))
                }
            return n
        }
    }
    angular.module("totvsField").service("totvsFieldService", e), e.$inject = ["$compile", "$interpolate", "hotkeys"]
}(),
function () {
    "use strict";

    function e() {
        this.getFieldName = function (e, t) {
            if (t) return /^\[(.*)/.test(e) ? e : '["' + e + '"]';
            return e
        }
    }
    angular.module("totvsGrid").service("TotvsGridService", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(v) {
        function l(e, t, n, a, i, o, r, l) {
            var s = e,
                c = t,
                d = n,
                u = a,
                p = i,
                f = o,
                g = r || !0,
                m = l || !1;
            Object.defineProperty(this, "tableId", {
                get: function () {
                    return s
                }
            }), Object.defineProperty(this, "id", {
                get: function () {
                    return c
                }
            }), Object.defineProperty(this, "title", {
                get: function () {
                    return d
                }
            }), Object.defineProperty(this, "template", {
                get: function () {
                    return u
                }
            }), Object.defineProperty(this, "width", {
                get: function () {
                    return p
                },
                set: function (e) {
                    var t = h(this.tableId);
                    e && isFinite(e) ? ($(t + " thead [data-thf='totvs-table-col-" + this.id + "']").width(e), p = e) : null == e || angular.isString(e) && "" === e.trim() ? ($(t + " thead [data-thf='totvs-table-col-" + this.id + "']").width(""), p = void 0) : v.error("If defined, the width value must be a finite number.")
                }
            }), Object.defineProperty(this, "attrs", {
                get: function () {
                    return f
                }
            }), Object.defineProperty(this, "visible", {
                get: function () {
                    return g
                },
                set: function (e) {
                    if ("boolean" == typeof e) {
                        var t = h(this.tableId);
                        e ? ($(t + " thead [data-thf='totvs-table-col-" + this.id + "']").show(), $(t + " tbody [data-thf='totvs-table-col-" + this.id + "']").show()) : ($(t + " thead [data-thf='totvs-table-col-" + this.id + "']").hide(), $(t + " tbody [data-thf='totvs-table-col-" + this.id + "']").hide()), g = e
                    } else v.error("The type of the visible property must be an boolean.")
                }
            }), Object.defineProperty(this, "pinned", {
                get: function () {
                    return m
                }
            }), Object.defineProperty(this, "position", {
                get: function () {
                    var e, t;
                    return e = h(this.tableId), t = $(e + " thead tr [data-thf='totvs-table-col-" + this.id + "']"), $(e + " thead tr [data-thf^='totvs-table-col-']:not([data-thf='totvs-table-col-check'])").index(t)
                },
                set: function (e) {
                    var t = this,
                        n = h(t.tableId);
                    !isFinite(e) || parseInt(e) < 0 ? v.error("The index must be a positive integer number.") : (e > t.position && e++, $(n + " thead tr").each(function () {
                        b($(this), t.id, e)
                    }), $(n + " tbody tr").each(function () {
                        b($(this), t.id, e)
                    }))
                }
            }), Object.preventExtensions(this)
        }

        function h(e) {
            return e && angular.isString(e) && 0 < e.length ? "totvs-table#" + e : "totvs-table"
        }

        function r(e, t) {
            return e.attr("data-thf") === t.attr("data-thf")
        }

        function b(e, t, n) {
            var a, i, o;
            a = e.find("[data-thf='totvs-table-col-" + t + "']"), i = "[data-thf^='totvs-table-col-']:not([data-thf='totvs-table-col-check'])", 0 === (o = e.find(i + ":eq(" + n + ")")).length ? r(a, o = e.find(i + ":last")) || a.detach().insertAfter(o) : r(a, o) || a.detach().insertBefore(o)
        }
        this.createNewTableColumn = function (e, t, n, a, i, o, r) {
            return new l(e, t, n, a, i, o, r)
        }, this.isTableColumn = function (e) {
            return l.isTableColumn(e)
        }, l.prototype.show = function () {
            this.visible = !0
        }, l.prototype.hide = function () {
            this.visible = !1
        }, l.prototype.setWidth = function (e) {
            this.width = e
        }, l.prototype.toJSON = function () {
            return {
                tableId: this.tableId,
                id: this.id,
                title: this.title,
                template: this.template,
                width: this.width,
                attrs: this.attrs,
                visible: this.visible,
                pinned: this.pinned,
                position: this.position
            }
        }, l.prototype.equals = function (e) {
            return void 0 !== this.id || void 0 !== this.tableId ? this.id === e.id && this.tableId === e.tableId : angular.equals(this, e)
        }, l.isTableColumn = function (e) {
            return e instanceof l
        }
    }
    angular.module("totvsTable").service("TableColumnService", e), e.$inject = ["$log"]
}(),
function () {
    "use strict";

    function e(t) {
        var o, r;
        return r = function (e, t) {
            return angular.equals(e, t)
        }, this.selectionChange = function (e) {
            var t = o.comparator || r,
                n = -1;
            angular.forEach(e.selectedItems, function (e) {
                o.$selecteds.push(e)
            }), angular.forEach(e.unselectedItems, function (e) {
                -1 !== (n = l(o.$selecteds, e, t)) && o.$selecteds.splice(n, 1)
            })
        }, this.onModelUpdated = function () {
            var e, t, n, a, i;
            for (n = o.comparator || r, e = 0; e < o.$selecteds.length; e++)
                for (a = o.$selecteds[e], t = 0; t < o.zoomResultList.length; t++)
                    if (n(a, i = o.zoomResultList[t])) {
                        i.$selected = !0;
                        break
                    }
        }, this.removeSelected = function (e) {
            var t, n;
            t = o.comparator || r, -1 !== (n = l(o.$selecteds, e, t)) && o.$selecteds.splice(n, 1), "object" == typeof e && (e.$selected = !1)
        }, this.removeAllSelected = function (e) {
            e.preventDefault(), e.stopPropagation(), this.$selecteds = [];
            for (var t = 0; t < o.zoomResultList.length; t++) o.zoomResultList[t].$selected = !1
        }, this.selectedAll = function (e) {
            var t;
            e.preventDefault(), e.stopPropagation();
            for (var n = 0; n < o.zoomResultList.length; n++)(t = o.zoomResultList[n]).$selected || (t.$selected = !0, o.$selecteds.push(t))
        }, this.invertSelected = function (e) {
            e.preventDefault(), e.stopPropagation();
            var t, n, a, i = o.comparator || r;
            for (t = 0; t < o.zoomResultList.length; t++)(a = o.zoomResultList[t]).$selected ? (a.$selected = !1, -1 !== (n = l(o.$selecteds, a, i)) && o.$selecteds.splice(n, 1)) : (a.$selected = !0, o.$selecteds.push(a))
        }, this.reloadSelectedGrid = function () {
            var e;
            o.gridSelectedOptions = o.gridSelectedOptions || {}, e = angular.copy(o.gridOptions.columnDefs), o.gridSelectedOptions.columnDefs = e
        }, this.loadSelectedGrid = function (e) {
            e && (e.objSelected ? this.$selecteds = angular.copy(e.objSelected) : this.$selecteds = [e]), this.reloadSelectedGrid()
        }, this.initializeMultiple = function (e, t, n) {
            o = e, this.loadSelectedGrid(n), o.isSelectedAllEnabled = !0
        }, this.getZoomMultipleResult = function (e) {
            return e && 0 < e.length ? new n(angular.copy(e), angular.copy(e.length), t) : void 0
        }, this.revertOnCancel = function (e) {
            e && e.objSelected && (o.$selecteds = angular.copy(e.objSelected))
        }, this
    }

    function n(e, t, n) {
        this.objSelected = e, this.size = t, this.i18nFilter = n
    }

    function l(e, t, n) {
        for (var a = 0; a < e.length; a++)
            if (n(e[a], t)) return a;
        return -1
    }
    angular.module("zoom").service("zoomMultipleService", e), e.$inject = ["i18nFilter"], n.prototype.toString = function () {
        if (this.objSelected) {
            var e = this.i18nFilter ? this.i18nFilter("l-selecteds") : "selected";
            return this.objSelected.length + " - " + e
        }
        return this
    }
}(),
function () {
    "use strict";
    angular.module("totvsExecution").value("duScrollGreedy", !0).value("duScrollBottomSpy", !0)
}(),
function () {
    "use strict";

    function e() {
        var t = this;
        t.onHold = function (e) {
            e.preventDefault(), t.ttHandle && t.ttHandle.show()
        }, t.quote = function (e) {
            if (!angular.isUndefined(e)) return '"' + e + '"'
        }
    }
    angular.module("totvsButton").controller("TotvsButtonController", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(e, t) {
        $.fn.hasScrollBar = function () {
            this.get(0) && this.get(0).scrollHeight > this.height() + 30 ? ($("#div-execution-navigation").get(0).style.display = "block", $("#div-execution-content").removeClass("col-lg-12 col-md-12").addClass("col-lg-9 col-md-9")) : ($("#div-execution-navigation").get(0).style.display = "none", $("#div-execution-content").removeClass("col-lg-9 col-md-9").addClass("col-lg-12 col-md-12"))
        }, t(function () {
            e.find(".page-execution-navigation").affix({
                offset: {
                    top: 130
                },
                target: angular.element(".page-wrapper")
            }).on("affixed.bs.affix", function (e) {
                e.currentTarget.style.marginTop = "-130px"
            }).on("affixed-top.bs.affix", function (e) {
                e.currentTarget.style.marginTop = "0"
            }), $(".container-fluid").hasScrollBar()
        }, 500), $(window).resize(function () {
            $(".container-fluid").hasScrollBar()
        })
    }
    angular.module("totvsExecution").controller("TotvsExecutionController", e), e.$inject = ["$element", "$timeout"]
}(),
function () {
    "use strict";

    function e(d, u, s, p, r, e, c, a, t, n, i, l, o) {
        var f = this;

        function g(e, t) {
            var n = !1;
            return e && (n = $.contains(e[0], t)), n
        }

        function m(e) {
            var t = f.grid,
                n = e.closest("tr"),
                a = $("td", n).index(e);
            if ("$selected" === t.columns[a].column) {
                var i = t.dataItem(n);
                i.$selected = !i.$selected, f.selectIndex(i)
            }
        }

        function v() {
            var e = d.useHyphenatedProperties;
            return null != e ? e : i.useHyphenatedProperties()
        }
        f.detailHTML = void 0, f.detailHTMLsize = void 0, f.columns = [], f.groups = [], f.addColumn = function (e) {
            f.columns.push(e)
        }, f.addGroup = function (e) {
            f.groups.push(e)
        }, f.columnResize = function (e) {
            var t, n, a = e.column,
                i = e.newWidth;
            if (a.maxWidth && i > a.maxWidth) {
                for (t = f.grid.getOptions(), n = 0; n < t.columns.length; n++) t.columns[n].field === a.field && (t.columns[n].width = a.maxWidth);
                f.grid.reorderColumn(1, f.grid.columns[0])
            }
            if (a.minWidth && i < a.minWidth) {
                for (t = angular.extend({}, f.grid.getOptions()), n = 0; n < t.columns.length; n++) t.columns[n].field === a.field && (t.columns[n].width = a.minWidth);
                f.grid.reorderColumn(1, f.grid.columns[0])
            }
        }, f.onChange = function (e) {
            var t = f.grid,
                n = t.select();
            u(function () {
                ! function (e, t) {
                    var n = "" === f.attrs.addSelectColumn,
                        a = "separate" === f.attrs.addSelectColumn;
                    if (function (e, t) {
                            if (e)
                                for (var n = t.dataSource.data(), a = 0; a < n.length; a++) n[a].$selected = !1, a < f.currentdata.length && (f.currentdata[a].$selected = !1)
                        }(n, e), !a) {
                        for (var i = [], o = 0; o < t.length; o++)
                            if (!g(e.lockedContent, t[o]) && (s = t[o], $(s, s).is("tr"))) {
                                var r = e.dataItem(t[o]);
                                if (n) {
                                    r.$selected = !0;
                                    var l = e.dataSource.indexOf(r);
                                    o < f.currentdata.length && (f.currentdata[l].$selected = !0)
                                }
                                i.push(r)
                            }
                        f.updateSelection(i)
                    }
                    var s
                }(t, n), d.onChange({
                    event: e
                })
            })
        }, f.setupCheckEvent = function () {
            var a = f.grid;
            "separate" === f.attrs.addSelectColumn && ($(a.lockedContent).on("click", "td", function () {
                m($(this))
            }), $(a.lockedContent).on("keydown", function (e) {
                var t = 13 === (e.keyCode ? e.keyCode : e.which),
                    n = $.contains(a.lockedContent[0], a.current()[0]);
                t && n && (m($(a.current())), d.onChange({
                    event: void 0
                }))
            }))
        }, f.updateSelection = function (e) {
            d.gridOptions && (d.gridOptions.selectedRows = e, d.gridOptions.selectionChanged && d.gridOptions.selectionChanged()), void 0 !== f.attrs.gridSelectedItems && (d.gridSelectedItems = e), void 0 !== f.attrs.gridSelectedItem && (d.gridSelectedItem = 1 === e.length ? e[0] : void 0)
        }, f.selectIndex = function (e) {
            for (var t = f.grid, n = "" === f.attrs.addSelectColumn, a = 0 <= f.grid.options.selectable.indexOf("multiple"), i = t.dataSource.data(), o = [], r = e.$selected, l = [], s = 0; s < i.length; s++)(a || i[s] === e) && i[s].$selected ? l.push(i[s]) : (i[s].$selected = !1, f.currentdata[s].$selected = !1);
            var c = t.dataSource.indexOf(e);
            e.$selected = r, f.currentdata[c].$selected = r, n && f.grid.items().each(function (e, t) {
                f.grid.dataItem(t).$selected && o.push(t)
            }), n ? (f.grid.clearSelection(), o.length && f.grid.select(o)) : u(function () {
                f.updateSelection(l)
            })
        }, f.onEdit = function (e) {
            var t = f.grid,
                n = e.container.index();
            if (void 0 !== f.detailHTML && n--, n -= t.dataSource.group().length, f.grid.lockedContent && !$.contains(f.grid.lockedContent[0], e.container[0]))
                for (var a = 0; a < t.columns.length; a++) {
                    t.columns[a].locked && n++
                }
            var i = t.columns[n];
            if (d.editable && i.editable) d.onEdit({
                event: e,
                column: i
            });
            else {
                if ("$selected" === i.column && "separate" === d.addSelectColumn) {
                    var o = e.model;
                    o.$selected = !o.$selected, f.selectIndex(o)
                }
                var r = t.content[0].scrollTop,
                    l = t.content[0].scrollLeft;
                t.closeCell(), t.table.focus(), t.content[0].scrollTop = r, t.content[0].scrollLeft = l
            }
        }, f.onSave = function (e) {
            var t = f.grid,
                n = e.container.index();
            if (void 0 !== f.detailHTML && n--, n -= t.dataSource.group().length, f.grid.lockedContent && !$.contains(f.grid.lockedContent[0], e.container[0]))
                for (var a = 0; a < t.columns.length; a++) t.columns[a].locked && n++;
            var i = t.columns[n],
                o = e.values[i.field];
            if (e.values.hasOwnProperty(i.field)) {
                var r = t.dataSource.indexOf(e.model),
                    l = f.currentdata[r],
                    s = t.select();
                if (l[i.column] !== o) {
                    if (d.onSave({
                            event: e,
                            column: i,
                            value: o,
                            currentIndex: r,
                            original: l
                        }), !e.isDefaultPrevented()) {
                        var c = ".";
                        /^\[(.*)/.test(i.field) && (c = ""), p("obj" + c + i.field).assign({
                            obj: l
                        }, o)
                    }
                    t.select(s)
                }
            }
        }, f.detailInit = function () {
            if (void 0 !== f.detailHTML) return function (e) {
                var t = angular.element("<div>" + f.detailHTML + "</div>"),
                    n = d.$parent.$new();
                if (n.dataItem = e.data.toJSON(), n.model = e.data, t.appendTo(e.detailCell), r(t)(n), "table" === f.detailHTMLsize) {
                    var a = function () {
                            t.width(e.detailCell.closest(".k-grid").children(".k-grid-header").width() + e.detailCell.width() - e.detailCell.innerWidth()), t.css("margin-left", -e.detailCell.prev(".k-hierarchy-cell").outerWidth())
                        },
                        i = function () {
                            t.css("padding-left", e.sender.content.scrollLeft())
                        };
                    a(), e.sender.content.scroll(i), $(window).resize(a), t.bind("$destroy", function () {
                        e.sender.content.off("scroll", i), $(window).off("resize", a)
                    })
                }
            }
        }, f.createTemplateFilter = function (l) {
            return function (e) {
                var t = d.$new();
                t.dataItem = e.toJSON ? e.toJSON() : e;
                var n = p("dataItem" + l.field)(t);
                if (null == n || void 0 === n) return "";
                var a, i, o, r = s(l.filter);
                return 0 < l.filterParams.length && (a = l.filterParams[0].trim()), 1 < l.filterParams.length && (i = l.filterParams[1].trim()), 2 < l.filterParams.length && (o = l.filterParams[2].trim()), r(n, a, i, o)
            }
        }, f.createTemplateOptions = function (a) {
            return function (e) {
                var t = d.$new();
                t.dataItem = e.toJSON ? e.toJSON() : e;
                var n = p("dataItem" + a.field)(t);
                return a.options[n]
            }
        }, f.createTemplateColumnEditor = function (o) {
            return function (e, n) {
                var t = angular.element(o.editorTemplate);
                t.attr("name", n.field), t.attr("ng-model", "data.value"), t.addClass("k-input"), "INPUT" === t[0].nodeName && t.addClass("k-textbox");
                var a = d.$parent.$new();
                a.dataItem = n.model.toJSON(), a.model = n.model, a.data = {
                    value: n.model.get(n.field)
                }, (t = r(t)(a)).appendTo(e);
                var i = a.$watch("data.value", function (e, t) {
                    e !== t && n.model.set(n.field, e)
                });
                t.bind("$destroy", function () {
                    i()
                })
            }
        }, f.createOptionsColumnEditor = function (i) {
            return function (e) {
                var t = angular.element("<input></input>");
                t.attr("data-bind", "value:" + i.field), t.appendTo(e);
                var n = [];
                for (var a in i.options) i.options.hasOwnProperty(a) && n.push({
                    id: a,
                    name: i.options[a]
                });
                t.kendoDropDownList({
                    dataValueField: "id",
                    dataTextField: "name",
                    dataSource: n
                })
            }
        }, f.createSelectColumnEditor = function (s) {
            return function (e, i) {
                var t = angular.element("<input></input>");
                t.appendTo(e);
                var n, o = c.get(s.selectService),
                    a = {};
                a['["' + s.selectId + '"]'] = {}, s.selectDescription && (a['["' + s.selectDescription + '"]'] = {});
                var r = {
                        read: function (t) {
                            var e;
                            if (t.data.filter) {
                                var n = "";
                                t.data.filter.filters && 0 < t.data.filter.filters.length && (n = t.data.filter.filters[0].value);
                                var a = {
                                    property: s.selectDescription || s.selectId
                                };
                                (e = o.applyFilter({
                                    init: s.selectInit ? s.selectInit() : void 0,
                                    disclaimers: [{
                                        property: a.property,
                                        value: n
                                    }],
                                    selectedFilter: a,
                                    selectedFilterValue: n,
                                    more: !1,
                                    isAdvanced: !1,
                                    isSelectValue: !0
                                })) && e.then ? e.then(function (e) {
                                    t.success(e)
                                }) : t.error()
                            } else(e = o.getObjectFromValue(i.model[s.column], s.selectInit ? s.selectInit() : void 0)) && e.then ? e.then(function (e) {
                                t.success(e)
                            }) : t.error()
                        }
                    },
                    l = {
                        autoBind: !1,
                        clearButton: !1,
                        dataValueField: '["' + s.selectId + '"]',
                        dataTextField: '["' + s.selectId + '"]',
                        filter: "custom",
                        change: function () {
                            n.dataSource.get(n.value()) && (i.model.set(s.field, n.value()), n.text(n.value()))
                        },
                        dataSource: new kendo.data.DataSource({
                            serverFiltering: !0,
                            schema: {
                                model: {
                                    id: '["' + s.selectId + '"]',
                                    fields: a
                                }
                            },
                            transport: r
                        })
                    };
                s.selectDescription && (l.dataTextField = '["' + s.selectDescription + '"]', l.template = '<span>#: data["' + s.selectId + '"] # - #: data["' + s.selectDescription + '"] #</span>'), t.kendoComboBox(l), (n = t.data("kendoComboBox")).text(i.model[s.column])
            }
        }, f.createBooleanColumnEditor = function (n) {
            return function (e) {
                var t = angular.element('<input type="checkbox"></input>');
                t.attr("data-bind", "checked:" + n.field), t.appendTo(e)
            }
        }, f.createCurrencyColumnEditor = function (a) {
            return function (e) {
                var t = angular.element('<input type="number"></input>');
                t.attr("data-bind", "value:" + a.field), t.appendTo(e);
                var n = {
                    format: "c",
                    spinners: !1
                };
                1 < a.filterParams.length && a.filterParams[1] && (n.decimals = a.filterParams[1].trim()), t.kendoNumericTextBox(n)
            }
        }, f.createDecimalColumnEditor = function (a) {
            return function (e) {
                var t = angular.element('<input type="number"></input>');
                t.attr("data-bind", "value:" + a.field), t.appendTo(e);
                var n = {
                    format: "n",
                    spinners: !1
                };
                0 < a.filterParams.length && a.filterParams[0] && (n.decimals = a.filterParams[0].trim()), t.kendoNumericTextBox(n)
            }
        }, f.getKendoDateFormat = function (e) {
            return n.getKendoDateFormat(e)
        }, f.createDateColumnEditor = function (o) {
            return function (e, t) {
                var n = {};
                0 < o.filterParams.length && o.filterParams[0] && (n.format = f.getKendoDateFormat(o.filterParams[0].trim()));
                var a = t.model[o.column];
                "number" == typeof a && (t.model[o.column] = new Date(a));
                var i = angular.element("<input></input>");
                i.attr("data-bind", "value:" + o.field), i.appendTo(e), i.kendoDatePicker(n)
            }
        }, f.createFooterTemplate = function (r) {
            return function (e) {
                for (var t = s("i18n"), n = "", a = r.totals.split(","), i = 0; i < a.length; i++)
                    if (a[i] = a[i].trim(), 0 < i && (n += "<br>"), 1 < a.length && (n = n + t("l-total-" + a[i]) + ": "), "count" === a[i]) n += e[r.field][a[i]];
                    else {
                        var o = {};
                        o[r.column] = e[r.field][a[i]], n += r.template(o)
                    }
                return n
            }
        }, f.createHeaderTemplate = function (a) {
            return function (e) {
                var t = a.title + ": ",
                    n = {};
                if (n[a.column] = e.value, angular.isFunction(a.template)) t += a.template(n);
                else if (angular.isString(a.template)) {
                    t += kendo.template(a.template)({
                        data: n
                    })
                } else t += e.value;
                return t
            }
        }, f.validateColumn = function (e) {
            e.template || (e.filter && (e.template = f.createTemplateFilter(e)), e.options && (e.template = f.createTemplateOptions(e))), !e.groupHeaderTemplate && e.template && (e.groupHeaderTemplate = f.createHeaderTemplate(e)), e.editable && e.editorTemplate && (e.editor = f.createTemplateColumnEditor(e)), !e.editable || e.editorTemplate || e.editor || (e.options ? e.editor = f.createOptionsColumnEditor(e) : e.selectId && e.selectService ? e.editor = f.createSelectColumnEditor(e) : e.filter && ("booleanI18N" === e.filter && (e.editor = f.createBooleanColumnEditor(e)), "currency" === e.filter && (e.editor = f.createCurrencyColumnEditor(e)), "number" === e.filter && (e.editor = f.createDecimalColumnEditor(e)), "date" === e.filter && (e.editor = f.createDateColumnEditor(e))))
        }, f.getColumns = function () {
            var e, t = s("i18n"),
                n = [],
                a = v();
            if (f.columns.length) {
                void 0 !== f.attrs.addSelectColumn && (e = {
                    column: "$selected",
                    field: "$selected",
                    editable: !1,
                    locked: !0,
                    lockable: !1,
                    width: 40,
                    title: t("Sel"),
                    attributes: {
                        style: "text-align: center;"
                    },
                    template: '<span class="glyphicon" ng-class="{\'glyphicon-check\':dataItem.$selected, \'glyphicon-unchecked\':!dataItem.$selected}" aria-hidden="true"></span>'
                }, n.push(e)), f.fields = {}, f.aggregates = [];
                for (var i = 0; i < f.columns.length; i++) {
                    if (e = f.columns[i], f.fields[e.field] = {
                            editable: e.editable
                        }, f.validateColumn(e), !e.headerTemplate && e.editable && (e.headerTemplate = "<span ng-if=\"showHeaderEditIcon('" + e.field.replace(/'/g, "\\'") + '\')" class="glyphicon glyphicon-edit" style="font-size: x-small;" aria-hidden="true">&nbsp;</span>' + e.title), e.field = l.getFieldName(e.field, a), e.totals) {
                        for (var o = e.totals.split(","), r = 0; r < o.length; r++) f.aggregates.push({
                            field: e.field,
                            aggregate: o[r].trim()
                        });
                        0 < o.length && (e.footerTemplate = f.createFooterTemplate(e), e.footerAttributes = e.attributes)
                    }
                    n.push(e)
                }
            }
            return n
        }, f.getDataSource = function () {
            var e = {
                change: function (e) {
                    var t;
                    if ("add" === e.action)
                        for (var n = 0; n < e.items.length; n++) t = e.items[n], f.currentdata.splice(e.index + n, 1, t.toJSON());
                    var a = e.sender;
                    if (function (a) {
                            var o = angular.copy(a.group());

                            function r(e, t, n) {
                                n[t].hideGrouped && e.hideColumn(t)
                            }(function () {
                                for (var e = !1, t = 0; t < o.length; t++) {
                                    var n = o[t].field;
                                    a.options.schema.model.fields.hasOwnProperty(n) || 0 <= n.indexOf("'") && (o[t].field = n.replace(/'/g, '"'), e = !0), v() && n && -1 === n.indexOf("['") && -1 === n.indexOf('["') && (o[t].field = '["' + n + '"]', e = !0)
                                }
                                e && a.group(o)
                            })(), f.$autoHiddenColumns || (f.$autoHiddenColumns = {}, f.$autoHiddenColumns.columns = []);
                            f.$autoHiddenColumns.autoHideTimeout && u.cancel(f.$autoHiddenColumns.autoHideTimeout);
                            f.$autoHiddenColumns.autoHideTimeout = u(function () {
                                var e, t, n, a = {},
                                    i = f.columns;
                                for (e = 0; e < i.length; e++) a[i[e].field] = i[e];
                                for (e = 0; e < f.$autoHiddenColumns.columns.length; e++) - 1 === o.indexOf(f.$autoHiddenColumns.columns[e]) && (t = f.grid, n = f.$autoHiddenColumns.columns[e].field, t.showColumn(n), f.$autoHiddenColumns.columns.splice(e, 1), e--);
                                for (e = 0; e < o.length; e++) - 1 === f.$autoHiddenColumns.columns.indexOf(o[e]) && (r(f.grid, o[e].field, a), f.$autoHiddenColumns.columns.push(o[e]));
                                delete f.$autoHiddenColumns.autoHideTimeout
                            })
                        }(a), void 0 !== f.attrs.gridDirtyItems) {
                        var i = a.data();
                        u(function () {
                            d.gridDirtyItems = [];
                            for (var e = 0; e < i.length; e++) i[e].dirty && d.gridDirtyItems.push(i[e])
                        })
                    }
                },
                group: f.groups
            };
            return f.fields && (e.schema = {
                model: {
                    fields: f.fields
                }
            }), f.aggregates && 0 < f.aggregates.length && (e.aggregate = f.aggregates), new kendo.data.DataSource(e)
        }, f.setData = function (e) {
            if (f.currentdata = e, function () {
                    void 0 !== f.attrs.gridDirtyItems && (d.gridDirtyItems = []);
                    void 0 !== f.attrs.gridSelectedItems && (d.gridSelectedItems = []);
                    void 0 !== f.attrs.gridSelectedItem && (d.gridSelectedItem = void 0)
                }(), d.onData({
                    data: e
                }), f.grid.dataSource.data(e), $(f.element).is(":visible")) {
                if (e && 0 < e.length && ("true" === d.autoResizeColumn && !f.started || "always" === d.autoResizeColumn)) {
                    f.started = !0;
                    for (var t = 0; t < f.grid.columns.length; t++) f.grid.autoFitColumn(t)
                }
                "true" === (d.autoResizeContent || "true") && f.resizeEvent && f.resizeEvent()
            }
        }, f.createValueGetterFunctionTemplate = function (t) {
            return function (e) {
                return t.valueGetter({
                    data: e
                })
            }
        }, f.createValueGetterStringTemplate = function (e) {
            var t = p(e.valueGetter);
            return function (e) {
                return t({
                    data: e
                })
            }
        }, f.buildColumnObject = function (e) {
            return {
                title: e.headerName,
                width: e.width ? parseInt(e.width) : void 0,
                minWidth: e.minWidth ? parseInt(e.minWidth) : void 0,
                maxWidth: e.maxWidth ? parseInt(e.maxWidth) : void 0,
                field: e.field,
                column: e.field,
                lockable: !0
            }
        }, f.buildColumn = function (e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t],
                    a = f.buildColumnObject(n);
                angular.isFunction(n.valueGetter) && (a.template = f.createValueGetterFunctionTemplate(n)), angular.isString(n.valueGetter) && (a.template = f.createValueGetterStringTemplate(n)), f.addColumn(a)
            }
        }, f.trataGridOptions = function (e) {
            if (e && e.columnDefs) {
                a.warn("Deprecated: gridOptions.columnDefs use gridOptions.columns");
                var t = e.columnDefs;
                f.buildColumn(t), delete e.columnDefs
            }
            if (e && e.columns) {
                var n = angular.copy(e.columns);
                f.columns = f.columns.concat(n), delete e.columns
            }
            e.hasOwnProperty("enableColResize") && (a.warn("Deprecated: gridOptions.enableColResize use gridOptions.resizable"), e.resizable = e.enableColResize, delete e.enableColResize), e.hasOwnProperty("enableSorting") && (a.warn("Deprecated: gridOptions.enableSorting use gridOptions.sortable"), e.sortable = e.enableSorting, delete e.enableSorting), e.hasOwnProperty("rowSelection") && (a.warn("Deprecated: gridOptions.rowSelection use gridOptions.selectable"), "single" === e.rowSelection && (e.selectable = "single, row"), "multiple" === e.rowSelection && (e.selectable = "multiple, row"), delete e.rowSelection)
        }, f.doResize = function (r) {
            var t, e, l = r.parents("div.page-wrapper");
            l.css("min-height", "100%"), t = function () {
                var e, t = 0,
                    n = angular.element("div.more-results > a"),
                    a = 0 < n.length;
                if ($(r).is(":visible")) {
                    if (f.grid.resize(), $(r).parents().each(function () {
                            this.scrollHeight !== this.clientHeight && 0 !== this.clientHeight && (t = t + this.scrollHeight - this.clientHeight, t = a ? t - n.outerHeight() : t)
                        }), e = l.height() + r.height() - t, l.children().each(function () {
                            e -= $(this).height()
                        }), !isNaN(d.gridHeight)) {
                        var i = parseInt(d.gridHeight);
                        e = e < i ? i : e
                    }
                    if (!(e < 40) && (r.height(e - 1), f.grid.resize(!0), "true" === d.autoResizeColumn && 0 < f.grid.dataSource.total() && !f.started))
                        for (var o = 0; o < f.grid.columns.length; o++) f.grid.autoFitColumn(o)
                }
            }, e = function () {
                u(function () {
                    var e = o.getBrowser();
                    t(), "Chrome" !== e.name && "IE" !== e.name || t()
                })
            }, $(window).on("resize", e), d.$on("$destroy", function () {
                $(window).off("resize", e)
            }), u(function () {
                e(), f.resizeEvent = function () {
                    u(t)
                }
            }, 50)
        }
    }
    angular.module("totvsGrid").controller("TotvsGridController", e), e.$inject = ["$scope", "$timeout", "$filter", "$parse", "$compile", "$locale", "$injector", "$log", "$window", "TotvsUtilsKendoService", "TotvsGrid", "TotvsGridService", "totvs.utils.Service"]
}(),
function () {
    "use strict";

    function e() {
        var s, c, d;
        this.constructor = function (e, t, n, a) {
            s = e, t, c = n, d = a
        }, this.keyPress = function () {
            d.keypress(function (e) {
                var t;
                t = parseInt(e.key), (isNaN(t) || parseInt(Number(t)) !== t || isNaN(parseInt(t, 10))) && e.preventDefault()
            })
        }, this.keyUp = function () {
            d.keyup(function (e) {
                var t, n, a, i, o = parseInt(c.$viewValue),
                    r = e.key,
                    l = parseInt(d.val());
                "Up" === r ? (i = l, (a = o += 1) <= s.max || !s.max && 0 <= a ? c.$setViewValue(parseInt(a)) : (isNaN(i) || 0 === i || i < s.min) && (s.min ? c.$setViewValue(parseInt(s.min)) : c.$setViewValue(1))) : "Down" === r && (n = l, (t = o -= 1) >= s.min || !s.min && 0 <= t ? c.$setViewValue(t) : n > s.max && c.$setViewValue(parseInt(s.max)))
            })
        }
    }
    angular.module("totvsNumber").controller("TotvsNumberController", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(e, t, n, a, i) {
        var o = this;

        function r(e, t) {
            var n, a;
            a = function (e, t) {
                for (o.repeatCycleItems = new Array(0), n = 0; n < e; n++) o.repeatCycleItems[n] = {
                    value: n + 1,
                    label: n + 1 + " " + (0 === n ? t[0] : t[1])
                }
            }, "D" === e ? a(29, [o.translations.day, o.translations.days]) : "W" === e ? a(29, [o.translations.week, o.translations.weeks]) : "M" === e && a(12, [o.translations.month, o.translations.months]), t && (o.config.repeatCycle = 1, o.config.repeatWeekDays = {}, o.config.repeatMonthDay = {
                day: 1,
                last: "false"
            })
        }
        o.config = n, o.translations = a, o.repeatCycleItems = [], o.changeRepeatCycle = r, o.save = function () {
                (function () {
                    var e = !1;
                    o.config.repeatTime || (t.$broadcast(i.showNotification, {
                        type: "error",
                        detail: o.translations.msgSelectTimeExecutions
                    }), e = !0);
                    "W" === o.config.repeatType && (o.config.repeatWeekDays.sunday || o.config.repeatWeekDays.monday || o.config.repeatWeekDays.tuesday || o.config.repeatWeekDays.wednesday || o.config.repeatWeekDays.thursday || o.config.repeatWeekDays.friday || o.config.repeatWeekDays.saturday || (t.$broadcast(i.showNotification, {
                        type: "error",
                        detail: o.translations.msgSelectLeastOneDayForExecutions
                    }), e = !0));
                    "DATE" === o.config.repeatFinish && (o.config.repeatFinishDate ? o.config.repeatFinishDate < new Date && (t.$broadcast(i.showNotification, {
                        type: "error",
                        detail: o.translations.msgSelectDateGreaterThanCurrentDateEndExecutions
                    }), e = !0) : (t.$broadcast(i.showNotification, {
                        type: "error",
                        detail: o.translations.msgSelectDateEndExecutions
                    }), e = !0));
                    return !e
                })() && e.close()
            }, o.close = function () {
                e.dismiss()
            }, o.config.repeatTime = o.config.repeatTime || o.config.time, o.periods = [], o.executeOptions = [], o.daysOfMonth = [], r(o.config.repeatType, !1), o.periods = [{
                value: "D",
                label: a.repeatDaily
            }, {
                value: "W",
                label: a.repeatWeekly
            }, {
                value: "M",
                label: a.repeatMonthly
            }], o.executeOptions = [{
                value: "FOREVER",
                label: a.forever
            }, {
                value: "DATE",
                label: a.untilToDate
            }],
            function () {
                for (var e = 1; e < 31; e++) o.daysOfMonth[e] = {
                    value: e,
                    label: "" + e
                }
            }()
    }
    angular.module("totvsSchedule").controller("TotvsScheduleController", e), e.$inject = ["$modalInstance", "$rootScope", "config", "translations", "TOTVSEvent", "totvsScheduleConstant", "TotvsKendoCulture"]
}(),
function () {
    "use strict";

    function e(a, r, s) {
        var c = this,
            d = 0;

        function e() {
            return c.items.filter(function (e) {
                return e.$selected
            })
        }

        function t() {
            return c.items
        }

        function n() {
            if (a.tOnData && angular.isFunction(a.tOnData)) {
                var e = {
                    sender: c.api,
                    data: c.items
                };
                a.tOnData({
                    event: e
                })
            }
        }

        function l(e, t) {
            if (a.tOnChange && angular.isFunction(a.tOnChange)) {
                var n = {
                    sender: c.api,
                    selectedItems: e,
                    unselectedItems: t
                };
                a.tOnChange({
                    event: n
                })
            }
        }
        c.addColumn = function (e, t, n, a, i, o, r) {
            var l;
            e = e || ++d, l = s.createNewTableColumn(c.tableId, e, t, n, a, i, o, r), c.columns.push(l)
        }, c.hasLegacyColumns = function () {
            return c.elementColumns && 0 < c.elementColumns.length
        }, c.onClick = function (t, e) {
            var n = [],
                a = [];
            if (c.selectable === r.SELECTION_TYPE.SINGLE) {
                var i = !e || e.target.checked,
                    o = !t.hasOwnProperty("$selected") || !t.$selected;
                i && angular.forEach(c.items, function (e) {
                    e !== t && (e.$selected = !1, n.push(e))
                }), t.$selected = o && i
            } else {
                if (c.selectable !== r.SELECTION_TYPE.MULTI) return;
                t.$selected = !t.hasOwnProperty("$selected") || !t.$selected
            }
            t.$selected ? (t.$selected = !0, a.push(t)) : (t.$selected = !1, n.push(t));
            l(a, n)
        }, c.onDoubleClick = function (e) {
            var t = {};
            t[c.itemAlias] = e, a.tDoubleClick(t)
        }, c.selectAll = function () {
            var t = [],
                n = [];
            angular.forEach(c.items, function (e) {
                !e.$selected && c.isAllSelected ? (e.$selected = !0, t.push(e)) : e.$selected && !c.isAllSelected && (e.$selected = !1, n.push(e))
            }), l(t, n)
        }, c.ensureColumnsOrder = function () {
            angular.forEach(c.columns, function (e) {
                "check" !== e.id && (e.position = e.position)
            })
        }, c.getItemTemplate = function (e, t) {
            var n = c.columns[t];
            if (n && angular.isFunction(n.template)) return n.template({
                data: e
            });
            return n.template
        }, c.items = [], c.columns = [], c.isAllSelected = !1, c.api = {
            columns: c.columns,
            getItems: t,
            getSelectedItems: e
        }, a.$watch("items", function (e) {
            c.items = e, n()
        }), a.$watch("tItems", function (e) {
            c.items = e, n()
        })
    }
    angular.module("totvsTable").controller("TotvsTableController", e), e.$inject = ["$scope", "totvsTableConstant", "TableColumnService"]
}(),
function () {
    "use strict";

    function e(e) {
        var a, i, o;
        i = (a = this).tabs = e.tabs = [], a.select = function (e) {
            var t, n;
            for (t = 0; t < i.length; t++)(n = i[t]).active && n !== e && (n.active = !1, e.onDeselect && n.onDeselect());
            e.active = !0, e.onSelect && e.onSelect()
        }, a.addTab = function (e) {
            i.push(e), 1 === i.length ? e.active = !0 : e.active && a.select(e)
        }, a.removeTab = function (e) {
            var t, n;
            t = i.indexOf(e), e.active && 1 < i.length && !o && (n = t === i.length - 1 ? t - 1 : t + 1, a.select(i[n])), i.splice(t, 1)
        }, e.$on("$destroy", function () {
            o = !0
        })
    }
    angular.module("totvsTabset").controller("TotvsTabsetController", e), e.$inject = ["$scope"]
}(),
function () {
    "use strict";

    function e(o, n, r, a, i, e, t, l, s, c, d, u, p, f, g, m, v) {
        var h, b = this,
            y = v.getBrowser();
        (this.propertyFields = [], this.resultTotal = 0, this.zoomResultList = [], this.isConfigurationOpen = !1, this.isConfigurationLocal = !0, this.isConfigurationEnabled = !1, b.isAdvancedSearchOpen = !1, this.isAdvancedSearchEnabled = !1, this.localStorageGroup = "com.totvs.html.framework.zoom.config.", this.isLocalStorageAvaiable = void 0 !== i.localStorage, this.isMultiple = !0 === d, this.isOpenFoundPanel = !0, this.isOpenSelectedPanel = !1, h = n.get(t), angular.extend(this, h), this.isSelectValue && (this.zoomResultList = []), JSON.stringify(f) !== JSON.stringify(s()) && w(s, b.isAdvancedSearchOpen, void 0, {}, !1, b.isAdvancedSearchOpen), "MSIE" !== y.name || "9" !== y.version) && window.matchMedia("(orientation: portrait)").addListener(function (e) {
            e.matches ? ($("div.modal-body-zoom").css("width", ""), $("div.modal-body-zoom").css("display", "")) : $("div.modal-body-zoom").css("width", "100%")
        });

        function w(e, t, n, a, i, o) {
            var r = b.applyFilter({
                init: e(),
                disclaimers: n,
                selectedFilter: !0 === t ? void 0 : a,
                selectedFilterValue: !0 === t ? void 0 : a.value,
                more: i,
                isAdvanced: o
            });
            r && r.then && r.then(function () {
                var e;
                e = k(function () {
                    var e, t, n = [],
                        a = b.zoomTable && b.zoomTable.columns ? b.zoomTable.columns.length : 0;
                    for (t = 0; t < a; t++) e = {
                        column: b.zoomTable.columns[t],
                        title: b.zoomTable.columns[t].title,
                        actualWidth: b.zoomTable.columns[t].width,
                        pinned: b.zoomTable.columns[t].pinned,
                        visible: b.zoomTable.columns[t].visible
                    }, n.push({
                        item: e
                    });
                    return n.sort(function (e, t) {
                        return e.item.column.position - t.item.column.position
                    }), n
                }()), b.reloadDataGrid(e)
            })
        }

        function k(e) {
            var t, n, a = [],
                i = [];
            for (n = 0; n < e.length; n++) !0 === (t = e[n].item).pinned ? a.push(t) : i.push(t);
            return {
                zoomName: b.zoomName,
                columns: a.concat(i)
            }
        }
        this.filterPropertyFields = function (e) {
            return e && !1 !== e.isAvaiableInSimpleSearch
        }, this.onChangeFilter = function () {
            this.isChanging = !0, this.resultTotal = 0, this.zoomResultList = [], this.selectedFilterValue = void 0, g(function () {
                b.isChanging = !1
            })
        }, this.applyInternalFilter = function (e) {
            var t, n, a, i = $("#field_decimal"),
                o = [];
            if (!0 === b.isAdvancedSearchOpen)
                for (t = 0; t < this.propertyFields.length; t++)(a = angular.copy(this.propertyFields[t])).hasOwnProperty("value") && void 0 !== a.value && (a.hasOwnProperty("extend") && void 0 !== a.extend && (a.extend = a.extend.id || 1), o.push(a));
            else(n = angular.copy(this.selectedFilter)).hasOwnProperty("extend") && void 0 !== n.extend && (n.extend = n.extend.id || 1), i.length ? g(function () {
                n.value = angular.copy(b.selectedFilterValue), o.push(n), w(s, b.isAdvancedSearchOpen, o, n, e, b.isAdvancedSearchOpen)
            }, 150) : (n.value = angular.copy(b.selectedFilterValue), o.push(n));
            i.length || w(s, b.isAdvancedSearchOpen, o, n, e, b.isAdvancedSearchOpen)
        }, this.returnInternalValue = function (e) {
            return angular.isFunction(this.returnValue) ? this.returnValue(e) : e && this.$selected ? this.$selected[e] : this.$selected
        }, this.openCloseAdvancedSearch = function () {
            var e;
            if (b.isAdvancedSearchOpen = !b.isAdvancedSearchOpen, !1 === b.isAdvancedSearchOpen)
                for (e = 0; e < this.propertyFields.length; e++) this.propertyFields[e].hasOwnProperty("value") && (this.propertyFields[e].value = void 0);
            else b.selectedFilterValue = void 0
        }, this.openCloseConfiguration = function () {
            var e, t;
            if (!0 !== this.isConfigurationOpen) {
                for (this.columns = [], e = 0; e < this.zoomTable.columns.length; e++) t = {
                    column: this.zoomTable.columns[e],
                    title: this.zoomTable.columns[e].title,
                    actualWidth: this.zoomTable.columns[e].width,
                    pinned: this.zoomTable.columns[e].pinned,
                    visible: this.zoomTable.columns[e].visible
                }, this.columns.push({
                    item: t
                });
                this.columns.sort(function (e, t) {
                    return e.item.column.position - t.item.column.position
                })
            } else this.columns = [];
            this.isConfigurationOpen = !this.isConfigurationOpen
        }, this.onMousedown = function (e) {
            e.stopPropagation()
        }, this.saveConfiguration = function () {
            var e, t;
            e = k(this.columns), t = function () {
                b.reloadDataGrid(e), b.openCloseConfiguration()
            }, !0 === this.isConfigurationLocal ? (!0 === this.isLocalStorageAvaiable && i.localStorage.setItem(this.localStorageGroup + this.zoomName, angular.toJson(e)), t()) : this.configuration.save(e, t)
        }, this.reloadDataGrid = function (e) {
            !1 === angular.isArray(e) && e.hasOwnProperty("zoomName") && e.hasOwnProperty("columns") && (e = e.columns), g(function () {
                if (b.zoomTable) {
                    var r = 0;
                    angular.forEach(e, function (o) {
                        angular.forEach(b.zoomTable.columns, function (e) {
                            var t, n, a, i;
                            e.equals(o.column) && (i = r, e.position = i, a = e, o.visible ? a.show() : a.hide(), t = e, n = o.actualWidth, t.setWidth(n))
                        }), r++
                    })
                }
            }, 10)
        }, this.parseTableHeaderToTableOptions = function () {
            var e;
            for (this.gridOptions.columns = this.gridOptions.columns || [], e = 0; e < this.tableHeader.length; e++) b.gridOptions.columns.push({
                headerName: r(b.tableHeader[e].label),
                field: b.tableHeader[e].property
            })
        }, this.loadGrid = function () {
            if (b.gridOptions = b.gridOptions || {}, void 0 !== b.tableHeader ? b.parseTableHeaderToTableOptions() : b.gridOptions.columns = b.columnDefs, b.isConfigurationLocal && b.isLocalStorageAvaiable) {
                var e = i.localStorage.getItem(b.localStorageGroup + b.zoomName);
                e && b.reloadDataGrid(angular.fromJson(e))
            } else b.configuration.load(b.reloadDataGrid)
        }, this.loadDefaults = function () {
            b.isAdvancedSearchEnabled = void 0 !== b.advancedSearch && !0 === b.advancedSearch, void 0 !== this.configuration ? (angular.isObject(this.configuration) || !1 !== this.configuration) && (this.isConfigurationEnabled = !0) : this.isConfigurationEnabled = !1, angular.isObject(this.configuration) && (this.isConfigurationLocal = !1), e.defaultOptions = {
                maxDepth: 1
            }
        }, this.initialize = function () {
            var e, t;
            if (this.loadDefaults(), this.loadGrid(), function (e) {
                    if (!p) {
                        var t, n = e.length;
                        for (t = 0; t < n; t += 1) e[t].$selected = !1
                    }
                }(this.zoomResultList), this.propertyFields)
                for (e = 0; e < b.propertyFields.length; e++) this.propertyFields[e] && !0 === this.propertyFields[e].default && (this.selectedFilter = this.propertyFields[e]);
            !0 === b.isMultiple && (b.$selecteds = [], t = n.get("zoomMultipleService"), angular.extend(b, t), b.initializeMultiple(b, a, p)), angular.isFunction(b.afterInitialize) && b.afterInitialize()
        }, this.ok = function () {
            var e, t, n, a, i = this.zoomTable.getSelectedItems();
            this.$selecteds && this.zoomTable.getSelectedItems().length < this.$selecteds.length && (i = this.$selecteds), 0 === i.length ? (e = u, t = r("l-attention"), n = r("l-zoom-message"), a = void 0 !== e ? e : n, m.notify({
                detail: a,
                type: "warning",
                title: t
            })) : !0 === this.isMultiple ? (this.$selecteds = this.getZoomMultipleResult(i), 1 === i.length ? (this.$selected = i[0], o.close(this.returnInternalValue(c)), angular.isFunction(l) && l(this.$selected)) : (o.close(this.$selecteds), angular.isFunction(l) && l(this.$selecteds))) : (this.$selected = i[0], o.close(this.returnInternalValue(c)), angular.isFunction(l) && l(this.$selected))
        }, this.cancel = function () {
            !0 === this.isMultiple && this.revertOnCancel(p), o.dismiss()
        }, a.$on("$stateChangeStart", function () {
            o.dismiss("cancel")
        }), a.$on("$destroy", function () {
            b.gridOptions && (b.gridOptions = void 0), b.gridSelectedOptions && (b.gridSelectedOptions = void 0), b = void 0
        })
    }
    angular.module("zoom").controller("zoomController", e), e.$inject = ["$modalInstance", "$injector", "i18nFilter", "$scope", "$window", "$nestable", "zoomoptions", "zoomcallback", "zoominit", "zoomid", "zoommultiple", "zoomalertmessage", "previousselect", "cacheZoomInit", "$timeout", "totvs.app-notification.Service", "totvs.utils.Service"]
}(),
function () {
    "use strict";

    function e() {
        var s, e;
        return e = {
            restrict: "A",
            require: "ngModel",
            compile: function (e, r) {
                var l = e.is("input:text");
                return function (e, n, t, a) {
                    var i, o;
                    i = angular.extend({}, s, e.$eval(t.autonumeric)), o = function (e, t) {
                        var n, a, i;
                        null == t ? t = "" : (n = e.autoNumeric("getSettings"), a = new RegExp("\\" + n.aSep, "g"), t = t.replace(a, ""), i = new RegExp("\\" + n.aDec, "g"), t = t.replace(i, ".")), e.autoNumeric("set", t)
                    }, t.$observe("vMax", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            vMax: e
                        })
                    }), t.$observe("vMin", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            vMin: e
                        })
                    }), t.$observe("aDec", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            aDec: e
                        })
                    }), t.$observe("mDec", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            mDec: e
                        })
                    }), t.$observe("aSep", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            aSep: e
                        })
                    }), t.$observe("aPad", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            aPad: e
                        })
                    }), t.$observe("aForm", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            aForm: e
                        })
                    }), t.$observe("aSign", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            aSign: e
                        })
                    }), t.$observe("pSign", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            pSign: e
                        })
                    }), t.$observe("lZero", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            lZero: e
                        })
                    }), t.$observe("altDec", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            altDec: e
                        })
                    }), t.$observe("dGroup", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            dGroup: e
                        })
                    }), t.$observe("mRound", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            mRound: e
                        })
                    }), t.$observe("wEmpty", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            wEmpty: e
                        })
                    }), t.$observe("nBracket", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            nBracket: e
                        })
                    }), t.$observe("anDefault", function (e) {
                        e && 0 < e.toString().length && n.autoNumeric("update", {
                            vMax: e
                        })
                    }), n.autoNumeric("init", i), a && l ? (e.$watch(r.ngModel, function () {
                        a.$render()
                    }), a.$render = function () {
                        n.data("autoNumeric") && o(n, a.$viewValue)
                    }) : l && t.$observe("value", function (e) {
                        o(n, e)
                    }), a.$formatters.push(function (e) {
                        var t;
                        return e && (t = n.autoNumeric("getSettings"), e = e.toString().replace(/\./g, t.aDec)), e
                    }), a.$parsers.push(function () {
                        return n.autoNumeric("get")
                    })
                }
            }
        }, s = {
            vMax: 9999999999999.99,
            vMin: 0,
            aDec: ",",
            mDec: 2,
            aSep: ".",
            aPad: !0,
            aForm: !0,
            aSign: "",
            pSign: "p",
            lZero: "allow",
            altDec: "tab",
            dGroup: 3,
            mRound: "S",
            wEmpty: "empty",
            nBracket: void 0,
            anDefault: void 0
        }, e
    }
    angular.module("autonumeric").directive("autonumeric", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(r, l) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (n, t, e, a) {
                var i, o = l.getBrowserDialect();
                n.safeApply = function (e) {
                    var t = this.$root.$$phase;
                    "$apply" === t || "$digest" === t ? e && "function" == typeof e && e() : this.$apply(e)
                }, i = function (e) {
                    a.$setViewValue(e)
                }, "bootstrap-switch", t.addClass("bootstrap-switch"), t.attr("data-size", "" === e.bsswitch ? "mini" : e.bsswitch), t.attr("data-on-text", r[o].yes), t.attr("data-off-text", r[o].no), a.$setViewValue(e.checked), t.on("switchChange.bootstrapSwitch", function (e, t) {
                    a && n.safeApply(i(t))
                }), n.$watch(e.ngModel, function (e) {
                    e ? t.bootstrapSwitch("state", !0, !0) : t.bootstrapSwitch("state", !1, !0)
                }), e.ngDisabled && n.$watch(e.ngDisabled, function (e) {
                    void 0 !== e ? t.bootstrapSwitch("disabled", e, !0) : t.bootstrapSwitch("disabled", !1, !0)
                })
            }
        }
    }
    angular.module("bsswitch").directive("bsswitch", e), e.$inject = ["bsswitchConstant", "totvs.utils.browser.service"]
}(),
function () {
    "use strict";

    function e() {
        return {
            template: "<div></div>",
            restrict: "EA",
            scope: {
                dataset: "=",
                options: "=",
                callback: "=",
                plotclick: "="
            },
            link: function (a, e, t) {
                var n, i, o, r, l, s, c;
                l = null, c = t.width || "100%", n = t.height || "100%", a.dataset || (a.dataset = []);
                a.options || (a.options = {
                    legend: {
                        show: !1
                    }
                });
                return (s = $(e.children()[0])).css({
                    width: c,
                    height: n
                }), i = function () {
                    var e;
                    return a.dataset && 0 < a.dataset.length && (e = $.plot(s, a.dataset, a.options), a.callback && a.callback(e), s.bind("plotclick", function (e, t, n) {
                        a.plotclick && a.plotclick(e, t, n)
                    })), e
                }, o = function (e) {
                    return l ? (l.setData(e), l.setupGrid(), l.draw()) : l = i()
                }, a.$watch("dataset", o, !0), r = function () {
                    return l = i()
                }, a.$watch("options", r, !0)
            }
        }
    }
    angular.module("chart").directive("chart", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                startDate: "&",
                endDate: "&"
            },
            link: function (a, t, e, i) {
                function o(e) {
                    i.$setViewValue(r(e))
                }

                function r(e) {
                    return angular.isDate(e) ? new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()) : e
                }
                a.safeApply = function (e) {
                    var t = this.$root.$$phase;
                    "$apply" === t || "$digest" === t ? e && "function" == typeof e && e() : this.$apply(e)
                }, a.$watch(e.startDate, function () {
                    a.startDate() ? t.datepicker("setStartDate", new Date(a.startDate())) : t.datepicker("setStartDate", null)
                }), a.$watch(e.endDate, function () {
                    a.endDate() ? t.datepicker("setEndDate", new Date(a.endDate())) : t.datepicker("setEndDate", null)
                }), a.$on("$stateChangeStart", function () {
                    t.datepicker("hide")
                }), i.$render = function () {
                    var e;
                    e = void 0 === i.$viewValue || null === i.$viewValue ? null : new Date(i.$viewValue), t.datepicker("setDate", r(e))
                }, a.$watch(e.datePicker, function () {
                    $(".modal").scroll(function () {
                        t.datepicker("hide")
                    }), $(".container-fluid").scroll(function () {
                        t.datepicker("hide")
                    }), t.datepicker(), t.on("changeDate", function (e) {
                        var t, n = null;
                        t = r(new Date(i.$viewValue)).getTime(), e.date && (n = e.date.getTime()), n !== t && a.safeApply(o(n))
                    }), t.on("clearDate", function () {
                        null !== i.$viewValue && a.safeApply(o(null))
                    }), a.startDate() && t.datepicker("setStartDate", new Date(a.startDate()));
                    a.endDate() && t.datepicker("setEndDate", new Date(a.endDate()));
                    t.find("input").attr("placeholder", e.placeholder)
                }, !0)
            }
        }
    }
    angular.module("datePicker").directive("datePicker", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                startDate: "=",
                endDate: "="
            },
            link: function (i, o, e, r) {
                var l, t;
                i.safeApply = function (e) {
                    var t = this.$root.$$phase;
                    "$apply" === t || "$digest" === t ? e && "function" == typeof e && e() : this.$apply(e)
                }, l = function (e, t) {
                    var n = {};
                    r.$viewValue && (n.start = r.$viewValue.start || null, n.end = r.$viewValue.end || null), e && angular.isDate(e) && (e = e.getTime()), t ? n.start = e : n.end = e, void 0 === n.start && void 0 === n.end && (n = void 0), r.$setViewValue(n)
                }, t = function () {
                    var n, a;
                    o.datepicker(), n = o.find("[name=start]"), a = o.find("[name=end]"), n.on("changeDate", function (e) {
                        var t = e.date;
                        r.$viewValue && r.$viewValue.start && t === r.$viewValue.start || i.safeApply(l(e.date, !0)), a.datepicker("setStartDate", t)
                    }), a.on("changeDate", function (e) {
                        var t = e.date;
                        r.$viewValue && r.$viewValue.end && t === r.$viewValue.end || i.safeApply(l(e.date, !1)), n.datepicker("setEndDate", t)
                    }), n.on("clearDate", function () {
                        i.safeApply(l(null, !0))
                    }), a.on("clearDate", function () {
                        i.safeApply(l(null, !1))
                    }), n.attr("placeholder", e.startPlaceholder), a.attr("placeholder", e.endPlaceholder), $(".modal").scroll(function () {
                        i.hideDatePicker()
                    }), $(".container-fluid").scroll(function () {
                        i.hideDatePicker()
                    })
                }, i.$watch("startDate", function () {
                    var e, t;
                    e = o.find("[name=start]"), t = o.find("[name=end]"), i.startDate ? (e.datepicker("setStartDate", new Date(i.startDate)), t.datepicker("setStartDate", new Date(i.startDate))) : (e.datepicker("setStartDate", null), t.datepicker("setStartDate", null))
                }), i.$watch("endDate", function () {
                    var e, t;
                    e = o.find("[name=start]"), t = o.find("[name=end]"), i.endDate ? angular.isDate(i.endDate) ? (e.datepicker("setEndDate", i.endDate), t.datepicker("setEndDate", i.endDate)) : (e.datepicker("setEndDate", new Date(i.endDate)), t.datepicker("setEndDate", new Date(i.endDate))) : (e.datepicker("setEndDate", null), t.datepicker("setEndDate", null))
                }), i.$on("$stateChangeStart", function () {
                    i.hideDatePicker()
                }), r.$render = function () {
                    var e, t, n, a;
                    r.$viewValue ? (void 0 === r.$viewValue.start && (r.$viewValue.start = null), void 0 === r.$viewValue.end && (r.$viewValue.end = null), e = o.find("[name=start]"), (t = r.$viewValue.start) && !angular.isDate(t) && (t = new Date(t)), n = o.find("[name=end]"), (a = r.$viewValue.end) && !angular.isDate(a) && (a = new Date(a)), e.datepicker("setDate", t), n.datepicker("setDate", a)) : (e = o.find("[name=start]"), (n = o.find("[name=end]")).datepicker("setDate", void 0), e.datepicker("setDate", void 0))
                }, i.$watch(e.datePickerRange, t, !0), i.hideDatePicker = function () {
                    var e, t;
                    e = o.find("[name=start]"), t = o.find("[name=end]"), e.datepicker("hide"), t.datepicker("hide")
                }
            }
        }
    }
    angular.module("datePickerRange").directive("datePickerRange", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (e, t, n, m) {
                var i, o = [35, 36, 37, 39],
                    r = null,
                    a = g(e.vMax, 13),
                    v = g(e.mDec, 2),
                    l = e.aSep || ".",
                    h = e.aDec || ",",
                    s = {
                        thousand: new RegExp("\\" + l, "g"),
                        decimal: new RegExp("\\" + h, "g")
                    };

                function c(e) {
                    return e && !e.match(/[a-zA-Z]/g)
                }

                function d(e) {
                    if (null != (e = (e = function (e) {
                            if (null != e) return e === h ? "0" + e : e
                        }(e)) && e.toString().replace(s.thousand, ""))) {
                        var t = e.toString();
                        if (t.match(s.decimal)) {
                            var n = new RegExp("(\\d)(?=(\\d{3})+(?!\\d)" + h + ")", "g");
                            return e.toString().replace(n, "$1" + l)
                        }
                        return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + l)
                    }
                }

                function b(e, t) {
                    var n = t ? t.indexOf("-") : -1;
                    return -1 < n && e <= n
                }

                function y(e, t) {
                    var n = t && t.indexOf(h);
                    if (-1 < n) return n < e
                }

                function u(e) {
                    if (e) {
                        var t = e.replace(s.thousand, ""),
                            n = e.split(h);
                        if (-1 === e.indexOf(h) || (i = (a = e).indexOf(h), !a.substring(i + 1))) return p(t = t.replace(s.decimal, ""));
                        if (n[1].length < v) return p(t = t.replace(s.decimal, l))
                    }
                    var a, i;
                    return e
                }

                function p(e) {
                    var t, n, a, i, o, r;
                    return e = -1 < e.indexOf(",") ? e.replace(",", ".") : e, t = (t = Number(e)).toFixed(v), "." === h && (t = t.replace(/\./, ",")), n = f(t, l), r = l, a = (o = t) && o.split(r)[1], i = d(n), 0 === v ? i : i + h + a
                }

                function f(e, t) {
                    return e && e.split(t)[0]
                }

                function g(e, t) {
                    var n = t;
                    return ((e = parseInt(e)) || 0 === e) && (n = e), n
                }

                function $(e) {
                    if (m.$modelValue || 0 === m.$modelValue) return !y(e, m.$viewValue) && function (e) {
                        if (e || 0 === e) {
                            var t = f(e.toString(), l);
                            return t.length >= a
                        }
                        return e
                    }(m.$modelValue)
                }
                t.bind("paste", function (e) {
                    var t = e.target.value;
                    b(this.selectionStart, t) && e.preventDefault()
                }), t.bind("keypress", function (e) {
                    var t = (c = e.target.value, -1 !== c.indexOf(h)),
                        n = (s = e.target.value, 0 <= s.indexOf("-")),
                        a = (r = e.target.value, l = r.split(h)[1], v <= (l && l.length)),
                        i = this.selectionStart,
                        o = b(i, e.target.value);
                    var r, l;
                    var s;
                    var c;
                    if (0 === e.which || 8 === e.which) return;
                    if (t && e.key === h || o) return e.preventDefault();
                    if (y(i, m.$viewValue) && a) return e.preventDefault();
                    if ($(i) && (d = e, d.key !== h && d.char !== h)) return e.preventDefault();
                    var d;
                    if (u = i, p = e, f = n, g = p.which, (0 !== u || 45 !== g || f) && e.key !== h && isNaN(String.fromCharCode(e.which))) return e.preventDefault();
                    var u, p, f, g
                }), t.bind("keyup", function (e) {
                    var t = o.indexOf(e.which);
                    86 !== e.which || c(e.target.value) || (e.target.value = 0);
                    if (-1 === t) {
                        var n = this.selectionStart,
                            a = this.selectionEnd;
                        return m.$setViewValue(d(e.target.value)), m.$render(),
                            function (e) {
                                if (e) {
                                    var t = e.match(s.thousand),
                                        n = t && t.length,
                                        a = r && r.length;
                                    if (a < n) return r = t, !0
                                }
                                e || (r = null);
                                return !1
                            }(m.$viewValue) || m.$viewValue === "0" + h ? (i = {
                                start: n + 1,
                                end: a + 1
                            }, this.setSelectionRange(n + 1, a + 1)) : ! function (e) {
                                if (e) {
                                    var t = e.match(s.thousand),
                                        n = t && t.length,
                                        a = r && r.length;
                                    if (n < a) return r = t, !0
                                }
                                e || (r = null);
                                return !1
                            }(m.$viewValue) || 1 < (i ? i.end - i.start : 0) ? (i = {
                                start: n,
                                end: a
                            }, this.setSelectionRange(n, a)) : (i = {
                                start: n - 1,
                                end: a - 1
                            }, this.setSelectionRange(n - 1, a - 1))
                    }
                }), t.bind("focusout", function () {
                    var e, t;
                    t = "-" !== m.$viewValue ? m.$viewValue : "0", e = u(t), m.$setViewValue(e), m.$render()
                }), m.$parsers.push(function (e) {
                    if (e && !c(e) || "-" === e) return 0;
                    if (e && e !== h && e !== l) return function (e) {
                        if (e || 0 === parseInt(e)) {
                            var t = e.replace(s.thousand, "");
                            return t = t.replace(",", "."), parseFloat(t)
                        }
                        return e
                    }(e);
                    return e
                }), m.$formatters.push(function (e) {
                    if ((e = "-" === e ? 0 : e) || 0 === e) return p(e.toString());
                    return e
                })
            }
        }
    }
    angular.module("decimal").directive("decimal", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(u) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (e, a, t, i) {
                var n, o, r, l, s, c, d;
                c = a.find("[name=start]"), d = a.find("[name=end]"), n = function () {
                    c.change(function (e) {
                        o($(e.target).val(), !0)
                    }), d.change(function (e) {
                        o($(e.target).val())
                    }), c.attr("placeholder", t.startPlaceholder), d.attr("placeholder", t.endPlaceholder), t.$observe("vMax", function (e) {
                        e && 0 < e.toString().length && r({
                            vMax: e
                        })
                    }), t.$observe("vMin", function (e) {
                        e && 0 < e.toString().length && r({
                            vMin: e
                        })
                    }), t.$observe("aDec", function (e) {
                        e && 0 < e.toString().length && r({
                            aDec: e
                        })
                    }), t.$observe("mDec", function (e) {
                        e && 0 < e.toString().length && r({
                            mDec: e
                        })
                    }), t.$observe("aSep", function (e) {
                        e && 0 < e.toString().length && r({
                            aSep: e
                        })
                    }), t.$observe("aPad", function (e) {
                        e && 0 < e.toString().length && r({
                            aPad: e
                        })
                    }), t.$observe("aForm", function (e) {
                        e && 0 < e.toString().length && r({
                            aForm: e
                        })
                    }), t.$observe("aSign", function (e) {
                        e && 0 < e.toString().length && r({
                            aSign: e
                        })
                    }), t.$observe("pSign", function (e) {
                        e && 0 < e.toString().length && r({
                            pSign: e
                        })
                    }), t.$observe("lZero", function (e) {
                        e && 0 < e.toString().length && r({
                            lZero: e
                        })
                    }), t.$observe("altDec", function (e) {
                        e && 0 < e.toString().length && r({
                            altDec: e
                        })
                    }), t.$observe("dGroup", function (e) {
                        e && 0 < e.toString().length && r({
                            dGroup: e
                        })
                    }), t.$observe("mRound", function (e) {
                        e && 0 < e.toString().length && r({
                            mRound: e
                        })
                    }), t.$observe("wEmpty", function (e) {
                        e && 0 < e.toString().length && r({
                            wEmpty: e
                        })
                    }), t.$observe("nBracket", function (e) {
                        e && 0 < e.toString().length && r({
                            nBracket: e
                        })
                    }), t.$observe("anDefault", function (e) {
                        e && 0 < e.toString().length && r({
                            vMax: e
                        })
                    })
                }, r = function (e) {
                    c.autoNumeric("update", e), d.autoNumeric("update", e)
                }, s = function (e) {
                    var t, n;
                    t = a.find("[name=start]"), n = a.find("[name=end]"), e ? (e.start && (t.val(e.start), t.autoNumeric("set", e.start), o(t.val(), !0)), e.end && (n.val(e.end), n.autoNumeric("set", e.end), o(n.val(), !1))) : (t.val(void 0), n.val(void 0))
                }, o = function (e, t) {
                    var n = {};
                    i.$viewValue && (n.start = i.$viewValue.start || void 0, n.end = i.$viewValue.end || void 0), !0 === t ? n.start = e : n.end = e, i.$setViewValue(n)
                }, i.$formatters.unshift(function (e) {
                    l && u.cancel(l), l = u(function () {
                        s(e)
                    }, 300)
                }), e.$watch(t.decimalRange, n, !0)
            }
        }
    }
    angular.module("decimalRange").directive("decimalRange", e), e.$inject = ["$timeout"]
}(),
function () {
    "use strict";

    function e(A, I, e, P, R, V) {
        return {
            restrict: "E",
            require: "?ngModel",
            priority: 200,
            replace: !0,
            compile: function (e, t) {
                var D, x, E, T, O, n, F, M;
                D = e.find("validator"), x = void 0, D && 0 < D.length && (x = {}, angular.forEach(D, function (e) {
                    e = angular.element(e), x[e.attr("key")] = A(e.text())
                }));
                E = e.find("label"), T = void 0, T = E && 0 < E.length ? E[0] && E.html() : t.label;
                return O = [], n = e.find("totvs-options").children(), angular.forEach(n, function (e) {
                        e = angular.element(e), O.push({
                            id: e.attr("value"),
                            text: e.text()
                        })
                    }), F = e.find("include").html(), M = e.find("zoom")[0], e.html(""),
                    function (t, n, a, e) {
                        var i, o, r, l, s, c, d, u, p, f, g, m, v, h, b, y, w, k, C, S;
                        for (r = angular.element(V[a.type || "input"]), l = t.$new(), i = 0; i < O.length; i++) O[i].text = A(O[i].text)(t);
                        if (l.$options = O, D && 0 < D.length ? l.$validationMessages = angular.copy(x) : r.find("div.tooltip").remove(), a.$attr.nameId ? l.$fieldId = a.nameId : angular.isDefined(a.ngModel) && (l.$fieldId = a.ngModel.replace(".", "_").toLowerCase(), l.$fieldId = l.$fieldId.replace(/'/g, "")), n.attr("id", l.$fieldId), t.$watch(a.ngShow, function (e) {
                                !1 === e ? r.parents("field").addClass("ng-hide") : !0 === e && r.parents("field").removeClass("ng-hide")
                            }), t.$watch(a.ngHide, function (e) {
                                !0 === e ? r.parents("field").addClass("ng-hide") : !1 === e && r.parents("field").removeClass("ng-hide")
                            }), t.$watch(a.ngDisabled, function (e) {
                                !0 === e ? (n.attr("disabled", !0), n.find("button").attr("disabled", !0), n.find("input").attr("disabled", !0)) : !1 === e && (n.removeAttr("disabled"), n.find("button").removeAttr("disabled"), n.find("input").removeAttr("disabled"))
                            }), d = r.find("[bind]"), angular.forEach(a.$attr, function (e) {
                                if ("type" !== e && "class" !== e) {
                                    var t = n.attr(e);
                                    d.attr(e, t)
                                }
                            }), d.attr("name", l.$fieldId), d.attr("id", l.$fieldId), T ? (l.$fieldLabel = A(T)(t), (u = r.find("label:first")).attr("for", l.$fieldId), u.html(T), E && E.attr("title") ? u.attr("tooltip", E.attr("title")) : u.attr("tooltip", T), u.attr("tooltip-placement", "top")) : (r.find("label:first").remove(), r.find("div.col-xs-8").removeClass()), 0 < (p = r.find("[include]")).length && p.append(F), M) {
                            for (0 === (c = (s = r.find(".input-group")).find(".input-group-btn")).length && (c = angular.element('<span class="input-group-btn"></span>'), s.append(c), s.addClass("no-block")), f = angular.element("<zoom></zoom>"), a.selectConector ? (f.attr("zoom-selected-internal", "updateSelectModelZoom(selected)"), f.attr("ng-model", "zoomSelectedItem")) : f.attr("ng-model", a.ngModel), d.attr("zoom-hotkey", ""), i = 0; i < M.attributes.length; i++) o = M.attributes[i], f.attr(o.name, o.value);
                            c.append(f)
                        }
                        if (a.$attr.class ? n.addClass("col-xs-12") : n.addClass("col-xs-12 col-md-6"), a.$attr.keypad && (0 === (c = (s = r.find(".input-group")).find(".input-group-btn")).length && (c = angular.element('<span class="input-group-btn"></span>'), s.append(c), s.addClass("no-block")), g = angular.element('<button class="btn btn-default" role="button" type="button" data-ng-click="openKeypad($event)"><span class="glyphicon glyphicon-th"></span></button>'), (m = angular.element('<div><totvskeypad is-open="keypadOpen"></totvskeypad></div>')).attr("ng-model", a.ngModel), l.openKeypad = function (e) {
                                e.preventDefault(), e.stopPropagation(), l.keypadOpen = !l.keypadOpen
                            }, d.before(m), c.append(g)), a.$attr.canclean) {
                            for (c = (s = r.find(".input-group")).find(".input-group-btn"), S = r.find("[hotkey-element]"), i = 0; i < S.length; i++) S[i].setAttribute("canclean", a.canclean);
                            0 === c.length && (c = angular.element('<span class="input-group-btn"></span>'), s.append(c), s.addClass("no-block")), v = angular.element('<button class="btn btn-default" role="button" type="button" data-ng-click="cleanValue()" tabindex=-1><span class="glyphicon glyphicon-remove"></span></button>'), l.cleanValue = function () {
                                var e;
                                e = "undefined" === a.canclean ? void 0 : "null" === a.canclean || "" === a.canclean ? null : a.canclean, this.control = d.controller("ngModel") || l.$field, this.control.$setViewValue(e), this.control.$render(), a.selectConector && t.cleanSelectValue(this.control)
                            }, R.bindTo(l).add({
                                combo: "ctrl+del",
                                allowIn: ["input", "select", "textarea"],
                                callback: function (e) {
                                    var t, n, a, i;
                                    if ((C = e.srcElement).attributes.getNamedItem("canclean")) {
                                        for (a = "undefined" === (a = C.attributes.getNamedItem("canclean").value) ? void 0 : "null" === a || "" === a ? null : a, t = C; t.className.split(" ").indexOf("input-group") < 0;) t = t.parentElement;
                                        for (n = t.querySelectorAll("[canclean]"), i = 0; i < n.length; i++) n[i].value = a
                                    }
                                }
                            }), c.append(v)
                        }
                        "workflow" === a.type && P.isFluig && (0 === (c = (s = r.find(".input-group")).find(".input-group-btn")).length && (c = angular.element('<span class="input-group-btn"></span>'), s.append(c), s.addClass("no-block")), w = angular.element('<button class="btn btn-default" role="button" type="button" data-ng-click="openProcess($event)"><span class="fluigicon fluigicon-sm fluigicon-user-pending pull-left" style="height:20px"></span></button>'), k = function (n) {
                            null !== n.ECM && null !== n.ECM.processSearch && null !== n.ECM.processSearch.openWorkflowDetail ? n.ECM.processSearch.openWorkflowDetail = function (e) {
                                var t = d.controller("ngModel") || l.$field;
                                t.$setViewValue(e), t.$render(), n.close()
                            } : setTimeout(function () {
                                k(n)
                            }, 1e3)
                        }, l.openProcess = function (e) {
                            var t, n;
                            n = (n = (n = window.location.toString()).substring(n.indexOf("/portal/"))).substring(0, n.indexOf("/", 10)), e.stopPropagation(), t = window.open(n + "/pageprocesssearch", "_blank"), setTimeout(function () {
                                k(t)
                            }, 1e3)
                        }, c.append(w)), n.append(r), I(r)(l), l.$field = d.controller("ngModel") || e, l.$watch("$field.$dirty && $field.$error", function (e) {
                            l.$fieldErrors = [], angular.forEach(e, function (e, t) {
                                e && l.$fieldErrors.push(t)
                            })
                        }, !0), a.$attr.focus && ("select" === (b = (h = r[0].parentElement).getAttribute("type")) || "select2" === b ? (y = h.getAttribute("name-id"), setTimeout(function () {
                            (null != y ? $("#" + y).find("input.ui-select-focusser") : $("input.ui-select-focusser")).focus()
                        }, 700)) : "date" === b || "daterange" === b || "decimalrange" === b || "inputrange" === b ? d[0].firstElementChild.focus() : d.focus())
                    }
            }
        }
    }
    angular.module("field").directive("field", e), e.$inject = ["$interpolate", "$compile", "$http", "$rootScope", "hotkeys", "fieldConstant"]
}(),
function () {
    "use strict";

    function e() {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (e, n, a, i) {
                var t, o;
                t = function () {
                    var e, t;
                    e = n.find("[name=start]"), t = n.find("[name=end]"), e.change(function (e) {
                        o($(e.target).val(), !0)
                    }), t.change(function (e) {
                        o($(e.target).val())
                    }), e.attr("placeholder", a.startPlaceholder), t.attr("placeholder", a.endPlaceholder), e.attr("maxlength", a.startMaxlength), t.attr("maxlength", a.endMaxlength)
                }, i.$render = function () {
                    var e, t;
                    e = n.find("[name=start]"), t = n.find("[name=end]"), i.$viewValue ? (e.val(i.$viewValue.start), t.val(i.$viewValue.end)) : (e.val(void 0), t.val(void 0))
                }, o = function (e, t) {
                    var n = {};
                    i.$viewValue && (n.start = i.$viewValue.start || void 0, n.end = i.$viewValue.end || void 0), !0 === t ? n.start = e : n.end = e, i.$setViewValue(n)
                }, e.$watch(a.inputRange, t, !0)
            }
        }
    }
    angular.module("inputRange").directive("inputRange", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(c) {
        return {
            restrict: "A",
            require: "^totvsPageHeaderOperationAction",
            link: function (e, i, o, r) {
                var l, s;
                l = r.scope.items(), s = r.scope.itemsAs || "item", e.$watch(function () {
                    var e, t = 0;
                    for (e = 0; e < l.length; e++) l[e].$selected && t++;
                    return t
                }, function (e) {
                    if (0 < e) {
                        var t, n, a = !0;
                        for (t = 0; t < l.length && (!l[t].$selected || (n = c(o.multipleSelected || "true"), r.scope.$parent[s] = l[t], a = n(r.scope.$parent))); t++);
                        i.attr("disabled", !a)
                    } else i.attr("disabled", !0)
                })
            }
        }
    }
    angular.module("multipleSelected").directive("multipleSelected", e), e.$inject = ["$parse"]
}(),
function () {
    "use strict";

    function e() {
        return {
            require: "ngModel",
            link: function (e, t, n, a) {
                a.$parsers.push(function (e) {
                    var t;
                    return null == e ? "" : (e = e.toString(), (t = e.replace(/\D+/g, "")) !== e && (a.$setViewValue(t), a.$render()), t)
                })
            }
        }
    }
    angular.module("numbersOnly").directive("numbersOnly", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return function (n, e, a) {
            e.keypress("enter", function (e) {
                var t;
                13 === e.keyCode && ((t = e.target).blur(), e.preventDefault(), e.stopPropagation(), n.$apply(function () {
                    n.$eval(a.onKeyEnter)
                }), t.focus())
            })
        }
    }
    angular.module("onKeyEnter").directive("onKeyEnter", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(u, p, f) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: !0,
            link: {
                pre: function (e, t, n) {
                    e.initfn = p(n.selectInit), e.selectId = n.selectId, e.selectService = n.selectService, e.selectDescription = n.selectDescription, e.selectList = [], e.selectModel = "", e.selectPlaceholder = n.selectConector || "Selecione", e.selectRefreshDelay = n.selectRefreshDelay || 500
                },
                post: function (i, e, t, n) {
                    var o, a, r, l, s, c, d = !0;
                    i.selectService && (o = u.get(i.selectService));
                    if (void 0 === o) throw "Serviço para o zoom não definido.";
                    n.$formatters.unshift(function (e) {
                        l && (e || l.select(void 0)), r && f.cancel(r), r = f(function () {
                            i.loadValue(e)
                        }, i.selectRefreshDelay)
                    }), i.initSelectComponent = function (e) {
                        (l = e).disabled = p(t.ngDisabled)(i)
                    }, i.loadValue = function (e) {
                        var t;
                        e && angular.isObject(e) && (e = e[i.selectId]), (t = o.getObjectFromValue(e, i.initfn(i))) && l ? t.then ? t.then(function (e) {
                            e && e.hasOwnProperty(i.selectId) ? l.select(e) : l.select(i.selectModel)
                        }) : l.select(t) : l.select(i.selectModel)
                    }, i.refreshSelectList = function (e) {
                        var t, n, a;
                        a = null == (a = e) ? "" : a.toString().toLowerCase(), s = void 0 === s ? void 0 : s.toString().toLowerCase(), d || s === a || (d = !0), (d && s !== a || !d && s === a || "" === a) && (n = {
                            property: i.selectDescription || i.selectId
                        }, e && angular.isObject(e) && (e = e[i.selectId]), d = !1, (t = o.applyFilter({
                            init: i.initfn(i),
                            disclaimers: [{
                                property: n.property,
                                value: e
                            }],
                            selectedFilter: n,
                            selectedFilterValue: e,
                            more: !1,
                            isAdvanced: !1,
                            isSelectValue: !0
                        })) && (t.then ? t.then(function (e) {
                            i.selectList = e
                        }) : i.selectList = t))
                    }, setTimeout(function () {
                        e.find("input.ui-select-search").on("keydown", function (e) {
                            9 === e.keyCode && void 0 !== l.search && i.loadValue(l.search)
                        }), e.find("input.ui-select-search").focusin(function () {
                            c = "" !== l.search ? l.search : "", l.selected ? l.search = l.selected[i.selectId] : l.search = "", c && (l.search = l.search.concat(c)), d || s !== l.search || (i.selectList = []), d = !0
                        }), e.find("input.ui-select-search").focusout(function () {
                            setTimeout(function () {
                                l.search = ""
                            }, 500)
                        })
                    }, 500), i.updateSelectModel = function (e) {
                        (i.selectModel = e) ? n.$setViewValue(e[i.selectId]): n.$setViewValue(void 0), i.selectList = [], s = void 0 !== i.selectModel && null !== i.selectModel ? i.selectModel[i.selectId] : void 0, n.$render()
                    }, i.updateSelectModelZoom = function (e) {
                        l.select(e)
                    }, i.cleanSelectValue = function () {
                        var e;
                        e = "undefined" === t.canclean ? void 0 : null, l.select(e), l.search = e
                    }, i.getDescription = function (e) {
                        var t;
                        if (angular.isNumber(e) && (e = i.selectModel), e) return o && angular.isFunction(o.getDescription) ? t = o.getDescription(e) : (t = e[i.selectId], i.selectDescription && (t = t + " - " + e[i.selectDescription])), t.toString()
                    }, t.selectInit && i.$watch(t.selectInit, function (e) {
                        e && (a && f.cancel(a), a = f(function () {
                            i.loadValue(n.$modelValue), i.refreshSelectList()
                        }, i.selectRefreshDelay))
                    }, !0);
                    i.$on("$destroy", function () {
                        l = void 0, r && f.cancel(r), a && f.cancel(a)
                    })
                }
            }
        }
    }
    angular.module("selectConector").directive("selectConector", e), e.$inject = ["$injector", "$parse", "$timeout"]
}(),
function () {
    "use strict";

    function e(r, t, n, l, s) {
        return {
            template: "<span ng-transclude></span>",
            restrict: "A",
            transclude: !0,
            scope: {
                large: "=",
                placement: "@",
                popoverData: "=",
                promise: "=",
                title: "@",
                container: "=",
                template: "@templatePopover"
            },
            link: function (a, i) {
                var o, e;
                e = function () {
                    t.get(a.template, {
                        cache: n
                    }).then(function (e) {
                        var t, n;
                        t = e.data, n = a.popoverData, a.promise && (n = a.promise), n.$promise && (n = n.$promise), l.when(n).then(function () {
                            var e = angular.element(t);
                            o = r(e)(a), s(function () {
                                var e = {
                                    container: void 0 === a.container ? "body" : a.container,
                                    content: o,
                                    placement: a.placement || "right",
                                    html: !0,
                                    title: a.title
                                };
                                a.large && (e.template = '<div class="popover popover-large"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'), $(i).popover(e), $(i).on("show.bs.popover", function () {
                                    $("[template-popover]").each(function (e, t) {
                                        $(i)[0] !== $(t)[0] && $(t).data("bs.popover") && $(t).popover("hide")
                                    })
                                }), $(i).popover("show")
                            })
                        })
                    })
                }, a.$watch("promise", function () {
                    a.promise ? e() : $(i).popover("destroy")
                })
            }
        }
    }
    angular.module("templatePopover").directive("templatePopover", e), e.$inject = ["$compile", "$http", "$templateCache", "$q", "$timeout"]
}(),
function () {
    "use strict";

    function e() {
        return {
            restrict: "A",
            link: function (e, t, n) {
                var a = n.templatePopoverRemoveAll || "click";
                $(t).on(a, function () {
                    $("[template-popover]").each(function (e, t) {
                        $(t).data("bs.popover") && $(t).popover("hide")
                    })
                })
            }
        }
    }
    angular.module("templatePopoverRemoveAll").directive("templatePopoverRemoveAll", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(l, d) {
        return {
            template: '<div class="field-container"><button type="submit" class="form-control btn btn-default"><span>{{ tLabel }}</span></button></div>',
            restrict: "E",
            scope: {
                tIcon: "@",
                tClick: "&",
                tLabel: "@",
                tTooltip: "@"
            },
            controller: "TotvsButtonController",
            controllerAs: "controller",
            link: function (e, t, n, a) {
                var i = t.find("button");
                o = i, r = n, r.tClick && o.attr("ng-click", "tClick($event)"),
                    function (e, t, n) {
                        if (n.tIcon) {
                            var a = angular.element("<span></span>").addClass("glyphicon").addClass(n.tIcon);
                            t.tLabel && e.find("span").prepend("&nbsp;&nbsp;"), e.prepend(a)
                        }
                    }(i, e, n),
                    function (e, t, n) {
                        if (t.tTooltip) {
                            var a = n.quote(t.tTooltip);
                            d.isMobile.any() ? (r = a, l = (o = e).parent(), s = {
                                "kendo-tooltip": "controller.ttHandle",
                                "k-show-on": "'focus'",
                                "k-position": "'top'",
                                "k-content": r
                            }, (c = angular.element("<div></div>")).attr(s), l.prepend(c), o.attr({
                                "kendo-touch": "",
                                "k-on-hold": "controller.onHold(kendoEvent)"
                            })) : (i = {
                                "kendo-tooltip": "",
                                "k-position": "'top'",
                                "k-content": a
                            }, e.attr(i))
                        }
                        var i;
                        var o, r, l, s, c
                    }(i, n, a), t.removeAttr("t-click"), t.removeAttr("t-icon"), t.removeAttr("t-label"), t.removeAttr("t-tooltip"), l(i.parent().children())(e);
                var o, r
            }
        }
    }
    angular.module("totvsButton").directive("totvsButton", e), e.$inject = ["$compile", "totvs.utils.Service"]
}(),
function () {
    "use strict";

    function e() {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (t, e, n, a) {
                var i, o;
                i = function (e) {
                    a.$setViewValue(e)
                }, o = function () {
                    e.timepicker(), e.on("changeTime.timepicker", function (e) {
                        e.time.value !== a.$viewValue && t.$apply(i(e.time.value))
                    }), $(".modal").scroll(function () {
                        e.timepicker("hideWidget")
                    }), $(".container-fluid").scroll(function () {
                        e.timepicker("hideWidget")
                    })
                }, t.$on("$stateChangeStart", function () {
                    e.timepicker("hideWidget")
                }), a.$render = function () {
                    e.timepicker("setTime", a.$viewValue)
                }, t.$watch(n.timePicker, o, !0)
            }
        }
    }
    angular.module("timePicker").directive("timePicker", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<carousel interval="tInterval" no-pause="tNoPause" no-transition="tNoTransition" no-wrap="tNoWrap()"><slide ng-repeat="slide in tSlides track by $index"><a ng-href="{{(slide.link) ? slide.link : \'\'}}"><img ng-src="{{(slide.isBase64) ? (\'data:image/png;base64,\' + slide.img) : slide.img}}"><div class="carousel-caption"><h4>{{slide.title}}</h4><p>{{slide.description}}</p></div></a></slide></carousel>',
            restrict: "E",
            scope: {
                tSlides: "=",
                tInterval: "=",
                tNoPause: "=",
                tNoTransition: "=",
                tNoWrap: "&"
            },
            compile: function (e, t) {
                t.$attr.class ? e.addClass("col-xs-12") : e.addClass("col-xs-12 col-md-6");
                t.tHeight && e.find("img").css("height", t.tHeight);
                t.tWidth && e.find("img").attr("width", t.tWidth)
            }
        }
    }
    angular.module("totvsCarousel").directive("totvsCarousel", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div kendo-chart k-options="chart"></div><div class="totvs-chart-no-data" ng-show="!tSeries || !tSeries.length"><div>Sem dados</div></div>',
            restrict: "E",
            scope: {
                tTitle: "@",
                tTitlePosition: "@",
                tTypeChart: "@",
                tSeries: "=",
                tCategories: "=?",
                tCategoryField: "=?",
                tValueMax: "=?",
                tValueMin: "=?",
                tRemoteData: "=?",
                tSetExport: "&?",
                tChartTooltip: "=?",
                tHeight: "@",
                tLabelTemplate: "@",
                tLabelVisible: "@",
                tValueAxis: "=?",
                tCategoryAxis: "=?",
                tOnClick: "&",
                tOnHover: "&",
                tOnLegendItemClick: "&"
            },
            link: function (n, e, a) {
                var t;

                function i() {
                    return t || (t = e.find("[kendo-chart]").getKendoChart())
                }

                function o(e) {
                    var t = e || "chart";
                    return t
                }

                function r() {
                    i().exportImage().done(function (e) {
                        var t = o(n.tTitle) + ".png";
                        kendo.saveAs({
                            dataURI: e,
                            fileName: t
                        })
                    })
                }

                function l() {
                    i().exportPDF({
                        paperSize: "A4",
                        landscape: !0
                    }).done(function (e) {
                        var t = o(n.tTitle) + ".pdf";
                        kendo.saveAs({
                            dataURI: e,
                            fileName: t
                        })
                    })
                }(function () {
                    if (a.tSetExport) {
                        var e = {
                            pdf: l,
                            png: r
                        };
                        n.tSetExport()(e)
                    }
                })(), a.tChartTooltip || (n.tChartTooltip = {
                    visible: !0
                }), a.tCategoryAxis && n.$watch("tCategoryAxis", function (e, t) {
                    e !== t && i() && null !== n.tSeries && 0 < n.tSeries.length && (a.tCategories && (e.categories = n.tCategories), i().options.categoryAxis = e, i().refresh())
                }), a.tCategories && n.$watch("tCategories", function (e, t) {
                    e !== t && i() && void 0 !== i().options.categoryAxis && (i().options.categoryAxis.categories = e, i().refresh())
                }), a.tHeight && n.$watch("tHeight", function (e, t) {
                    e !== t && i() && (i().options.chartArea.height = parseInt(e), i().refresh())
                }), a.tSeries && n.$watch("tSeries", function (e, t) {
                    e !== t && i() && (i().options.series = e, i().refresh())
                }), a.tTypeChart && n.$watch("tTypeChart", function (e, t) {
                    if (e !== t && i()) {
                        var n, a = i().options.series.length;
                        for (n = 0; n < a; n += 1) i().options.series[n].type = e;
                        i().refresh()
                    }
                }), a.tValueAxis && n.$watch("tValueAxis", function (e, t) {
                    e !== t && i() && (a.tValueMin && (e.min = n.tValueMin), a.tValueMax && (e.max = n.tValueMax), i().options.valueAxis = e, i().refresh())
                }), n.chart = {
                    theme: "bootstrap",
                    legend: {
                        position: "bottom"
                    },
                    title: {
                        position: n.tTitlePosition,
                        text: n.tTitle,
                        font: "18px Arial,Helvetica,sans-serif"
                    },
                    chartArea: {
                        height: n.tHeight ? parseInt(n.tHeight) : 400
                    },
                    seriesDefaults: {
                        type: n.tTypeChart,
                        labels: {
                            template: n.tLabelTemplate,
                            visible: "false" !== n.tLabelVisible
                        }
                    },
                    dataSource: {
                        transport: {
                            read: {
                                url: n.tRemoteData,
                                dataType: "json"
                            }
                        }
                    },
                    categoryAxis: a.tCategoryAxis ? n.tCategoryAxis : [{
                        categories: n.tCategories,
                        field: n.tCategoryField,
                        labels: {
                            rotation: "auto"
                        },
                        majorGridLines: {
                            visible: !0
                        }
                    }],
                    valueAxis: a.tValueAxis ? n.tValueAxis : [{
                        max: n.tValueMax,
                        min: n.tValueMin,
                        line: {
                            visible: !0
                        },
                        minorGridLines: {
                            visible: !1
                        }
                    }],
                    series: n.tSeries,
                    tooltip: n.tChartTooltip,
                    seriesHover: function (e) {
                        a.tOnHover && (e.id = a.tId, n.tOnHover()(e))
                    },
                    seriesClick: function (e) {
                        a.tOnClick && (e.id = a.tId, n.tOnClick()(e))
                    },
                    legendItemClick: function (e) {
                        a.tOnLegendItemClick && (e.id = a.tId, n.tOnLegendItemClick()(e))
                    }
                }
            }
        }
    }
    angular.module("totvsChart").directive("totvsChart", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(s, c, d) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                ngModel: "=",
                ngChange: "&",
                ngDisabled: "&",
                ngRequired: "@"
            },
            link: function (e, t, n, a) {
                var i, o, r, l = d.scopeToArray(e).concat(["label", "tBsswitch"]);
                o = c.isMobile.any(), i = o && !n.$attr.tBsswitch ? angular.element('<span class="clickable mobile-checkbox"><input type="checkbox" ng-disabled="ngDisabled()" ng-required="{{::ngRequired}}" ng-change="ngChange()" ng-model="ngModel"><label for="{{$fieldId}}" class="not-required"></label></span>') : function () {
                    var e = angular.element('<input type="checkbox" ng-model="ngModel" ng-change="ngChange()" ng-required="{{::ngRequired}}" ng-disabled="ngDisabled()">');
                    n.$attr.tBsswitch && e.attr("bsswitch", "");
                    return e
                }(), s.addElementInTotvsField(i, t), r = o ? i.find("input") : i, s.pattern(e, n, t, e, a, r), d.removeAttributesFromElement(t, n, l), s.compile(e, t), s.watchHasError(e, r, a)
            }
        }
    }
    angular.module("totvsCheckbox").directive("totvsCheckbox", e), e.$inject = ["totvsFieldService", "totvs.utils.Service", "totvsUtilsDirectiveService"]
}(),
function () {
    "use strict";

    function e(r, l) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                ngDisabled: "&",
                ngChange: "&",
                ngModel: "=",
                ngBlur: "&",
                ngRequired: "@",
                tOptions: "="
            },
            link: function (e, t, n, a) {
                var i, o;
                i = function () {
                    var e = angular.element('<select ng-model="ngModel" class="form-control" ng-blur="ngBlur()" ng-disabled="ngDisabled()" ng-required="{{::ngRequired}}" ng-options="o.value as o.label for o in tOptions" ng-change="ngChange()"></select>');
                    n.$attr.focus && e.attr("autofocus", "true");
                    return e
                }(), t.find(".input-group").append(i), l.pattern(e, n, t, e, a, i), l.canclean(n, t, e, i), o = t.find(".field-container"), r(o)(e), l.watchHasError(e, i, a)
            }
        }
    }
    angular.module("totvsCombo").directive("totvsCombo", e), e.$inject = ["$compile", "totvsFieldService"]
}(),
function () {
    "use strict";

    function e(e, t, D, x, n, a, i) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                depth: "@",
                format: "@",
                ngBlur: "&",
                ngChange: "&",
                ngModel: "=",
                ngDisabled: "&",
                placeholder: "@",
                ngRequired: "@",
                outputFormat: "@"
            },
            link: function (v, h, b, y) {
                var w, k, e, C;
                e = n.isMobile, C = n.configI18n(a), e.any() ? function () {
                    function i() {
                        return {
                            setStartValue: function (e) {
                                h.find("input[startDate]").val(e)
                            },
                            setEndValue: function (e) {
                                h.find("input[endDate]").val(e)
                            },
                            getStartValue: function () {
                                return h.find("input[startDate]").val()
                            },
                            getEndValue: function () {
                                return h.find("input[endDate]").val()
                            }
                        }
                    }

                    function o(e, t) {
                        y.$setViewValue({
                            startDate: S(e),
                            endDate: S(t)
                        }), e || t || y.$setValidity("required", !1)
                    }

                    function r(e, t, n) {
                        return e = new Date(e), t = new Date(t), n ? !(e && t && t < e) : !(e && t && e < t)
                    }

                    function l(e) {
                        var t, n, a, i;
                        return (i = angular.copy(e)) ? (angular.isDate(i) || (i = d(new Date(i))), t = i.getDate(), n = i.getMonth() + 1, a = i.getFullYear(), t = 9 < t ? t : "0" + t, n = 9 < n ? n : "0" + n, u() ? a + "-" + n : a + "-" + n + "-" + t) : i
                    }

                    function s(e) {
                        e = e || l(new Date(2100, 12, 31)), h.find("input[startDate]").attr("max", e)
                    }

                    function c(e) {
                        e = e || l(new Date(1970, 1, 1)), h.find("input[endDate]").attr("min", e)
                    }

                    function d(e) {
                        return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds())
                    }

                    function u() {
                        var e = v.format && v.format.toLowerCase();
                        return "mm/yyyy" === e
                    }
                    k = x.addElementInTotvsField(u() ? angular.element('<input type="month" startDate class="form-control" ng-disabled="ngDisabled()" ng-blur="ngBlur()"><span class="input-group-addon hidden-xs">' + C.to + '</span><input type="month" class="form-control" endDate  ng-disabled="ngDisabled()" ng-blur="ngBlur()">') : angular.element('<input type="date" startDate class="form-control" ng-disabled="ngDisabled()" ng-blur="ngBlur()"><span class="input-group-addon hidden-xs">' + C.to + '</span><input type="date" class="form-control" endDate  ng-disabled="ngDisabled()" ng-blur="ngBlur()">'), h).addClass("no-block"), w = k.find("input"), x.pattern(v, b, h, v, y, w), x.compile(v, h), x.watchHasError(v, w, y), $(h).on("blur", "input[startDate]", function () {
                        var e, t, n = i().getStartValue(),
                            a = i().getEndValue();
                        r(n, a, !0) ? (c(n), e = n ? d(new Date(n)) : void 0, t = a ? d(new Date(a)) : void 0, o(e, t)) : (c("1970-01-01"), i().setStartValue(null), o(null, t = a ? d(new Date(a)) : void 0))
                    }), $(h).on("blur", "input[endDate]", function () {
                        var e, t, n = i().getStartValue(),
                            a = i().getEndValue();
                        r(a, n, !1) ? (s(a), e = n ? d(new Date(n)) : void 0, t = a ? d(new Date(a)) : void 0, o(e, t)) : (s("2100-12-31"), i().setEndValue(null), o(e = n ? d(new Date(n)) : void 0, null))
                    }), y.$formatters.push(function (e) {
                        var t, n, a;
                        return (t = e) && (t.startDate ? (c(n = l(t.startDate)), i().setStartValue(n)) : i().setStartValue(null), t.endDate ? (s(a = l(t.endDate)), i().setEndValue(a)) : i().setEndValue(null)), e
                    })
                }() : function () {
                    var e, t = !1;
                    k = x.addElementInTotvsField((n = angular.element('<input kendo-date-picker startDate k-max="maxDate"k-options="startDatePickerOptions" ng-blur="ngBlur()"style="width:100%" ng-disabled="ngDisabled()" k-rebind="maxDate"/><span class="input-group-addon hidden-xs">' + C.to + '</span><input kendo-date-picker endDate k-rebind="minDate"k-options="endDatePickerOptions" ng-blur="ngBlur()" k-min="minDate" style="width:100%" ng-disabled="ngDisabled()"/>'), b.$attr.tMaskDate && (n[0].setAttribute("totvs-mask-date", b.tMaskDate), n[2].setAttribute("totvs-mask-date", b.tMaskDate)), n), h).addClass("no-block"), w = k.find("input"), e = function () {
                        var e, t, n, a, i;
                        e = h.find("[startDate]"), t = h.find("[endDate]"), n = e.data("kendoDatePicker"), a = t.data("kendoDatePicker"), i = "undefined" === b.canclean ? void 0 : "null" === b.canclean || "" === b.canclean ? null : b.canclean, y.$setViewValue(i), y.$render(), n.value(""), a.value(""), o()
                    }, x.pattern(v, b, h, v, y, w), x.canclean(b, h, v, w, e), h.find("button").addClass("hidden-xs"), x.compile(v, h), x.watchHasError(v, w, y), v.placeholder ? (h.find("[startDate]").attr("placeholder", v.placeholder), h.find("[endDate]").attr("placeholder", v.placeholder)) : (h.find("[startDate]").attr("placeholder", C.initialDate), h.find("[endDate]").attr("placeholder", C.finalDate));
                    var n;

                    function o() {
                        v.maxDate = new Date(2100, 12, 31), v.minDate = new Date(1970, 1, 1)
                    }

                    function a() {
                        return h.find("[startDate]").data("kendoDatePicker")
                    }

                    function i() {
                        return h.find("[endDate]").data("kendoDatePicker")
                    }

                    function r(e) {
                        e ? (e.startDate ? (l(e.startDate), D(function () {
                            f()
                        })) : a().value(null), e.endDate ? (s(e.endDate), D(function () {
                            g()
                        })) : i().value(null)) : (l(null), s(null), a().value(null), i().value(null))
                    }

                    function l(e) {
                        var t;
                        t = angular.isDate(e) ? e || new Date(1970, 1, 1) : e ? new Date(e) : new Date(1970, 1, 1), v.minDate = t
                    }

                    function s(e) {
                        var t;
                        t = angular.isDate(e) ? e || new Date(2100, 12, 31) : e ? new Date(e) : new Date(2100, 12, 31), v.maxDate = t
                    }

                    function c(e, t) {
                        y.$setViewValue({
                            startDate: S(e),
                            endDate: S(t)
                        }), e || t || y.$setValidity("required", !1)
                    }

                    function d(e) {
                        var t, n;
                        t = e.value(), n = t || null, l(t), p(t, !0), c(n, function () {
                            if (y.$modelValue) return y.$modelValue.endDate;
                            return
                        }())
                    }

                    function u(e) {
                        var t, n;
                        t = e.value(), n = t || null, s(t), p(t, !1), c(function () {
                            if (y.$modelValue) return y.$modelValue.startDate;
                            return
                        }(), n)
                    }

                    function p(e, t) {
                        e || (t ? a().value(null) : i().value(null))
                    }

                    function f() {
                        if (y.$modelValue) {
                            var e = y.$modelValue.startDate;
                            angular.isNumber(e) && (e = new Date(e)), a().value(e)
                        }
                    }

                    function g() {
                        if (y.$modelValue) {
                            var e = y.$modelValue.endDate;
                            angular.isNumber(e) && (e = new Date(e)), i().value(e)
                        }
                    }

                    function m() {
                        D(function () {
                            var e;
                            e = h.find(".k-picker-wrap"), b.$attr.canclean && (e[1].style.borderRadius = "0"), t && h.find("input[endDate]").focus()
                        }, 200)
                    }
                    o(), y.$formatters.push(function (e) {
                        if (a()) return r(e), e;
                        D(function () {
                            return r(e), e
                        }, 250)
                    }), v.startDatePickerOptions = {
                        start: b.depth,
                        depth: b.depth,
                        format: v.format || "dd/MM/yyyy",
                        change: function () {
                            d(this), g()
                        }
                    }, v.endDatePickerOptions = {
                        start: b.depth,
                        depth: b.depth,
                        format: v.format || "dd/MM/yyyy",
                        change: function () {
                            u(this), f()
                        }
                    }, h.on("keydown", "input[startDate]", function (e) {
                        9 === e.keyCode && (t = !0)
                    }), h.on("focusin", "input[endDate]", function () {
                        t = !1
                    }), m(), v.$watch("[maxDate, minDate]", function () {
                        m()
                    })
                }();

                function S(e) {
                    if (angular.isDate(e)) {
                        var t = v.outputFormat || i.getOutputFormat();
                        switch (t) {
                            case "date":
                                return e;
                            case "time":
                            default:
                                return e.getTime()
                        }
                    }
                    return e
                }
            }
        }
    }
    angular.module("totvsDateRange").directive("totvsDateRange", e), e.$inject = ["$rootScope", "$compile", "$timeout", "totvsFieldService", "totvs.utils.Service", "totvsDateRangeConstant", "TotvsDateRange"]
}(),
function () {
    "use strict";

    function e(e, t, g, n, r, a, m) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                depth: "@",
                format: "@",
                ngBlur: "&",
                ngChange: "&",
                ngModel: "=",
                ngDisabled: "&",
                ngRequired: "@",
                placeholder: "@",
                outputFormat: "@",
                tMin: "=",
                tMax: "="
            },
            link: function (i, s, c, d) {
                var o, u, p = m.scopeToArray(i).concat(["label", "canclean"]);
                n.isMobile.any() ? function () {
                    var e;

                    function o() {
                        return {
                            value: function (e) {
                                s.find("input").val(e)
                            },
                            getValue: function () {
                                return s.find("input").val()
                            }
                        }
                    }

                    function r(e) {
                        var t, n, a;
                        return (a = angular.copy(e)) ? (angular.isDate(a) || (a = new Date(a)), t = a.getDate(), n = a.getMonth() + 1, a.getFullYear() + "-" + (n = 9 < n ? n : "0" + n) + "-" + (t = 9 < t ? t : "0" + t)) : a
                    }

                    function l(e) {
                        d.$setViewValue(e)
                    }
                    u = function () {
                        var e = angular.element('<input type="date" class="form-control" placeholder="{{::placeholder}} ng-disabled="ngDisabled()" ng-required="{{::ngRequired}}">');
                        c.$attr.focus && e.attr("autofocus", "true");
                        c.tMin && e.attr("min", r(i.tMin));
                        c.tMax && e.attr("max", r(i.tMax));
                        return e
                    }(), g.addElementInTotvsField(u, s), g.pattern(i, c, s, i, d, u), e = function () {
                        var e;
                        switch (c.canclean) {
                            case "undefined":
                                e = void 0;
                                break;
                            case "":
                            case "null":
                                e = null;
                                break;
                            default:
                                e = c.canclean
                        }
                        d.$setViewValue(e), d.$render(), o().value(null)
                    }, g.canclean(c, s, i, u, e), m.removeAttributesFromElement(s, c, p), g.compile(i, s), g.watchHasError(i, u, d), s.find("input").bind("blur", function () {
                        var e, t, n, a, i;
                        return e = o().getValue(), i = new Date(e), t = new Date(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds()), a = r(new Date), n = f(t), r(t) === a ? l(f(new Date)) : d.$modelValue !== n ? l(n) : void 0
                    }), d.$formatters.push(function (e) {
                        var t;
                        return t = e, o().value(r(t)), e
                    })
                }() : function () {
                    var e, t;

                    function n() {
                        return t || (t = s.find("input").data("kendoDatePicker"))
                    }

                    function a(e) {
                        return e = e || null, angular.isNumber(e) ? n().value(new Date(e)) : n().value(e)
                    }
                    u = function () {
                        var e = angular.element('<input kendo-date-picker k-options="dateSelectorOptions" ng-blur="ngBlur()" ng-required="{{::ngRequired}}" placeholder="{{::placeholder}}" style="width: 100%" ng-disabled="ngDisabled()"/>');
                        c.$attr.tMaskDate && e.attr("totvs-mask-date", c.tMaskDate);
                        return e
                    }(), g.addElementInTotvsField(u, s).addClass("date"), o = i.$new(), e = function () {
                        var e;
                        switch (c.canclean) {
                            case "undefined":
                                e = void 0;
                                break;
                            case "":
                            case "null":
                                e = null;
                                break;
                            default:
                                e = c.canclean
                        }
                        d.$setViewValue(e), d.$render(), n().value(null)
                    }, g.pattern(i, c, s, o, d, u), g.canclean(c, s, o, u, e), m.removeAttributesFromElement(s, c, p), g.compile(o, s), g.watchHasError(i, u, d), d.$formatters.push(function (e) {
                        return n() ? a(e) : r(function () {
                            a(e)
                        }, 250), e
                    }), i.dateSelectorOptions = {
                        start: c.depth,
                        depth: c.depth,
                        format: i.format || "dd/MM/yyyy",
                        max: i.tMax,
                        min: i.tMin,
                        change: function () {
                            this.value() ? d.$setViewValue(f(this.value())) : d.$setViewValue(null)
                        }
                    }, i.$on("kendoWidgetCreated", function () {
                        var e;
                        e = s.find(".k-picker-wrap"), c.$attr.focus && s.find("input.k-input").focus(), c.$attr.canclean && (e.css("border-bottom-right-radius", "0px"), e.css("border-top-right-radius", "0px"))
                    })
                }();

                function f(e) {
                    var t = i.outputFormat || a.getOutputFormat();
                    switch (t) {
                        case "date":
                            return e;
                        case "time":
                        default:
                            return e.getTime()
                    }
                }
            }
        }
    }
    angular.module("totvsDatepicker").directive("totvsDatepicker", e), e.$inject = ["$rootScope", "$compile", "totvsFieldService", "totvs.utils.Service", "$timeout", "TotvsDatepicker", "totvsUtilsDirectiveService"]
}(),
function () {
    "use strict";

    function e(e, p, f) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                ngDisabled: "&",
                ngBlur: "&",
                ngChange: "&",
                ngModel: "=",
                placeholder: "@",
                ngMinlength: "@",
                ngRequired: "@",
                ngMaxlength: "@",
                aDec: "@",
                aSep: "@",
                mDec: "@",
                vMax: "@"
            },
            link: function (e, t, n, a) {
                r = e, l = t, s = n, c = a, u = f.scopeToArray(r).concat(["label", "canclean", "focus"]), d = p.addAttributesInElement(r, s, (i = s, o = angular.element('<input decimal type="text" class="form-control" ng-model="ngModel">'), i.$attr.focus && o.attr("autofocus", "true"), o)), p.addElementInTotvsField(d, l), p.pattern(r, s, l, r, c, d), p.canclean(s, l, r, d, function () {
                    var e;
                    e = "undefined" === s.canclean ? void 0 : "null" === s.canclean || "" === s.canclean ? null : s.canclean, c.$setViewValue(e), c.$render()
                }), f.removeAttributesFromElement(l, s, u), p.compile(r, l), p.watchHasError(r, d, c);
                var i, o;
                var r, l, s, c, d, u
            }
        }
    }
    angular.module("totvsDecimal").directive("totvsDecimal", e), e.$inject = ["$compile", "totvsFieldService", "totvsUtilsDirectiveService"]
}(),
function () {
    "use strict";

    function e(S, D, x) {
        return {
            restrict: "E",
            scope: {
                tAutoBind: "@",
                tConnectionDefaults: "=",
                tDataSource: "=",
                tConnectionsDataSource: "=",
                tEditable: "=",
                tHeight: "@",
                tLayout: "=",
                tOnChange: "&",
                tOnClick: "&",
                tOnDataBound: "&",
                tOnDrag: "&",
                tOnDragEnd: "&",
                tOnDragStart: "&",
                tOnMouseEnter: "&",
                tOnMouseLeave: "&",
                tOnSelect: "&",
                tPannable: "=",
                tSelectable: "=",
                tScopeField: "=",
                tShapeDefaults: "=",
                tWidth: "@",
                tShapes: "=",
                tConnections: "="
            },
            link: function (n, e, t) {
                function a(e) {
                    var t = {};
                    return e.tConnectionDefaults && (t.editable = function (e) {
                        var t = !0;
                        e && ("boolean" == typeof e ? t = e : "object" == typeof e && ((t = {}).drag = e.drag || !0, t.remove = e.remove || !0));
                        return t
                    }(e.tConnectionDefaults.editable), t.selectable = !(!e.tConnectionDefaults.selectable || null === e.tConnectionDefaults.selectable) || e.tConnectionDefaults.selectable, t.stroke = function (e) {
                        var t = D.CONNECTIONS.stroke;
                        e && (e.color && (t.color = e.color), e.width && (t.width = e.width));
                        return t
                    }(e.tConnectionDefaults.stroke), t.style = e.tConnectionDefaults.style || D.CONNECTIONS.style), t
                }

                function i(e) {
                    var t = D.SHAPES.rectShape;
                    return e.tShapeDefaults && (e.tShapeDefaults.style && (t = function (e, t) {
                        if (e.type) switch (e.type) {
                            case D.SHAPES.types.CIRCLE:
                                (t = D.SHAPES.circleShape).radius = n.tShapeDefaults.radius || t.radius;
                                break;
                            case D.SHAPES.types.RECT:
                                (t = D.SHAPES.rectShape).width = n.tShapeDefaults.width || t.width, t.height = n.tShapeDefaults.height || t.height;
                                break;
                            case D.SHAPES.types.SQUARE:
                                (t = D.SHAPES.squareShape).width = n.tShapeDefaults.width || t.width, t.height = n.tShapeDefaults.height || t.height
                        }
                        return t
                    }(e.tShapeDefaults.style, t)), e.tShapeDefaults.visual && (t.visual = e.tShapeDefaults.visual), e.tShapeDefaults.path && (t.path = e.tShapeDefaults.path), e.tShapeDefaults.width && (t.width = e.tShapeDefaults.width), e.tShapeDefaults.height && (t.height = e.tShapeDefaults.height), e.tShapeDefaults.fill && (t.fill = e.tShapeDefaults.fill), t.content = function (e) {
                        var t;
                        e.tShapeDefaults.content && ((t = {}).template = e.tShapeDefaults.content.template || {}, t.fonteSize = e.tShapeDefaults.content.fontSize || 17);
                        return t
                    }(e)), t
                }

                function o(e, t) {
                    var n, a;
                    if (t) {
                        var i;
                        if (function (e) {
                                if (e.data && e.data.constructor !== Array) throw new TypeError("The datasource's data property must be an array.");
                                if (e.children && "string" != typeof e.children && e.children.constructor !== Array) throw new TypeError("The datasource's children property must be an array of strings or a string.");
                                if (e.id && "string" != typeof e.id) throw new TypeError("The datasource's id property must be a string.")
                            }(t), t.data && (n = t.data), t.children) "string" == typeof t.children ? i = t.children : t.children.constructor === Array && (i = function e(t) {
                            if (1 === t.length) {
                                if ("string" != typeof t[0]) throw new TypeError("The children array items must be strings.");
                                return t[0]
                            }
                            return {
                                schema: {
                                    data: t[0],
                                    model: {
                                        children: e(t.shift())
                                    }
                                }
                            }
                        }(i)), a = {
                            model: {
                                children: i
                            }
                        };
                        return t.id && (a ? a.model.id = t.id : a = {
                            model: {
                                id: t.id
                            }
                        }), {
                            data: n,
                            schema: a
                        }
                    }
                }
                h = n, b = e, y = t, w = b, w.html('<div kendo-diagram    = "widget" k-options        = "options" k-on-change      = "tOnChange({e: kendoEvent})" k-on-click       = "tOnClick({e: kendoEvent})" k-on-data-bound  = "tOnDataBound()" k-on-drag        = "tOnDrag({e: kendoEvent})" k-on-drag-end    = "tOnDragEnd({e: kendoEvent})" k-on-drag-start  = "tOnDragStart({e: kendoEvent})" k-on-mouse-enter = "tOnMouseEnter({e: kendoEvent})" k-on-mouse-leave = "tOnMouseLeave({e: kendoEvent})" k-on-select      = "tOnSelect({e: kendoEvent})"></div>'), $ = w.find("[kendo-diagram]"), g = $, m = y, v = m.tHeight ? "height:" + m.tHeight + ";" : "height:300px;", m.tWidth ? v += "width:" + m.tWidth : v += "width:100%", g.attr("style", v), h.options = {
                        autoBind: (C = h, C.tAutoBind || !0),
                        connectionDefaults: a(h),
                        editable: function (e) {
                            var t = !1;
                            return "boolean" == typeof e.tEditable ? e.tEditable : ("object" == typeof e.tEditable && ((t = {}).connectionTemplate = e.tEditable.connectionTemplate, t.tools = e.tEditable.tools, t.shapeTemplate = e.tEditable.shapeTemplate, t.drag = n(e.tEditable, "drag"), t.remove = n(e.tEditable, "remove"), t.resize = n(e.tEditable, "resize")), t);

                            function n(e, t) {
                                return void 0 === e[t] || null === e[t] || e[t]
                            }
                        }(h),
                        layout: function (e) {
                            if (e.tLayout) {
                                var t = {};
                                return t.type = e.tLayout.type || D.LAYOUT.type, t.subtype = e.tLayout.subtype || D.LAYOUT.subtype, t.horizontalSeparation = e.tLayout.horizontalSeparation || D.LAYOUT.horizontalSeparation, t.verticalSeparation = e.tLayout.verticalSeparation || D.LAYOUT.verticalSeparation, t
                            }
                            return {
                                type: D.LAYOUT.type,
                                subtype: D.LAYOUT.subtype,
                                horizontalSeparation: D.LAYOUT.horizontalSeparation,
                                verticalSeparation: D.LAYOUT.verticalSeparation
                            }
                        }(h),
                        pannable: (p = h, f = !0, "boolean" == typeof p.tPannable ? f = p.tPannable : "object" == typeof p.tPannable && ((f = {}).key = p.tPannable.key || "ctrl"), f),
                        selectable: (d = h, u = !1, "boolean" == typeof d.tSelectable ? u = d.tSelectable : "object" == typeof d.tSelectable && ((u = {}).multiple = "boolean" != typeof d.tSelectable.multiple || d.tSelectable.multiple), u),
                        shapeDefaults: i(h),
                        shapes: (s = h, c = [{}], s.tShapes && (c = s.tShapes), c),
                        connections: (r = h, l = [{}], r.tConnections && (l = r.tConnections), l),
                        dataSource: o(h, h.tDataSource),
                        connectionsDataSource: function (e, t) {
                            if (t && t.contructor === Array) return t
                        }(0, h.tConnectionsDataSource)
                    }, S($)(h),
                    function (c) {
                        if (c.tScopeField) {
                            var e = {
                                bringIntoView: function (e, t) {
                                    c.widget.bringIntoView(e, t)
                                },
                                clear: function () {
                                    c.widget.clear()
                                },
                                exportAsImage: function (t, e, n) {
                                    var a = {};
                                    e && (a.width = e), n && (a.height = n), c.widget.exportImage(a).done(function (e) {
                                        kendo.saveAs({
                                            dataURI: e,
                                            fileName: t || "diagram.png"
                                        })
                                    })
                                },
                                exportAsPDF: function (e, t, n, a, i, o, r, l) {
                                    var s = {};
                                    s.creator = e || "TOTVS UI PDF Generator", s.keywords = n || null, s.landscape = a || !1, s.marginLeft = x.getMargin(i), s.paperSize = x.getPaperSize(o), s.subject = r || null, s.title = l || null, c.widget.exportPDF(s).done(function (e) {
                                        kendo.saveAs({
                                            dataURI: e,
                                            fileName: t || "diagram.pdf"
                                        })
                                    })
                                },
                                exportAsSVG: function (t) {
                                    c.widget.exportSVG().done(function (e) {
                                        kendo.saveAs({
                                            dataURI: e,
                                            fileName: t || "diagram.svg"
                                        })
                                    })
                                },
                                focus: function () {
                                    c.widget.focus()
                                }
                            };
                            e.options = c.widget.options, e.refresh = function (e) {
                                c.widget.setDataSource(o(c, e))
                            }, e.shapes = c.widget.shapes, e.toJSON = function () {
                                return c.widget.dataSource.data().toJSON()
                            }, c.tScopeField = e
                        }
                    }(h), k = b, k.removeAttr("t-auto-bind"), k.removeAttr("t-connection-defaults"), k.removeAttr("t-data-source"), k.removeAttr("t-connections-data-source"), k.removeAttr("t-editable"), k.removeAttr("t-height"), k.removeAttr("t-layout"), k.removeAttr("t-on-change"), k.removeAttr("t-on-click"), k.removeAttr("t-on-data-bound"), k.removeAttr("t-on-drag"), k.removeAttr("t-on-drag-end"), k.removeAttr("t-on-drag-start"), k.removeAttr("t-on-mouse-enter"), k.removeAttr("t-on-mouse-leave"), k.removeAttr("t-on-select"), k.removeAttr("t-pannable"), k.removeAttr("t-selectable"), k.removeAttr("t-scope-field"), k.removeAttr("t-shape-defaults"), k.removeAttr("t-width");
                var r, l;
                var s, c;
                var d, u;
                var p, f;
                var g, m, v;
                var h, b, y, $, w, k, C
            }
        }
    }
    angular.module("totvsDiagram").directive("totvsDiagram", e), e.$inject = ["$compile", "totvsDiagramConstant", "TotvsUtilsKendoService"]
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="row"><div class="col-xs-12"><hr class="divider"></hr></div></div>',
            replace: !0,
            restrict: "E"
        }
    }
    angular.module("totvsDivider").directive("totvsDivider", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(c, d, u) {
        return {
            restrict: "E",
            scope: {
                value: "@",
                placement: "@",
                onComplete: "&"
            },
            compile: function (e) {
                var t, r, n, l, s;
                t = angular.element('<a class="inline-edit" ng-click="onClick()">{{ value }}</a>'), (r = angular.element('<div class="row" style="margin-bottom: -10px;"></div>')).html(angular.copy(e.html())), n = r.find("[ng-model]"), r.append('<div class="actions col-xs-12" style="background-color: #f7f7f7; padding-top: 5px; padding-bottom: 5px; margin-top: 15px; border-top: 1px solid #ebebeb"><button type="button" class="btn btn-default pull-right" ng-click="onCancel()">{{ \'btn-cancel\' | i18n }}</button><button type="button" class="btn btn-primary pull-right" style="margin-right: 10px;" ng-click="onApply()">{{ \'btn-apply\' | i18n }}</button></div>'), 0 < r.find("label").length ? l = r.find("label").html() : (l = r.find("field").attr("label"), r.find("field").removeAttr("label")), r.find("label").remove();
                return r.find("field").attr("ng-keyup", "onKeyup($event)"), s = n.attr("ng-model"), n.attr("ng-model", "editable.newValue"), 0 < n.find("ui-select-choices").length, e.html(t),
                    function (i, o) {
                        c(o.find("a"))(i), i.removeAll = function () {
                            $("totvs-editable").each(function (e, t) {
                                $(t).data("bs.popover") && $(t).popover("destroy")
                            })
                        }, i.onKeyup = function (e) {
                            13 === e.keyCode ? (e.target.blur(), e.stopPropagation(), i.onApply()) : 27 === e.keyCode && i.onCancel()
                        }, i.onClick = function () {
                            var e, t = r.clone(),
                                n = t.find("totvs-field"),
                                a = t.find("field");
                            i.$parent.editable = {
                                newValue: d(s)(i.$parent)
                            }, e = a.length ? a : n, c(e)(i.$parent), c(t.find(".actions"))(i), l && (l = u(l)(i)), i.removeAll(), $(o).popover({
                                html: !0,
                                title: l,
                                content: t,
                                container: "body",
                                placement: i.placement || "auto bottom",
                                template: '<div class="popover" role="tooltip" editable><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                            }), $(o).on("shown.bs.popover", function () {
                                var e = t.find("input");
                                e.length && e[0].focus(),
                                    function () {
                                        var e = $("div[modal-render]"),
                                            t = e.length;
                                        if (t) {
                                            var n, a, i = $("div[editable]");
                                            n = angular.element(e[t - 1]), a = parseInt(n.css("z-index")), i.css("z-index", a + 10)
                                        }
                                    }()
                            })
                        }, i.onApply = function () {
                            var e;
                            e = i.$parent.editable, void 0 !== i.onComplete(i) && "function" == typeof i.onComplete(i) ? i.onComplete(i)(e.newValue, d(s)(i.$parent)) : d(s).assign(i.$parent, e.newValue), i.onCancel()
                        }, $(".modal").scroll(function () {
                            $(o).popover("destroy")
                        }), $(".container-fluid").scroll(function () {
                            $(o).popover("destroy")
                        }), i.onCancel = function () {
                            $(o).popover("destroy")
                        }, i.$on("$destroy", function () {
                            i.removeAll()
                        })
                    }
            }
        }
    }
    angular.module("totvsEditable").directive("totvsEditable", e), e.$inject = ["$compile", "$parse", "$interpolate"]
}(),
function () {
    "use strict";

    function e(p, f) {
        return {
            restrict: "E",
            scope: {
                tHeight: "@",
                tMode: "@",
                tModel: "=",
                tOnChange: "&",
                tOnPdfExport: "&",
                tReadonly: "@",
                tScopeField: "=",
                tTools: "=",
                tWidth: "@"
            },
            link: function (o, e, t) {
                function n(e) {
                    e.options = {
                        tools: function (e) {
                            var t, n;
                            if (e.tools = e.$eval("tTools"), n = [], e.tTools)
                                for (e.tTools.constructor !== Array && (e.tTools = [e.tTools]), t = 0; t < e.tTools.length; t += 1) - 1 !== f.ALLOWED_TOOLS.indexOf(e.tTools[t]) ? n.push(e.tTools[t]) : f.TOOL_GROUPS.hasOwnProperty(e.tTools[t]) && (n = n.concat(f.TOOL_GROUPS[e.tTools[t]]));
                            0 === n.length && (n = f.TOOL_GROUPS.defaultTools);
                            return n
                        }(e)
                    }
                }

                function a(e, t) {
                    var n, a, i;
                    n = t.tHeight ? "height:" + t.tHeight + ";" : "height:250px;", t.tWidth ? n += "width:" + t.tWidth : n += "width:100%", e.attr("style", n), i = t, (a = o).$on("kendoWidgetCreated", function (e, t) {
                        if (t === a.widget) {
                            var n = $(a.widget.body);
                            i.$observe("tReadonly", function (e) {
                                (e = a.$eval(e)) ? n.removeAttr("contenteditable").find("a").on("click.readonly", !1): n.attr("contenteditable", !0).find("a").off("click.readonly")
                            })
                        }
                    })
                }
                l = o, s = e, c = t, i = s, r = c, r.tMode && "inline" === r.tMode ? i.html('<div kendo-editor="widget" k-ng-model="tModel" k-options="options" k-on-pdf-export="tOnPdfExport({ e: kendoEvent })" k-on-change="tOnChange()"></div>') : i.html('<textarea kendo-editor="widget" k-ng-model="tModel" k-options="options" k-on-pdf-export="tOnPdfExport({ e: kendoEvent })" k-on-change="tOnChange()"></textarea>'), d = i.find("[kendo-editor]"), n(l), a(d, c), u = s, u.removeAttr("t-height"), u.removeAttr("t-mode"), u.removeAttr("t-model"), u.removeAttr("t-on-change"), u.removeAttr("t-on-pdf-export"), u.removeAttr("t-readonly"), u.removeAttr("t-scope-field"), u.removeAttr("t-tools"), u.removeAttr("t-width"), p(d)(l),
                    function (t) {
                        if (t.tScopeField) {
                            var e = {
                                value: function (e) {
                                    return e ? t.widget.encodedValue() : t.widget.value()
                                },
                                focus: function () {
                                    t.widget.focus()
                                },
                                saveAsPDF: function () {
                                    return t.widget.saveAsPDF()
                                }
                            };
                            t.tScopeField = e
                        }
                    }(l);
                var i, r;
                var l, s, c, d, u
            }
        }
    }
    angular.module("totvsEditor").directive("totvsEditor", e), e.$inject = ["$compile", "totvsEditorConstants"]
}(),
function () {
    "use strict";

    function e(p, f) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                ngModel: "=",
                ngDisabled: "&",
                ngChange: "&",
                ngBlur: "&",
                placeholder: "@",
                ngMinlength: "@",
                ngMaxlength: "@",
                ngPattern: "@",
                ngRequired: "@"
            },
            link: function (e, t, n, a) {
                r = e, l = t, s = n, c = a, u = f.scopeToArray(r).concat(["label", "canclean", "focus"]), d = p.addAttributesInElement(r, s, (i = s, o = angular.element('<input type="email" class="form-control" ng-model="ngModel">'), i.$attr.focus && o.attr("autofocus", "true"), o)), p.addElementInTotvsField(d, l), p.pattern(r, s, l, r, c, d), p.canclean(s, l, r, d), f.removeAttributesFromElement(l, s, u), p.compile(r, l), p.watchHasError(r, d, c);
                var i, o;
                var r, l, s, c, d, u
            }
        }
    }
    angular.module("totvsEmail").directive("totvsEmail", e), e.$inject = ["totvsFieldService", "totvsUtilsDirectiveService"]
}(),
function () {
    "use strict";

    function e(f, t, n) {
        return {
            restrict: "E",
            require: "?ngModel",
            scope: {
                hideRepeat: "@",
                requiredFilename: "@"
            },
            controller: "TotvsExecutionController",
            compile: function (e) {
                var a, p;
                return p = n.configI18n(t), a = e.children("totvs-execution-item").clone() || [], e.html('<div class="row page-execution"><div id="div-execution-navigation" class="col-lg-3 col-md-3 hidden-xs hidden-sm" style="display:none"><nav class="page-execution-navigation"><ul class="list-unstyled"></ul></nav></div><div id="div-execution-content" class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div class="page-execution-content" id="execution-content"></div></div></div>'),
                    function (e, t) {
                        var n, i, o, r, l, s, c, d = 0,
                            u = !1;
                        n = t.attr("ng-model") || "controller.model", i = t.find("ul"), o = t.find(".page-execution-content"), !0 === e.requiredFilename || e.requiredFilename, l = '<totvs-field totvs-input label="' + p.outputFilename + '" ng-model="' + n + '.filename"class="col-md-12" canclean></totvs-field><totvs-schedule class="col-md-12" ng-model="' + n + '.schedule"  hide-repeat="' + e.hideRepeat + '"></totvs-schedule>', r = '<totvs-field totvs-checkbox label="' + p.sendNotificationProcessFinished + '" ng-model="' + n + '.notify" class="col-md-6"></totvs-field><totvs-field totvs-checkbox label="' + p.sendReportProcessFinished + '" ng-model="' + n + '.notifyEmail" class="col-md-6"></totvs-field><field type="textarea" class="col-md-12" ng-model="' + n + '.notifyEmailList" label="' + p.addEmailRecipients + '"></field>', s = function (e, t, n) {
                            var a = angular.element("<li></li>");
                            a.attr("du-smooth-scroll", "execution-step-" + t), a.attr("du-scrollspy", "execution-step-" + t), a.attr("class", 1 === t ? "active" : ""), a.append(n), e.append(a)
                        }, c = function (e, t, n, a) {
                            var i = angular.element('<div class="page-execution-' + t + '" id="execution-step-' + t + '"><fieldset><legend>' + n + "</legend><div>" + a + "</div></fieldset></div>");
                            e.append(i)
                        }, angular.forEach(a, function (e) {
                            var t, n, a = "";
                            d += 1, e.attributes.type && (t = e.attributes.type.value || "common"), "notification" === t ? (n = p.notificationRecipients, a = r) : "execution" === t ? (u = !0, n = p.execution, a = l) : n = e.title, e = angular.element(e), s(i, d, n), c(o, d, n, a + e.html())
                        }), u || (s(i, "execution", p.execution), c(o, "execution", p.execution, l)), f(i)(e.$parent), f(o)(e.$parent)
                    }
            }
        }
    }
    angular.module("totvsExecution").directive("totvsExecution", e), e.$inject = ["$compile", "totvsExecutionConstant", "totvs.utils.Service"]
}(),
function () {
    "use strict";

    function e(n) {
        return {
            restrict: "E",
            require: "?ngModel",
            priority: 300,
            compile: function (e) {
                var t = angular.element('<div class="field-container"><label class="field-label"></label><div class="field-input"><div class="input-group"></div><div class="message-validate"></div></div></div>');
                e.append(t), n(t)
            }
        }
    }
    angular.module("totvsField").directive("totvsField", e), e.$inject = ["$compile"]
}(),
function () {
    "use strict";

    function e(a) {
        return {
            template: '<kendo-gantt k-options="ganttOptions" k-rebind="ganttOptions"></kendo-gantt>',
            restrict: "E",
            scope: {
                tDataSource: "=",
                tDependencies: "=",
                tResources: "=",
                tAssignments: "=",
                tColumns: "=",
                tViews: "=",
                tToolbar: "=",
                tPdfName: "@",
                tAdd: "&",
                tRemove: "&",
                tClick: "&",
                tEdit: "&",
                tCancel: "&",
                tSave: "&",
                tMoveEnd: "&",
                tLanguage: "@"
            },
            link: function (n) {
                var e, t;
                n.tLanguage ? (t = n.tLanguage.toLowerCase(), e = a[t]) : e = a.pt;
                n.$watchCollection("tDataSource", function (e, t) {
                    e !== t && (n.ganttOptions.dataSource = e)
                }), n.ganttOptions = {
                    messages: {
                        actions: {
                            addChild: e.actions.addChild,
                            append: e.actions.append,
                            insertAfter: e.actions.insertAfter,
                            insertBefore: e.actions.insertBefore,
                            pdf: e.actions.pdf
                        },
                        cancel: e.cancel,
                        deleteDependencyConfirmation: e.deleteDependencyConfirmation,
                        deleteDependencyWindowTitle: e.deleteDependencyWindowTitle,
                        deleteTaskConfirmation: e.deleteTaskConfirmation,
                        deleteTaskWindowTitle: e.deleteTaskWindowTitle,
                        destroy: e.destroy,
                        editor: {
                            assignButton: e.editor.assignButton,
                            title: e.editor.title,
                            editorTitle: e.editor.editorTitle,
                            start: e.editor.start,
                            end: e.editor.end,
                            percentComplete: e.editor.percentComplete,
                            resources: e.editor.resources,
                            resourcesEditorTitle: e.editor.resourcesEditorTitle,
                            resourcesHeader: e.editor.resourcesHeader,
                            unitsHeader: e.editor.unitsHeader
                        },
                        save: e.save,
                        views: {
                            week: e.views.week,
                            month: e.views.month,
                            year: e.views.year,
                            day: e.views.day,
                            start: e.views.start,
                            end: e.views.end
                        }
                    },
                    dataSource: n.tDataSource,
                    dependencies: n.tDependencies,
                    resources: {
                        dataSource: n.tResources
                    },
                    assignments: {
                        dataSource: n.tAssignments
                    },
                    views: n.tViews,
                    columns: n.tColumns,
                    toolbar: n.tToolbar,
                    pdf: {
                        fileName: n.tPdfName || "Totvs Gantt"
                    },
                    add: n.tAdd,
                    save: n.tSave,
                    remove: n.tRemove,
                    edit: n.tEdit,
                    change: n.tClick,
                    cancel: n.tCancel,
                    moveEnd: n.tMoveEnd
                }
            }
        }
    }
    angular.module("totvsGantt").directive("totvsGantt", e), e.$inject = ["totvsGanttConstant"]
}(),
function () {
    "use strict";

    function e(f) {
        return {
            require: "^^totvsGrid",
            restrict: "E",
            scope: {
                class: "@",
                editable: "=",
                editor: "&",
                field: "@",
                filter: "@",
                groupHeaderTemplate: "&",
                groupFooterTemplate: "&",
                headerTemplate: "&",
                hideGrouped: "@",
                lockable: "@",
                locked: "@",
                maxWidth: "@",
                minWidth: "@",
                selectDescription: "@",
                selectId: "@",
                selectInit: "&",
                selectService: "@",
                style: "@",
                template: "&",
                title: "@",
                totals: "@",
                width: "@"
            },
            compile: function (r) {
                var l, e = r.find("editor");
                e.remove(), e.length && (l = e.html());
                var s, t = r.find("template");
                t.remove(), t.length && (s = t.html());
                var c, n = r.find("header-template");
                n.remove(), n.length && (c = n.html());
                var d, a = r.find("group-header-template");
                a.remove(), a.length && (d = a.html());
                var u, i = r.find("group-footer-template");
                i.remove(), i.length && (u = i.html());
                return function (e, t, n, a) {
                    var i = function (e) {
                            var t, n = e.filter,
                                a = [];
                            n && 0 <= n.indexOf(":") && (t = n.split(":"), n = t[0].trim(), t.shift(), a = t);
                            return {
                                filter: n,
                                params: a
                            }
                        }(e),
                        o = {
                            title: function (e) {
                                var t = e.title;
                                t || (t = f(r.clone().children().remove().end().html())(e));
                                return t
                            }(e),
                            width: p(e.width),
                            minWidth: p(e.minWidth),
                            maxWidth: p(e.maxWidth),
                            field: e.field,
                            column: e.field,
                            filter: i.filter,
                            filterParams: i.params,
                            options: function (e, t) {
                                for (var n, a = t.find("option"), i = {}, o = 0; o < a.length; o++) n = $(a[o]), i[n.attr("id")] = f(n.html())(e);
                                return 0 < a.length ? i : void 0
                            }(e, t),
                            editable: e.editable || !1,
                            locked: e.locked || !1,
                            lockable: e.lockable || !1,
                            attributes: {
                                style: e.style || "",
                                class: e.class || ""
                            },
                            totals: e.totals,
                            template: s || e.template(),
                            groupHeaderTemplate: d || e.groupHeaderTemplate(),
                            groupFooterTemplate: u || e.groupFooterTemplate(),
                            headerTemplate: c || e.headerTemplate(),
                            editor: e.editor(),
                            editorTemplate: l,
                            selectId: e.selectId,
                            selectDescription: e.selectDescription,
                            selectService: e.selectService,
                            selectInit: e.selectInit,
                            hideGrouped: "true" === e.hideGrouped
                        };
                    a.addColumn(o), t.remove()
                };

                function p(e) {
                    return e ? parseInt(e) : void 0
                }
            }
        }
    }
    angular.module("totvsGrid").directive("totvsGridColumn", e), e.$inject = ["$interpolate"]
}(),
function () {
    "use strict";

    function e() {
        return {
            require: "^^totvsGrid",
            restrict: "E",
            scope: {
                size: "@"
            },
            compile: function (e) {
                var i = e.html();
                return e.remove(),
                    function (e, t, n, a) {
                        a.detailHTML = i, a.detailHTMLsize = e.size
                    }
            }
        }
    }
    angular.module("totvsGrid").directive("totvsGridDetail", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(r) {
        return {
            require: "^^totvsGridGroup",
            restrict: "E",
            scope: {
                tField: "@",
                tTotals: "@"
            },
            link: function (e, t, n, a) {
                var i, o;
                o = r.getFieldName(e.tField), i = function (t, e) {
                    if (e) {
                        var n = e.split(","),
                            a = [];
                        return angular.forEach(n, function (e) {
                            a.push({
                                field: t,
                                aggregate: e.trim()
                            })
                        }), a
                    }
                    return
                }(o, e.tTotals), a.addAggregate(i)
            }
        }
    }
    angular.module("totvsGrid").directive("totvsGridGroupAggregate", e), e.$inject = ["TotvsGridService"]
}(),
function () {
    "use strict";

    function e(l) {
        return {
            require: ["totvsGridGroup", "^^totvsGrid"],
            restrict: "E",
            scope: {
                field: "@",
                tAggregates: "=",
                tField: "@"
            },
            controller: function () {
                var t = this;
                t.aggregates = [], t.addAggregate = function (e) {
                    e && (t.aggregates = t.aggregates.concat(e))
                }
            },
            link: function (e, t, n, a) {
                var i = {},
                    o = a[0],
                    r = a[1];
                i.field = void 0 === e.tField ? e.field : e.tField, i.field = l.getFieldName(i.field), i.aggregates = o.aggregates, r.addGroup(i)
            }
        }
    }
    angular.module("totvsGrid").directive("totvsGridGroup", e), e.$inject = ["TotvsGridService"]
}(),
function () {
    "use strict";

    function e(g, o, r) {
        return {
            restrict: "E",
            scope: {
                gridOptions: "=",
                gridHeight: "@",
                autoResizeContent: "@",
                addSelectColumn: "@",
                autoResizeColumn: "@",
                selectable: "@",
                navigatable: "=",
                editable: "=",
                showHeaderEditIcon: "&",
                resizable: "=",
                reorderable: "=",
                sortable: "=",
                groupable: "=",
                gridData: "=",
                grid: "=",
                gridSelectedItem: "=",
                gridSelectedItems: "=",
                gridDirtyItems: "=",
                gridHotkeys: "=",
                useHyphenatedProperties: "=",
                onChange: "&",
                onEdit: "&",
                onSave: "&",
                onData: "&"
            },
            controller: "TotvsGridController",
            link: function (t, n, a, i) {
                if (function (e, t) {
                        if (e && t)
                            for (var n = r.bindTo(e), a = t.length, i = 0; i < a; i++) n.add(t[i])
                    }(t, t.gridHotkeys), t && t.gridOptions && angular.isFunction(t.gridOptions)) {
                    var e = t.gridOptions();
                    o.when(e).then(function (e) {
                        t.gridOptions = e, l(t, n, a, i)
                    }, function (e) {
                        g.error('An error occurred while retrieving "gridOptions" property. Detail: ' + e), delete t.gridOptions, l(t, n, a, i)
                    })
                } else l(t, n, a, i)
            }
        };

        function l(e, t, n, a) {
            var r, i, o, l, s, c, d, u, p, f;
            a.attrs = n, s = a, (l = e).gridOptions && s.trataGridOptions(l.gridOptions), o = function (e, t, n) {
                var a = function (e) {
                        if (void 0 !== e) return "true" === e || "false" === e ? JSON.parse(e) : e;
                        return "multiple, row"
                    }(e.selectable),
                    i = function (e, t) {
                        var n = e.editable;
                        "true" !== t.editable && "false" !== t.editable && void 0 !== t.editable && (n = !0);
                        return n
                    }(e, t) || !1;
                o = a, r = t, o && angular.isString(o) && -1 !== o.indexOf("cell") && void 0 !== r.addSelectColumn && (r.addSelectColumn = "separate");
                var o, r;
                var l = {
                    columns: n.getColumns(),
                    height: e.gridHeight || "100%",
                    navigatable: e.navigatable,
                    selectable: a,
                    editable: i,
                    resizable: e.resizable || !1,
                    reorderable: e.reorderable || !1,
                    sortable: e.sortable || !1,
                    groupable: e.groupable || !1,
                    change: n.onChange,
                    edit: n.onEdit,
                    save: n.onSave,
                    columnResize: n.columnResize,
                    detailInit: n.detailInit()
                };
                e.gridOptions && e.gridOptions.columns && angular.isArray(e.gridOptions.columns) && l.columns && angular.isArray(l.columns) && (l.columns = l.columns.concat(e.gridOptions.columns), delete e.gridOptions.columns);
                return l
            }(e, n, a), a.element = $("<div></div>"), $(t).replaceWith(a.element), "true" === (e.autoResizeContent || "true") && a.doResize(a.element), d = a, (u = (c = e).$parent.$new()).selectIndex = function (e) {
                d.selectIndex(e)
            }, u.showHeaderEditIcon = function (e) {
                if (!c.editable) return !1;
                var t = c.showHeaderEditIcon();
                return void 0 === t || (angular.isFunction(t) ? t(e) : t)
            }, i = u, (o = angular.extend({
                $angular: [i]
            }, o, e.gridOptions)).dataSource || (o.dataSource = a.getDataSource()), $(a.element).kendoGrid(o), r = $(a.element).data("kendoGrid"), i.grid = r, a.grid = r, o.editable || a.setupCheckEvent(), r.totvsResizeColumn = function (e, t) {
                var n = r.columns[e],
                    a = 0;
                n.width = t;
                for (var i = 0; i < r.columns.length; i++) {
                    var o = r.columns[i];
                    o.hasOwnProperty("locked") && o.locked && a++
                }
                n.hasOwnProperty("locked") && n.locked ? (r.element.find(".k-grid-header-locked").find("colgroup col").eq(e).width(t), r.element.find(".k-grid-content-locked").find("colgroup col").eq(e).width(t)) : (r.element.find(".k-grid-header-wrap").find("colgroup col").eq(e - a).width(t), r.element.find(".k-grid-content").find("colgroup col").eq(e - a).width(t)), r.reorderColumn(1, r.columns[0])
            }, void 0 !== n.grid && (e.grid = r), a.setData(e.gridData), f = a, (p = e).$watchCollection("gridData", f.setData), p.$watchCollection("gridOptions.rowData", function (e) {
                void 0 !== e && (g.warn("Deprecated: gridOptions.rowData use dataSource/grid-data"), f.setData(e))
            })
        }
    }
    angular.module("totvsGrid").directive("totvsGrid", e), e.$inject = ["$log", "$q", "hotkeys"]
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="row group-content"><div class="col-xs-12"><h6 class="clickable"><a ng-click="toggleContent();"><span style="opacity:.8;">{{ isOpen !== true ? "&#9658;" : "&#9660;" }} </span>&nbsp;{{title}}</a></h6></div><span class="content col-xs-12" ng-transclude></span></div>',
            restrict: "E",
            transclude: !0,
            replace: !0,
            scope: {
                title: "@"
            },
            compile: function (e, t) {
                !0 !== t.initOpen && $(e).find(".content").css("display", "none");
                return function (t, n) {
                    t.toggleContent = function () {
                        var e = $(n).find(".content");
                        e.slideToggle(), e.toggleClass("open"), t.isOpen = e.hasClass("open")
                    }
                }
            }
        }
    }
    angular.module("totvsGroupContent").directive("totvsGroupContent", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(e, r, l) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                ngDisabled: "&",
                ngChange: "&",
                ngModel: "=",
                ngBlur: "&",
                tMask: "@",
                uiMask: "@",
                uiMaskPlaceholder: "@",
                placeholder: "@",
                maxlength: "@",
                tMaxlength: "@",
                ngMinlength: "@",
                ngMaxlength: "@",
                ngPattern: "@",
                ngRequired: "@",
                zoomSelected: "&"
            },
            link: function (n, e, t, a) {
                var i, o = l.scopeToArray(n).concat(["label", "canclean", "focus", "numbersOnly", "tMaxlength"]);
                i = r.addAttributesInElement(n, t, function (e, t) {
                    var n = angular.element('<input type="text" class="form-control" ng-model="ngModel" clean="true" ui-mask-placeholder="{{::uiMaskPlaceholder}}" maxlength="{{::tMaxlength}}" />');
                    e.$attr.focus && n.attr("autofocus", "true");
                    e.$attr.numbersOnly && n.attr("numbers-only", "true");
                    t.tMask && (n.attr("mask", t.tMask), n.attr("restrict", "reject"));
                    return n
                }(t, n)), r.addElementInTotvsField(i, e), r.pattern(n, t, e, n, a, i), r.canclean(t, e, n, i), r.zoom(t, e), l.removeAttributesFromElement(e, t, o), r.compile(n, e), r.watchHasError(n, i, a), n.zoomSelectedInternal = function (e, t) {
                    n.zoomSelected({
                        selected: e,
                        oldvalue: t
                    })
                }
            }
        }
    }
    angular.module("totvsInput").directive("totvsInput", e), e.$inject = ["$compile", "totvsFieldService", "totvsUtilsDirectiveService"]
}(),
function () {
    "use strict";

    function e(o) {
        return {
            template: '<div class="list-item"><div class="item-container"><span class="pull-left item-content" ng-transclude></span><div class="clearfix"></div></div></div>',
            restrict: "E",
            transclude: !0,
            replace: !0,
            scope: {
                selected: "="
            },
            link: function (e, t) {
                var n, a, i;
                void 0 !== e.selected && (a = "select-" + (e.selected.$$hashKey || Math.random()), n = !0 === e.selected.$selected ? "checked" : "", i = '<span class="pull-left" style="width: 40px; margin-top: 15px"><span class="clickable input-check" ng-if="selected"><input id="' + a + '" type="checkbox" ng-click="onClickSelect()" ' + n + '><label for="' + a + '"></label></span></span>', t.children(".item-container").prepend(angular.element(i)), t.find(".item-content").addClass("item-content-selected"), t.find(".item-content").css("width", "calc(100% - 40px)"), e.onClickSelect = function () {
                    e.selected.$selected = void 0 === e.selected.$selected || !e.selected.$selected
                }, o(t.find(".input-check"))(e))
            }
        }
    }
    angular.module("totvsListItem").directive("totvsListItem", e), e.$inject = ["$compile"]
}(),
function () {
    "use strict";

    function e() {
        return {
            restrict: "E",
            compile: function (e, t) {
                var n, a, i, o, r, l, s, c, d, u = "",
                    p = "",
                    f = "",
                    g = "";
                i = e.children("action").clone() || [], t.$attr.class ? (t.class.indexOf("col-xs") < 0 && (u += " col-xs-2"), t.class.indexOf("col-sm") < 0 && (u += " col-sm-5"), t.class.indexOf("col-md") < 0 && (u += " col-md-5"), t.class.indexOf("col-lg") < 0 && (u += " col-lg-5"), e.removeAttr("class"), u += " " + t.class) : u += "col-lg-5 col-md-5 col-sm-5 col-xs-2";
                if (e.html('<div class="' + u + ' actions-group"><div class="btn-group btn-group-sm actions pull-right" role="group" aria-label="item-actions"></div></div>'), s = function (t, e, n) {
                        var a, i, o, r;
                        a = e.attr("class"), i = e.attr("icon"), o = e.attr("link"), r = e.attr("ng-click"), o ? t.attr("href", o) : r && (t.addClass("clickable"), t.attr("ng-click", r)), a && t.addClass(a), i && n && t.children(".glyphicon").addClass(i), n ? t.append("&nbsp;&nbsp;" + e.text()) : t.append(e.text()), angular.forEach($(e).get(0).attributes, function (e) {
                            "link" !== e.name && "class" !== e.name && "ng-click" !== e.name && "icon" !== e.name && t.attr(e.name, e.value)
                        })
                    }, 1 === i.length) r = angular.element('<a role="button" class="btn btn-default"><span class="glyphicon hidden-xs"></span></a>'), s(r, angular.element(i[0]), !0), e.find(".actions").append(r);
                else {
                    for (o = angular.element('<div class="btn-group btn-group-sm pull-right" role="group"><a class="btn btn-default dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span>{{\'btn-actions\'|i18n}}&nbsp;&nbsp;</span><span class="hidden-xs glyphicon glyphicon-triangle-bottom"></span></a><ul class="dropdown-menu dropdown-menu-right" role="menu"></ul></div>'), angular.isUndefined(t.limitPrimaryAction) && (t.limitPrimaryAction = 2), t.limitPrimaryAction = parseInt(t.limitPrimaryAction, 10), c = o.find("ul"), d = t.limitPrimaryAction + 1 >= i.length, n = 0; n < i.length; n++) a = angular.element(i[n]), r = angular.element('<a role="button" class="btn btn-default hidden-xs"><span class="glyphicon"></span></a>'), (d || n < t.limitPrimaryAction) && (s(r, a, !0), e.find(".actions").append(r)), l = angular.element("<li><a></a></li>"), s(l.children("a"), a, !1), l.children("a").removeClass(a.attr("class")), n < t.limitPrimaryAction ? l.addClass("visible-xs") : (a.attr("ng-if") ? 0 < p.length ? p += " || (" + a.attr("ng-if") + ")" : p = "(" + a.attr("ng-if") + ")" : p = "(true)", a.attr("ng-show") ? 0 < f.length ? f += " || (" + a.attr("ng-show") + ")" : f = "(" + a.attr("ng-show") + ")" : f = "(true)", a.attr("ng-hide") ? 0 < g.length ? g += " || (" + a.attr("ng-hide") + ")" : g = "(" + a.attr("ng-hide") + ")" : g = "(false)"), c.append(l);
                    p && 0 < p.length && o.attr("ng-if", p), f && 0 < f.length && o.attr("ng-show", f), g && 0 < g.length && o.attr("ng-hide", g), d && o.addClass("visible-xs"), e.find(".actions-group > .actions").append(o)
                }
            }
        }
    }
    angular.module("totvsListItemAction").directive("totvsListItemAction", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="item-info"><div class="row" ng-transclude></div></div>',
            restrict: "E",
            replace: !0,
            transclude: !0
        }
    }
    angular.module("totvsListItemContent").directive("totvsListItemContent", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div><div class="item-details" style="display: none;"><div class="row" ng-transclude></div></div><div class="row info-more text-center"><a class="clickable" ng-click="showDetail();"><span style="opacity:.8;">{{ isOpen ? "&#9650;" : "&#9660;"}}&nbsp;{{ (isOpen ? "close-info-more" : "open-info-more") | i18n }}</span></a></div></div>',
            restrict: "E",
            replace: !0,
            transclude: !0,
            scope: {
                open: "&",
                close: "&"
            },
            link: function (t, n) {
                t.showDetail = function () {
                    var e = n.children(".item-details");
                    e.slideToggle(), e.toggleClass("open"), t.isOpen = e.hasClass("open"), t.isOpen && "function" == typeof t.open ? t.open() : "function" == typeof t.close && t.close()
                }
            }
        }
    }
    angular.module("totvsListItemContentDetail").directive("totvsListItemContentDetail", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="item-actions"><div class="row" ng-transclude></div></div>',
            restrict: "E",
            transclude: !0,
            replace: !0
        }
    }
    angular.module("totvsListItemHeader").directive("totvsListItemHeader", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div><div class="item-field"><label ng-if="title">{{title}}:</label><span ng-if="!value" ng-transclude></span><span ng-if="value">{{value}}</span></div></div>',
            restrict: "E",
            replace: !0,
            transclude: !0,
            scope: {
                title: "@",
                value: "@"
            },
            compile: function (e, t) {
                t.$attr.class ? e.addClass("col-xs-12") : e.addClass("col-xs-12 col-sm-6 col-md-6 col-lg-6");
                if (t.hasOwnProperty("valueBreak")) {
                    var n = t.valueBreak.toLowerCase();
                    "false" !== n && !1 !== n || (e.find("div.item-field").addClass("overflow-text-ellipsis"), e.find("div.item-field > span + span").attr("tooltip", "{{value}}"))
                }
            }
        }
    }
    angular.module("totvsListItemInfo").directive("totvsListItemInfo", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div><a class="title link">{{title}}</a><span class="title" ng-transclude></span></div>',
            restrict: "E",
            transclude: !0,
            replace: !0,
            scope: {
                link: "@",
                title: "@"
            },
            compile: function (e, t) {
                t.$attr.class ? (t.class.indexOf("col-xs") < 0 && e.addClass("col-xs-10"), t.class.indexOf("col-sm") < 0 && e.addClass("col-sm-7"), t.class.indexOf("col-md") < 0 && e.addClass("col-md-7"), t.class.indexOf("col-lg") < 0 && e.addClass("col-lg-7")) : e.addClass("col-xs-10 col-sm-7 col-md-7 col-lg-7");
                return function (e, t) {
                    e.link && t.find("a").attr("href", e.link), t.find("a").attr("ng-if", e.title)
                }
            }
        }
    }
    angular.module("totvsListItemTitle").directive("totvsListItemTitle", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="more-results"><a class="btn btn-primary col-xs-12">{{ \'l-more-results\' | i18n }}</a></div>',
            restrict: "E",
            replace: !0,
            transclude: !0
        }
    }
    angular.module("totvsListPagination").directive("totvsListPagination", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(n) {
        return {
            restrict: "E",
            scope: {
                tModel: "=",
                tTemplate: "@",
                tSelectable: "@",
                tTemplateEdit: "@",
                tOnChange: "&",
                tOnCancel: "&",
                tOnDataBound: "&",
                tOnDataBinding: "&",
                tOnEdit: "&",
                tOnRemove: "&",
                tOnSave: "&",
                ngChange: "&",
                tId: "@"
            },
            compile: function (e, t) {
                var n, a, i = e.find("totvs-list-view-item"),
                    o = e.find("totvs-list-view-edit");
                i.remove(), o.remove(), i.length && (n = i.html());
                o.length && (a = o.html());
                t.tTemplate || (t.tTemplate = n);
                t.tTemplateEdit || (t.tTemplateEdit = a);
                t.tTemplateEdit && (t.tTemplate = '<div class="row" style="margin: auto;"><div class="col-xs-10 col-md-10 col-lg-10 text-left totvs-lit-view-align-center">' + t.tTemplate + '</div><div class="col-xs-1 col-md-1 col-lg-1 text-right totvs-lit-view-align-center"><a href="\\#"><span style="padding: 5px;" class="k-edit-button glyphicon glyphicon-pencil"></span></a><a href="\\#"><span class="k-delete-button glyphicon glyphicon-trash"></span></a></div></div>', t.tTemplateEdit = '<div class="row" style="margin: auto;"><div class="col-xs-10 col-md-10 col-lg-10 text-left" style="display: inline-block; vertical-align: center; float:none;">' + t.tTemplateEdit + '</div><div class="col-xs-1 col-md-1 col-lg-1 text-right" style="display: inline-block; vertical-align: center; float:none;"><a href="\\#" class=""><span style="padding: 5px;" class="k-update-button glyphicon glyphicon-ok"></span></a><a href="\\#"><span class="k-cancel-button glyphicon glyphicon-remove"></span></a></div></div>');
                return r
            }
        };

        function r(a, i, e) {
            var o, r, t;
            a.$watch("tModel.length", function (e, t) {
                var n;
                e !== t && (r.data = angular.copy(a.tModel), n = new kendo.data.DataSource({
                    data: r.data
                }), function () {
                    if (o) return o;
                    return o = i.find("div[kendo-list-view]").data("kendoListView")
                }().setDataSource(n))
            }), r = null === a.tModel ? {
                data: []
            } : {
                data: a.tModel
            }, a.list = {
                dataSource: r,
                template: a.tTemplate,
                selectable: a.tSelectable,
                editTemplate: a.tTemplateEdit,
                kOnChange: a.tOnChange,
                cancel: a.tOnCancel,
                dataBound: a.tOnDataBound,
                dataBinding: a.tOnDataBinding,
                edit: a.tOnEdit,
                remove: a.tOnRemove,
                save: a.tOnSave
            }, t = e.tId ? '<div kendo-list-view  id="' + e.tId + '" k-options="list" ng-model="tModel" k-on-change="tOnChange()"></div>' : '<div kendo-list-view k-options="list" ng-model="tModel" k-on-change="tOnChange()"></div>', i.append(t), n(i.find("div[kendo-list-view]"))(a)
        }
    }
    angular.module("totvsListView").directive("totvsListView", e), e.$inject = ["$compile"]
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div kendo-map class="totvs-map" k-options="mapOptions"></div>',
            restrict: "E",
            scope: {
                center: "=tCenter",
                zoom: "=tZoom",
                controls: "=tControls",
                markers: "=tMarkers",
                pannable: "=tPannable",
                map: "=tMap",
                layers: "=tLayers",
                shape: "=tMarkerShape",
                height: "=tHeight",
                click: "=tOnClick",
                markerClick: "=tMarkerClick",
                shapeMouseEnter: "=tShapeMouseEnter",
                shapeMouseLeave: "=tShapeMouseLeave"
            },
            link: function (t, a) {
                (function (e) {
                    var t, n = {},
                        a = ["map", "shape", "height"];
                    for (t in e.mapOptions = {}, e) e.hasOwnProperty(t) && -1 === t.indexOf("$") && -1 === a.indexOf(t) && (n[t] = e[t]);
                    n.markerDefaults = {
                        shape: e.shape
                    }, e.layers || (n.layers = [{
                        type: "tile",
                        urlTemplate: "http://tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'
                    }]);
                    e.mapOptions = n
                })(t), e = t, n = a, n.find("div[kendo-map]").css({
                    height: e.height
                }), n.addClass("col-xs-12"), t.$on("kendoWidgetCreated", function () {
                    var n, e;
                    n = a, t.$watchCollection("markers", function (e, t) {
                        e !== t && (i(n).markers.clear(), i(n).markers.add(e))
                    }), e = a, t.map = i(e)
                }), a.on("$destroy", function () {
                    i(a).destroy()
                });
                var e, n
            }
        };

        function i(e) {
            return e.find("div[kendo-map]").data("kendoMap")
        }
    }
    angular.module("totvsMap").directive("totvsMap", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(n, e, t) {
        return {
            template: '<div class="captcha-box"><div class="captcha-img"><img alt="Embedded Image" src="{{captchaImage}}" /></div><div class="input-group"><input class="form-control" placeholder="' + t.configI18n(e).typeYourTextHere + '" type="text" ng-model="totvsMashupCaptchaResult.code" ng-disabled="disableCode" /><span class="input-group-btn"><button type="button" class="btn btn-default btn-md" ng-click="recaptcha()" ng-disabled="disableRecaptcha"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span></button></span></div></div>',
            restrict: "E",
            replace: !0,
            scope: {
                totvsMashupCaptchaService: "@",
                totvsMashupCaptchaParams: "=",
                totvsMashupCaptchaResult: "="
            },
            link: function (t) {
                t.captchaImage = "assets/img/loading-bar.gif", t.disableCode = !0, t.disableRecaptcha = !0, t.executeService = function (e, t) {
                    n.getGeneric(e, t)
                }, t.recaptcha = function () {
                    var e = {};
                    t.disableCode = !0, t.disableRecaptcha = !0;
                    try {
                        t.captchaImage = "assets/img/loading-bar.gif", t.totvsMashupCaptchaResult = {}, t.totvsMashupCaptchaParams && (e = angular.copy(t.totvsMashupCaptchaParams)), e.method = t.totvsMashupCaptchaService, t.executeService(e, function (e) {
                            e.Captcha ? ("data:image/png;base64," !== e.Captcha.substring(0, 22) && (e.Captcha = "data:image/png;base64," + e.Captcha), t.captchaImage = e.Captcha, t.totvsMashupCaptchaResult.code = "", t.totvsMashupCaptchaResult.id = e.ServiceExecutionId, t.disableCode = !1) : t.captchaImage = "assets/img/error404.png", t.disableRecaptcha = !1
                        })
                    } catch (e) {
                        t.captchaImage = "assets/img/error404.png", t.disableRecaptcha = !1
                    }
                }, t.recaptcha()
            }
        }
    }
    angular.module("totvsMashupCaptcha").directive("totvsMashupCaptcha", e), e.$inject = ["TotvsMashup", "totvsMashupCaptchaConstant", "totvs.utils.Service"]
}(),
function () {
    "use strict";

    function e() {
        return {
            restrict: "A",
            link: function (e, t, n) {
                var a;
                a = n.totvsMaskDate || "99/99/9999", $(t).kendoMaskedTextBox({
                    mask: a
                }), $(t).removeClass("k-textbox")
            }
        }
    }
    angular.module("totvsMaskDate").directive("totvsMaskDate", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="modal-body page-content" ng-transclude></div>',
            restrict: "E",
            transclude: !0,
            replace: !0
        }
    }
    angular.module("totvsModalBody").directive("totvsModalBody", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="modal-footer" ng-transclude></div>',
            restrict: "E",
            transclude: !0,
            replace: !0
        }
    }
    angular.module("totvsModalFooter").directive("totvsModalFooter", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="modal-header"><div class="modal-title"><h3 ng-transclude></h3></div></div>',
            restrict: "E",
            transclude: !0,
            replace: !0
        }
    }
    angular.module("totvsModalHeader").directive("totvsModalHeader", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(e, s, c, d) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                ngDisabled: "&",
                ngModel: "=",
                tUrlData: "=",
                tData: "=",
                tMultiId: "@",
                tMultiDescription: "@",
                tOnChange: "&",
                tOnSelect: "&",
                tDelay: "@",
                tFilter: "@",
                tHighlightFirst: "@",
                tPlacheholder: "@",
                tMinLength: "@",
                tMaxSelectedItems: "@",
                tAutoClose: "@",
                tNoData: "@",
                ngRequired: "@"
            },
            link: function (e, n, t, a) {
                var i, o, r, l = !0;
                i = angular.element('<select kendo-multi-select k-options="options" k-ng-model="ngModel" ng-disabled="ngDisabled()" ng-required="{{::ngRequired}}"></select>'), n.find(".input-group").append(i), s.pattern(e, t, n, e, a, i), o = n.find(".field-container"), c(o)(e), s.watchHasError(e, i, a), "true" === e.ngRequired && e.$watchCollection("ngModel", function (e) {
                    !l && e && 0 === e.length && (a.$setValidity("required", !1), a.$setDirty());
                    l = !1
                });
                e.options = {
                    placeholder: e.tPlacheholder,
                    dataValueField: e.tMultiId,
                    dataTextField: e.tMultiDescription,
                    filter: e.tFilter,
                    minLength: e.tMinLength,
                    delay: e.tDelay || 500,
                    change: e.tOnChange(),
                    select: e.tOnSelect(),
                    highlightFirst: "true" === e.tHighlightFirst,
                    maxSelectedItems: e.tMaxSelectedItems,
                    noDataTemplate: e.tNoData || d("l-no-data"),
                    autoClose: "true" === e.tAutoClose
                }, e.tUrlData ? e.options.dataSource = {
                    serverFiltering: !0,
                    transport: {
                        read: {
                            url: e.tUrlData,
                            dataType: "json"
                        }
                    },
                    schema: {
                        data: function (e) {
                            return e.data
                        }
                    }
                } : (e.options.dataSource = e.tData, e.$watchCollection("tData", function (e, t) {
                    e !== t && function () {
                        if (r) return r;
                        return r = n.find("select").data("kendoMultiSelect")
                    }().setDataSource(e)
                }))
            }
        }
    }
    angular.module("totvsMultiSelect").directive("totvsMultiSelect", e), e.$inject = ["$injector", "totvsFieldService", "$compile", "i18nFilter"]
}(),
function () {
    "use strict";

    function e(d, u, p, f) {
        return {
            require: ["ngModel", "totvsNumber"],
            restrict: "A",
            scope: {
                ngModel: "=",
                ngDisabled: "&",
                min: "@",
                max: "@",
                tMask: "@",
                ngMaxlength: "@",
                ngMinlength: "@",
                ngPattern: "@",
                ngRequired: "@",
                ngChange: "@",
                ngBlur: "&"
            },
            controller: "TotvsNumberController",
            link: function (e, t, n, a) {
                var i, o, r = a[0],
                    l = a[1],
                    s = f.getBrowser();
                c = angular.element('<input type="number" class="form-control" ng-model="ngModel" ng-change="ngChange()" ng-blur="ngBlur()" min="{{::min}}" max="{{::max}}" ng-required="{{::ngRequired}}" ng-minlength="{{::ngMinlength}}" ng-maxlength="{{::ngMaxlength}}" ng-disabled="ngDisabled()">'), "IE" === s.name && (c.attr("number-only", "true"), l.constructor(e, t, r, c), l.keyPress(), l.keyUp()), i = c, e.tMask && i.attr("mask", e.tMask);
                var c;
                e.ngPattern && i.attr("ng-pattern", e.ngPattern);
                t.find(".input-group").append(i), u.pattern(e, n, t, e, r, i), u.canclean(n, t, e, i), o = t.find(".field-container"), d(o)(e), u.watchHasError(e, i, r), n.$attr.focus && p(function () {
                    i.focus()
                }, 200)
            }
        }
    }
    angular.module("totvsNumber").directive("totvsNumber", e), e.$inject = ["$compile", "totvsFieldService", "$timeout", "totvs.utils.Service"]
}(),
function () {
    "use strict";

    function e(t) {
        return {
            restrict: "A",
            scope: {
                totvsOnRepeatFinish: "&"
            },
            link: function (e) {
                e.$parent && !0 === e.$parent.$last && t(function () {
                    e.totvsOnRepeatFinish()
                })
            }
        }
    }
    angular.module("totvsOnRepeatFinish").directive("totvsOnRepeatFinish", e), e.$inject = ["$timeout"]
}(),
function () {
    "use strict";

    function e(r, l) {
        return {
            restrict: "E",
            transclude: !0,
            replace: !0,
            scope: !0,
            compile: function (e, o) {
                var t, n = "",
                    a = "";
                o.type || (o.type = "base", a = 'type="base" ');
                "execution" === o.type && (n = "du-scroll-container");
                for (t in o.$attr) o.$attr.hasOwnProperty(t) && (a += t + '="' + o[t] + '" ');
                return e.html('<div class="totvs-style-guide page-wrapper container-fluid ng-cloak" ' + a + n + " ng-transclude></div>"),
                    function (e) {
                        var t = r(o.pageHotkeys)(e);
                        if (e && t)
                            for (var n = l.bindTo(e), a = t.length, i = 0; i < a; i++) n.add(t[i])
                    }
            }
        }
    }
    angular.module("totvsPage").directive("totvsPage", e), e.$inject = ["$parse", "hotkeys"]
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="alert alert-{{type}}"><h5>{{message}}</h5><span ng-transclude></span></div>',
            restrict: "E",
            transclude: !0,
            replace: !0,
            scope: {
                type: "@",
                message: "@"
            }
        }
    }
    angular.module("totvsPageAlert").directive("totvsPageAlert", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(d, e, t) {
        return {
            restrict: "E",
            compile: function (e) {
                var c;
                c = e.children("breadcrumb").clone() || [], t.isFluig && c.splice(0, 1);
                return e.html('<div class="page-navbar"><div class="row"><div class="col-xs-12"><ol class="breadcrumb"></ol></div></div></div>'),
                    function (e, t) {
                        var n, a, i, o, r, l, s;
                        for (a = t.find(".breadcrumb"), n = 0; n < c.length; n++) c[n] = angular.element(c[n]), i = c[n].html(), o = c[n].attr("link"), r = c[n].attr("ng-click"), l = angular.element("<li></li>"), o || r ? (l.append(angular.element("<a></a>")), (s = l.find("a")).html(i), o ? s.attr("href", o) : r && (s.attr("ng-click", r), s.addClass("clickable"))) : (c.length, l.html(i)), a.append(l);
                        d(a.parents(".page-navbar"))(e.$parent)
                    }
            }
        }
    }
    angular.module("totvsPageBreadcrumb").directive("totvsPageBreadcrumb", e), e.$inject = ["$compile", "$injector", "$rootScope"]
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="row page-wrapper-child container-fluid ng-cloak" ng-transclude></div>',
            restrict: "E",
            transclude: !0,
            replace: !0
        }
    }
    angular.module("totvsPageChild").directive("totvsPageChild", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="page-content" ng-transclude></div>',
            replace: !0,
            transclude: !0,
            restrict: "E"
        }
    }
    angular.module("totvsPageContent").directive("totvsPageContent", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="page-content-header"><span ng-transclude></span><div class="clearfix"></div></div>',
            restrict: "E",
            replace: !0,
            transclude: !0
        }
    }
    angular.module("totvsPageContentHeader").directive("totvsPageContentHeader", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="page-details"><div class="row" ng-transclude></div></div>',
            restrict: "E",
            transclude: !0,
            replace: !0
        }
    }
    angular.module("totvsPageDetail").directive("totvsPageDetail", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="detail-field"><div class="field-label">{{ title }}</div><div class="field-value"><span ng-if="!value" ng-transclude></span><span ng-if="value">{{value}}</span></div></div>',
            restrict: "E",
            transclude: !0,
            replace: !0,
            scope: {
                class: "@",
                title: "@",
                value: "@"
            },
            compile: function (e, t) {
                t.$attr.class ? e.addClass("col-xs-12") : e.addClass("col-xs-12 col-sm-6 col-md-6 col-lg-6")
            }
        }
    }
    angular.module("totvsPageDetailInfo").directive("totvsPageDetailInfo", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="page-details-infogroup"><div class="col-xs-12"><h4 ng-transclude></h4><hr></div></div>',
            restrict: "E",
            transclude: !0,
            replace: !0
        }
    }
    angular.module("totvsPageDetailInfoGroup").directive("totvsPageDetailInfoGroup", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(i, o) {
        return {
            restrict: "E",
            scope: {
                disclaimerList: "=",
                ngClick: "&"
            },
            compile: function (e) {
                return e.html('<div class="row hidden-xs"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div class="page-disclaimers"><h5></h5></div></div></div>'), e.removeAttr("ng-click"),
                    function (t, e) {
                        var n, a;
                        t.disclaimerList = t.disclaimerList || [], (n = e.find("h5")).append(o("<span ng-if=\"disclaimerList.length > 0\">{{ 'l-filter-by' | i18n }}: </span>")(t)), a = angular.element('<span ng-repeat="disclaimer in disclaimerList track by $index" ng-if="disclaimer.hide !== true" class="label label-default" ng-click="onRemove(disclaimer)" tooltip="{{disclaimer.tooltip}}" ng-class="(ngClick && disclaimer.fixed != true) ? \'clickable\' : \'\'"><span>{{ disclaimer.title }}</span><i class="glyphicon glyphicon-remove" ng-if="(ngClick && disclaimer.fixed != true)"></i></span>'), t.onRemove = function (e) {
                            !0 !== e.fixed && t.ngClick(t)(e)
                        }, n.append(a), i(n)(t)
                    }
            }
        }
    }
    angular.module("totvsPageDisclaimers").directive("totvsPageDisclaimers", e), e.$inject = ["$compile", "$interpolate"]
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="page-form"><form class="form-horizontal row" novalidate ng-transclude></form></div>',
            restrict: "E",
            transclude: !0,
            replace: !0,
            compile: function (e, t) {
                e.find("form").attr("name", t.tName)
            }
        }
    }
    angular.module("totvsPageForm").directive("totvsPageForm", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="page-head" ng-transclude></div>',
            restrict: "E",
            replace: !0,
            transclude: !0
        }
    }
    angular.module("totvsPageHeader").directive("totvsPageHeader", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="row" ng-transclude></div>',
            restrict: "E",
            replace: !0,
            transclude: !0
        }
    }
    angular.module("totvsPageHeaderOperation").directive("totvsPageHeaderOperation", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(M) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                onSave: "&",
                onSaveNew: "&",
                onCancel: "&",
                onBack: "&",
                onEdit: "&",
                onRemove: "&",
                onExec: "&",
                hideBack: "@",
                hideRemove: "@",
                hideEdit: "@",
                hideActions: "@",
                hideSaveNew: "@",
                items: "&",
                itemsAs: "@"
            },
            controller: t,
            compile: function (e) {
                var D, x, E, T, O, F;
                return D = e.children("action").clone() || [], x = e.attr("on-edit-link"), E = e.attr("on-back-link"), T = e.attr("on-save-link"), e.html('<div class="col-xs-12 container-operations"><div class="operations"></div></div>'), O = angular.element('<div class="btn-group" role="group"><a class="btn btn-default dropdown-toggle" data-toggle="dropdown" role="button"><span>{{\'btn-actions\'|i18n}}&nbsp;&nbsp;</span><span class="glyphicon glyphicon-triangle-bottom hidden-xs"></span></a><ul class="dropdown-menu dropdown-menu-right" role="menu"></ul></div>'), F = function (t, e, n) {
                        var a, i, o, r, l;
                        a = e.attr("class"), i = e.attr("icon"), o = e.attr("link"), r = e.attr("ng-click"), l = e.text(), o ? t.attr("href", o) : r && (t.addClass("clickable"), t.attr("ng-click", r)), a && t.addClass(a), n && i && t.children(".glyphicon").addClass(i), n && i ? t.children(".hidden-xs").append("&nbsp;&nbsp;" + l) : t.append(l), angular.forEach($(e).get(0).attributes, function (e) {
                            "link" !== e.name && "class" !== e.name && "ng-click" !== e.name && "icon" !== e.name && t.attr(e.name, e.value)
                        })
                    },
                    function (t, e, n) {
                        var a, i, o, r, l, s, c, d, u, p, f, g, m, v, h, b, y, w, k, C, S;
                        if ((null == (i = e.parents("div.page-wrapper-child")) || i.length < 1) && (i = e.parents("div.page-wrapper")), angular.isUndefined(n.limitPrimaryAction) && ("true" === i.attr("local") || !0 === i.attr("local") ? n.limitPrimaryAction = 4 : n.limitPrimaryAction = 3), n.limitPrimaryAction = parseInt(n.limitPrimaryAction, 10), n.limitPrimaryAction < 1 && (n.limitPrimaryAction = 1), "list" === i.attr("type")) {
                            for (r = (o = n.limitPrimaryAction + 1) === D.length, a = 0; a < D.length; a++) l = angular.element(D[a]), s = angular.element('<a class="btn" role="button"><span class="glyphicon"></span><span class="hidden-xs"></span></a>'), (c = O.find("ul")).removeClass("dropdown-menu-right"), r || a < n.limitPrimaryAction ? (0 === a ? s.addClass("btn-primary") : s.addClass("btn-default"), F(s, l, !0), e.find(".operations").append(s)) : (d = angular.element("<li><a></a></li>"), F(d.children("a"), l, !1), a < n.limitPrimaryAction && d.addClass("visible-xs"), c.append(d));
                            c && 0 < c.find("li").length && e.find(".operations").append(O), M(e.find(".operations"))(t.$parent), u = t.items(), p = t.itemsAs || "item", t.$watch(function () {
                                var e = 0;
                                if (null == u) return e;
                                for (a = 0; a < u.length; a++) u[a].$selected && e++;
                                return e
                            }, function () {
                                if (null != u) {
                                    t[p] = void 0;
                                    var e = 0;
                                    for (a = 0; a < u.length; a++)
                                        if (u[a].$selected && (e++, t[p] = u[a], 1 < e)) {
                                            t[p] = void 0;
                                            break
                                        }
                                }
                            })
                        } else if ("detail" === i.attr("type")) {
                            for (o = n.limitPrimaryAction, "true" !== i.attr("local") && !0 !== i.attr("local") || (n.hideBack = !0), c = O.find("ul"), g = (f = angular.element('<div class="col-xs-12"><div class="operations page-detail-actions"></div></div>')).find(".operations"), C = 0, "true" === i.attr("local") ? (++C <= o ? (b = angular.element('<a class="btn btn-primary" role="button">{{\'btn-save\' | i18n}}</a>'), g.append(b)) : (b = angular.element("<li><a class=\"clickable\">{{'btn-save'|i18n}}</a></li>"), c.append(b)), ++C <= o ? (w = angular.element('<a class="btn btn-default" role="button">{{\'btn-cancel\' | i18n}}</a>'), g.append(w)) : (w = angular.element("<li><a class=\"clickable\">{{'btn-cancel'|i18n}}</a></li>"), c.append(w))) : (!0 !== n.hideBack && "true" !== n.hideBack && C++, C <= o ? (m = angular.element('<a class="btn" role="button">{{\'btn-back\' | i18n}}</a>'), "true" !== i.attr("local") && !0 !== n.hideBack && "true" !== n.hideBack ? m.addClass("btn-primary") : m.addClass("btn-default"), g.append(m)) : (m = angular.element("<li><a class=\"clickable\">{{'btn-back'|i18n}}</a></li>"), c.append(m))), !0 !== n.hideEdit && "true" !== n.hideEdit && C++, C <= o ? (v = angular.element('<a class="btn" role="button"><span class="glyphicon glyphicon-pencil"></span><span class="hidden-xs">&nbsp;&nbsp;{{\'btn-edit\'|i18n}}</span></a>'), "true" === i.attr("local") || !0 === n.hideEdit || "true" === n.hideEdit || !0 !== n.hideBack && "true" !== n.hideBack ? v.addClass("btn-default") : v.addClass("btn-primary"), g.append(v)) : (v = angular.element("<li><a class=\"clickable\">{{'btn-edit'|i18n}}</a></li>"), c.append(v)), !0 !== n.hideRemove && "true" !== n.hideRemove && C++, C <= o ? (h = angular.element('<a class="btn btn-default" role="button"><span class="glyphicon glyphicon-trash"></span><span class="hidden-xs">&nbsp;&nbsp;{{\'btn-remove\'|i18n}}</span></a>'), "true" === i.attr("local") || !0 === n.hideRemove || "true" === n.hideRemove || !0 !== n.hideEdit && "true" !== n.hideEdit || !0 !== n.hideBack && "true" !== n.hideBack ? h.addClass("btn-default") : h.addClass("btn-primary"), g.append(h)) : (h = angular.element("<li><a class=\"clickable\">{{'btn-remove'|i18n}}</a></li>"), c.append(h)), t.$watch("hideBack", function (e) {
                                    !0 === e || "true" === e ? m.css("display", "none") : m.css("display", "")
                                }), "true" === i.attr("local") ? (angular.isFunction(t.onSave()) ? (b.attr("ng-click", "callOnSave();"), t.callOnSave = function () {
                                    t.onSave()()
                                }, M(b)(t)) : (angular.isString(T) ? b.attr("href", T) : b.attr("ng-click", "controller.save();"), M(b)(t.$parent)), angular.isFunction(t.onCancel()) ? (w.attr("ng-click", "callOnBack();"), t.callOnBack = function () {
                                    t.onBack()()
                                }, M(w)(t)) : (angular.isString(E) ? w.attr("href", E) : w.attr("ng-click", "controller.back();"), M(w)(t.$parent))) : angular.isFunction(t.onBack()) ? (m.attr("ng-click", "callOnBack();"), t.callOnBack = function () {
                                    t.onBack()()
                                }, M(m)(t)) : (angular.isString(E) ? m.attr("href", E) : m.attr("ng-click", "controller.back();"), M(m)(t.$parent)), t.$watch("hideEdit", function (e) {
                                    !0 === e || "true" === e ? v.css("display", "none") : v.css("display", "")
                                }), angular.isFunction(t.onEdit()) ? (v.attr("ng-click", "callOnEdit();"), t.callOnEdit = function () {
                                    t.onEdit()()
                                }, M(v)(t)) : (angular.isString(x) ? v.attr("href", x) : v.attr("ng-click", "controller.edit();"), M(v)(t.$parent)), t.$watch("hideRemove", function (e) {
                                    !0 === e || "true" === e ? h.css("display", "none") : h.css("display", "")
                                }), angular.isFunction(t.onRemove()) ? (h.attr("ng-click", "callOnRemove();"), t.callOnRemove = function () {
                                    t.onRemove()()
                                }, M(h)(t)) : (h.attr("ng-click", "controller.remove();"), M(h)(t.$parent)), t.$watch("hideActions", function (e) {
                                    !0 === e || "true" === e ? O.css("display", "none") : O.css("display", "")
                                }), S = C + D.length, a = 0; a < D.length; a++) l = angular.element(D[a]), ++C <= o || S === o + 1 ? (s = angular.element('<a class="btn" role="button"><span class="glyphicon"></span><span class="hidden-xs"></span></a>'), a + C === 1 ? s.addClass("btn-primary") : s.addClass("btn-default"), F(s, l, !0), g.append(M(s)(t.$parent))) : (d = angular.element("<li><a></a></li>"), F(d.children("a"), l, !1), c.append(d));
                            0 < c.find("li").length && (M(O)(t.$parent), g.append(O)), e.html(f)
                        } else if ("edit" === i.attr("type")) g = (f = angular.element('<div class="col-xs-12"><div class="operations page-detail-actions"></div></div>')).find(".operations"), b = "true" === i.attr("local") ? angular.element("<button class=\"btn btn-primary\">{{'btn-update' | i18n}}</button>") : angular.element("<button class=\"btn btn-primary\">{{'btn-save' | i18n}}</button>"), y = "true" === i.attr("local") ? angular.element("<button class=\"btn btn-default\">{{'btn-update-new' | i18n}}</button>") : angular.element("<button class=\"btn btn-default\">{{'btn-save-new' | i18n}}</button>"), w = $("<button class=\"btn btn-default\">{{'btn-cancel' | i18n}}</button>"), angular.isFunction(t.onSave()) ? (b.attr("ng-click", "callOnSave();"), t.callOnSave = function () {
                            t.onSave()()
                        }, M(b)(t)) : (b.attr("ng-click", "controller.save();"), M(b)(t.$parent)), angular.isFunction(t.onSaveNew()) ? (y.attr("ng-click", "callOnSaveNew();"), t.callOnSaveNew = function () {
                            t.onSaveNew()()
                        }, M(y)(t)) : (y.attr("ng-click", "controller.saveNew();"), M(y)(t.$parent)), angular.isFunction(t.onCancel()) ? (w.attr("ng-click", "callOnCancel();"), t.callOnCancel = function () {
                            t.onCancel()()
                        }, M(w)(t)) : (w.attr("ng-click", "controller.cancel();"), M(w)(t.$parent)), t.$watch("hideSaveNew", function (e) {
                            !0 === e || "true" === e ? y.css("display", "none") : y.css("display", "")
                        }), g.append(w), g.append(y), g.append(b), e.html(f);
                        else if ("execution" === i.attr("type")) g = (f = angular.element('<div class="col-xs-12"><div class="operations page-detail-actions"></div></div>')).find(".operations"), k = angular.element("<button class=\"btn btn-primary\">{{'btn-execution' | i18n}}</button>"), w = angular.element("<button class=\"btn btn-default\">{{'btn-cancel' | i18n}}</button>"), angular.isFunction(t.onExec()) ? (k.attr("ng-click", "callOnExec();"), t.callOnExec = function () {
                            t.onExec()()
                        }, M(k)(t)) : (k.attr("ng-click", "controller.exec();"), M(k)(t.$parent)), angular.isFunction(t.onCancel()) ? (w.attr("ng-click", "callOnCancel();"), t.callOnCancel = function () {
                            t.onCancel()()
                        }, M(w)(t)) : (w.attr("ng-click", "controller.cancel();"), M(w)(t.$parent)), g.append(w), g.append(k), e.html(f);
                        else {
                            for (r = (o = n.limitPrimaryAction + 1) === D.length, g = (f = angular.element('<div class="col-xs-12"><div class="operations page-detail-actions"></div></div>')).find(".operations"), a = 0; a < D.length; a++) s = (l = angular.element(D[a])).attr("icon") ? angular.element('<a class="btn" role="button"><span class="glyphicon"></span><span class="hidden-xs"></span></a>') : angular.element('<a class="btn" role="button"></a>'), (c = O.find("ul")).removeClass("dropdown-menu-right"), r || a < n.limitPrimaryAction ? (a === n.limitPrimaryAction - 1 ? s.addClass("btn-primary") : s.addClass("btn-default"), F(s, l, !0), g.append(s)) : (d = angular.element("<li><a></a></li>"), F(d.children("a"), l, !1), a < n.limitPrimaryAction && d.addClass("visible-xs"), c.append(d));
                            0 < c.find("li").length && g.append(O), M(g)(t.$parent), e.html(f)
                        }
                    }
            }
        }
    }

    function t(e) {
        this.scope = e, window.addEventListener("scroll", function () {
            var e, t, n, a, i, o = window.pageYOffset || document.documentElement.scrollTop,
                r = $(".page-head"),
                l = $("#menu-topbar:visible")[0],
                s = $("#menu-header:visible")[0],
                c = $("#wcm_header:visible")[0],
                d = 0,
                u = "15px",
                p = "15px",
                f = r[0],
                g = 0 < $("totvs-page-header-operation-action").length;
            document.documentElement.scrollHeight, window.screen.availHeight;
            if (f && g)
                if (parseInt(window.getComputedStyle(f).height), l && "fixed" === (t = window.getComputedStyle(l)).position && (d += parseInt(t.height)), s && "fixed" === (t = window.getComputedStyle(s)).position && (d += parseInt(t.height)), c && "fixed" === (t = window.getComputedStyle(c)).position && (d += parseInt(t.height), u = "140px", p = "50px"), e = f.getBoundingClientRect().top + o - d, d += "px", f.shrinkOn || (f.shrinkOn = e), o > f.shrinkOn) {
                    if (f.cloned) {
                        for (i = (a = (n = document.getElementById("header_clone")).className.split(" ")).indexOf("hidden"); 0 <= i;) a.splice(i, 1), i = a.indexOf("hidden");
                        n.className = a.join(" ")
                    } else(n = f.cloneNode(!0)).id = "header_clone", f.cloned = !0, f.parentElement.appendChild(n);
                    $(".page-fixed").css("z-index", "4"), f.style.position = "fixed", f.style.top = d, f.style.left = u, f.style.right = p, f.style.zIndex = 100
                } else(n = document.getElementById("header_clone")) && -1 === n.className.split(" ").indexOf("hidden)") && (n.className += " hidden"), $(".page-fixed").css("z-index", ""), f.style.position = "", f.style.top = "", f.style.left = "", f.style.right = "", f.style.zIndex = "", f.getElementsByTagName("div")
        })
    }
    angular.module("totvsPageHeaderOperationAction").directive("totvsPageHeaderOperationAction", e), e.$inject = ["$compile"], t.$inject = ["$scope", "totvs.utils.Service"]
}(),
function () {
    "use strict";

    function e(l) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                advancedSearch: "&",
                cleanSearch: "&",
                placeholder: "@",
                ngModel: "@"
            },
            compile: function (e) {
                var r;
                return r = e.html(), '<div class="advanced-search"><a ng-click="callAdvancedSearch()" class="clickable advanced-search">{{ \'btn-advanced-search\' | i18n }}</a></div>', '<form><div class="input-group pull-right"><input type="text" class="form-control"><span class="input-group-btn"><button class="btn btn-default" type="button" ng-click="callCleanSearch()"><span class="glyphicon glyphicon-remove"></span></button><button class="btn btn-default" type="submit"><span class="glyphicon glyphicon-filter" aria-hidden="true"></span></button></span></div></form>', e.html('<div class="col-xs-12"><div class="filters"><div class="search-field"></div></div></div>'),
                    function (e, t) {
                        var n, a = !1,
                            i = t.children(),
                            o = t.parent() ? t.parent().find(".container-operations") : {};
                        angular.isFunction(e.advancedSearch()) && (e.callAdvancedSearch = function () {
                            e.advancedSearch()()
                        }, a = !0, i.addClass("col-lg-5 col-md-5 col-sm-5"), t.find("div.filters").append('<div class="advanced-search"><a ng-click="callAdvancedSearch()" class="clickable advanced-search">{{ \'btn-advanced-search\' | i18n }}</a></div>'), l(t.find("div.advanced-search"))(e)), a ? o.addClass("col-md-7 col-sm-7 col-lg-7") : (o.addClass("col-md-8 col-sm-8 col-lg-8"), i.addClass("col-lg-4 col-md-4 col-sm-4")), e.ngModel ? (t.find(".search-field").prepend('<form><div class="input-group pull-right"><input type="text" class="form-control"><span class="input-group-btn"><button class="btn btn-default" type="button" ng-click="callCleanSearch()"><span class="glyphicon glyphicon-remove"></span></button><button class="btn btn-default" type="submit"><span class="glyphicon glyphicon-filter" aria-hidden="true"></span></button></span></div></form>'), t.find("input").attr("ng-model", e.ngModel), t.find("input").attr("placeholder", e.placeholder), n = t.find("input").controller("ngModel"), e.callCleanSearch = function () {
                            n.$setViewValue(void 0), t.find("input").focus(), angular.isFunction(e.cleanSearch()) && e.cleanSearch()()
                        }, l(t.find("button")[0])(e), l(t.find("input"))(e.$parent), l(t.find(".search-field"))(e.$parent)) : r && (t.find(".search-field").html(r), l(t.find(".search-field"))(e.$parent))
                    }
            }
        }
    }
    angular.module("totvsPageHeaderOperationFilter").directive("totvsPageHeaderOperationFilter", e), e.$inject = ["$compile"]
}(),
function () {
    "use strict";

    function e(r) {
        return {
            template: '<div class="row"><div class="col-xs-12"><h2 class="title" ng-if="!title" ng-transclude></h2><h2 class="title" ng-if="title">{{title}}<span ng-if="total">&nbsp;({{total}})</span><span ng-if="!title">&nbsp;{{placeholder}}</span></h2></div></div>',
            restrict: "E",
            replace: !0,
            transclude: !0,
            scope: {
                title: "@",
                total: "@",
                placeholder: "@",
                settings: "&"
            },
            compile: function () {
                return function (e, t, n) {
                    var a, i, o;
                    (null == (a = t.parents("div.page-wrapper-child")) || a.length < 1) && (a = t.parents("div.page-wrapper")), "list" === a.attr("type") && (null !== n.settings && void 0 !== n.settings) && ((o = t.find(".col-xs-12")).removeClass(".col-xs-12"), o.addClass("col-xs-10 col-lg-10 col-md-10 col-sm-10"), i = r('<div class="col-xs-2 col-lg-2 col-md-2 col-sm-2"><div class="settings"><h3><a class="clickable" ng-click="settings()"><span class="glyphicon glyphicon-cog"></span></a></h3></div></div>')(e), t.append(i))
                }
            }
        }
    }
    angular.module("totvsPageHeaderTitle").directive("totvsPageHeaderTitle", e), e.$inject = ["$compile"]
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="page-fixed" ng-transclude></div>',
            restrict: "E",
            transclude: !0,
            replace: !0
        }
    }
    angular.module("totvsPageNavbar").directive("totvsPageNavbar", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(s) {
        return {
            restrict: "E",
            scope: {
                filtersList: "=",
                filtersListCustom: "=",
                orderbyList: "=",
                onSelectFilter: "&",
                onAddEditCustom: "&",
                onRemoveCustom: "&",
                onSelectOrderby: "&",
                orderbySelected: "="
            },
            compile: function (e, t) {
                var a, i, o, r, l;
                l = !!(t.hasOwnProperty("orderbySelected") && void 0 !== t.orderbySelected && 0 < t.orderbySelected.trim().length);
                return e.html('<div class="quick-filters pull-right"><ul class="list-inline"></ul></div><div class="clearfix"></div>'), e.removeAttr("ng-click"), a = angular.element('<li ng-repeat="filter in filtersList" class="hidden-xs"><a role="button" class="clickable" ng-click="onClick(filter);">{{ filter.title }}</a></li>'), i = angular.element('<li class="dropdown visible-xs"><div class="btn-group"><a role="button" class="btn btn-default btn-sm">{{ \'l-filter\' | i18n }}</a><a role="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a><ul class="dropdown-menu dropdown-menu-right"><li ng-repeat="filter in filtersList"><a role="button" class="clickable" ng-click="onClick(filter)">{{ filter.title }}</a></li></ul><div></li>'), o = angular.element('<li class="dropdown custom-filters" ng-if="filtersListCustom !== undefined"><div class="btn-group"><a role="button" class="btn btn-default btn-sm">{{ \'l-more-filters\' | i18n }}</a><a role="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a><ul class="dropdown-menu dropdown-menu-right"><li style="padding: 5px" class="row no-gutters"><div class="input-group pull-right"><input class="form-control input-sm" type="text" ng-model="filterCustomText" placeholder="{{ \'l-filter\' | i18n }}"><span class="input-group-btn"><a role="button" class="btn btn-primary btn-sm" ng-click="onCustomAddEdit($event)"><span class="glyphicon glyphicon-plus"></span></a></span></div></li><li role="separator" class="divider"></li><li ng-repeat="custom in filtersListCustom | filter: filterCustomText track by $index"><div class="col-xs-9 title"><a class="clickable" ng-click="onClick(custom);">{{ custom.title }}</a></div><div class="pull-right"><a role="button" class="clickable" ng-click="onCustomAddEdit(custom);"><span class="glyphicon glyphicon-pencil"></span></a> &nbsp;&nbsp;<a role="button" class="clickable" ng-click="onCustomRemove(custom);"><span class="glyphicon glyphicon-trash"></span></a></div></li></ul></div></li>'), r = angular.element('<li class="dropdown"><div class="btn-group"><a role="button" class="btn btn-default btn-sm">{{ (orderby ? orderby.title : (\'l-orderby\' | i18n)) }}</a><a role="button" class="btn btn-default btn-sm" ng-if="orderby" ng-click="onClickSort(orderby)"><span class="glyphicon" ng-class="orderby.asc === true ? \'glyphicon-sort-by-attributes\' : \'glyphicon-sort-by-attributes-alt\'"></span></a><a role="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a><ul class="dropdown-menu dropdown-menu-right"><li ng-repeat="order in orderbyList"><a role="button" class="clickable" ng-click="onOrderbySelect(order)">{{ order.title }}</a></li></ul></div></li>'),
                    function (t, e) {
                        var n;
                        n = e.find("ul.list-inline"), t.filtersList && (n.append(a), n.append(i)), t.onClick = function (e) {
                            t.filterCustomText = void 0, angular.isFunction(t.onSelectFilter(t)) && t.onSelectFilter(t)(e)
                        }, t.filtersListCustom && (n.append(o), t.onCustomAddEdit = function (e) {
                            t.filterCustomText = void 0, angular.isFunction(t.onAddEditCustom(t)) && t.onAddEditCustom(t)(e)
                        }, t.onCustomRemove = function (e) {
                            e || (e = {
                                name: t.filterCustomText
                            }), t.filterCustomText = void 0, angular.isFunction(t.onRemoveCustom(t)) && t.onRemoveCustom(t)(e)
                        }), t.orderbyList && (n.append(r), t.onOrderbySelect = function (e) {
                            t.orderby && t.orderby.property === e.property || (e.hasOwnProperty("asc") || (e.asc = !0), t.orderby = angular.copy(e)), l && (t.orderbySelected = angular.copy(e)), angular.isFunction(t.onSelectOrderby(t)) && t.onSelectOrderby(t)(t.orderby)
                        }, t.onClickSort = function (e) {
                            e && (e.asc = !e.asc, t.onOrderbySelect(e))
                        }, t.$watchCollection("orderbyList", function () {
                            var e;
                            if (t.orderby = void 0, l && (t.orderbySelected = t.orderby), t.orderbyList)
                                for (e = 0; e < t.orderbyList.length; e++)
                                    if (!0 === t.orderbyList[e].default) {
                                        t.orderby = t.orderbyList[e], l && (t.orderbySelected = t.orderby);
                                        break
                                    }
                        })), s(n)(t)
                    }
            }
        }
    }
    angular.module("totvsPageQuickFilter").directive("totvsPageQuickFilter", e), e.$inject = ["$compile"]
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="quick-select clickable pull-left" ng-click="onClickSelectAll()"><span class="input-check"><input id="selectAll" type="checkbox" ng-click="onClickSelectAll()"><label for="selectAll"></label></span><span class="hidden-xs">{{ title }}</span></div>',
            restrict: "E",
            scope: {
                title: "@",
                list: "=",
                ngClick: "&",
                gridOptions: "="
            },
            compile: function (e) {
                return e.removeAttr("ng-click"),
                    function (n) {
                        var t, e;
                        e = function () {
                            var e;
                            if (n.isSelected = !1, void 0 !== n.list && null !== n.list && 0 < n.list.length)
                                for (n.isSelected = !0, e = 0; e < n.list.length; e++)
                                    if (!0 !== n.list[e].$selected) {
                                        n.isSelected = !1;
                                        break
                                    }
                            $(".quick-select > .input-check > input[type=checkbox]").prop("checked", n.isSelected)
                        }, n.$watch(function () {
                            var e, t = 0;
                            if (void 0 === n.list || null === n.list) return t;
                            for (e = 0; e < n.list.length; e++) n.list[e].$selected && t++;
                            return t
                        }, function () {
                            e()
                        }), t = function (e) {
                            void 0 !== n.gridOptions && (!0 === e ? n.gridOptions.api.selectAll() : n.gridOptions.api.deselectAll())
                        }, n.onClickSelectAll = function () {
                            var e;
                            if (n.isSelected = void 0 === n.isSelected || !n.isSelected, angular.isFunction(n.ngClick(n))) n.ngClick(n)(n.isSelected);
                            else if (n.list) {
                                for (e = 0; e < n.list.length; e++) n.list[e].$selected = n.isSelected;
                                $(".input-check input[type=checkbox]").prop("checked", n.isSelected), t(n.isSelected)
                            }
                        }
                    }
            }
        }
    }
    angular.module("totvsPageQuickSelect").directive("totvsPageQuickSelect", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            restrict: "E",
            compile: function (e) {
                var t, n;
                t = e.children("tag").clone() || [], e.html('<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-xs"><div class="page-tags"></div></div></div>'), n = e.find(".page-tags"), angular.forEach(t, function (e) {
                    e = angular.element(e);
                    var t = angular.element('<div class="tag legend"></div>');
                    e.attr("class") && t.addClass(e.attr("class")), t.html(e.text()), angular.forEach($(e).get(0).attributes, function (e) {
                        "class" !== e.name && t.attr(e.name, e.value)
                    }), n.append(t)
                })
            }
        }
    }
    angular.module("totvsPageTags").directive("totvsPageTags", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(r, l, s) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                ngDisabled: "&",
                ngChange: "&",
                ngBlur: "&",
                placeholder: "@",
                ngModel: "=",
                uiMask: "@",
                uiMaskPlaceholder: "@",
                tMask: "@",
                ngMinlength: "@",
                ngRequired: "@",
                ngMaxlength: "@",
                ngPattern: "@"
            },
            link: function (e, t, n, a) {
                var i, o;
                i = angular.element('<input type="tel" ng-model="ngModel" placeholder="{{::placeholder}}" ng-blur="ngBlur()" class="form-control" ng-change="ngChange()" ng-required="{{::ngRequired}}" ng-maxlength="{{::ngMaxlength}}" ng-minlength="{{::ngMinlength}}" clean="true" ui-mask="{{::uiMask}}" ui-mask-placeholder="{{::uiMaskPlaceholder}}"  ng-disabled="ngDisabled()">'), e.tMask && i.attr("mask", e.tMask);
                e.ngPattern && i.attr("ng-pattern", e.ngPattern);
                t.find(".input-group").append(i), l.pattern(e, n, t, e, a, i), l.canclean(n, t, e, i), o = t.find(".field-container"), r(o)(e), l.watchHasError(e, i, a), n.$attr.focus && s(function () {
                    i.focus()
                }, 200)
            }
        }
    }
    angular.module("totvsPhone").directive("totvsPhone", e), e.$inject = ["$compile", "totvsFieldService", "$timeout"]
}(),
function () {
    "use strict";

    function e(t, a) {
        return {
            restrict: "E",
            scope: {
                tHeight: "@",
                tWidth: "@",
                tData: "=",
                tId: "@",
                tColumns: "=",
                tRows: "=",
                tMeasures: "=",
                tFields: "=",
                tViewConfigurator: "="
            },
            template: '<div class="row pivot-grid-configurator-bar" ng-hide="{{!tViewConfigurator}}" ng-init="scope.confShow = false"><a class="btn btn-lg pivot-grid-text-color-bar" ng-click="scope.confShow = !scope.confShow"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span></a></div><div class="row pivot-background-color"><div class="col-lg-4 pivot-configurator-div" ng-hide="!scope.confShow" ng-show="scope.confShow"><div kendo-pivot-configurator k-height="380" id="{{ tId }}Configurator" k-options="pivotOptions" class="hidden-on-narrow pivot-configurator-width" ng-hide="!scope.confShow" ng-show="scope.confShow"></div></div><div class="col-lg-12 pivot-grid-div" ng-class="{\' pivot-grid-configurator-padding col-lg-8 !important\' : scope.confShow}"><div kendo-pivot-grid id="{{ tId }}" k-options="pivotOptions" class="hidden-on-narrow"></div></div></div>',
            link: function (n) {
                var e = t.getBrowserDialect();
                n.tDimensionsCube = {}, n.tMeasuresCube = {}, n.tFieldsTemp = {}, angular.forEach(n.tFields.dimensionsCube, function (e) {
                    e.type ? n.tFieldsTemp[e.property] = {
                        type: e.type
                    } : e.field && (n.tFieldsTemp[e.property] = {
                        field: e.field
                    }), n.tDimensionsCube[e.property] = {
                        caption: e.caption
                    }
                }, ""), angular.forEach(n.tFields.measuresCube, function (e) {
                    n.tMeasuresCube[e.caption] = {
                        field: e.field,
                        format: e.format,
                        aggregate: e.aggregate
                    }
                }, ""), n.dataSource = new kendo.data.PivotDataSource({
                    columns: n.tColumns,
                    rows: n.tRows,
                    data: n.tData,
                    measures: n.tMeasures,
                    schema: {
                        model: {
                            fields: n.tFieldsTemp
                        },
                        cube: {
                            dimensions: n.tDimensionsCube,
                            measures: n.tMeasuresCube
                        }
                    },
                    error: function (e) {
                        console.log("error: " + kendo.stringify(e.errors[0]))
                    }
                }), n.pivotOptions = {
                    dataSource: n.dataSource,
                    height: n.tHeight,
                    columnWidth: n.tWidth,
                    messages: {
                        measureFields: a.measureFields[e],
                        rowFields: a.rowFields[e],
                        columnFields: a.columnFields[e],
                        info: a.info[e],
                        sortAscending: a.sortAscending[e],
                        sortDescending: a.sortDescending[e],
                        filterFields: a.filterFields[e],
                        filter: a.filter[e],
                        include: a.include[e],
                        title: a.title[e],
                        clear: a.clear[e],
                        ok: a.ok[e],
                        measures: a.measures[e],
                        columns: a.columns[e],
                        rows: a.rows[e],
                        measuresLabel: a.measuresLabel[e],
                        columnsLabel: a.columnsLabel[e],
                        rowsLabel: a.rowsLabel[e],
                        fieldsLabel: a.fieldsLabel[e]
                    }
                }, n.$watch("tData.length", function (e, t) {
                    e !== t && n.dataSource.data(n.tData)
                })
            }
        }
    }
    angular.module("totvsPivotGrid").directive("totvsPivotGrid", e), e.$inject = ["totvs.utils.browser.service", "totvsPivotGridConstant"]
}(),
function () {
    "use strict";

    function e(r) {
        return {
            template: '<div kendo-qrcode ng-model="ngModel"></div>',
            restrict: "E",
            scope: {
                ngModel: "=",
                tHeight: "@",
                tColor: "@",
                tBorderColor: "@",
                tBorderWidth: "@",
                tBackgroundColor: "@",
                tInstance: "="
            },
            link: function (e, t, n) {
                var a, i = r.scopeToArray(e);

                function o() {
                    return a || (a = t.find("div[kendo-qrcode]").data("kendoQRCode"))
                }
                e.$on("kendoRendered", function () {
                    n.tInstance && (e.tInstance = o()), o().setOptions({
                        size: e.tHeight,
                        background: e.tBackgroundColor,
                        border: {
                            color: e.tBorderColor,
                            width: parseInt(e.tBorderWidth)
                        },
                        color: e.tColor
                    }), n.$attr.class ? t.addClass("col-xs-12") : t.addClass("col-xs-12 col-md-4"), r.removeAttributesFromElement(t, n, i)
                }), t.on("$destroy", function () {
                    o().destroy()
                })
            }
        }
    }
    angular.module("totvsQrcode").directive("totvsQrcode", e), e.$inject = ["totvsUtilsDirectiveService"]
}(),
function () {
    "use strict";

    function e(s, c, d, u, p) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: !0,
            link: function (t, n, a, e) {
                var i, o, r, l;
                r = d.isMobile.any(), i = r ? angular.element('<div ng-repeat="o in tOptions track by $index"><div class="radio mobile-radio"><input type="radio" id="option-{{o.value}}-{{$id}}" ng-disabled="{{o.disabled}}" value="{{o.value}}"><label for="option-{{o.value}}-{{$id}}">{{o.label}}</label></div></div>') : angular.element('<div ng-repeat="o in tOptions track by $index"><div class="radio"><label class="not-required"><input type="radio" value="{{o.value}}" ng-disabled="{{o.disabled}}">{{o.label}}</label></div></div>'), n.find(".input-group").append(i), t.tOptions = u(a.tOptions)(t), l = i.find("input"), angular.forEach(a.$attr, function (e) {
                    if ("ng-change" === e || "ng-model" === e) {
                        var t = n.attr(e);
                        l.attr(e, t)
                    }
                }), c.pattern(t, a, n, t, e, l), o = n.find(".field-container"), s(o)(t), a.ngDisabled && p(function () {
                    var e = n.find("input");
                    c.ngDisabled(t, a, n, e)
                })
            }
        }
    }
    angular.module("totvsRadio").directive("totvsRadio", e), e.$inject = ["$compile", "totvsFieldService", "totvs.utils.Service", "$parse", "$timeout"]
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="row" style="padding-left:15px;padding-right:15px;" ng-transclude></div>',
            restrict: "E",
            replace: !0,
            transclude: !0
        }
    }
    angular.module("totvsRow").directive("totvsRow", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(e, r, l, t, n, a, s) {
        var c = a.configI18n(n),
            d = '<div class="schedule-panel container" style="margin-left: 0px; margin-right: 0px;"><div class="row"><totvs-field totvs-radio class="col-md-6" label="' + c.dateExecution + '" t-options="dateExecutionOptions" ng-model="config.type" ng-change="changeType()"> </totvs-field><totvs-field totvs-datepicker class="col-md-3" ng-model="config.date" label="' + c.scheduleTo + '" canclean> </totvs-field><totvs-field totvs-time class="col-md-3" ng-model="config.time" ng-disabled="config.type !== \'DATE\'" label="' + c.time + '" canclean></totvs-field></div><div class="row"><totvs-field totvs-checkbox class="col-md-12" ng-model="config.repeat" label="' + c.repeatOccurrence + '" ng-change="changeRepeat()" ng-if="hideRepeat !== \'true\'"></totvs-field></div><div class="row"><div class="col-md-12" ng-if="config.repeat && description"><label style="margin-top:10px;font-weight:200;font-size:12px;color:gray;">' + c.configuration + '</label><div style="font-weight:bold">{{description}}</div></div></div><div class="row"><div class="col-md-12" ng-if="config.repeat" style="padding-top:5px"><a class="clickable" ng-click="changeConfig(false);">' + c.btnEdit + "</a></div></div></div>",
            u = "<totvs-modal-header>" + c.repeatOccurrence + '</totvs-modal-header><totvs-modal-body><div class="row"><totvs-field totvs-radio class="col-md-12" label="' + c.repeatPattern + '" t-options="scheduleController.periods" ng-model="scheduleController.config.repeatType" ng-change="scheduleController.changeRepeatCycle(scheduleController.config.repeatType, true)"></totvs-field><totvs-field totvs-combo class="col-md-6" label="' + c.repeatEvery + '" ng-model="scheduleController.config.repeatCycle"t-options="scheduleController.repeatCycleItems"> </totvs-field><totvs-field totvs-time class="col-md-6" ng-model="scheduleController.config.repeatTime" label="' + c.time + '"></totvs-field><div class="field-container" ng-if="scheduleController.config.repeatType === \'W\'"><div class="seven-cols"><totvs-field class="col-md-1" totvs-checkbox ng-model="scheduleController.config.repeatWeekDays.sunday"label="' + c.daySunday + '"></totvs-field><totvs-field class="col-md-1" totvs-checkbox ng-model="scheduleController.config.repeatWeekDays.monday"label="' + c.dayMondaySingle + '"></totvs-field><totvs-field class="col-md-1" totvs-checkbox ng-model="scheduleController.config.repeatWeekDays.tuesday" label="' + c.dayTuesdaySingle + '"></totvs-field><totvs-field class="col-md-1" totvs-checkbox ng-model="scheduleController.config.repeatWeekDays.wednesday" label="' + c.dayWednesdaySingle + '"></totvs-field><totvs-field class="col-md-1" totvs-checkbox ng-model="scheduleController.config.repeatWeekDays.thursday" label="' + c.dayThursdaySingle + '"></totvs-field><totvs-field class="col-md-1" totvs-checkbox ng-model="scheduleController.config.repeatWeekDays.friday" label="' + c.dayFridaySingle + '"></totvs-field><totvs-field class="col-md-1" totvs-checkbox ng-model="scheduleController.config.repeatWeekDays.saturday" label="' + c.daySaturday + '"></totvs-field></div></div><div ng-if="scheduleController.config.repeatType === \'M\'"><totvs-field totvs-radio class="col-md-4" label="' + c.alwaysOn + '" t-options="[{value: false, label: \'' + c.dayOfTheMonth + '\'}]" ng-model="scheduleController.config.repeatMonthDay.last"></totvs-field><totvs-field totvs-combo class="col-md-3" label="' + c.dayOfTheMonth + '"ng-model="scheduleController.config.repeatMonthDay.day" t-options="scheduleController.daysOfMonth" ng-disabled="scheduleController.config.repeatMonthDay.last === \'true\'"></totvs-field><totvs-field totvs-radio class="col-md-5" label="' + c.alwaysOn + '"t-options="[{value: true, label: \'' + c.lastDayOfTheMonth + '\'}]" ng-model="scheduleController.config.repeatMonthDay.last"></totvs-field></div><totvs-field totvs-radio class="col-md-6" t-options="scheduleController.executeOptions" label="' + c.execute + '" ng-model="scheduleController.config.repeatFinish"></totvs-field><totvs-field totvs-datepicker class="col-md-6" label="' + c.deadline + '" ng-model="scheduleController.config.repeatFinishDate" ng-change="self.changeDatepicker()"  ng-disabled="scheduleController.config.repeatFinish !== \'DATE\'" canclean> </totvs-field></div></totvs-modal-body><totvs-modal-footer><button type="button" class="btn btn-default" data-ng-click="scheduleController.close();">' + c.btnCancel + '</button><button type="button" class="btn btn-primary" data-ng-click="scheduleController.save();">' + c.btnSave + "</button></totvs-modal-footer>";
        return {
            restrict: "E",
            require: "ng-model",
            replace: !0,
            scope: {
                hideRepeat: "@"
            },
            link: function (i, e, t, n) {
                o(), n.$render = o, i.properties = {}, i.$watch("config", function (e) {
                    n.$setViewValue({
                            type: e.type,
                            date: e.date,
                            time: e.time,
                            repeat: e.repeat,
                            repeatType: e.repeatType,
                            repeatTime: e.repeatTime,
                            repeatCycle: e.repeatCycle,
                            repeatWeekDays: e.repeatWeekDays,
                            repeatMonthDay: e.repeatMonthDay,
                            repeatFinish: e.repeatFinish,
                            repeatFinishDate: e.repeatFinishDate,
                            optionsExecution: e.optionsExecution
                        }),
                        function (e) {
                            if (!e.repeat) return i.description = void 0;

                            function t(e, t, n) {
                                return e && (t += (t ? ", " : c.prepOnF + " ") + n), t
                            }
                            i.description = function () {
                                switch (e.repeatType) {
                                    case "D":
                                        return 1 === e.repeatCycle ? c.repeatEveryDays : c.repeatEveryXDays.replace("{x}", e.repeatCycle);
                                    case "W":
                                        return 1 === e.repeatCycle ? c.repeatEveryWeeks : c.repeatEveryXWeeks.replace("{x}", e.repeatCycle);
                                    case "M":
                                        return 1 === e.repeatCycle ? c.repeatEveryMonths : c.repeatEveryXMonths.replace("{x}", e.repeatCycle);
                                    default:
                                        return ""
                                }
                            }() + (e.repeatTime ? " " + c.prepAt + " " + e.repeatTime + ". " : ". ") + (a = "", "W" === e.repeatType ? e.repeatWeekDays ? (e.repeatWeekDays.sunday && (a = c.prepOnM + " " + c.daySundays), a = t(e.repeatWeekDays.monday, a, c.dayMondays), a = t(e.repeatWeekDays.tuesday, a, c.dayTuesdays), a = t(e.repeatWeekDays.wednesday, a, c.dayWednesdays), a = t(e.repeatWeekDays.thursday, a, c.dayThursdays), a = t(e.repeatWeekDays.friday, a, c.dayFridays), e.repeatWeekDays.saturday && (a += (a ? ", " : c.prepOnM + " ") + c.daySaturdays), n = a.lastIndexOf(","), a.slice(0, n) + a.slice(n).replace(",", " " + c.and) + ". ") : "" : "M" === e.repeatType ? "true" === e.repeatMonthDay.last ? c.lastDayEachMonth : c.onDayOfEachMonthX.replace("{x}", e.repeatMonthDay.day) : "") + " " + ("FOREVER" === e.repeatFinish ? c.forever + ". " : c.finishIn.replace("{x}", l("date")(e.repeatFinishDate, "dd/MM/yyyy")));
                            var n, a
                        }(i.config)
                }, !0), i.dateExecutionOptions = [{
                    value: "TODAY",
                    label: c.executionToday
                }, {
                    value: "DATE",
                    label: c.scheduleTheExecution
                }], i.changeType = function () {
                    "TODAY" === i.config.type && (i.config.date = void 0, i.config.time = void 0)
                }, i.changeRepeat = function () {
                    setTimeout(function () {
                        !0 === i.config.repeat ? i.changeConfig(!0) : (i.config.repeatType = "D", i.config.repeatTime = void 0, i.config.repeatCycle = 1, i.config.repeatWeekDays = {}, i.config.repeatMonthDay = {
                            day: 1,
                            last: "false"
                        }, i.config.repeatFinish = "FOREVER", i.config.repeatFinishDate = void 0)
                    })
                }, i.changeConfig = function (e) {
                    var t;
                    r.open({
                        template: u,
                        controller: "TotvsScheduleController as scheduleController",
                        size: "md",
                        resolve: {
                            config: function () {
                                return t = angular.copy(i.config)
                            },
                            translations: function () {
                                return angular.copy(c)
                            }
                        }
                    }).result.then(function () {
                        i.config = angular.copy(t)
                    }, function () {
                        e && (i.config.repeat = !1)
                    })
                }, e.append(d);
                var a = e.find("div.schedule-panel");

                function o() {
                    n.$viewValue || (n.$viewValue = {}), i.config = {
                        type: n.$viewValue.type || "TODAY",
                        date: n.$viewValue.date || void 0,
                        time: n.$viewValue.time || null,
                        repeat: n.$viewValue.repeat || !1,
                        repeatType: n.$viewValue.repeatType || "D",
                        repeatTime: n.$viewValue.repeatTime || null,
                        repeatCycle: n.$viewValue.repeatCycle || 1,
                        repeatWeekDays: n.$viewValue.repeatWeekDays || {},
                        repeatMonthDay: n.$viewValue.repeatMonthDay || {
                            day: 1,
                            last: "false"
                        },
                        repeatFinish: "DATE" !== n.$viewValue.repeatFinish ? "FOREVER" : "DATE",
                        repeatFinishDate: n.$viewValue.repeatFinishDate || void 0
                    }
                }
                s(a)(i)
            }
        }
    }
    angular.module("totvsSchedule").directive("totvsSchedule", e), e.$inject = ["$rootScope", "$modal", "$filter", "TotvsKendoCulture", "totvsScheduleConstant", "totvs.utils.Service", "$compile"]
}(),
function () {
    "use strict";

    function e(t, i, r, l) {
        return {
            restrict: "E",
            scope: {
                scheduler: "=?tScheduler",
                schedulerData: "=tSchedulerData",
                startTime: "=tStartTime",
                endTime: "=tEndTime",
                allDaySlot: "=tAllDaySlot",
                timezone: "=tTimezone",
                height: "=tHeight",
                width: "=tWidth",
                views: "=tViews",
                editable: "=tEditable",
                selectable: "=tSelectable",
                add: "=tOnAdd",
                change: "=tOnClick",
                edit: "=tOnEdit",
                save: "=tOnSave",
                remove: "=tOnRemove",
                cancel: "=tOnCancel",
                dataBinding: "=tDataBinding",
                dataBound: "=tOnDataBound",
                eventTemplate: "=tEventTemplate",
                allDayEventTemplate: "=tAllDayEventTemplate",
                resources: "=tResources",
                onCreated: "=tOnCreated"
            },
            template: '<div kendo-scheduler="scheduler" k-options="options" class="scheduler-class"></div>',
            link: function (n, a) {
                if (n && n.schedulerData && angular.isFunction(n.schedulerData)) {
                    var e = n.schedulerData();
                    t.when(e).then(function (e) {
                        n.schedulerData = e, o(n)
                    }, function (e) {
                        i.error('An error occurred while retrieving "schedulerData" property. Detail: ' + e), delete n.schedulerData
                    })
                } else n && n.schedulerData ? o(n) : i.error('An error occurred while retrieving "schedulerData" property.');
                n.$on("kendoWidgetCreated", function (e, t) {
                    var i;
                    n.onCreated && n.scheduler === t && n.onCreated(n.scheduler), i = a, n.$watch("schedulerData", function (e, t) {
                        if (e !== t) {
                            var n, a = i.find("div[kendo-scheduler]").data("kendoScheduler");
                            n = new kendo.data.SchedulerDataSource({
                                data: e
                            }), a.setDataSource(n), a.refresh()
                        }
                    })
                })
            }
        };

        function o(e) {
            var t, n, a = {};
            t = a, n = l.getCulture().substring(0, 2), t.messages = {}, t.messages.today = r.today[n], t.messages.save = r.save[n], t.messages.cancel = r.cancel[n], t.messages.destroy = r.destroy[n], t.messages.event = r.event[n], t.messages.date = r.date[n], t.messages.time = r.time[n], t.messages.allDay = r.allDay[n], t.messages.showFullDay = r.showFullDay[n], t.messages.showWorkDay = r.showWorkDay[n], t.messages.defaultRowText = r.defaultRowText[n], t.messages.deleteWindowTitle = r.deleteWindowTitle[n], t.messages.ariaEventLabel = r.ariaEventLabel[n], t.messages.ariaSlotLabel = r.ariaSlotLabel[n], t.messages.views = {}, t.messages.views.day = r.views.day[n], t.messages.views.week = r.views.week[n], t.messages.views.month = r.views.month[n], t.messages.views.timeline = r.views.timeline[n], t.messages.views.workWeek = r.views.workWeek[n], t.messages.editable = {}, t.messages.editable.confirmation = r.editable.confirmation[n], t.messages.editor = {}, t.messages.editor.allDayEvent = r.editor.allDayEvent[n], t.messages.editor.description = r.editor.description[n], t.messages.editor.editorTitle = r.editor.editorTitle[n], t.messages.editor.end = r.editor.end[n], t.messages.editor.endTimezone = r.editor.endTimezone[n], t.messages.editor.repeat = r.editor.repeat[n], t.messages.editor.separateTimezones = r.editor.separateTimezones[n], t.messages.editor.start = r.editor.start[n], t.messages.editor.startTimezone = r.editor.startTimezone[n], t.messages.editor.timezone = r.editor.timezone[n], t.messages.editor.timezoneEditorButton = r.editor.timezoneEditorButton[n], t.messages.editor.timezoneEditorTitle = r.editor.timezoneEditorTitle[n], t.messages.editor.title = r.editor.title[n], t.messages.recurrenceEditor = {}, t.messages.recurrenceEditor.daily = {}, t.messages.recurrenceEditor.daily.interval = r.recurrenceEditor.daily.interval[n], t.messages.recurrenceEditor.daily.repeatEvery = r.recurrenceEditor.daily.repeatEvery[n], t.messages.recurrenceEditor.end = {}, t.messages.recurrenceEditor.end.after = r.recurrenceEditor.end.after[n], t.messages.recurrenceEditor.end.occurrence = r.recurrenceEditor.end.occurrence[n], t.messages.recurrenceEditor.end.label = r.recurrenceEditor.end.label[n], t.messages.recurrenceEditor.end.never = r.recurrenceEditor.end.never[n], t.messages.recurrenceEditor.end.mobileLabel = r.recurrenceEditor.end.mobileLabel[n], t.messages.recurrenceEditor.end.on = r.recurrenceEditor.end.on[n], t.messages.recurrenceEditor.frequencies = {}, t.messages.recurrenceEditor.frequencies.daily = r.recurrenceEditor.frequencies.daily[n], t.messages.recurrenceEditor.frequencies.monthly = r.recurrenceEditor.frequencies.monthly[n], t.messages.recurrenceEditor.frequencies.never = r.recurrenceEditor.frequencies.never[n], t.messages.recurrenceEditor.frequencies.weekly = r.recurrenceEditor.frequencies.weekly[n], t.messages.recurrenceEditor.frequencies.yearly = r.recurrenceEditor.frequencies.yearly[n], t.messages.recurrenceEditor.monthly = {}, t.messages.recurrenceEditor.monthly.day = r.recurrenceEditor.monthly.day[n], t.messages.recurrenceEditor.monthly.interval = r.recurrenceEditor.monthly.interval[n], t.messages.recurrenceEditor.monthly.repeatEvery = r.recurrenceEditor.monthly.repeatEvery[n], t.messages.recurrenceEditor.monthly.repeatOn = r.recurrenceEditor.monthly.repeatOn[n], t.messages.recurrenceEditor.offsetPositions = {}, t.messages.recurrenceEditor.offsetPositions.first = r.recurrenceEditor.offsetPositions.first[n], t.messages.recurrenceEditor.offsetPositions.second = r.recurrenceEditor.offsetPositions.second[n], t.messages.recurrenceEditor.offsetPositions.third = r.recurrenceEditor.offsetPositions.third[n], t.messages.recurrenceEditor.offsetPositions.fourth = r.recurrenceEditor.offsetPositions.fourth[n], t.messages.recurrenceEditor.offsetPositions.last = r.recurrenceEditor.offsetPositions.last[n], t.messages.recurrenceEditor.weekly = {}, t.messages.recurrenceEditor.weekly.interval = r.recurrenceEditor.weekly.interval[n], t.messages.recurrenceEditor.weekly.repeatEvery = r.recurrenceEditor.weekly.repeatEvery[n], t.messages.recurrenceEditor.weekly.repeatOn = r.recurrenceEditor.weekly.repeatOn[n], t.messages.recurrenceEditor.weekdays = {}, t.messages.recurrenceEditor.weekdays.day = r.recurrenceEditor.weekDays.day[n], t.messages.recurrenceEditor.weekdays.weekday = r.recurrenceEditor.weekDays.weekday[n], t.messages.recurrenceEditor.weekdays.weekend = r.recurrenceEditor.weekDays.weekend[n], t.messages.recurrenceEditor.yearly = {}, t.messages.recurrenceEditor.yearly.of = r.recurrenceEditor.yearly.of[n], t.messages.recurrenceEditor.yearly.repeatEvery = r.recurrenceEditor.yearly.repeatEvery[n], t.messages.recurrenceEditor.yearly.repeatOn = r.recurrenceEditor.yearly.repeatOn[n], t.messages.recurrenceEditor.yearly.interval = r.recurrenceEditor.yearly.interval[n], t.messages.recurrenceMessages = {}, t.messages.recurrenceMessages.deleteRecurring = r.recurrenceMessages.deleteRecurring[n], t.messages.recurrenceMessages.deleteWindowOccurrence = r.recurrenceMessages.deleteWindowOccurrence[n], t.messages.recurrenceMessages.deleteWindowSeries = r.recurrenceMessages.deleteWindowSeries[n], t.messages.recurrenceMessages.deleteWindowTitle = r.recurrenceMessages.deleteWindowTitle[n], t.messages.recurrenceMessages.editRecurring = r.recurrenceMessages.editRecurring[n], t.messages.recurrenceMessages.editWindowOccurrence = r.recurrenceMessages.editWindowOccurrence[n], t.messages.recurrenceMessages.editWindowSeries = r.recurrenceMessages.editWindowSeries[n], t.messages.recurrenceMessages.editWindowTitle = r.recurrenceMessages.editWindowTitle[n];
            var i = ["schedulerData"];
            for (var o in e) - 1 === o.indexOf("$") && -1 === i.indexOf(o) && void 0 !== e[o] && (a[o] = e[o]);
            a.dataSource = new kendo.data.SchedulerDataSource({
                data: e.schedulerData
            }), e.options = a
        }
    }
    angular.module("totvsScheduler").directive("totvsScheduler", e), e.$inject = ["$q", "$log", "totvsSchedulerConstant", "TotvsKendoCulture"]
}(),
function () {
    "use strict";

    function e(w, k, e, C, S, D, t, n) {
        var a = {
                restrict: "A",
                require: ["totvsSelect", "ngModel"],
                scope: {
                    ngModel: "=",
                    selectId: "@",
                    selectDescription: "@",
                    selectService: "@",
                    filter: "@",
                    placeholder: "@",
                    minLength: "@",
                    delay: "@",
                    tNoData: "@",
                    tDataSource: "=",
                    ngDisabled: "&",
                    zoomSelected: "&",
                    tFieldSort: "@"
                },
                link: function (e, t, n, a) {
                    var i = a[0],
                        o = a[1];
                    i.setNgModelCtrl(o), i.setScope(e), i.setElement(t), i.setAttrs(n), i.buildElement(e, t, n, o), i.isSelectZoomComponent(e) ? i.createSelectZoomComponent(e, t, n, o, i) : i.createBasicComponent(e, o)
                },
                controller: function () {
                    var e, d, o, n, r, l, s, c = this;

                    function u(e, t) {
                        var n, a = v();
                        null != (n = angular.isObject(e) ? e[o.selectId] : e) && t && (a.select(function (e) {
                            return e[o.selectId] === n
                        }), -1 < a.select() && a.trigger("change"))
                    }

                    function p(e, a) {
                        var t, n, i;
                        c.isFiltering = !0, n = {
                            property: o.selectDescription || o.selectId
                        }, i = angular.isObject(e) ? e[o.selectId] : e, (t = l.applyFilter({
                            init: o.initfn(o.$parent),
                            disclaimers: [{
                                property: n.property,
                                value: i
                            }],
                            selectedFilter: n,
                            selectedFilterValue: i,
                            more: !1,
                            isAdvanced: !1,
                            isSelectValue: !0
                        })) && t.then && t.then(function (e) {
                            var t = v();
                            if (r.link) {
                                var n = f();
                                e.push(n)
                            }
                            g(e), c.open && (t.popup && !t.popup._closing ? t.open() : k(function () {
                                t.open()
                            }, 100), c.open = !1), "function" == typeof a && a(), c.isFiltering = !1
                        })
                    }

                    function f() {
                        var e = {};
                        return e[o.selectId] = void 0, e[o.selectDescription] = r.linkText || x.btnAdd, e
                    }

                    function g(e) {
                        var t, n, a = v();
                        if (e && a && (n = angular.isArray(e) ? e : [e])) {
                            var i = o.tFieldSort || o.selectId;
                            t = new kendo.data.DataSource({
                                data: n,
                                sort: {
                                    field: "['" + i + "']",
                                    dir: "asc"
                                },
                                schema: {
                                    parse: function (e) {
                                        return angular.forEach(e, function (e) {
                                            e.DisplayText = function (e) {
                                                var t = {},
                                                    n = "",
                                                    a = ""; {
                                                    if (r.$attr.selectMatch && e[o.selectId]) {
                                                        for (t in s || (s = JSON.parse(r.selectMatch)), s) s.hasOwnProperty(t) && (a = s[t].field, n += m(e, a), s[t].separator && (n += s[t].separator));
                                                        return n
                                                    }
                                                    return void 0 !== e[o.selectId] && null !== e[o.selectId] ? e[o.selectId] + " - " + e[o.selectDescription] : e[o.selectDescription]
                                                }
                                            }(e)
                                        }), e
                                    }
                                }
                            }), a.setDataSource(t)
                        }
                    }

                    function m(e, t) {
                        var n;
                        return void 0 !== e && (0 <= (n = t.indexOf(".")) ? m(e[t.substring(0, n)], t.substr(n + 1)) : e[t])
                    }

                    function v() {
                        return e || (e = n.find("[kendo-combo-box]").data("kendoComboBox"))
                    }

                    function h(e) {
                        var t, n = {},
                            a = ["_events", "_handlers", "DisplayText", "uid", "$selected", "$promise", "$resolved"];
                        for (t in e) e.hasOwnProperty(t) && (angular.isFunction(e[t]) || -1 === a.indexOf(t) && (n[t] = e[t]));
                        return n
                    }

                    function b(e) {
                        e && e.hasOwnProperty(o.selectId) ? r.$attr.returnObject ? d.$setViewValue(e) : d.$setViewValue(e[o.selectId]) : (e = angular.isObject(e) ? void 0 : e, d.$setViewValue(e), v().value(null), v().select(null)), t(e), d.$render()
                    }

                    function t(e) {
                        var t;
                        (t = n.find("zoom")).length && t.controller("ngModel").$setViewValue(e)
                    }

                    function y(e) {
                        if (e) return h(e.dataItem(e.select()))
                    }

                    function $() {
                        return !!o.selectService
                    }
                    c.open = !1, c.isFiltering = !1, c.buildElement = function (e, t, n, a) {
                        var i, o, r;
                        r = $(), i = r ? angular.element('<select kendo-combo-box k-options="selectOptions" style="width: 100%"></select>') : angular.element('<select kendo-combo-box k-options="selectOptions" style="width: 100%"  ng-disabled="ngDisabled()" ng-required="{{::ngRequired}}"></select>'), S.addElementInTotvsField(i, t), o = t.find("select"), S.pattern(e, n, t, e, a, o), r && (S.zoom(n, t), S.ngDisabled(e.$parent, n, t, i), S.canclean(n, t, e, o, function () {
                            switch (n.canclean) {
                                case "undefined":
                                    void 0;
                                    break;
                                case "":
                                case "null":
                                    null;
                                    break;
                                default:
                                    n.canclean
                            }
                            c.filterValue = void 0, b(void 0), p("")
                        }));
                        S.compile(e, t), S.watchHasError(e, i, a)
                    }, c.createSelectZoomComponent = function (i, t, o, e, r) {
                        var a, n = "",
                            l = !0;

                        function s(n) {
                            var e;
                            n && angular.isObject(n) && (n = n[i.selectId]), (e = a.getObjectFromValue(n, i.initfn(i.$parent))) && e.then && e.then(function (e) {
                                if (e && e.hasOwnProperty(i.selectId)) {
                                    var t = h(e);
                                    g(t), u(e, !0)
                                } else b(n = n ? void 0 : n), o.link && (g(e = f()), k(function () {
                                    v().open()
                                }, 150))
                            })
                        }

                        function c() {
                            var n, a;
                            o.selectInit && t.find("input.k-input").focusin(function () {
                                var e, t;
                                e = r.filterValue, t = i.initfn(i.$parent), n = JSON.stringify(e) === JSON.stringify(t), a = -1 < v().select(), n || (a && b(void 0), p(""), r.filterValue = i.initfn(i.$parent))
                            })
                        }
                        i.initfn = C(o.selectInit), r.filterValue = i.initfn(i.$parent), i.selectOptions = {
                            dataValueField: "['" + i.selectId + "']",
                            dataTextField: "DisplayText",
                            filter: i.filter || "contains",
                            placeholder: i.placeholder,
                            minLength: i.minLength || "1",
                            delay: i.delay || "500",
                            noDataTemplate: i.tNoData,
                            ignoreCase: !1,
                            clearButton: !1,
                            close: function (e) {
                                var t = e.sender;
                                t.text() && -1 === t.selectedIndex && !r.isFiltering && (t.value(""), p(""))
                            },
                            filtering: function (e) {
                                var t = e.filter,
                                    n = e.sender;
                                t && (r.open = !0, p(t.value, function () {
                                    t.value || -1 === n.selectedIndex || b(void 0)
                                }), d.$viewValue && (d.$setViewValue(void 0), d.$render()))
                            },
                            change: function (e) {
                                var t;
                                if (!l && -1 === this.select()) return e.preventDefault();
                                (function (e) {
                                    for (var t in e)
                                        if (e.hasOwnProperty(t)) return !1;
                                    return !0
                                })(t = y(this)) || (b(t), l = !0)
                            },
                            select: function (e) {
                                var t, n = e.item;
                                if (n) {
                                    var a = n.text();
                                    if (a === (o.linkText || x.btnAdd)) return t = o.link, void D.path(t)
                                }
                            }
                        }, i.$on("kendoWidgetCreated", function () {
                            var e;
                            e = t.find(".k-dropdown-wrap"), 0 < t.find(".input-group-btn").children().length && (e.css("border-bottom-right-radius", "0px"), e.css("border-top-right-radius", "0px")), o.$attr.focus && v().input.focus(), c(), t.find("input.k-input").on("keydown", function (e) {
                                if (9 === e.keyCode) {
                                    l = !1;
                                    var t = v(),
                                        n = t.text(),
                                        a = t.dataItem(t.select());
                                    n ? (a = void 0 === a ? "" : a).DisplayText !== n && s(n) : l = !0
                                }
                            }), t.find("input.k-input").on("click", function () {
                                v().open()
                            })
                        }), a = w.get(i.selectService), r.setService(a), e.$formatters.unshift(function (e) {
                            !e && v() && (r.filterValue = void 0, v().value("")), n && k.cancel(n), n = k(function () {
                                null == e ? p(e) : s(e)
                            }, i.delay)
                        }), i.updateSelectModelZoom = function (e, t) {
                            if (e) {
                                var n = e[i.selectId];
                                g(e), v().select(function (e) {
                                    return e[i.selectId] === n
                                }), v().trigger("change"), i.zoomSelected({
                                    selected: e,
                                    oldvalue: t
                                })
                            }
                        }
                    }, c.createBasicComponent = function (e, t) {
                        var a = "",
                            i = !1;
                        e.selectOptions = {
                            dataValueField: "['" + e.selectId + "']",
                            dataTextField: e.selectDescription,
                            filter: e.filter || "contains",
                            placeholder: e.placeholder,
                            minLength: e.minLength || "1",
                            delay: e.delay || "500",
                            change: function () {
                                var e = y(this);
                                b(e)
                            },
                            dataBound: function () {
                                u(t.$modelValue, i), i = !1
                            },
                            dataSource: e.tDataSource,
                            noDataTemplate: e.tNoData
                        }, e.$on("kendoWidgetCreated", function () {
                            t.$formatters.unshift(function (e) {
                                var t = v();
                                if (e || !t) {
                                    if (t) {
                                        var n = y(t);
                                        if (n[o.selectId] === e) return
                                    }
                                    a && k.cancel(a), a = k(function () {
                                        t.dataSource.read({
                                            field: o.selectId,
                                            value: e
                                        }), i = !0
                                    })
                                } else t.value("")
                            })
                        })
                    }, c.isSelectZoomComponent = $, c.setScope = function (e) {
                        o = e
                    }, c.setNgModelCtrl = function (e) {
                        d = e
                    }, c.setElement = function (e) {
                        n = e
                    }, c.setAttrs = function (e) {
                        r = e
                    }, c.setService = function (e) {
                        l = e
                    }
                }
            },
            x = t.configI18n(n);
        return a
    }
    angular.module("totvsSelect").directive("totvsSelect", e), e.$inject = ["$injector", "$timeout", "$compile", "$parse", "totvsFieldService", "$location", "totvs.utils.Service", "totvsSelectConstant"]
}(),
function () {
    "use strict";

    function e(o) {
        return {
            templateUrl: "templates/tab.html",
            restrict: "EA",
            require: "^totvsTabset",
            replace: !0,
            transclude: !0,
            scope: {
                active: "=?",
                heading: "@",
                onSelect: "&select",
                onDeselect: "&deselect"
            },
            controller: function () {},
            compile: function (e, t, i) {
                return function (t, e, n, a) {
                    t.$watch("active", function (e) {
                        e && a.select(t)
                    }), t.disabled = !1, n.disabled && t.$parent.$watch(o(n.disabled), function (e) {
                        t.disabled = !!e
                    }), t.select = function () {
                        t.disabled || (t.active = !0, e.parent().children("li.dropdown").removeClass("active"))
                    }, a.addTab(t), t.$on("$destroy", function () {
                        a.removeTab(t)
                    }), t.$transcludeFn = i
                }
            }
        }
    }
    angular.module("totvsTab").directive("totvsTab", e), e.$inject = ["$parse"]
}(),
function () {
    "use strict";

    function e() {
        return {
            restrict: "A",
            require: "^totvsTabset",
            link: function (e, i, t) {
                var o = e.$eval(t.totvsTabContentTransclude);
                if (!o.$transcludeFn) return;
                o.$transcludeFn(o.$parent, function (e) {
                    var t, n, a;
                    for (t = 0; t < e.length; t++) n = e[t], (a = n).tagName && (a.hasAttribute("totvs-tab-heading") || a.hasAttribute("data-totvs-tab-heading") || "totvs-tab-heading" === a.tagName.toLowerCase() || "data-totvs-tab-heading" === a.tagName.toLowerCase()) ? o.headingElement = n : i.append(n)
                })
            }
        }
    }
    angular.module("totvsTabContentTransclude").directive("totvsTabContentTransclude", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(i) {
        return {
            templateUrl: "templates/tabdropdown.html",
            restrict: "EA",
            require: "^totvsTabset",
            replace: !0,
            transclude: !0,
            scope: {
                active: "=?",
                heading: "@",
                onSelect: "&select",
                onDeselect: "&deselect"
            },
            controller: function () {},
            compile: function () {
                return function (t, e, n, a) {
                    t.disabled = !1, n.disabled && t.$parent.$watch(i(n.disabled), function (e) {
                        t.disabled = !!e
                    }), t.$on("$destroy", function () {
                        a.removeTab(t)
                    })
                }
            }
        }
    }
    angular.module("totvsTabDropdown").directive("totvsTabDropdown", e), e.$inject = ["$parse"]
}(),
function () {
    "use strict";

    function e(o) {
        return {
            templateUrl: "templates/tabdropdownitem.html",
            restrict: "EA",
            require: "^totvsTabset",
            replace: !0,
            transclude: !0,
            scope: {
                active: "=?",
                heading: "@",
                onSelect: "&select",
                onDeselect: "&deselect"
            },
            controller: function () {},
            compile: function (e, t, i) {
                return function (t, e, n, a) {
                    t.$watch("active", function (e) {
                        e && a.select(t)
                    }), t.disabled = !1, n.disabled && t.$parent.$watch(o(n.disabled), function (e) {
                        t.disabled = !!e
                    }), t.select = function () {
                        t.disabled || (t.active = !0, e.parents(".nav").children("li.dropdown").removeClass("active"), e.parents("li.dropdown:eq(0)").addClass("active"))
                    }, a.addTab(t), t.$on("$destroy", function () {
                        a.removeTab(t)
                    }), t.$transcludeFn = i
                }
            }
        }
    }
    angular.module("totvsTabDropdownItem").directive("totvsTabDropdownItem", e), e.$inject = ["$parse"]
}(),
function () {
    "use strict";

    function e() {
        return {
            restrict: "A",
            require: "^totvsTab",
            link: function (e, t) {
                e.$watch("headingElement", function (e) {
                    e && (t.html(""), t.append(e))
                })
            }
        }
    }
    angular.module("totvsTabHeadingTransclude").directive("totvsTabHeadingTransclude", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(x, y, d, E) {
        return {
            restrict: "E",
            scope: {
                items: "=",
                itemsAs: "@",
                itemsFilter: "@",
                dblclick: "&",
                tColumns: "=",
                tDoubleClick: "&",
                tHeight: "@",
                tHighlightSelected: "@",
                tItems: "=?",
                tItemsAs: "@",
                tItemsFilter: "@",
                tOnChange: "&",
                tOnData: "&",
                tSelectable: "@",
                tTable: "="
            },
            controller: "TotvsTableController",
            controllerAs: "controller",
            compile: function (e) {
                var c = e.children("column"),
                    t = angular.element(E.TABLE_TEMPLATE);
                return e.html(t), {
                    pre: function (e, t, n, a) {
                        var i, o, h, r, b, l, s;
                        a.tableId = n.id, o = n, (i = e).tDoubleClick = void 0 === i.tDoubleClick ? i.dblclick : i.tDoubleClick, i.tItems = void 0 === i.tItems ? i.items : i.tItems, i.tItemsAs = void 0 === i.tItemsAs ? i.itemsAs : i.tItemsAs, i.tItemsFilter = void 0 === i.tItemsFilter ? i.itemsFilter : i.tItemsFilter, i.tSelectable = void 0 === i.tSelectable ? o.typeSelect : i.tSelectable, a.elementColumns = c, a.selectable = (e.tSelectable || E.SELECTION_TYPE.MULTI).toLowerCase(), a.itemAlias = e.tItemsAs || "item", h = e, r = c, b = a, angular.forEach(r, function (e) {
                            var t, n, a, i, o, r, l, s, c, d, u = angular.element(e),
                                p = u.attr("id"),
                                f = (r = h, y(u.attr("title"))(r)),
                                g = (s = (l = u).children(), c = l.text(), d = l.html(), s && 0 < s.length ? d : 0 < c.trim().length ? c : d),
                                m = (a = h, i = u.attr("width"), (o = y(void 0 === i ? "" : i)(a)) && isFinite(o) ? parseInt(o) : void 0),
                                v = (t = [], n = $(u).get(0).attributes, angular.forEach(n, function (e) {
                                    "title" !== e.name && "width" !== e.name && "id" !== e.name && t.push({
                                        name: e.name,
                                        value: e.value
                                    })
                                }), t);
                            b.addColumn(p, f, g, m, v)
                        }), l = e.tColumns, s = a, angular.forEach(l, function (e) {
                            var t, n, a = e.id,
                                i = e.headerName || "",
                                o = e.width && angular.isNumber(e.width) ? parseInt(e.width) : void 0,
                                r = ((t = e).itemTemplate || t.valueGetter ? angular.isFunction(t.itemTemplate) ? n = t.itemTemplate : angular.isString(t.itemTemplate) ? n = d(t.itemTemplate) : angular.isFunction(t.valueGetter) ? n = t.valueGetter : angular.isString(t.valueGetter) && (n = d(t.valueGetter)) : n = function (e) {
                                    return t.field ? e.data[t.field] : "&nbsp;"
                                }, n);
                            s.addColumn(a, i, r, o)
                        })
                    },
                    post: function (e, t, n, a) {
                        var i, o, r, l, s, c, d, u, g, m, v, h, p, f, b, y = t.find(".table-content"),
                            $ = t.find("thead > tr"),
                            w = t.find("tbody > tr"),
                            k = e.tItemsFilter ? "| " + e.tItemsFilter : "",
                            C = "false" !== e.tHighlightSelected,
                            S = void 0 === e.tHeight ? "100%" : e.tHeight;
                        y.css("height", S), i = w, o = a.itemAlias, r = k, l = C, i.attr("ng-repeat", o + " in $totvsTableController.items " + r + " track by $index"), i.attr("totvs-on-repeat-finish", "$totvsTableController.ensureColumnsOrder()"), l && i.attr("ng-class", '{ "selected": ' + o + ".$selected }"), s = e,
                            function (e, t, n, a, i) {
                                if (i !== E.SELECTION_TYPE.OFF) {
                                    var o = '<td scope="row" class="select" data-thf="totvs-table-col-check"><input type="checkbox" ng-click="$totvsTableController.onClick(' + (r = a) + ', $event)" ng-checked="' + r + '.$selected"></td>';
                                    i === E.SELECTION_TYPE.SINGLE ? (t.append(E.SINGLE_SELECT_COLUMN_HEADER_TEMPLATE), n.append(o)) : i === E.SELECTION_TYPE.MULTI && (t.append(E.MULTI_SELECT_COLUMN_HEADER_TEMPLATE), n.append(o))
                                }
                                var r
                            }(0, c = $, d = w, (u = a).itemAlias, u.selectable), g = s, m = c, v = d, h = u.itemAlias, p = u.columns, angular.forEach(p, function (e, t) {
                                var n, a, i, o, r, l, s, c, d, u, p = (s = e, c = "", d = angular.element("<th>" + s.title + "</th>"), void 0 === (u = T(s.attrs)) ? d.attr("data-thf", "totvs-table-col-" + s.id) : d.attr("data-thf", u.value), s.width && (c += "width: " + s.width + "px;"), !1 === s.visible && (c += "display: none;"), d.attr("style", c), d),
                                    f = (n = g, a = e, i = t, o = h, r = angular.element("<td></td>"), void 0 === (l = T(a.attrs)) ? r.attr("data-thf", "totvs-table-col-" + a.id) : r.attr("data-thf", l.value), n.tDoubleClick && angular.isFunction(n.tDoubleClick) && r.attr("ng-dblclick", "$totvsTableController.onDoubleClick(" + o + ")"), n.tSelectable !== E.SELECTION_TYPE.OFF && r.attr("ng-click", "$totvsTableController.onClick(" + o + ")"), angular.isFunction(a.template) ? r.html("{{ $totvsTableController.getItemTemplate(" + o + ", " + i + ") }}") : r.html(a.template), angular.forEach(a.attrs, function (e) {
                                        "data-thf" !== e.name && r.attr(e.name, e.value)
                                    }), r);
                                m.append(p), v.append(f)
                            }), f = e, b = a, n.tTable && (f.tTable = b.api);
                        var D = e.$parent.$new();
                        D.$totvsTableController = a, x($)(D), x(w)(D)
                    }
                }
            }
        };

        function T(e) {
            var t;
            return e && e.some && e.some(function (e) {
                if ("data-thf" === e.name) return t = e, !0
            }), t
        }
    }
    angular.module("totvsTable").directive("totvsTable", e), e.$inject = ["$compile", "$interpolate", "$parse", "totvsTableConstant"]
}(),
function () {
    "use strict";

    function e(s, w) {
        return {
            templateUrl: "templates/tabset.html",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            scope: {
                type: "@"
            },
            controller: "TotvsTabsetController",
            link: function (e, t, n) {
                var v, a, h, b, y, i, o, r, l;
                e.vertical = !!angular.isDefined(n.vertical) && e.$parent.$eval(n.vertical), e.justified = !!angular.isDefined(n.justified) && e.$parent.$eval(n.justified), s.bindTo(e).add({
                    combo: "ctrl+alt+pagedown",
                    description: "Próxima Aba",
                    allowIn: ["input", "select", "textarea"],
                    callback: function (e) {
                        function m(e, t) {
                            var n, a, i, o, r, l, s, c, d, u, p, f, g;
                            for (i = e.querySelector("div.tab-pane"), o = e.querySelector(".nav-tabs>li").parentElement.children, r = e.parentElement; null !== r && !("DIV" === r.nodeName && 0 <= r.className.split(" ").indexOf("tabset"));) {
                                if ("none" === window.getComputedStyle(r).display) return !1;
                                r = r.parentElement
                            }
                            for (l = [], n = 0; n < o.length; n++)
                                if (0 <= (h = o[n]).className.split(" ").indexOf("dropdown"))
                                    for (s = h.children[1].children, a = 0; a < s.length; a++) l.push(s[a]);
                                else l.push(h);
                            for (v = i.parentElement.children, y = v.length - 1, n = 0; n < v.length && (h = v[n], b = h.className.split(" "), !(0 <= b.indexOf("active"))); n++);
                            if (!t)
                                for (c = h.querySelectorAll("div.tabset"), a = 0; a < c.length; a++)
                                    if (m(c[a])) return !0;
                            if (n === y) {
                                for (p = e.parentElement; null !== p.parentElement;) {
                                    if (1 < (d = p.querySelectorAll("div.tabset")).length && !f)
                                        for (a = 0; a < d.length; a++)
                                            if ((u = d[a]) === e || f)
                                                if (u === e) f = !0;
                                                else if (m(u)) return !0;
                                    if ("DIV" === p.nodeName && 0 <= p.className.split(" ").indexOf("tabset") && m(p, !0)) return !0;
                                    p = p.parentElement
                                }
                                return !1
                            }
                            if (n < y) {
                                for (n; n < l.length - 1 && 0 <= l[n + 1].className.split(" ").indexOf("disabled");) n++;
                                return n < l.length - 1 && (h = (h = l[n + 1]).children[0], g = $(v[n + 1]).find("*"), w(function () {
                                    angular.element(h).trigger("click"), w(function () {
                                        for (a = 0; a < g.length && ("SPAN" === g[a].nodeName || "DIV" === g[a].nodeName || !g[a].focus || (g[a].focus(), document.activeElement !== g[a])); a++);
                                    })
                                })), !0
                            }
                            return !1
                        }
                        if (e.preventDefault(), o = null, r = e.srcElement)
                            for (; null !== r.parentElement;) {
                                if ("DIV" === r.nodeName && 0 <= r.className.split(" ").indexOf("tabset")) {
                                    o = r;
                                    break
                                }
                                r = r.parentElement
                            }
                        if (i = $("div.tabset"), o)
                            for (l = !1, a = 0; a < i.length && (i[a] === o && (l = !0), !l || !m(i[a])); a++);
                        else
                            for (a = 0; a < i.length; a++)
                                if (m(i[a])) {
                                    document.activeElement.blur();
                                    break
                                }
                    }
                }), s.bindTo(e).add({
                    combo: "ctrl+alt+pageup",
                    description: "Aba Anterior",
                    allowIn: ["input", "select", "textarea"],
                    callback: function (e) {
                        function g(e, t) {
                            var n, a, i, o, r, l, s, c, d, u, p, f;
                            for (i = e.querySelector("div.tab-pane"), o = e.querySelector(".nav-tabs>li").parentElement.children, r = [], n = 0; n < o.length; n++)
                                if (0 <= (h = o[n]).className.split(" ").indexOf("dropdown"))
                                    for (l = h.children[1].children, a = 0; a < l.length; a++) r.push(l[a]);
                                else r.push(h);
                            for (v = i.parentElement.children, y = v.length - 1, n = 0; n < v.length && (h = v[n], b = h.className.split(" "), !(0 <= b.indexOf("active"))); n++);
                            if (!t)
                                for (s = h.querySelectorAll("div.tabset"), a = 0; a < s.length; a++)
                                    if (g(s[a])) return !0;
                            if (0 === n) {
                                for (d = e.parentElement; null !== d.parentElement;) {
                                    if (1 < (c = d.querySelectorAll("div.tabset")).length && !p)
                                        for (a = 0; a < c.length; a++)
                                            if ((u = c[a]) === e || p)
                                                if (u === e) p = !0;
                                                else if (g(u)) return !0;
                                    if ("DIV" === d.nodeName && 0 <= d.className.split(" ").indexOf("tabset") && g(d, !0)) return !0;
                                    d = d.parentElement
                                }
                                return !1
                            }
                            if (0 < n) {
                                for (n; 0 < n && 0 <= r[n - 1].className.split(" ").indexOf("disabled");) n--;
                                return 0 < n && (h = (h = r[n - 1]).children[0], f = $(v[n - 1]).find("*"), w(function () {
                                    angular.element(h).trigger("click"), w(function () {
                                        for (a = 0; a < f.length && ("SPAN" === f[a].nodeName || "DIV" === f[a].nodeName || !f[a].focus || (f[a].focus(), document.activeElement !== f[a])); a++);
                                    })
                                })), !0
                            }
                            return !1
                        }
                        if (e.preventDefault(), o = null, r = e.srcElement)
                            for (; null !== r.parentElement;) {
                                if ("DIV" === r.nodeName && 0 <= r.className.split(" ").indexOf("tabset")) {
                                    o = r;
                                    break
                                }
                                r = r.parentElement
                            }
                        if (i = $("div.tabset"), o)
                            for (l = !1, a = 0; a < i.length && (i[a] === o && (l = !0), !l || !g(i[a])); a++);
                        else
                            for (a = 0; a < i.length; a++)
                                if (g(i[a])) {
                                    document.activeElement.blur();
                                    break
                                }
                    }
                })
            }
        }
    }
    angular.module("totvsTabset").directive("totvsTabset", e), e.$inject = ["hotkeys", "$timeout"]
}(),
function () {
    "use strict";

    function e(m, v, h, b) {
        return {
            restrict: "A",
            require: ["totvsTime", "ngModel"],
            scope: {
                ngDisabled: "&",
                ngBlur: "&",
                ngChange: "&",
                ngModel: "=",
                tDefaultTime: "@",
                placeholder: "@",
                ngRequired: "@"
            },
            link: function (e, t, n, a) {
                var i = a[1],
                    o = a[0];
                h.isMobile.any() ? (r = e, l = t, s = n, c = i, d = o, g = angular.element('<input type="time" class="form-control" ng-required="{{::ngRequired}}" ng-blur="ngBlur()" placeholder="{{::placeholder}}" ng-disabled="ngDisabled()"><span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>'), (p = l.find(".input-group")).append(g), p.addClass("no-block bootstrap-timepicker"), f = p.find("input"), v.pattern(r, s, l, r, c, f), u = l.find(".field-container"), m(u)(r), v.watchHasError(r, g, c), d.setElement(l), d.setNgModelCtrl(c), d.onChangeModel(r.tDefaultTime), d.onChangeValue(l)) : function (e, t, n, a) {
                    var i, o, r, l;
                    l = angular.element('<input type="text" class="form-control" ng-required="{{::ngRequired}}" ng-model="ngModel" ng-change="ngChange()" ng-blur="ngBlur()" time-picker data-minute-step="5" data-show-meridian="false" placeholder="{{::placeholder}}" ng-disabled="ngDisabled()"><span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>'), n.tDefaultTime && l.attr("data-default-time", e.tDefaultTime);
                    (o = t.find(".input-group")).append(l), o.addClass("no-block bootstrap-timepicker"), r = o.find("input"), v.pattern(e, n, t, e, a, r), v.canclean(n, t, e, r), i = t.find(".field-container"), m(i)(e), v.watchHasError(e, l, a), b(function () {
                        var e = a.$modelValue;
                        e && t.find("input").val(e)
                    })
                }(e, t, n, i);
                var r, l, s, c, d, u, p, f, g
            },
            controller: function () {
                var a = this;

                function n(e) {
                    var t, n, a;
                    if ("false" !== e) return a = new Date, t = (t = a.getHours()) <= 9 ? "0" + t : t, n = a.getMinutes(), t + ":" + (n = n <= 9 ? "0" + n : n)
                }

                function i() {
                    return {
                        value: function () {
                            var e, t, n;
                            return e = arguments, t = a.element.find("input"), (n = !!e.length && e[0]) ? t.val(n) : t.val()
                        }
                    }
                }

                function o(e) {
                    a.ngModelCtrl.$setViewValue(e)
                }
                a.element = "", a.ngModelCtrl = {}, a.setElement = function (e) {
                    e && (a.element = e)
                }, a.setNgModelCtrl = function (e) {
                    e && (a.ngModelCtrl = e)
                }, a.onChangeModel = function (t) {
                    a.ngModelCtrl.$formatters.push(function (e) {
                        return e = e || n(t), i().value(e), o(e), e
                    })
                }, a.onChangeValue = function () {
                    a.element.find("input").bind("change", function () {
                        var e = i().value();
                        o(e)
                    })
                }
            }
        }
    }
    angular.module("totvsTime").directive("totvsTime", e), e.$inject = ["$compile", "totvsFieldService", "totvs.utils.Service", "$timeout"]
}(),
function () {
    "use strict";

    function e(m, n, e, v, h, b) {
        return {
            require: "ngModel",
            restrict: "A",
            scope: {
                tPromise: "=",
                tMultiple: "=",
                tShowFileList: "@",
                tSelect: "@",
                tDropFilesHere: "@",
                tStatusUploaded: "@",
                tRetry: "@",
                tStatusUploading: "@",
                tUploadSelectedFiles: "@",
                tRemove: "@",
                tCancel: "@",
                tSaveUrl: "=",
                tSaveField: "=",
                tRemoveUrl: "=",
                tRemoveField: "@",
                tRemoveVerb: "@",
                tEnabled: "=",
                tAutoUpload: "=",
                tWithCredentials: "@",
                tOnSelect: "&",
                tOnUpload: "&",
                tOnRemove: "&",
                tOnProgress: "&",
                tOnSuccess: "&",
                tOnError: "&",
                tOnComplete: "&",
                tOnCancel: "&",
                ngRequired: "@"
            },
            link: function (c, d, u, p) {
                var e, f, g = [];
                c.tPromise ? ((e = c.tPromise()) && e.$promise && (e = e.$promise), n.when(e).then(function () {
                    t()
                }, function () {
                    t()
                })) : t();

                function t() {
                    var e, t, n, a, i, o, r = b.configI18n(h);
                    if (e = c, t = d, n = u, a = p, o = angular.element('<input name="file" type="file" kendo-upload k-options="uploadOptions" ng-required="{{::ngRequired}}"/>'), t.find(".input-group").append(o), v.pattern(e, n, t, e, a, o), i = t.find(".field-container"), m(i)(e), v.watchHasError(e, o, a), c.$on("kendoWidgetCreated", function () {
                            g = (f || (f = d.find("div [kendo-upload]").getKendoUpload())).options.files, p.$setViewValue(g), u.$attr.tShowDragDrop && d.find("div.k-dropzone em").css("visibility", "visible")
                        }), p.$modelValue && p.$modelValue.length && (g = p.$modelValue.filter(function (e) {
                            return !e.isntUploaded
                        })), u.$attr.tManualUpload) {
                        var l = document.createElement("style");
                        l.innerHTML = ".k-upload-selected {display: none !important;}", document.body.appendChild(l)
                    }

                    function s(e, t) {
                        var n, a = e.uid;
                        for (n in t) t.hasOwnProperty(n) && t[n].uid === a && t.splice(n, 1)
                    }
                    window.formatSize = function (e) {
                        var t = 0;
                        return e && (t = Math.ceil(e / 1024)), t
                    }, c.uploadOptions = {
                        multiple: c.tMultiple,
                        showFileList: c.tShowFileList,
                        localization: {
                            select: c.tSelect || r.selectFile,
                            dropFilesHere: c.tDropFilesHere || r.dropFiles,
                            cancel: c.tCancel || r.btnCancel,
                            headerStatusUploaded: c.tStatusUploaded || r.statusUploaded,
                            retry: c.tRetry || r.retry,
                            headerStatusUploading: c.tStatusUploading || r.statusUploading,
                            uploadSelectedFiles: c.tUploadSelectedFiles || r.uploadSelectedFiles,
                            statusFailed: c.tStatusFailed || r.statusFailed,
                            remove: c.tRemove || r.remove
                        },
                        files: g,
                        enabled: c.tEnabled,
                        async: {
                            saveUrl: c.tSaveUrl,
                            saveField: c.tSaveField,
                            removeUrl: c.tRemoveUrl,
                            removeField: c.tRemoveField,
                            removeVerb: c.tRemoveVerb,
                            withCredentials: "false" !== c.tWithCredentials,
                            autoUpload: c.tAutoUpload || !1
                        },
                        select: function (n) {
                            angular.forEach(n.files, function (e, t) {
                                c.tMultiple || g.length && s(g[0], g), n.files[t].isntUploaded = !0, g.push(n.files[t])
                            }), p.$setViewValue(g), u.tOnSelect && c.tOnSelect()(n)
                        },
                        upload: c.tOnUpload(),
                        remove: function (e) {
                            s(e.files[0], g), p.$setViewValue(g), 0 === p.$viewValue.length && p.$setViewValue(void 0);
                            u.tOnRemove && c.tOnRemove()(e)
                        },
                        progress: c.tOnProgress(),
                        success: function (e) {
                            "upload" === e.operation && function (e) {
                                var t, n = p.$modelValue.length;
                                for (t = 0; t < n; t += 1)
                                    if (p.$modelValue[t].uid === e) {
                                        delete p.$modelValue[t].isntUploaded;
                                        break
                                    }
                            }(e.files[0].uid);
                            u.tOnSuccess && c.tOnSuccess()(e)
                        },
                        error: function (e) {
                            c.tMultiple ? "remove" === e.operation && g.push(e.files[0]) : 0 === g.length && "remove" === e.operation && g.push(e.files[0]);
                            p.$setViewValue(g), u.tOnError && c.tOnError()(e)
                        },
                        complete: c.tOnComplete(),
                        cancel: function (e) {
                            s(e.files[0], g), p.$setViewValue(g), 0 === p.$viewValue.length && p.$setViewValue(void 0);
                            u.tOnCancel && c.tOnCancel()(e)
                        },
                        template: '<div class="template-upload" style="width: auto"><div class="row"><span class="k-progress"></span><div class="col-lg-6 col-md-6 col-sm-6 col-xs-9" style="overflow: hidden; white-space: nowrap; text-overflow:ellipsis;" title="#=name#">#=name#</div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">#= formatSize(size)# KB</div><div class="col-lg-1 col-md-1 col-sm-1 col-xs-1" style="float: right;"> <button type="button" class="k-upload-action"></button></div></div></div>'
                    }
                }
            }
        }
    }
    angular.module("totvsUpload").directive("totvsUpload", e), e.$inject = ["$compile", "$q", "$timeout", "totvsFieldService", "totvsUploadConstant", "totvs.utils.Service"]
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="widget-panel panel panel-default" ng-transclude></div>',
            restrict: "E",
            transclude: !0,
            replace: !0
        }
    }
    angular.module("totvsWidget").directive("totvsWidget", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="panel-body" ng-transclude></div>',
            restrict: "E",
            transclude: !0,
            replace: !0
        }
    }
    angular.module("totvsWidgetBody").directive("totvsWidgetBody", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<div class="panel-footer"><div class="row" style="height: 34px;"><div class="col-xs-12" ng-transclude></div></div></div>',
            restrict: "E",
            transclude: !0,
            replace: !0
        }
    }
    angular.module("totvsWidgetFooter").directive("totvsWidgetFooter", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            restrict: "E",
            compile: function (e) {
                var t, n, a, i, o = e.children("action").clone() || [],
                    r = "";

                function l(e, t) {
                    var n = t.attr("link"),
                        a = t.attr("ng-click");
                    e.append(t.text()), n ? e.attr("href", n) : a && (e.addClass("clickable"), e.attr("ng-click", a))
                }
                if (e.html('<span class="actions"></span>'), 1 < o.length)
                    for (r = angular.element('<span class="pull-right dropup"><span class="widget-details clickable dropdown-toggle" id="widget-detail-dropdown" data-toggle="dropdown" aria-expanded="true"><button class="btn btn-link" role="link">{{"l-detail"|i18n}}&nbsp;<span class="caret"></span></button></span><ul class="dropdown-menu" role="menu" aria-labelledby="widget-detail-dropdown"></ul><span>'), t = r.find("ul"), i = 0; i < o.length; i++) n = angular.element(o[i]), l((a = angular.element('<li role="presentation"><a role="menuitem" tabindex="-1"></a></li>')).children("a"), n), t.append(a);
                1 === o.length && (r = angular.element('<span class="pull-right"><a class="btn btn-link" role="menuitem" tabindex="-1"></a><span>'), n = angular.element(o[0]), l(r.children("a"), n));
                e.find(".actions").append(r)
            }
        }
    }
    angular.module("totvsWidgetFooterActions").directive("totvsWidgetFooterActions", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        return {
            template: '<span class="panel-title"><span ng-transclude></span></span>',
            restrict: "E",
            transclude: !0,
            replace: !0
        }
    }
    angular.module("totvsWidgetFooterBody").directive("totvsWidgetFooterBody", e), e.$inject = []
}(),
function () {
    "use strict";

    function e(a) {
        return {
            template: '<div class="panel-heading"><div class="row"><div class="col-xs-12"><h3 class="panel-title" style="display:inline">{{title}}</h3>&nbsp;<span ng-transclude></span><span class="pull-right"><span ng-show="showRefresh" ng-if="hasRefresh && !help" class="clickable glyphicon glyphicon-refresh" aria-hidden="true" ng-click="callRefresh()">&nbsp;</span><span ng-show="showSettigns" ng-if="hasSettings && !help" class="clickable glyphicon glyphicon-cog" aria-hidden="true" ng-click="callSettings()"></span><span ng-if="!hasSettings && !hasRefresh && help" class="clickable glyphicon glyphicon-question-sign" aria-hidden="true" ng-click="callHelp()"></span><div ng-if="hasSettings && hasRefresh && help" class="clickable dropdown-toggle" data-toggle="dropdown" aria-hidden="true"><span class="caret" aria-hidden="true"></span></div><ul class="dropdown-menu" role="menu" aria-labelledby="widget-actions-dropdown"><li role="presentation"><a role="menuitem" tabindex="-1" ng-show="showRefresh" ng-click="callRefresh()">{{ "l-refresh" | i18n }}</a></li><li role="presentation"><a role="menuitem" tabindex="-1" ng-show="showSettigns" ng-click="callSettings()">{{ "l-settings" | i18n }}</a></li><li role="presentation"><a role="menuitem" tabindex="-1" ng-click="callHelp()">{{ "l-help" | i18n }} </a></li></ul></span></div></div></div>',
            restrict: "E",
            transclude: !0,
            replace: !0,
            scope: {
                title: "@",
                settings: "&",
                showSettigns: "@?",
                refresh: "&?",
                showRefresh: "@?",
                help: "@"
            },
            compile: function () {
                return function (e, t, n) {
                    e.hasRefresh = n.$attr.hasOwnProperty("refresh"), e.hasSettings = n.$attr.hasOwnProperty("settings"), angular.isUndefined(e.showSettigns) && (e.showSettigns = !0), angular.isUndefined(e.showRefresh) && (e.showRefresh = !0), e.callHelp = function () {
                        a.open(e.help)
                    }, e.callSettings = function () {
                        e.settings()
                    }, angular.isFunction(e.refresh) && (e.callRefresh = function () {
                        e.refresh()
                    }), t.removeAttr("title")
                }
            }
        }
    }
    angular.module("totvsWidgetHeader").directive("totvsWidgetHeader", e), e.$inject = ["$window"]
}(),
function () {
    "use strict";

    function e(v, h, b, y, e, w, k, C, S, D) {
        return {
            restrict: "AE",
            require: "ngModel",
            scope: {
                ngDisabled: "&",
                zoomSelected: "&",
                zoomSelectedInternal: "&",
                zoomValidValues: "&",
                zoomValidSearchValues: "&",
                zoomRefreshDelay: "@"
            },
            link: function (l, n, s, c) {
                l.zoomRefreshDelay = l.zoomRefreshDelay || 500, l.zoomInit = S(s.zoomInit);
                var d, t, e, a, i, o, r, u, p, f, g = s.$attr.isTotvsField && s.hasOwnProperty("zoomMultiple");
                l.getObjectFromValue = function (a) {
                    return e && w.cancel(e), e = w(function () {
                        var e, t, n;
                        return e = l.selectedItemObj, s.zoomId && e && (e = e[s.zoomId]), a === e ? l.selectedItemObj : (t = s.zoomController, (n = s.zoomService) ? n = b.get(n) : t ? (angular.module("zoom").constant("zoomoptions", "zoomoptions"), angular.module("zoom").constant("zoomcallback", void 0), angular.module("zoom").constant("zoominit", void 0), n = y(t, {
                            $modalInstance: "$modalInstance",
                            $injector: b,
                            $scope: l
                        })) : n = void 0, n && n.getObjectFromValue ? n.getObjectFromValue(a, l.zoomInitFn()) : a)
                    }, l.zoomRefreshDelay)
                }, l.selectedItemFn = function (e) {
                    var t, n;
                    t = angular.equals(l.selectedItemObj, e), n = l.selectedItemObj, l.selectedItemObj = e, l.showDescription(), l.zoomSelected && !t && !0 !== s.disabled && l.zoomSelected({
                        selected: e,
                        oldvalue: n
                    }), l.zoomSelectedInternal && !t && !0 !== s.disabled && l.zoomSelectedInternal({
                        selected: e,
                        oldvalue: n
                    })
                }, l.showDescription = function () {
                    var e, t, n, a, i, o;
                    if (t = l.zoomValidValues(), n = !1, t)
                        for (e = 0; e < t.length; e++) l.selectedItemObj === t[e] && (n = !0), "" === t[e] && void 0 === l.selectedItemObj && (n = !0);
                    if (n && w(function () {
                            c.$setValidity("zoom", !0)
                        }), l.selectedItemObj && !n && s.zoomId) {
                        if (a = l.selectedItemObj[s.zoomId], i = l.zoomValidSearchValues(), o = !1, i)
                            for (e = 0; e < i.length; e++) a === i[e] && (o = !0);
                        a || o ? (s.zoomDescription && (a = a + " - " + l.selectedItemObj[s.zoomDescription]), l.setModelValue(a)) : c.$setValidity("zoom", !1)
                    }
                }, l.zoomInitFn = function () {
                    if (l.zoomInit) {
                        if (s.$attr.isTotvsField || l.$parent.selectService) {
                            var e = l.zoomInit(l.$parent.$parent);
                            return l.cacheZoomInit = e
                        }
                        return l.zoomInit(l.$parent)
                    }
                }, l.openZoom = function () {
                    var e = {
                        controller: (s.zoomController || "zoomController") + " as controller",
                        size: "lg",
                        scope: l,
                        backdrop: "static",
                        resolve: {
                            zoomoptions: function () {
                                return s.zoomService
                            },
                            zoomcallback: function () {
                                return l.selectedItemFn
                            },
                            zoominit: function () {
                                return l.zoomInitFn
                            },
                            zoomid: function () {
                                return s.zoomId
                            },
                            zoommultiple: function () {
                                return s.hasOwnProperty("zoomMultiple")
                            },
                            zoomalertmessage: function () {
                                return s.zoomAlertMessage
                            },
                            previousselect: function () {
                                return c.$modelValue
                            },
                            cacheZoomInit: function () {
                                return l.cacheZoomInit
                            }
                        }
                    };
                    s.zoomTemplate ? e.templateUrl = s.zoomTemplate : e.template = C.TEMPLATE, l.zoominstance = h.open(e), l.zoominstance.rendered.then(function () {
                        var e = .65;
                        $("div.modal-body-zoom div.accordion").length <= 0 && (e = .55), $("div.modal-body-zoom div.row.zoom-result").css("height", window.innerHeight * e)
                    }), l.zoominstance.result.then(function (e) {
                        angular.isArray(e) && (l.selectedItemObj = e), l.setModelValue(e)
                    })
                }, r = l;
                for (; r.$parent;) r = r.$parent;
                r.zooms || (r.zooms = []);
                r.zooms.push(l.openZoom), k.bindTo(l).add({
                    combo: "f7",
                    description: "zoom",
                    allowIn: ["input"],
                    callback: function (e) {
                        for (e.preventDefault(), r = l; r.$parent;) r = r.$parent;
                        if (r.zooms || (r.zooms = []), (f = e.srcElement).attributes.getNamedItem("zoom-hotkey"))
                            for (u = $("[zoom-hotkey]"), p = 0; p < u.length; p++) u[p] === f && r.zooms[p]()
                    }
                }), l.setModelValue = function (e) {
                    var t;
                    c.$setValidity("zoom", !0), c.$setViewValue(e), c.$render(), s.$attr.isTotvsField && (t = n.parent().parent().children()[0]) && angular.element(t).val(c.$viewValue)
                }, l.successCallback = function (e, t) {
                    d = t, c.$setValidity("zoom", null !== e), null !== e && l.selectedItemFn(e)
                }, l.successCallbackData = function (e, t) {
                    d = t, c.$setValidity("zoom", !e.hasOwnProperty("data")), e.hasOwnProperty("data") || l.selectedItemFn(e)
                }, l.errorCallback = function (e) {
                    d = e, c.$setValidity("zoom", !1)
                }, l.loadFromValue = function (t) {
                    var e, n, a, i, o, r;
                    if (i = !1, a = l.zoomValidValues())
                        for (e = 0; e < a.length; e++) t === a[e] && (i = !0), "" === a[e] && void 0 === t && (i = !0);
                    if (r = !1, o = l.zoomValidSearchValues())
                        for (e = 0; e < o.length; e++) t === o[e] && (r = !0);
                    s.required || r || null != t && "undefined" !== t && "" !== t && 0 !== t ? (n = l.getObjectFromValue(t)) ? n && n.$then ? n.$then(function (e) {
                        l.successCallback(e, t)
                    }, function () {
                        l.errorCallback(t)
                    }) : n && n.then ? n.then(function (e) {
                        l.successCallback(e, t)
                    }, function () {
                        l.errorCallback(t)
                    }) : n && n.$promise ? n.$promise.then(function (e) {
                        l.successCallbackData(e, t)
                    }, function () {
                        l.errorCallback(t)
                    }) : null == n ? l.errorCallback() : (d = t, c.$setValidity("zoom", !0), l.selectedItemFn(n)) : l.errorCallback(void 0) : d && !i ? l.errorCallback(t) : l.selectedItemFn(t)
                }, "BUTTON" === n.prop("tagName") ? n.click(function (e) {
                    e.preventDefault(), e.stopPropagation(), l.openZoom()
                }) : (a = n.parents(".input-group"), 0 === (i = a.find(".input-group-btn")).length && (i = angular.element('<span class="input-group-btn"></span>'), a.append(i), a.addClass("no-block")), o = angular.element('<button class="btn btn-default" role="button"type="button" data-ng-click="openZoom()"><span class="glyphicon glyphicon-search"></span></button>'), s.$attr.isTotvsField && o.attr("ng-disabled", "ngDisabled()"), v(o)(l), i.append(o));

                function m(e) {
                    return e && e.objSelected
                }
                c.$formatters.push(function (e) {
                    return g && m(e) ? e = function (e) {
                        if (e && e.objSelected) return D.getZoomMultipleResult(e.objSelected)
                    }(e) : s.zoomId && l.loadFromValue(e), e
                }), c.$parsers.push(function (e) {
                    return !s.zoomId || g && m(e) || ("string" == typeof e && (e = e.split(" - ")[0]), t && w.cancel(t), t = w(function () {
                        l.loadFromValue(e)
                    }, l.zoomRefreshDelay)), e
                }), l.$on("$destroy", function () {
                    t && (w.cancel(t), t = void 0), e && (w.cancel(e), e = void 0)
                })
            }
        }
    }
    angular.module("zoom").directive("zoom", e), e.$inject = ["$compile", "$modal", "$injector", "$controller", "$q", "$timeout", "hotkeys", "zoomConstant", "$parse", "zoomMultipleService"]
}(),
function () {
    "use strict";

    function e() {
        var t = ["time", "date"],
            n = t[0];
        this.$get = function () {
            return {
                getOutputFormat: function () {
                    return n
                }
            }
        }, this.setOutputFormat = function (e) {
            if (-1 === t.indexOf(e)) throw new Error("totvs-date-range - O formato informado não é válido!");
            n = e
        }
    }
    angular.module("totvsDateRange").provider("TotvsDateRange", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        var t = ["time", "date"],
            n = t[0];
        this.$get = function () {
            return {
                getOutputFormat: function () {
                    return n
                }
            }
        }, this.setOutputFormat = function (e) {
            if (-1 === t.indexOf(e)) throw new Error("totvs-datepicker - O formato informado não é válido!");
            n = e
        }
    }
    angular.module("totvsDatepicker").provider("TotvsDatepicker", e), e.$inject = []
}(),
function () {
    "use strict";

    function e() {
        var t = !0;
        this.hyphenateProperties = function (e) {
            if ("boolean" != typeof e) {
                throw new Error('totvs-grid.provider - O parâmetro da função "hyphenateProperties" deve ser um valor booleano.')
            }
            t = e
        }, this.$get = function () {
            return {
                useHyphenatedProperties: function () {
                    return t
                }
            }
        }
    }
    angular.module("totvsGrid").provider("TotvsGrid", e), e.$inject = []
}(),
function () {
    "use strict";
    angular.module("totvsTab").run(["$templateCache", function (e) {
        e.put("templates/tab.html", '<li ng-class="{active: active, disabled: disabled}"><a href ng-click="select()" totvs-tab-heading-transclude>{{heading}}</a></li>')
    }])
}(),
function () {
    "use strict";
    angular.module("totvsTabDropdown").run(["$templateCache", function (e) {
        e.put("templates/tabdropdown.html", '<li ng-class="{active: active, active: subActive, disabled: disabled}" class="dropdown">    <a data-toggle="dropdown" class="dropdown-toggle">        <span>{{heading}}&nbsp;</span>        <span class="glyphicon glyphicon-option-vertical"></span>    </a>    <ul class="dropdown-menu dropdown-menu-right" ng-transclude></ul></li>')
    }])
}(),
function () {
    "use strict";
    angular.module("totvsTabDropdownItem").run(["$templateCache", function (e) {
        e.put("templates/tabdropdownitem.html", '<li ng-class="{active: active, disabled: disabled}">    <a href ng-click="select()">{{heading}}</a></li>')
    }])
}(),
function () {
    "use strict";
    angular.module("totvsTabset").run(["$templateCache", function (e) {
        e.put("templates/tabset.html", '<div class="tabset col-xs-12"><ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul><div class="tab-content"><div class="tab-pane" ng-class="{active: tab.active}" ng-repeat="tab in tabs" totvs-tab-content-transclude="tab.tab || tab"></div></div></div>')
    }])
}();
