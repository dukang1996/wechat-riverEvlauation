Page({

  data: {
    result: {
      C1: '',
      C2: '',
      C3: '',
      C4: '',
      C5: '',
      C6: '',
      C7: '',
      C8: '',
      C9: '',
      C10: '',
      C11: '',
      C12: '',
      C13: '',
      C14: '',
      C15: '',
      C16: '',
      C17: '',
    },
    value: {
      C1: '',
      C2: '',
      C3: '',
      C4: '',
      C5: '',
      C6: '',
      C7: '',
      C8: '',
      C9: '',
      C10: '',
      C11: '',
      C12: '',
      C13: '',
      C14: '',
      C15: '',
      C16: '',
      C17: '',
    },
    score: {
      C1: '',
      C2: '',
      C3: '',
      C4: '',
      C5: '',
      C6: '',
      B1: '',
      C7: '',
      C8: '',
      C9: '',
      C10: '',
      C11: '',
      C12: '',
      C13: '',
      C14: '',
      C15: '',
      B2: '',
      C16: '',
      C17: '',
      B3: '',

    },
    riverType: ['中心城区河道', '新城新镇河道', '农村地区河道'],
    typeId: 0,
    riverName: '',
    riverLenth: '',
    riverS: '',//河道面积
    riverL: '', //河滨带
    beforC4: '',//治理前氨氮浓度
    rateC4: '',//氨氮改善率
    beforC5: '',//治理前总磷浓度
    rateC5: '',//总磷改善率
    beforC6: '',//治理前透明度
    rateC6: '',//透明度改善率
    rateC11: '',//生态护岸比例
    rateC12: '',//挺水植物比例
    rateC13: '',//沉水植物比例
    plantType: '',//陆生植物类型数量
    plantTypeNum: '',//植物种类数量
    qita: '',
    total: '',

  },
  judgeDO: function (e) {
    var result = e.detail.value
    var score = 0
    if (result != '') {
      if (result >= 5) {
        this.setData({ 'result.C1': '优良' })
      }
      else if (result < 5 && result >= 3) {
        this.setData({ 'result.C1': '合格' })
      }
      else {
        this.setData({ 'result.C1': '不合格' })
      }
      if (result >= 7) {
        this.setData({ 'score.C1': 100 })
      }
      else if (result <= 7 && result >= 1) {
        score = 10 * result + 30
        this.setData({ 'score.C1': score.toFixed(2) })
      }
      else {
        this.setData({ 'score.C1': 40 })
      }

    }
    else {
      this.setData({ 'result.C1': '' })
      this.setData({ 'score.C1': '' })
    }
  },
  judgeC2: function () {
    var id = this.data.typeId
    var valueC2 = this.data.value.C2
    var scoreC2 = 0
    if (id == 0) {
      if (valueC2 != '') {
        if (valueC2 >= 20) {
          this.setData({ 'result.C2': '不合格' })
          this.setData({ 'score.C2': 40 })
        }
        else if (valueC2 >= 17 && valueC2 < 20) {
          this.setData({ 'result.C2': '不合格' })
          scoreC2 = 106.667 - 3.333 * valueC2
          this.setData({ 'score.C2': scoreC2.toFixed(2) })
        }
        else if (valueC2 > 15 && valueC2 < 17) {
          this.setData({ 'result.C2': '不合格' })
          scoreC2 = 135 - 5 * valueC2
          this.setData({ 'score.C2': scoreC2.toFixed(2) })
        }
        else if (valueC2 > 12 && valueC2 <= 15) {
          this.setData({ 'result.C2': '合格' })
          scoreC2 = 110 - 3.333 * valueC2
          this.setData({ 'score.C2': scoreC2.toFixed(2) })
        }
        else if (valueC2 > 10 && valueC2 <= 12) {
          this.setData({ 'result.C2': '合格' })
          scoreC2 = 130 - 5 * valueC2
          this.setData({ 'score.C2': scoreC2.toFixed(2) })
        }
        else if (valueC2 > 8 && valueC2 <= 10) {
          this.setData({ 'result.C2': '优良' })
          scoreC2 = 130 - 5 * valueC2
          this.setData({ 'score.C2': scoreC2.toFixed(2) })
        }
        else if (valueC2 > 6 && valueC2 <= 8) {
          this.setData({ 'result.C2': '优良' })
          scoreC2 = 130 - 5 * valueC2
          this.setData({ 'score.C2': scoreC2.toFixed(2) })
        }
        else {
          this.setData({ 'result.C2': '优良' })
          this.setData({ 'score.C2': 100 })
        }
      } else {
        this.setData({ 'result.C2': '' })
        this.setData({ 'score.C2': '' })
      }

    }
    else if (id == 1 || id == 2) {
      if (valueC2 != '') {
        if (valueC2 >= 15) {
          this.setData({ 'result.C2': '不合格' })
          this.setData({ 'score.C2': 40 })
        }
        else if (valueC2 >= 12 && valueC2 < 15) {
          this.setData({ 'result.C2': '不合格' })
          scoreC2 = 90 - 3.333 * valueC2
          this.setData({ 'score.C2': scoreC2.toFixed(2) })
        }
        else if (valueC2 > 10 && valueC2 < 12) {
          this.setData({ 'result.C2': '不合格' })
          scoreC2 = 110 - 5 * valueC2
          this.setData({ 'score.C2': scoreC2.toFixed(2) })
        }
        else if (valueC2 > 6 && valueC2 <= 10) {
          this.setData({ 'result.C2': '合格' })
          scoreC2 = 110 - 5 * valueC2
          this.setData({ 'score.C2': scoreC2.toFixed(2) })
        }
        else if (valueC2 > 4 && valueC2 <= 6) {
          this.setData({ 'result.C2': '优良' })
          scoreC2 = 140 - 10 * valueC2
          this.setData({ 'score.C2': scoreC2.toFixed(2) })
        }
        else {
          this.setData({ 'result.C2': '优良' })
          this.setData({ 'score.C2': 100 })
        }
      }
      else {
        this.setData({ 'result.C2': '' })
        this.setData({ 'score.C2': '' })
      }
    }
  },
  judgeC3: function () {
    var id = this.data.typeId
    var valueC3 = this.data.value.C3
    var scoreC3 = 0
    if (id == 0) {
      if (valueC3 != '') {
        if (valueC3 >= 100) {
          this.setData({ 'result.C3': '不合格' })
          this.setData({ 'score.C3': 40 })
        }
        else if (valueC3 > 60 && valueC3 < 100) {
          this.setData({ 'result.C3': '不合格' })
          scoreC3 = 90 - 0.5 * valueC3
          this.setData({ 'score.C3': scoreC3.toFixed(2) })
        }
        else if (valueC3 > 40 && valueC3 <= 60) {
          this.setData({ 'result.C3': '合格' })
          scoreC3 = 90 - 0.5 * valueC3
          this.setData({ 'score.C3': scoreC3.toFixed(2) })
        }
        else if (valueC3 > 25 && valueC3 <= 40) {
          this.setData({ 'result.C3': '合格' })
          scoreC3 = 96.667 - 0.667 * valueC3
          this.setData({ 'score.C3': scoreC3.toFixed(2) })
        }
        else if (valueC3 > 15 && valueC3 <= 25) {
          this.setData({ 'result.C3': '优良' })
          scoreC3 = 105 - valueC3
          this.setData({ 'score.C3': scoreC3.toFixed(2) })
        }
        else if (valueC3 > 10 && valueC3 <= 15) {
          this.setData({ 'result.C3': '优良' })
          scoreC3 = 120 - 2 * valueC3
          this.setData({ 'score.C3': scoreC3.toFixed(2) })
        }
        else {
          this.setData({ 'result.C3': '优良' })
          this.setData({ 'score.C3': 100 })
        }
      } else {
        this.setData({ 'result.C3': '' })
        this.setData({ 'score.C3': '' })
      }
    }
    else if (id == 1 || id == 2) {
      if (valueC3 != '') {
        if (valueC3 >= 50) {
          this.setData({ 'result.C3': '不合格' })
          this.setData({ 'score.C3': 40 })
        }
        else if (valueC3 >= 35 && valueC3 < 50) {
          this.setData({ 'result.C3': '不合格' })
          scoreC3 = 73.333 - 0.667 * valueC3
          this.setData({ 'score.C3': scoreC3.toFixed(2) })
        }
        else if (valueC3 > 25 && valueC3 < 35) {
          this.setData({ 'result.C3': '不合格' })
          scoreC3 = 85 - valueC3
          this.setData({ 'score.C3': scoreC3.toFixed(2) })
        }
        else if (valueC3 > 15 && valueC3 <= 25) {
          this.setData({ 'result.C3': '合格' })
          scoreC3 = 85 - valueC3
          this.setData({ 'score.C3': scoreC3.toFixed(2) })
        }
        else if (valueC3 > 10 && valueC3 <= 15) {
          this.setData({ 'result.C3': '合格' })
          scoreC3 = 100 - 2 * valueC3
          this.setData({ 'score.C3': scoreC3.toFixed(2) })
        }
        else if (valueC3 > 6 && valueC3 <= 10) {
          this.setData({ 'result.C3': '优良' })
          scoreC3 = 130 - 5 * valueC3
          this.setData({ 'score.C3': scoreC3.toFixed(2) })
        }
        else {
          this.setData({ 'result.C3': '优良' })
          this.setData({ 'score.C3': 100 })
        }
      } else {
        this.setData({ 'result.C3': '' })
        this.setData({ 'score.C3': '' })
      }
    }
  },
  judgeC4: function () {
    var nowC4 = this.data.value.C4
    var beforC4 = this.data.beforC4
    var valueC4 = ''
    var id = this.data.typeId
    var scoreC4 = 0
    if (nowC4 != '' && beforC4 != '') {
      valueC4 = (beforC4 - nowC4) * 100 / beforC4
      this.setData({ rateC4: valueC4.toFixed(2) })
    } else {
      valueC4 = ''
      this.setData({ rateC4: valueC4 })
    }
    if (id == 0) {
      if (valueC4 == '') {
        this.setData({ 'result.C4': '' })
        this.setData({ 'score.C4': '' })
      } else {
        if (valueC4 <= 1) {
          this.setData({ 'result.C4': '不合格' })
          this.setData({ 'score.C4': 40 })
        }
        else if (valueC4 > 1 && valueC4 < 5) {
          this.setData({ 'result.C4': '不合格' })
          scoreC4 = 35 + 5 * valueC4
          this.setData({ 'score.C4': scoreC4.toFixed(2) })
        }
        else if (valueC4 > 5 && valueC4 <= 10) {
          this.setData({ 'result.C4': '合格' })
          scoreC4 = 50 + 2 * valueC4
          this.setData({ 'score.C4': scoreC4.toFixed(2) })
        }
        else if (valueC4 > 10 && valueC4 < 20) {
          this.setData({ 'result.C4': '合格' })
          scoreC4 = 60 + valueC4
          this.setData({ 'score.C4': scoreC4.toFixed(2) })
        }
        else if (valueC4 >= 20 && valueC4 < 30) {
          this.setData({ 'result.C4': '优良' })
          scoreC4 = 40 + 2 * valueC4
          this.setData({ 'score.C4': scoreC4.toFixed(2) })
        }
        else {
          this.setData({ 'result.C4': '优良' })
          this.setData({ 'score.C4': 100 })
        }
      }
    }
    else if (id == 1) {
      if (valueC4 != '') {
        if (valueC4 <= 1) {
          this.setData({ 'result.C4': '不合格' })
          this.setData({ 'score.C4': 40 })
        }
        else if (valueC4 > 1 && valueC4 <= 5) {
          this.setData({ 'result.C4': '不合格' })
          scoreC4 = 37.5 + 2.5 * valueC4
          this.setData({ 'score.C4': scoreC4.toFixed(2) })
        }
        else if (valueC4 > 5 && valueC4 < 10) {
          this.setData({ 'result.C4': '不合格' })
          scoreC4 = 40 + 2 * valueC4
          this.setData({ 'score.C4': scoreC4.toFixed(2) })
        }
        else if (valueC4 >= 10 && valueC4 < 30) {
          this.setData({ 'result.C4': '合格' })
          scoreC4 = 50 + valueC4
          this.setData({ 'score.C4': scoreC4.toFixed(2) })
        }
        else if (valueC4 >= 30 && valueC4 <= 50) {
          this.setData({ 'result.C4': '优良' })
          scoreC4 = 50 + valueC4
          this.setData({ 'score.C4': scoreC4.toFixed(2) })
        }
        else {
          this.setData({ 'result.C4': '优良' })
          this.setData({ 'score.C4': 100 })
        }

      } else {
        this.setData({ 'result.C4': '' })
        this.setData({ 'score.C4': '' })
      }
    }
    else if (id == 2) {
      if (valueC4 != '') {
        if (valueC4 <= 5) {
          this.setData({ 'result.C4': '不合格' })
          this.setData({ 'score.C4': 40 })
        }
        else if (valueC4 > 5 && valueC4 < 15) {
          this.setData({ 'result.C4': '不合格' })
          scoreC4 = 30 + 2 * valueC4
          this.setData({ 'score.C4': scoreC4.toFixed(2) })
        }
        else if (valueC4 >= 15 && valueC4 < 35) {
          this.setData({ 'result.C4': '合格' })
          scoreC4 = 52.5 + 0.5 * valueC4
          this.setData({ 'score.C4': scoreC4.toFixed(2) })
        }
        else if (valueC4 >= 35 && valueC4 < 50) {
          this.setData({ 'result.C4': '合格' })
          scoreC4 = 46.667 + 0.667 * valueC4
          this.setData({ 'score.C4': scoreC4.toFixed(2) })
        }
        else if (valueC4 >= 50 && valueC4 <= 70) {
          this.setData({ 'result.C4': '优良' })
          scoreC4 = 30 + valueC4
          this.setData({ 'score.C4': scoreC4.toFixed(2) })
        }
        else {
          this.setData({ 'result.C4': '优良' })
          this.setData({ 'score.C4': 100 })
        }
      } else {
        this.setData({ 'result.C4': '' })
        this.setData({ 'score.C4': '' })
      }
    }

  },
  judgeC5: function () {
    var nowC5 = this.data.value.C5
    var beforC5 = this.data.beforC5
    var valueC5 = (beforC5 - nowC5) * 100 / beforC5
    var id = this.data.typeId
    var scoreC5 = 0
    if (nowC5 != '' && beforC5 != '') {
      valueC5 = (beforC5 - nowC5) * 100 / beforC5
      this.setData({ rateC5: valueC5.toFixed(2) })
    } else {
      valueC5 = ''
      this.setData({ rateC5: valueC5 })
    }
    if (id == 0) {
      if (valueC5 != '') {
        if (valueC5 <= 1) {
          this.setData({ 'result.C5': '不合格' })
          this.setData({ 'score.C5': 40 })
        }
        else if (valueC5 > 1 && valueC5 < 5) {
          this.setData({ 'result.C5': '不合格' })
          scoreC5 = 37.5 + 2.5 * valueC5
          this.setData({ 'score.C5': scoreC5.toFixed(2) })
        }
        else if (valueC5 >= 5 && valueC5 < 10) {
          this.setData({ 'result.C5': '不合格' })
          scoreC5 = 40 + 2 * valueC5
          this.setData({ 'score.C5': scoreC5.toFixed(2) })
        }
        else if (valueC5 >= 10 && valueC5 < 30) {
          this.setData({ 'result.C5': '合格' })
          scoreC5 = 50 + valueC5
          this.setData({ 'score.C5': scoreC5.toFixed(2) })
        }
        else if (valueC5 >= 30 && valueC5 < 40) {
          this.setData({ 'result.C5': '优良' })
          scoreC5 = 20 + 2 * valueC5
          this.setData({ 'score.C5': scoreC5.toFixed(2) })
        }
        else {
          this.setData({ 'result.C5': '优良' })
          this.setData({ 'score.C5': 100.00 })
        }
      } else {
        this.setData({ 'result.C5': '' })
        this.setData({ 'score.C5': '' })
      }
    }
    else if (id == 1) {
      if (valueC5 != '') {
        if (valueC5 <= 1) {
          this.setData({ 'result.C5': '不合格' })
          this.setData({ 'score.C5': 40 })
        }
        else if (valueC5 > 1 && valueC5 <= 5) {
          this.setData({ 'result.C5': '不合格' })
          scoreC5 = 37.5 + 2.5 * valueC5
          this.setData({ 'score.C5': scoreC5.toFixed(2) })
        }
        else if (valueC5 > 5 && valueC5 < 10) {
          this.setData({ 'result.C5': '不合格' })
          scoreC5 = 40 + 2 * valueC5
          this.setData({ 'score.C5': scoreC5.toFixed(2) })
        }
        else if (valueC5 >= 10 && valueC5 < 30) {
          this.setData({ 'result.C5': '合格' })
          scoreC5 = 50 + valueC5
          this.setData({ 'score.C5': scoreC5.toFixed(2) })
        }
        else if (valueC5 >= 30 && valueC5 <= 40) {
          this.setData({ 'result.C5': '优良' })
          scoreC5 = 20 + 2 * valueC5
          this.setData({ 'score.C5': scoreC5.toFixed(2) })
        }
        else {
          this.setData({ 'result.C5': '优良' })
          this.setData({ 'score.C5': 100.00 })
        }
      } else {
        this.setData({ 'result.C5': '' })
        this.setData({ 'score.C5': '' })
      }
    }
    else if (id == 2) {
      if (valueC5 != '') {
        if (valueC5 <= 1) {
          this.setData({ 'result.C5': '不合格' })
          this.setData({ 'score.C5': 40 })
        }
        else if (valueC5 > 1 && valueC5 <= 5) {
          this.setData({ 'result.C5': '不合格' })
          scoreC5 = 37.5 + 2.5 * valueC5
          this.setData({ 'score.C5': scoreC5.toFixed(2) })
        }
        else if (valueC5 > 5 && valueC5 < 10) {
          this.setData({ 'result.C5': '不合格' })
          scoreC5 = 40 + 2 * valueC5
          this.setData({ 'score.C5': scoreC5.toFixed(2) })
        }
        else if (valueC5 >= 10 && valueC5 < 50) {
          this.setData({ 'result.C5': '合格' })
          scoreC5 = 55 + 0.5 * valueC5
          this.setData({ 'score.C5': scoreC5.toFixed(2) })
        }
        else if (valueC5 >= 50 && valueC5 <= 60) {
          this.setData({ 'result.C5': '优良' })
          scoreC5 = -20 + 2 * valueC5
          this.setData({ 'score.C5': scoreC5.toFixed(2) })
        }
        else {
          this.setData({ 'result.C5': '优良' })
          this.setData({ 'score.C5': 100.00 })
        }
      } else {
        this.setData({ 'result.C5': '' })
        this.setData({ 'score.C5': '' })
      }
    }
  },
  judgeC6: function () {
    var nowC6 = this.data.value.C6
    var beforC6 = this.data.beforC6
    var valueC6 = (beforC6 - nowC6) * 100 / beforC6
    var id = this.data.typeId
    var scoreC6 = 0
    if (nowC6 != '' && beforC6 != '') {
      valueC6 = (beforC6 - nowC6) * 100 / beforC6
      this.setData({ rateC6: valueC6.toFixed(2) })
    } else {
      valueC6 = ''
      this.setData({ rateC6: valueC6 })
    }
    if (id == 0) {
      if (valueC6 != '') {
        if (valueC6 <= 1) {
          this.setData({ 'result.C6': '不合格' })
          this.setData({ 'score.C6': 40 })
        }
        else if (valueC6 > 1 && valueC6 < 5) {
          this.setData({ 'result.C6': '不合格' })
          scoreC6 = 35 + 5 * valueC6
          this.setData({ 'score.C6': scoreC6.toFixed(2) })
        }
        else if (valueC6 >= 5 && valueC6 < 30) {
          this.setData({ 'result.C6': '合格' })
          scoreC6 = 58 + 0.4 * valueC6
          this.setData({ 'score.C6': scoreC6.toFixed(2) })
        }
        else if (valueC6 >= 30 && valueC6 < 50) {
          this.setData({ 'result.C6': '合格' })
          scoreC6 = 55 + 0.5 * valueC6
          this.setData({ 'score.C6': scoreC6.toFixed(2) })
        }
        else if (valueC6 >= 50 && valueC6 < 60) {
          this.setData({ 'result.C6': '优良' })
          scoreC6 = -20 + 2 * valueC6
          this.setData({ 'score.C6': scoreC6.toFixed(2) })
        }
        else {
          this.setData({ 'result.C6': '优良' })
          this.setData({ 'score.C6': 100.00 })
        }
      } else {
        this.setData({ 'result.C6': '' })
        this.setData({ 'score.C6': '' })
      }
    }
    else if (id == 1) {
      if (valueC6 != '') {
        if (valueC6 <= 5) {
          this.setData({ 'result.C6': '不合格' })
          this.setData({ 'score.C6': 40 })
        }
        else if (valueC6 > 5 && valueC6 < 15) {
          this.setData({ 'result.C6': '不合格' })
          scoreC6 = 30 + 2 * valueC6
          this.setData({ 'score.C6': scoreC6.toFixed(2) })
        }
        else if (valueC6 >= 15 && valueC6 < 30) {
          this.setData({ 'result.C6': '合格' })
          scoreC6 = 50 + 0.667 * valueC6
          this.setData({ 'score.C6': scoreC6.toFixed(2) })
        }
        else if (valueC6 >= 30 && valueC6 < 50) {
          this.setData({ 'result.C6': '合格' })
          scoreC6 = 50 + 0.5 * valueC6
          this.setData({ 'score.C6': scoreC6.toFixed(2) })
        }
        else if (valueC6 >= 50 && valueC6 <= 60) {
          this.setData({ 'result.C6': '优良' })
          scoreC6 = -20 + 2 * valueC6
          this.setData({ 'score.C6': scoreC6.toFixed(2) })
        }
        else {
          this.setData({ 'result.C6': '优良' })
          this.setData({ 'score.C6': 100.00 })
        }
      } else {
        this.setData({ 'result.C6': '' })
        this.setData({ 'score.C6': '' })
      }
    }
    else if (id == 2) {
      if (valueC6 != '') {
        if (valueC6 <= 1) {
          this.setData({ 'result.C6': '不合格' })
          this.setData({ 'score.C6': 40 })
        }
        else if (valueC6 > 1 && valueC6 <= 5) {
          this.setData({ 'result.C6': '不合格' })
          scoreC6 = 37.5 + 2.5 * valueC6
          this.setData({ 'score.C6': scoreC6.toFixed(2) })
        }
        else if (valueC6 > 5 && valueC6 < 10) {
          this.setData({ 'result.C6': '不合格' })
          scoreC6 = 40 + 2 * valueC6
          this.setData({ 'score.C6': scoreC6.toFixed(2) })
        }
        else if (valueC6 >= 10 && valueC6 < 50) {
          this.setData({ 'result.C6': '合格' })
          scoreC6 = 55 + 0.5 * valueC6
          this.setData({ 'score.C6': scoreC6.toFixed(2) })
        }
        else if (valueC6 >= 50 && valueC6 <= 60) {
          this.setData({ 'result.C6': '优良' })
          scoreC6 = -20 + 2 * valueC6
          this.setData({ 'score.C6': scoreC6.toFixed(2) })
        }
        else {
          this.setData({ 'result.C6': '优良' })
          this.setData({ 'score.C6': 100.00 })
        }
      } else {
        this.setData({ 'result.C6': '' })
        this.setData({ 'score.C6': '' })
      }
    }
  },
  judgeC7: function (e) {
    var id = this.data.typeId
    var valueC7 = e.detail.value
    var scoreC7 = 0
    if (valueC7 != '') {
      if (valueC7 <= 0.5) {
        this.setData({ 'result.C7': '不合格' })
        this.setData({ 'score.C7': 40 })
      }
      else if (valueC7 > 0.5 && valueC7 < 1) {
        this.setData({ 'result.C7': '不合格' })
        scoreC7 = 30 + 20 * valueC7
        this.setData({ 'score.C7': scoreC7.toFixed(2) })
      }
      else if (valueC7 >= 1 && valueC7 < 1.27) {
        this.setData({ 'result.C7': '不合格' })
        scoreC7 = 12.963 + 37.037 * valueC7
        this.setData({ 'score.C7': scoreC7.toFixed(2) })
      }
      else if (valueC7 >= 1.27 && valueC7 < 2) {
        this.setData({ 'result.C7': '合格' })
        scoreC7 = 42.603 + 13.699 * valueC7
        this.setData({ 'score.C7': scoreC7.toFixed(2) })
      }
      else if (valueC7 >= 2 && valueC7 < 2.53) {
        this.setData({ 'result.C7': '合格' })
        scoreC7 = 32.264 + 18.868 * valueC7
        this.setData({ 'score.C7': scoreC7.toFixed(2) })
      }
      else if (valueC7 >= 2.53 && valueC7 < 3) {
        this.setData({ 'result.C7': '优良' })
        scoreC7 = 26.17 + 21.277 * valueC7
        this.setData({ 'score.C7': scoreC7.toFixed(2) })
      }
      else if (valueC7 >= 3 && valueC7 <= 3.5) {
        this.setData({ 'result.C7': '优良' })
        scoreC7 = 30 + 20 * valueC7
        this.setData({ 'score.C7': scoreC7.toFixed(2) })
      }
      else {
        this.setData({ 'result.C7': '优良' })
        this.setData({ 'score.C7': 100 })
      }
    } else {
      this.setData({ 'result.C7': '' })
      this.setData({ 'score.C7': '' })
    }

  },
  judgeC8: function () {
    var id = this.data.typeId
    var valueC8 = this.data.value.C8
    var scoreC8 = 0
    if (id == 0) {
      if (valueC8 != '') {
        if (valueC8 <= 0.86) {
          this.setData({ 'result.C8': '不合格' })
          this.setData({ 'score.C8': 40 })
        }
        else if (valueC8 > 0.86 && valueC8 < 1.86) {
          this.setData({ 'result.C8': '不合格' })
          scoreC8 = 22.8 + 20 * valueC8
          this.setData({ 'score.C8': scoreC8.toFixed(2) })
        }
        else if (valueC8 >= 1.86 && valueC8 < 2.36) {
          this.setData({ 'result.C8': '合格' })
          scoreC8 = 22.8 + 20 * valueC8
          this.setData({ 'score.C8': scoreC8.toFixed(2) })
        }
        else if (valueC8 >= 2.36 && valueC8 < 2.8) {
          this.setData({ 'result.C8': '合格' })
          scoreC8 = 16.363 + 22.727 * valueC8
          this.setData({ 'score.C8': scoreC8.toFixed(2) })
        }
        else if (valueC8 >= 2.8 && valueC8 <= 3.8) {
          this.setData({ 'result.C8': '优良' })
          scoreC8 = 24 + 20 * valueC8
          this.setData({ 'score.C8': scoreC8.toFixed(2) })
        }
        else {
          this.setData({ 'result.C8': '优良' })
          this.setData({ 'score.C8': 100 })
        }
      } else {
        this.setData({ 'result.C8': '' })
        this.setData({ 'score.C8': '' })
      }
    }
    else if (id == 1 || id == 2) {
      if (valueC8 != '') {
        if (valueC8 <= 1.7) {
          this.setData({ 'result.C8': '不合格' })
          this.setData({ 'score.C8': 40 })
        }
        else if (valueC8 > 1.7 && valueC8 < 2.3) {
          this.setData({ 'result.C8': '不合格' })
          scoreC8 = 11.667 + 16.667 * valueC8
          this.setData({ 'score.C8': scoreC8.toFixed(2) })
        }
        else if (valueC8 >= 2.3 && valueC8 < 2.8) {
          this.setData({ 'result.C8': '不合格' })
          scoreC8 = 4 + 20 * valueC8
          this.setData({ 'score.C8': scoreC8.toFixed(2) })
        }
        else if (valueC8 >= 2.8 && valueC8 < 3.3) {
          this.setData({ 'result.C8': '合格' })
          scoreC8 = 4 + 20 * valueC8
          this.setData({ 'score.C8': scoreC8.toFixed(2) })
        }
        else if (valueC8 >= 3.3 && valueC8 < 3.73) {
          this.setData({ 'result.C8': '合格' })
          scoreC8 = -6.744 + 23.256 * valueC8
          this.setData({ 'score.C8': scoreC8.toFixed(2) })
        }
        else if (valueC8 >= 3.73 && valueC8 <= 4.73) {
          this.setData({ 'result.C8': '优良' })
          scoreC8 = 5.4 + 20 * valueC8
          this.setData({ 'score.C8': scoreC8.toFixed(2) })
        }
        else {
          this.setData({ 'result.C8': '优良' })
          this.setData({ 'score.C8': 100 })
        }
      } else {
        this.setData({ 'result.C8': '' })
        this.setData({ 'score.C8': '' })
      }
    }
  },
  judgeC9: function () {
    var id = this.data.typeId
    var valueC9 = this.data.value.C9
    var scoreC9 = 0
    if (id == 0) {
      if (valueC9 != '') {
        if (valueC9 <= 0.05) {
          this.setData({ 'result.C9': '不合格' })
          this.setData({ 'score.C9': 40 })
        }
        else if (valueC9 > 0.05 && valueC9 < 0.15) {
          this.setData({ 'result.C9': '不合格' })
          scoreC9 = 30 + 200 * valueC9
          this.setData({ 'score.C9': scoreC9.toFixed(2) })
        }
        else if (valueC9 >= 0.15 && valueC9 < 0.25) {
          this.setData({ 'result.C9': '合格' })
          scoreC9 = 30 + 200 * valueC9
          this.setData({ 'score.C9': scoreC9.toFixed(2) })
        }
        else if (valueC9 >= 0.25 && valueC9 <= 0.35) {
          this.setData({ 'result.C9': '优良' })
          scoreC9 = 30 + 200 * valueC9
          this.setData({ 'score.C9': scoreC9.toFixed(2) })
        }
        else {
          this.setData({ 'result.C9': '优良' })
          this.setData({ 'score.C9': 100 })
        }
      } else {
        this.setData({ 'result.C9': '' })
        this.setData({ 'score.C9': '' })
      }
    }
    else if (id == 1) {
      if (valueC9 != '') {
        if (valueC9 <= 0.05) {
          this.setData({ 'result.C9': '不合格' })
          this.setData({ 'score.C9': 40 })
        }
        else if (valueC9 > 0.05 && valueC9 < 0.15) {
          this.setData({ 'result.C9': '不合格' })
          scoreC9 = 30 + 200 * valueC9
          this.setData({ 'score.C9': scoreC9.toFixed(2) })
        }
        else if (valueC9 >= 0.15 && valueC9 < 0.35) {
          this.setData({ 'result.C9': '合格' })
          scoreC9 = 45 + 100 * valueC9
          this.setData({ 'score.C9': scoreC9.toFixed(2) })
        }
        else if (valueC9 >= 0.35 && valueC9 < 0.45) {
          this.setData({ 'result.C9': '优良' })
          scoreC9 = 10 + 200 * valueC9
          this.setData({ 'score.C9': scoreC9.toFixed(2) })
        }
        else {
          this.setData({ 'result.C9': '优良' })
          this.setData({ 'score.C9': 100 })
        }
      } else {
        this.setData({ 'result.C9': '' })
        this.setData({ 'score.C9': '' })
      }
    }
    else if (id == 2) {
      if (valueC9 != '') {
        if (valueC9 <= 0.10) {
          this.setData({ 'result.C9': '不合格' })
          this.setData({ 'score.C9': 40 })
        }
        else if (valueC9 > 0.1 && valueC9 < 0.15) {
          this.setData({ 'result.C9': '不合格' })
          scoreC9 = 20 + 200 * valueC9
          this.setData({ 'score.C9': scoreC9.toFixed(2) })
        }
        else if (valueC9 >= 0.15 && valueC9 < 0.25) {
          this.setData({ 'result.C9': '不合格' })
          scoreC9 = 35 + 100 * valueC9
          this.setData({ 'score.C9': scoreC9.toFixed(2) })
        }
        else if (valueC9 >= 0.25 && valueC9 < 0.35) {
          this.setData({ 'result.C9': '合格' })
          scoreC9 = 10 + 200 * valueC9
          this.setData({ 'score.C9': scoreC9.toFixed(2) })
        }
        else if (valueC9 >= 0.35 && valueC9 < 0.45) {
          this.setData({ 'result.C9': '优良' })
          scoreC9 = 10 + 200 * valueC9
          this.setData({ 'score.C9': scoreC9.toFixed(2) })
        }
        else {
          this.setData({ 'result.C9': '优良' })
          this.setData({ 'score.C9': 100 })
        }
      }
    } else {
      this.setData({ 'result.C9': '' })
      this.setData({ 'score.C9': '' })
    }
  },
  judgeC10: function (e) {
    var valueC10 = e.detail.value
    if (valueC10 == 100) {
      this.setData({ 'result.C10': '优良' })
      this.setData({ 'score.C10': 100 })
    }
    else if (valueC10 == 60) {
      this.setData({ 'result.C10': '合格' })
      this.setData({ 'score.C10': 60 })
    }

  },
  judgeC11: function () {
    var id = this.data.typeId
    var lengthC11 = this.data.value.C11
    var scoreC11 = 0
    var riverLength = this.data.riverLength
    var valueC11 = ''
    if (lengthC11 != '' && riverLength != '') {
      valueC11 = lengthC11 * 100 / riverLength
      this.setData({ rateC11: valueC11.toFixed(2) })
    } else {
      valueC11 = ''
      this.setData({ rateC11: valueC11 })
    }
    if (id == 0) {
      if (valueC11 != '') {
        if (valueC11 <= 30) {
          this.setData({ 'result.C11': '不合格' })
          this.setData({ 'score.C11': 40 })
        }
        else if (valueC11 > 30 && valueC11 < 50) {
          this.setData({ 'result.C11': '不合格' })
          scoreC11 = 10 + valueC11
          this.setData({ 'score.C11': scoreC11.toFixed(2) })
        }
        else if (valueC11 >= 50 && valueC11 < 70) {
          this.setData({ 'result.C11': '合格' })
          scoreC11 = 10 + valueC11
          this.setData({ 'score.C11': scoreC11.toFixed(2) })
        }
        else if (valueC11 >= 70 && valueC11 <= 90) {
          this.setData({ 'result.C11': '优良' })
          scoreC11 = 10 + valueC11
          this.setData({ 'score.C11': scoreC11.toFixed(2) })
        }
        else {
          this.setData({ 'result.C11': '优良' })
          this.setData({ 'score.C11': 100 })
        }
      } else {
        this.setData({ 'result.C11': '' })
        this.setData({ 'score.C11': '' })
      }
    }
    else if (id == 1) {
      if (valueC11 != '') {
        if (valueC11 <= 40) {
          this.setData({ 'result.C11': '不合格' })
          this.setData({ 'score.C11': 40 })
        }
        else if (valueC11 > 40 && valueC11 < 60) {
          this.setData({ 'result.C11': '不合格' })
          scoreC11 = valueC11
          this.setData({ 'score.C11': scoreC11.toFixed(2) })
        }
        else if (valueC11 >= 60 && valueC11 < 80) {
          this.setData({ 'result.C11': '合格' })
          scoreC11 = valueC11
          this.setData({ 'score.C11': scoreC11.toFixed(2) })
        }
        else if (valueC11 >= 80 && valueC11 < 100) {
          this.setData({ 'result.C11': '优良' })
          scoreC11 = valueC11
          this.setData({ 'score.C11': scoreC11.toFixed(2) })
        }
        else {
          this.setData({ 'result.C11': '优良' })
          this.setData({ 'score.C11': 100 })
        }
      } else {
        this.setData({ 'result.C11': '' })
        this.setData({ 'score.C11': '' })
      }
    }
    else if (id == 2) {
      if (valueC11 != '') {
        if (valueC11 <= 50) {
          this.setData({ 'result.C11': '不合格' })
          this.setData({ 'score.C11': 40 })
        }
        else if (valueC11 > 50 && valueC11 < 70) {
          this.setData({ 'result.C11': '不合格' })
          scoreC11 = -10 + valueC11
          this.setData({ 'score.C11': scoreC11.toFixed(2) })
        }
        else if (valueC11 >= 70 && valueC11 < 90) {
          this.setData({ 'result.C11': '合格' })
          scoreC11 = -10 + valueC11
          this.setData({ 'score.C11': scoreC11.toFixed(2) })
        }
        else if (valueC11 >= 90 && valueC11 < 100) {
          this.setData({ 'result.C11': '优良' })
          scoreC11 = -100 + 2 * valueC11
          this.setData({ 'score.C11': scoreC11.toFixed(2) })
        }
        else {
          this.setData({ 'result.C11': '优良' })
          this.setData({ 'score.C11': 100 })
        }
      } else {
        this.setData({ 'result.C11': '' })
        this.setData({ 'score.C11': '' })
      }
    }
  },
  judgeC12: function () {
    var id = this.data.typeId
    var LC12 = this.data.value.C12
    var scoreC12 = 0
    var riverL = this.data.riverL
    var valueC12 = ''
    if (LC12 != '' && riverL != '') {
      valueC12 = LC12 * 100 / riverL
      this.setData({ rateC12: valueC12.toFixed(2) })
    } else {
      valueC12 = ''
      this.setData({ rateC12: valueC12 })
    }
    if (id == 0) {
      if (valueC12 != '') {
        if (valueC12 < 5 || valueC12 > 60) {
          this.setData({ 'result.C12': '不合格' })
          this.setData({ 'score.C12': 40 })
        }
        else if ((valueC12 >= 5 && valueC12 < 8) || (valueC12 > 40 && valueC12 <= 60)) {
          this.setData({ 'result.C12': '不合格' })
          scoreC12 = 50
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if ((valueC12 >= 8 && valueC12 < 15) || (valueC12 > 35 && valueC12 <= 40)) {
          this.setData({ 'result.C12': '合格' })
          scoreC12 = 60
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if ((valueC12 >= 15 && valueC12 < 20) || (valueC12 > 30 && valueC12 <= 35)) {
          this.setData({ 'result.C12': '合格' })
          scoreC12 = 70
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if (valueC12 = 20) {
          this.setData({ 'result.C12': '优良' })
          scoreC12 = 80
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if (valueC12 = 25) {
          this.setData({ 'result.C12': '优良' })
          scoreC12 = 90
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if (valueC12 = 30) {
          this.setData({ 'result.C12': '优良' })
          scoreC12 = 100
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
      } else {
        this.setData({ 'result.C12': '' })
        this.setData({ 'score.C12': '' })
      }
    }
    else if (id == 1) {
      if (valueC12 != '') {
        if (valueC12 < 8 || valueC12 > 70) {
          this.setData({ 'result.C12': '不合格' })
          this.setData({ 'score.C12': 40 })
        }
        else if ((valueC12 >= 8 && valueC12 < 10) || (valueC12 > 60 && valueC12 <= 70)) {
          this.setData({ 'result.C12': '不合格' })
          scoreC12 = 50
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if ((valueC12 >= 10 && valueC12 < 15) || (valueC12 > 55 && valueC12 <= 60)) {
          this.setData({ 'result.C12': '合格' })
          scoreC12 = 60
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if ((valueC12 >= 15 && valueC12 < 30) || (valueC12 > 50 && valueC12 <= 55)) {
          this.setData({ 'result.C12': '合格' })
          scoreC12 = 70
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if (valueC12 = 30) {
          this.setData({ 'result.C12': '优良' })
          scoreC12 = 80
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if (valueC12 = 40) {
          this.setData({ 'result.C12': '优良' })
          scoreC12 = 90
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if (valueC12 = 50) {
          this.setData({ 'result.C12': '优良' })
          scoreC12 = 100
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }

      } else {
        this.setData({ 'result.C12': '' })
        this.setData({ 'score.C12': '' })
      }
    }
    else if (id == 2) {
      if (valueC12 != '') {
        if (valueC12 < 20 || valueC12 > 90) {
          this.setData({ 'result.C12': '不合格' })
          this.setData({ 'score.C12': 40 })
        }
        else if ((valueC12 >= 20 && valueC12 < 30) || (valueC12 > 80 && valueC12 <= 90)) {
          this.setData({ 'result.C12': '不合格' })
          scoreC12 = 50
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if ((valueC12 >= 30 && valueC12 < 35) || (valueC12 > 75 && valueC12 <= 80)) {
          this.setData({ 'result.C12': '合格' })
          scoreC12 = 60
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if ((valueC12 >= 35 && valueC12 < 40) || (valueC12 > 70 && valueC12 <= 75)) {
          this.setData({ 'result.C12': '合格' })
          scoreC12 = 70
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if (valueC12 = 40) {
          this.setData({ 'result.C12': '优良' })
          scoreC12 = 80
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if (valueC12 = 55) {
          this.setData({ 'result.C12': '优良' })
          scoreC12 = 90
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
        else if (valueC12 = 70) {
          this.setData({ 'result.C12': '优良' })
          scoreC12 = 100
          this.setData({ 'score.C12': scoreC12.toFixed(2) })
        }
      } else {
        this.setData({ 'result.C12': '' })
        this.setData({ 'score.C12': '' })
      }
    }
  },
  judgeC13: function () {
    var id = this.data.typeId
    var SC13 = this.data.value.C13
    var scoreC13 = 0
    var riverS = this.data.riverS
    var valueC13 = SC13 * 100 / riverS
    if (SC13 != '' && riverS != '') {
      valueC13 = SC13 * 100 / riverS
      this.setData({ rateC13: valueC13.toFixed(2) })
    } else {
      valueC13 = ''
      this.setData({ rateC13: valueC13 })
    }

    if (id == 0) {
      if (valueC13 != '') {
        if (valueC13 <= 1) {
          this.setData({ 'result.C13': '不合格' })
          this.setData({ 'score.C13': 40 })
        }
        else if (valueC13 > 1 && valueC13 < 5) {
          this.setData({ 'result.C13': '不合格' })
          scoreC13 = 35 + 5 * valueC13
          this.setData({ 'score.C13': scoreC13.toFixed(2) })
        }
        else if (valueC13 >= 5 && valueC13 < 15) {
          this.setData({ 'result.C13': '合格' })
          scoreC13 = 50 + 2 * valueC13
          this.setData({ 'score.C13': scoreC13.toFixed(2) })
        }
        else if (valueC13 >= 15 && valueC13 <= 25) {
          this.setData({ 'result.C13': '优良' })
          scoreC13 = 50 + 2 * valueC13
          this.setData({ 'score.C13': scoreC13.toFixed(2) })
        }
        else {
          this.setData({ 'result.C13': '优良' })
          this.setData({ 'score.C13': 100 })
        }

      } else {
        this.setData({ 'result.C13': '' })
        this.setData({ 'score.C13': '' })
      }
    }
    else if (id == 1) {
      if (valueC13 != '') {
        if (valueC13 <= 1) {
          this.setData({ 'result.C13': '不合格' })
          this.setData({ 'score.C13': 40 })
        }
        else if (valueC13 > 1 && valueC13 < 5) {
          this.setData({ 'result.C13': '不合格' })
          scoreC13 = 37.5 + 2.5 * valueC13
          this.setData({ 'score.C13': scoreC13.toFixed(2) })
        }
        else if (valueC13 >= 5 && valueC13 < 10) {
          this.setData({ 'result.C13': '不合格' })
          scoreC13 = 40 + 2 * valueC13
          this.setData({ 'score.C13': scoreC13.toFixed(2) })
        }
        else if (valueC13 >= 10 && valueC13 < 20) {
          this.setData({ 'result.C13': '合格' })
          scoreC13 = 40 + 2 * valueC13
          this.setData({ 'score.C13': scoreC13.toFixed(2) })
        }
        else if (valueC13 >= 20 && valueC13 < 30) {
          this.setData({ 'result.C13': '优良' })
          scoreC13 = 40 + 2 * valueC13
          this.setData({ 'score.C13': scoreC13.toFixed(2) })
        }
        else {
          this.setData({ 'result.C13': '优良' })
          this.setData({ 'score.C13': 100 })
        }
      } else {
        this.setData({ 'result.C13': '' })
        this.setData({ 'score.C13': '' })
      }

    }
    else if (id == 2) {
      if (valueC13 != '') {
        if (valueC13 <= 10) {
          this.setData({ 'result.C13': '不合格' })
          this.setData({ 'score.C13': 40 })
        }
        else if (valueC13 > 10 && valueC13 < 20) {
          this.setData({ 'result.C13': '不合格' })
          scoreC13 = 20 + 2 * valueC13
          this.setData({ 'score.C13': scoreC13.toFixed(2) })
        }
        else if (valueC13 >= 20 && valueC13 < 23) {
          this.setData({ 'result.C13': '合格' })
          scoreC13 = -6.667 + 3.333 * valueC13
          this.setData({ 'score.C13': scoreC13.toFixed(2) })
        }
        else if (valueC13 >= 23 && valueC13 < 25) {
          this.setData({ 'result.C13': '合格' })
          scoreC13 = -45 + 5 * valueC13
          this.setData({ 'score.C13': scoreC13.toFixed(2) })
        }
        else if (valueC13 >= 25 && valueC13 < 35) {
          this.setData({ 'result.C13': '优良' })
          scoreC13 = 30 + 2 * valueC13
          this.setData({ 'score.C13': scoreC13.toFixed(2) })
        }
        else {
          this.setData({ 'result.C13': '优良' })
          this.setData({ 'score.C13': 100 })
        }
      } else {
        this.setData({ 'result.C13': '' })
        this.setData({ 'score.C13': '' })
      }
    }
  },
  judgeC14: function () {
    var id = this.data.typeId
    var valueC14 = this.data.value.C14
    var scoreC14 = 0
    if (id == 0) {
      if (valueC14 != '') {
        if (valueC14 == 0) {
          this.setData({ 'result.C14': '不合格' })
          this.setData({ 'score.C14': 40 })
        }
        else if (valueC14 == 1) {
          this.setData({ 'result.C14': '不合格' })
          scoreC14 = 50
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 2) {
          this.setData({ 'result.C14': '合格' })
          scoreC14 = 60
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 3) {
          this.setData({ 'result.C14': '合格' })
          scoreC14 = 70
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 4) {
          this.setData({ 'result.C14': '优良' })
          scoreC14 = 80
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 5) {
          this.setData({ 'result.C14': '优良' })
          scoreC14 = 90
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 >= 6) {
          this.setData({ 'result.C14': '优良' })
          this.setData({ 'score.C14': 100 })
        }

      }
      else if (valueC14 == '') {
        this.setData({ 'result.C14': '' })
        this.setData({ 'score.C14': '' })
      }

    }
    else if (id == 1) {
      if (valueC14 != '') {
        if (valueC14 == 0) {
          this.setData({ 'result.C14': '不合格' })
          this.setData({ 'score.C14': 40 })
        }
        else if (valueC14 == 1) {
          this.setData({ 'result.C14': '不合格' })
          scoreC14 = 50
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 2) {
          this.setData({ 'result.C14': '合格' })
          scoreC14 = 60
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 3) {
          this.setData({ 'result.C14': '合格' })
          scoreC14 = 70
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 4) {
          this.setData({ 'result.C14': '合格' })
          scoreC14 = 75
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 5) {
          this.setData({ 'result.C14': '优良' })
          scoreC14 = 80
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 6) {
          this.setData({ 'result.C14': '优良' })
          scoreC14 = 90
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 >= 7) {
          this.setData({ 'result.C14': '优良' })
          this.setData({ 'score.C14': 100 })
        }
      }
      else if (valueC14 == '') {
        this.setData({ 'result.C14': '' })
        this.setData({ 'score.C14': '' })
      }
    }
    else if (id == 2) {
      if (valueC14 != '') {
        if (valueC14 == 0) {
          this.setData({ 'result.C14': '不合格' })
          this.setData({ 'score.C14': 40 })
        }
        else if (valueC14 == 1) {
          this.setData({ 'result.C14': '不合格' })
          scoreC14 = 50
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 2) {
          this.setData({ 'result.C14': '合格' })
          scoreC14 = 60
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 3) {
          this.setData({ 'result.C14': '合格' })
          scoreC14 = 65
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 4) {
          this.setData({ 'result.C14': '合格' })
          scoreC14 = 70
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 5) {
          this.setData({ 'result.C14': '合格' })
          scoreC14 = 75
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 6) {
          this.setData({ 'result.C14': '优良' })
          scoreC14 = 80
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 == 7) {
          this.setData({ 'result.C14': '优良' })
          scoreC14 = 90
          this.setData({ 'score.C14': scoreC14.toFixed(2) })
        }
        else if (valueC14 >= 8) {
          this.setData({ 'result.C14': '优良' })
          this.setData({ 'score.C14': 100 })
        }
      }
      else if (valueC14 == '') {
        this.setData({ 'result.C14': '' })
        this.setData({ 'score.C14': '' })
      }
    }
  },
  judgeC15: function () {
    var plantType = this.data.plantType
    var plantTypeNum = this.data.plantTypeNum
    var valueC15 = this.data.value.C15
    var id = this.data.typeId
    var scoreC15 = 0
    var condition = plantType != '' && plantTypeNum != '' && valueC15 != ''
    if (id == 0) {
      if (condition == true) {
        if (plantType < 2 && plantTypeNum < 15 && valueC15 < 80) {
          this.setData({ 'result.C15': '不合格' })
          if (valueC15 <= 60) {
            this.setData({ 'score.C15': 40.00 })
          }
          else if (valueC15 > 60 && valueC15 < 80) {
            scoreC15 = valueC15 - 20
            this.setData({ 'score.C15': scoreC15.toFixed(2) })
          }
        }
        else if (plantType == 2 && plantTypeNum >= 15 && plantTypeNum < 25 && valueC15 >= 80 && valueC15 < 90) {
          this.setData({ 'result.C15': '合格' })
          scoreC15 = 2 * valueC15 - 100
          this.setData({ 'score.C15': scoreC15.toFixed(2) })
        }
        else if (plantType == 3 && plantTypeNum >= 25 && valueC15 >= 90 && valueC15 <= 100) {
          this.setData({ 'result.C15': '优良' })
          scoreC15 = 2 * valueC15 - 100
          this.setData({ 'score.C15': scoreC15.toFixed(2) })
        } else {
          wx.showModal({
            title: '提示',
            content: '输入数值不在判断范围之内，请确认数值后重新输入。',
          })
        }
      } else {
        this.setData({ 'result.C15': '' })
        this.setData({ 'score.C15': '' })
      }
    }
    else if (id == 1) {
      if (condition) {
        if (plantType < 2 && plantTypeNum < 15 && valueC15 < 80) {
          this.setData({ 'result.C15': '不合格' })
          if (valueC15 <= 60) {
            this.setData({ 'score.C15': 40.00 })
          }
          else if (valueC15 > 60 && valueC15 < 80) {
            scoreC15 = valueC15 - 20
            this.setData({ 'score.C15': scoreC15.toFixed(2) })
          }
        }
        else if (plantType == 2 && plantTypeNum >= 15 && plantTypeNum < 30 && valueC15 >= 80 && valueC15 < 90) {
          this.setData({ 'result.C15': '合格' })
          scoreC15 = 2 * valueC15 - 100
          this.setData({ 'score.C15': scoreC15.toFixed(2) })
        }
        else if (plantType == 3 && plantTypeNum >= 30 && valueC15 >= 90 && valueC15 <= 100) {
          this.setData({ 'result.C15': '优良' })
          scoreC15 = 2 * valueC15 - 100
          this.setData({ 'score.C15': scoreC15.toFixed(2) })
        } else {
          wx.showModal({
            title: '提示',
            content: '输入数值不在判断范围之内，请确认数值后重新输入。',
          })
        }
      } else {
        this.setData({ 'result.C15': '' })
        this.setData({ 'score.C15': '' })
      }
    }
    else if (id == 2) {
      if (condition) {
        if (plantType < 2 && plantTypeNum < 15 && valueC15 < 80) {
          this.setData({ 'result.C15': '不合格' })
          if (valueC15 <= 60) {
            this.setData({ 'score.C15': 40.00 })
          }
          else if (valueC15 > 60 && valueC15 < 80) {
            scoreC15 = valueC15 - 20
            this.setData({ 'score.C15': scoreC15.toFixed(2) })
          }
        }
        else if (plantType == 2 && plantTypeNum >= 15 && plantTypeNum < 35 && valueC15 >= 80 && valueC15 < 90) {
          this.setData({ 'result.C15': '合格' })
          scoreC15 = 2 * valueC15 - 100
          this.setData({ 'score.C15': scoreC15.toFixed(2) })
        }
        else if (plantType == 3 && plantTypeNum >= 35 && valueC15 >= 90 && valueC15 <= 100) {
          this.setData({ 'result.C15': '优良' })
          scoreC15 = 2 * valueC15 - 100
          this.setData({ 'score.C15': scoreC15.toFixed(2) })
        } else {
          wx.showModal({
            title: '提示',
            content: '输入数值不在判断范围之内，请确认数值后重新输入。',
          })
        }
      } else {
        this.setData({ 'result.C15': '' })
        this.setData({ 'score.C15': '' })
      }
    }


  },
  judgeC16: function (e) {
    var valueC16 = e.detail.value
    this.setData({ 'score.C16': valueC16 })
    if (valueC16 < 60) {
      this.setData({ 'result.C16': '不合格' })
    }
    else if (valueC16 >= 60 && valueC16 < 80) {
      this.setData({ 'result.C16': '合格' })
    }
    else if (valueC16 >= 80 && valueC16 <= 100) {
      this.setData({ 'result.C16': '优良' })
    }

  },
  judgeC17: function (e) {
    var valueC17 = e.detail.value
    this.setData({ 'score.C17': valueC17 })
    if (valueC17 < 60) {
      this.setData({ 'result.C17': '不合格' })
    }
    else if (valueC17 >= 60 && valueC17 < 80) {
      this.setData({ 'result.C17': '合格' })
    }
    else if (valueC17 >= 80 && valueC17 <= 100) {
      this.setData({ 'result.C17': '优良' })
    }
  },
  judgeC18: function (e) {
    var valueC18 = e.detail.value
    if (valueC18 == 100) {
      this.setData({ qita: '合格' })
    }
    else if (valueC18 == 60) {
      this.setData({ qita: '不合格' })
    }

  },
  bindPickerChange: function (e) {
    this.setData({ typeId: e.detail.value })
    this.judgeC2()
    this.judgeC3()
    this.judgeC4()
    this.judgeC5()
    this.judgeC6()
    this.judgeC8()
    this.judgeC9()
    this.judgeC11()
    this.judgeC12()
    this.judgeC13()
    this.judgeC14()
    this.judgeC15()
  },
  getRiverName: function (e) {
    this.setData({ riverName: e.detail.value })
  },
  getRiverLength: function (e) {
    this.setData({ riverLength: e.detail.value })
    this.judgeC11()
  },
  getRiverS: function (e) {
    this.setData({ riverS: e.detail.value })
    this.judgeC13()
  },
  getRiverL: function (e) {
    this.setData({ riverL: e.detail.value })
    this.judgeC12()
  },
  getBeforC4: function (e) {
    this.setData({ beforC4: e.detail.value })
    this.judgeC4()
  },
  getBeforC5: function (e) {
    this.setData({ beforC5: e.detail.value })
    this.judgeC5()
  },
  getBeforC6: function (e) {
    this.setData({ beforC6: e.detail.value })
    this.judgeC6()
  },
  getB1: function (e) {
    var B1 = 0
    var C1 = this.data.score.C1
    var C2 = this.data.score.C2
    var C3 = this.data.score.C3
    var C4 = this.data.score.C4
    var C5 = this.data.score.C5
    var C6 = this.data.score.C6
    B1 = 0.41 * C1 + 0.22 * C2 + 0.07 * C3 + 0.12 * C4 + 0.11 * C5 + 0.07 * C6
    this.setData({ 'score.B1': B1.toFixed(2) })
  },
  getB2: function (e) {
    var B2 = 0
    var C7 = this.data.score.C7
    var C8 = this.data.score.C8
    var C9 = this.data.score.C9
    var C10 = this.data.score.C10
    var C11 = this.data.score.C11
    var C12 = this.data.score.C12
    var C13 = this.data.score.C13
    var C14 = this.data.score.C14
    var C15 = this.data.score.C15
    B2 = 0.05 * C7 + 0.15 * C8 + 0.10 * C9 + 0.17 * C10 + 0.06 * C11 + 0.07 * C12 + 0.17 * C13 + 0.15 * C14 + 0.08 * C15
    this.setData({ 'score.B2': B2.toFixed(2) })
  },
  getB3: function (e) {
    var B3 = 0
    var C16 = this.data.score.C16
    var C17 = this.data.score.C17
    B3 = 0.55 * C16 + 0.45 * C17
    this.setData({ 'score.B3': B3.toFixed(2) })
  },
  getTotal: function (e) {
    var B1 = 0
    var C1 = this.data.score.C1
    var C2 = this.data.score.C2
    var C3 = this.data.score.C3
    var C4 = this.data.score.C4
    var C5 = this.data.score.C5
    var C6 = this.data.score.C6
    B1 = 0.41 * C1 + 0.22 * C2 + 0.07 * C3 + 0.12 * C4 + 0.11 * C5 + 0.07 * C6
    var B2 = 0
    var C7 = this.data.score.C7
    var C8 = this.data.score.C8
    var C9 = this.data.score.C9
    var C10 = this.data.score.C10
    var C11 = this.data.score.C11
    var C12 = this.data.score.C12
    var C13 = this.data.score.C13
    var C14 = this.data.score.C14
    var C15 = this.data.score.C15
    B2 = 0.05 * C7 + 0.15 * C8 + 0.10 * C9 + 0.17 * C10 + 0.06 * C11 + 0.07 * C12 + 0.17 * C13 + 0.15 * C14 + 0.08 * C15
    var B3 = 0
    var C16 = this.data.score.C16
    var C17 = this.data.score.C17
    B3 = 0.55 * C16 + 0.45 * C17
    var total = 0
    var qita = this.data.qita
    total = 0.33 * B1 + 0.59 * B2 + 0.08 * B3
    if (qita == '合格') {
      this.setData({ total: total.toFixed(2) })
    }
    else if (qita == '不合格') {
      this.setData({ total: 0 })
    }
  },
  getPlantType: function (e) {
    var plantType = e.detail.value.length
    this.setData({ plantType: plantType })
    this.judgeC15()
  },
  getPlantTypeNum: function (e) {
    this.setData({ plantTypeNum: e.detail.value })
    this.judgeC15()
  },
  getC2: function (e) {
    this.setData({ 'value.C2': e.detail.value })
    this.judgeC2()
  },
  getC3: function (e) {
    this.setData({ 'value.C3': e.detail.value })
    this.judgeC3()
  },
  getC4: function (e) {
    this.setData({ 'value.C4': e.detail.value })
    this.judgeC4()
  },
  getC5: function (e) {
    this.setData({ 'value.C5': e.detail.value })
    this.judgeC5()
  },
  getC6: function (e) {
    this.setData({ 'value.C6': e.detail.value })
    this.judgeC6()
  },
  getC8: function (e) {
    this.setData({ 'value.C8': e.detail.value })
    this.judgeC8()
  },
  getC9: function (e) {
    this.setData({ 'value.C9': e.detail.value })
    this.judgeC9()
  },
  getC11: function (e) {
    this.setData({ 'value.C11': e.detail.value })
    this.judgeC11()
  },
  getC12: function (e) {
    this.setData({ 'value.C12': e.detail.value })
    this.judgeC12()
  },
  getC13: function (e) {
    this.setData({ 'value.C13': e.detail.value })
    this.judgeC13()
  },
  getC14: function (e) {
    this.setData({ 'value.C14': e.detail.value })
    this.judgeC14()
  },
  getC15: function (e) {
    this.setData({ 'value.C15': e.detail.value })
    this.judgeC15()
  },


})