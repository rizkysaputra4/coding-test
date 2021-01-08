## We specify the base image we need for our
## go application
FROM golang:1.15.0
## We create an /app directory within our
## image that will hold our application source
## files
RUN mkdir /refactory_tryout
## We copy everything in the root directory
## into our /app directory
ADD . /refactory_tryout
## We specify that we now wish to execute 
## any further commands inside our /app
## directory
WORKDIR /refactory_tryout
## we run go build to compile the binary
## executable of our Go program
RUN go run main.go
## Our start command which kicks off
## our newly created binary executable
##CMD ["/refactory_tryout/"]