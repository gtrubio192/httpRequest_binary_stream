# httpRequest_binary_stream
Example of how to request and process a Readable stream using Node + Express + Html

Send a simple GET request to your Express backend requesting a file.
Server receives request, requests to receive a ReadableStream object, processes the stream
into a Buffer object, and passes the Buffer back to client side. 
From the client side, once Buffer object is received, it can then create a link for user to download the file.
