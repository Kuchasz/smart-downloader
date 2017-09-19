import * as React from 'react'

export class NewFiles extends React.Component<any, any> {
  render () {
    return   <div className="newFiles">
      <form className="addition">
        <span className="close">X</span>
        <h3>
          List of URL's
        </h3>
        <textarea
          name="files"
          placeholder="np. http://rapidu.net/a/234234/adf3sdf6rvbt.html" />
        <div>
          <input
            type="submit"
            name="addFiles"
            defaultValue="Check" />
          <input
            type="submit"
            name="clearTextarea"
            defaultValue="Clear" />
        </div>
      </form>
      <div className="fileList">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Filename</th>
              <th>Filesize</th>
              <th>Status</th>
              <th>Hosting</th>
              <th>Account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Capitan-America-Civil-War.mkv</td>
              <td>
                3.25 GB
              </td>
              <td>
                <span className="available">Available</span>
              </td>
              <td>Rapidu</td>
              <td>
                <select>
                  <option>Chickeno</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Capitan-America-Civil-War.mkv</td>
              <td>
                3.25 GB
              </td>
              <td>
                <span className="inavailable">Inavailable</span>
              </td>
              <td>Rapidu</td>
              <td>
                <select>
                  <option>Chickeno</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Capitan-America-Civil-War.mkv</td>
              <td>
                3.25 GB
              </td>
              <td>
                <span className="unknown">Unknown</span>
              </td>
              <td>Rapidu</td>
              <td>
                <select>
                  <option>Chickeno</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="transferSum">
          Sum of transfer: 3.25 GB
        </p>
        <div>
          <button>
            Delete selected
          </button>
          <button>Add</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  }
}
