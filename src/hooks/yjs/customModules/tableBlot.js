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

    for (const row of value.data) {
      var tr = document.createElement('tr');
      for (const v of row) {
        var td = document.createElement('td');
        tr.appendChild(td)
        td.setAttribute('contentEditable', true)
        td.setAttribute('role', 'textarea')
        td.textContent = v
      }
      tr.setAttribute('contentEditable', false)
      tbdy.appendChild(tr)
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
    const data = _.range(nRows).map((ri) => {
      const row = rows.item(ri).getElementsByTagName('td')
      const nCells = row.length 
      return _.range(nCells).map((ci) => {
        const cell = row.item(ci)
        return cell.innerText
      })
    })
    return {
      data
    }
  }
}

AddTableBlot.blotName = 'table-attachment'
AddTableBlot.tagName = 'div'
AddTableBlot.className = 'table-attatchment'