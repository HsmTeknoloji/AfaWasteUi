<template>
    <b-card no-body>
        <b-card-header>
            <div>
                <b-card-title class="mb-1">
                En Az 7 Gün Toplanmayan Konteynerlar
                </b-card-title>
            </div>
        </b-card-header>

        <!-- chart -->
        <b-card-body>
            <b-table
            :items="sortedItems"
            :current-page="currentPage"
            :per-page="perPage"
            responsive
            :fields="fields"
            primary-key="id"
            show-empty
            empty-text="No matching records found"
            class="position-relative"
            >
                <!-- Column: Container No -->
                <template #cell(ContainerNo)="data">
                    {{ data.value }}
                    <!--
                    <router-link :to="{name: 'containersDetails', params: {query: data.value}}">
                        {{ data.value }}
                    </router-link>
                    -->
                </template>

                <!-- Column: Title -->
                <template #cell(TagId)="data">
                    {{ data.value }}
                </template>

                <!-- Column: Container No -->
                <template #cell(ReadTime)="data">
                    <b-badge pill variant="light-danger" :title="data.value">
                        {{ $moment(data.value).fromNow() }}
                    </b-badge>
                </template>
            </b-table>
            <b-pagination
                v-model="currentPage"
                :total-rows="totalItems"
                :per-page="perPage"
                first-number
                last-number
                class="mb-0 mt-1 mt-sm-0"
                prev-class="prev-item"
                next-class="next-item"
            >
                <template #prev-text>
                <feather-icon
                    icon="ChevronLeftIcon"
                    size="18"
                />
                </template>
                <template #next-text>
                <feather-icon
                    icon="ChevronRightIcon"
                    size="18"
                />
                </template>
            </b-pagination>
        </b-card-body>
    </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BTable, BBadge, BPagination} from 'bootstrap-vue'
import rfTagsData from '@/data/rfTags.data';

export default {
    components: {
        BCard,
        BCardHeader,
        BCardTitle,
        BCardText,
        BCardBody,
        BTable,
        BBadge,
        BPagination
    },

    data(){
        return {
            currentPage: 1,
            items: [],
            perPage: 6,
            perPageOptions: [5, 10, 15, 20, 25, 50],
            searchQuery: '',
            fields: [
                {key: 'ContainerNo', label: 'Konteyner NO'},
                {key: 'TagId', label: 'ID'},
                {key: 'ReadTime', label: 'Son Okunma Saati'}
            ],
            sortBy: 'ReadTime',
            isSortDirDesc: true,
            totalItems: 0
        }
    },

    computed: {
        sortedItems: function(){
            return this.items.sort((a,b) => {
                return new Date(b.ReadTime) - new Date(a.ReadTime);
            });
        }
    },

    created(){
        this.getOlderThanDays(7);
    },

    methods: {
        getOlderThanDays(days){
            const now = this.$moment();
            let tags = this.$store.getters['panel/getTags'];
            this.items = Object.values(tags).filter(tag => {
                return now.diff(tag.ReadTime, 'days') >= days
            })
            this.totalItems = this.items.length;
        }
    }
}
</script>

<style>

</style>