<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cdn.architect.io/logo/horizontal-inverted.png">
    <source media="(prefers-color-scheme: light)" srcset="https://cdn.architect.io/logo/horizontal.png">
    <img width="320" alt="Architect Logo" src="https://cdn.architect.io/logo/horizontal.png">
  </picture>
</p>

<p align="center">
  A dynamic microservices framework for building, connecting, and deploying cloud-native applications.
</p>

---

# Lightweight API

The code found within this sub-repository is a light-weight API to show 
multiple services being deployed at the same time with starter projects that are geared towards UI Frameworks or Libraries. 

The application itself is a node-rest-api that cycles through an array of praises that are shown on the card for the next steps to take while exploring our product. 

We’ve currently set up this API within the `service` block of the `architect.yml` file, but you can also bring it in as a dependency instead - it all comes down to how tightly coupled you want to design your application. In our case, we wanted to show how easy it is to deploy multiple services at once, but we would recommend refactoring an API into a separate component to be used as a dependency to adhere to the [Single-responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle).

Learn about [services](https://docs.architect.io/components/services/), [dependencies](https://docs.architect.io/components/dependencies/), and more on our [docs pages](https://docs.architect.io/).