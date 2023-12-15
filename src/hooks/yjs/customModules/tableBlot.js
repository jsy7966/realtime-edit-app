import _ from 'lodash'

const { Quill } = window

const Embed = Quill.import('blots/embed')

export default class AddTableBlot extends Embed {
  static create(value) {
    let node = super.create()

    var tbl = document.createElement('table')
    tbl.style.width = '100%'
    tbl.setAttribute('border', '2')
    var tbdy = document.createElement('tbody')
  
    var title = document.createElement('tr');
    for (const index of _.range(0, value.data[0].length)) {
      var th = document.createElement('th')
      th.setAttribute('width', `${value.ratio[index] * 100}%`)
      th.textContent = `${index + 1}`
      title.appendChild(th)
    }
    tbl.appendChild(title)

    let i = 0
    for (const row of value.data) {
      let j = 0
      var tr = document.createElement('tr')
      for (const v of row) {
        var td = document.createElement('td');
        tr.appendChild(td)
        td.setAttribute('contentEditable', true)
        td.textContent = v
        j += 1
      }
      tr.setAttribute('contentEditable', false)
      tbdy.appendChild(tr)
      i += 1
    }

    tbdy.setAttribute('contentEditable', false)
    tbl.appendChild(tbdy)
    tbl.setAttribute('contentEditable', false)

    node.appendChild(tbl)
    node.setAttribute('contentEditable', false)

    return node
  }

  static value(node) {
    const rows = node.getElementsByTagName('tr')
    const nRows = rows.length
    const data = _.range(1, nRows).map((ri) => {
      const row = rows.item(ri).getElementsByTagName('td')
      const nCells = row.length 
      return _.range(nCells).map((ci) => {
        const cell = row.item(ci)
        return cell.innerText
      })
    })

    const cols = node.getElementsByTagName('th')
    const nCols = cols.length
    const widths = _.range(nCols).map((colIndex) => {
      const col = cols.item(colIndex)
      const colWidth = col.offsetWidth
      return colWidth
    })
    const sum = _.sum(widths)
    const ratio = widths.map(width => width / sum)

    return {
      data,
      ratio
    }
  }
}

AddTableBlot.blotName = 'table-attachment'
AddTableBlot.tagName = 'div'
AddTableBlot.className = 'table-attatchment'