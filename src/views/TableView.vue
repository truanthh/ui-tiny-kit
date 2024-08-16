<script setup>
import { ref, computed } from "vue";

import BaseTable from "@/components/Table/BaseTable.vue";
import TableColumn from "@/components/Table/TableColumn.vue";
import TableRow from "@/components/Table/TableRow.vue";

const headers = ["ID", "Name", "Song", "Year", "Cover"];
const columnsTemplate = "50px 1fr 1fr 150px 140px";

const sortBy = ref({ field: "id", order: "asc" });

const artists = ref([
  {
    id: 1,
    name: "Leon Vynehall",
    song: "Kibiru's",
    year: "2016",
    img: "https://i.scdn.co/image/ab67616d00001e02787365bda8818819e7200417",
  },
  {
    id: 3,
    name: "The Tuss(Aphex Twin)",
    song: "Rushup i Bank 12",
    year: "2007",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIj-lCCAA3MYzAWLMF0xuo08RL08vDlv3dQ&s",
  },
  {
    id: 4,
    name: "Actress",
    song: "Futur Spher Techno Version",
    year: "2022",
    img: "https://i1.sndcdn.com/artworks-P5gRsQAcZSWK-0-t500x500.png",
  },
  {
    id: 5,
    name: "Tame Impala",
    song: "The Less I Know The Better",
    year: "2015",
    img: "https://i1.sndcdn.com/artworks-aetjlaNRVDz8ZRWH-s0zTwA-t1080x1080.jpg",
  },
  {
    id: 2,
    name: "Burial",
    song: "Archangel",
    year: "2006",
    img: "https://images.genius.com/e57887dab8ccea483b27342c9fcd387e.1000x996x1.jpg",
  },
]);

const artistsSorted = computed(() => {
  return artists.value.sort((a, b) => {
    let field = sortBy.value.field;
    let modifier = 1;
    if (sortBy.value.order === "desc") modifier = -1;
    if (a[field] < b[field]) return -1 * modifier;
    if (a[field] > b[field]) return 1 * modifier;
    return 0;
  });
});

function setSort(value) {
  sortBy.value.field = value.toLowerCase();
  sortBy.value.order = sortBy.value.order === "asc" ? "desc" : "asc";
}
</script>

<template>
  <h1 class="heading-1">Table</h1>

  <base-table :headers :columnsTemplate @headerClick="setSort">
    <table-row
      v-for="artist in artistsSorted"
      :key="artist.id"
      :columnsTemplate
    >
      <table-column>
        {{ artist.id }}
      </table-column>
      <table-column>
        {{ artist.name }}
      </table-column>
      <table-column>
        {{ artist.song }}
      </table-column>
      <table-column>
        {{ artist.year }}
      </table-column>
      <table-column image :srcImage="artist.img" />
    </table-row>
  </base-table>
</template>

<style scoped></style>
