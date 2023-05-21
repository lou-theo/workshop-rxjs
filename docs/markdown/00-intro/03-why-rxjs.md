# Mais concrètement... pourquoi RxJS ?

<div class="full-center fragment">
  <table class="table-fit-content">
    <thead>
      <tr>
        <th></th>
        <th>Producer</th>
        <th>Consumer</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Pull</strong></td>
        <td><strong>Passive:</strong> produces data when requested.</td>
        <td><strong>Active:</strong> decides when data is requested.</td>
        </tr>
      <tr>
        <td><strong>Push</strong></td>
        <td><strong>Active:</strong> produces data at its own pace.</td>
        <td><strong>Passive:</strong> reacts to received data.</td>
      </tr>
    </tbody>
  </table>
</div>

Notes:

- Souvent Push est asynchrone mais pas forcément

##==##

# Constat de l'existant

<span class="fragment" data-fragment-index="1">
  Observale : produit de la donnée à son rythme, peut produire plusieurs fois.
</span>

<div class="full-center">
  <table class="table-fit-content">
    <thead>
      <tr>
      <th></th>
      <th>Single</th>
      <th>Multiple</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Pull</strong></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Glossary/Function"><code>Function</code></a></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols"><code>Iterator</code></a></td>
      </tr>
      <tr>
        <td><strong>Push</strong></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise</code></a></td>
        <td class="fragment" data-fragment-index="1"><a href="/api/index/class/Observable"><code>Observable</code></a></td>
      </tr>
    </tbody>
  </table>
</div>

Notes:

- Il y a un espace à combler, inexistant dans le JS natif
- Contrairement aux Iterator, on a pas l'ensemble des données dès le départ avec un Observable
