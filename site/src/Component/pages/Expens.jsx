import React from 'react'

function Expens() {

    const [expens, setExpens] = useState('')
    const hamdelbtn = () => {
        if (expens == '') {
            alert('Empty Field')
        } else {

            axios.post('http://localhost:4001/expens/create', {
                expens: expens,
            })

                .then(function (response) {
                    console.log(response.data)
                    if (response.data.status == true) {
                        // navigate('/')
                    }
               })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }

    }

  return (
  <>
   <div className=' border mx-auto py-3 px-7'>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div className="formgrid grid">
                        <div className="field col-12 ">
                            <label >Expens</label>
                            <input id="firstname6" type="text" value={expens} onChange={(e) => { setExpens(e.target.value) }} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                        </div>
                    </div>
                    <Button label="submit" className='btn-blue' onClick={hamdelbtn} />
                </form>
            </div>
  </>
  )
}

export default Expens