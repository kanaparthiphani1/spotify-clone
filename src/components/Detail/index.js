import React from 'react'
import "./style.css"

const Detail = () => {
  return (
    <div className='outer-detail'>
        <div className='upper-detail'>
            <div className='left-upper-detail'>
                <button className='backBtn'><i className="fa-solid fa-arrow-left-long icon"></i>Back</button>
                <img className='albumImg' src="https://i.scdn.co/image/ab67616d0000b27339fe640ab73db368eeac0f90" alt='album' />
            </div>
            <div className='right-upper-detail'>
                <h4 className='type'>Type</h4>
                <h1 className='albumName'>Album</h1>
                <h3 className='artist'>Artist</h3>
            </div>

        </div>
        <div className='lower-detail'>
            <table className='albums-table'>
                <thead>
                    <tr>
                        <th className='trackNum'>#</th>
                        <th>Track</th>
                        <th>Duration</th>
                        <th>Artist[s]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='rowData'>
                        <td className='trackNum'>1</td>
                        <td>Track 1</td>
                        <td>3 min</td>
                        <td>Artist 1</td>
                    </tr>
                    <tr className='rowData'>
                        <td className='trackNum'>2</td>
                        <td>Track 2</td>
                        <td>3 min</td>
                        <td>Artist 2</td>
                    </tr>
                    <tr className='rowData'>
                        <td className='trackNum'>2</td>
                        <td>Track 2</td>
                        <td>3 min</td>
                        <td>Artist 2</td>
                    </tr>
                    <tr className='rowData'>
                        <td className='trackNum'>2</td>
                        <td>Track 2</td>
                        <td>3 min</td>
                        <td>Artist 2</td>
                    </tr>
                    <tr className='rowData'>
                        <td className='trackNum'>2</td>
                        <td>Track 2</td>
                        <td>3 min</td>
                        <td>Artist 2</td>
                    </tr>
                    </tbody>
                </table>
        </div>
    </div>
  )
}

export default Detail