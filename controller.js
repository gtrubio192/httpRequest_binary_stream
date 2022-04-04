import fs from 'fs'

export const getBlogs = async (req, res, next) => {
  const content = req.query.content

  try {
    const fileName = req.params.fileName
    const resultStream = await getReadableStream(fileName)

    /**
     * res.attachment() - sets the HTTP response Content-Disposition header field to “attachment”, 
     * and if a filename is given, then it sets the Content-Type based on the extension name 
     * via res.type(), and sets the Content-Disposition “filename=” parameter
     */
    res.attachment(fileName)

    const buffer = await streamToBuffer(resultStream)
    res.status(200).send(buffer)

  } catch(error) {
    res.status(500).json(error.message || "Some error occurred while retrieving blogs.")
  }

};

  /**
   * 
   * @description - Helper function to parse data from stream and convert it to a Buffer
   * @param {Readable | ReadableStream} stream 
   * @returns Promise
   */
   const streamToBuffer = (stream) => new Promise((resolve, reject) => {
    const chunks = []
    stream.on('data', chunk => chunks.push(chunk))
    stream.once('end', () => resolve(Buffer.concat(chunks)))
    stream.once('error', reject)
  })


  /**
   * @returns ReadableStream object
   */
  const getReadableStream = () => {
    return fs.createReadStream(<YOUR_FILE_NAME>)
  }