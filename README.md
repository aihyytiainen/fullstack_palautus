```mermaid

sequenceDiagram
    participant Antti
    participant Kurssimatsku
    participant Palautusrepo

    Kurssimatsku->>Antti: Lue matsku
    activate Antti
    Note left of Antti: Hakkaa päätä seinään
    Antti->>Palautusrepo: Pushaa tehtävät
    deactivate Antti

```
