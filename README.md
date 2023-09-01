## Containers
We can be able to use containers to run jobs inside the predefined containers instead of running the jobs inside of the default runner.

The containers can be obtained from the github registry using.

1. Serving container - Used to run tests that are seperated from the main production server.
- Check on the costs
- Can run the test server inside of a container and then shut down at the end of the container.
- Run a databse in a container while the jobs are runnig and the closed on finishing.
- Can add services related to a single job in order to run for instance running a mongo db container to run a service.