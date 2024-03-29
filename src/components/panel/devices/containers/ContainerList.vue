<template>
    <b-card no-body>
        <div class="m-2">
            <!-- Table Top -->
            <b-row>
                <!-- Per Page -->
                <!--
                <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                    <label>Göster</label>
                    <v-select
                        v-model="perPage"
                        :options="perPageOptions"
                        :clearable="false"
                        class="per-page-selector d-inline-block ml-50 mr-1"
                    />
                </b-col>
                -->

                <!-- Search -->
                <b-col cols="12" md="12">
                    <div class="d-flex align-items-center justify-content-end">
                        <b-form-input
                        v-model="searchQuery"
                        class="d-inline-block mr-1"
                        placeholder="Aramak için en az 3 karakter girin..."
                        />
                    </div>
                </b-col>
            </b-row>

        </div>

        <b-table
        :items="filteredItems"
        :current-page="currentPage"
        :per-page="perPage"
        responsive
        selectable
        select-mode="single"
        :fields="fields"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
        @row-selected="rowClicked"
        class="position-relative"
        >
            <!-- Column: Container No -->
            <template #cell(ContainerNo)="data">
                <span v-if="searchQuery.length >= 3" v-html="$options.filters.highlight(data.value, searchQuery)"></span>
                <span v-else>{{ data.value }}</span>
            </template>

            <!-- Column: Title -->
            <template #cell(TagId)="data">
                {{ data.value }}
            </template>

            <!-- Column: Last read -->
            <template #cell(ReadTime)="data">
                <b-badge pill variant="light-primary" :title="data.value">
                    {{ $moment(data.value).format('HH:mm:ss') }}
                </b-badge>
            </template>
        </b-table>
        <div class="mx-2 mb-2">
            <b-row>

                <b-col
                cols="12"
                sm="6"
                class="d-flex align-items-center justify-content-center justify-content-sm-start"
                >
                <span class="text-muted"></span>
                </b-col>
                <!-- Pagination -->
                <b-col
                cols="12"
                sm="6"
                class="d-flex align-items-center justify-content-center justify-content-sm-end"
                >

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

                </b-col>

            </b-row>
        </div>
    </b-card>
</template>

<script>
import { BCard, BRow, BCol, BFormInput, BTable, BBadge, BPagination } from 'bootstrap-vue'
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
    props: ['filteredStatus', 'devices'],

    components: {
        BCard,
        BRow,
        BCol,
        BFormInput,
        BTable,
        BBadge,
        BPagination,
        vSelect,
    },

    data(){
        return {
            currentPage: 1,
            items: [],
            perPage: 10,
            perPageOptions: [5, 10, 15, 20, 25, 50],
            searchQuery: '',
            fields: [
                {key: 'ContainerNo', label: 'Konteyner NO'},
                {key: 'TagId', label: 'Title'},
                {key: 'ReadTime', label: 'Son Okunma Saat'}
            ],
            sortBy: 'ReadTime',
            isSortDirDesc: true,
            totalItems: 0
        }
    },

    computed: {
        filteredItems: function(){
            if (this.searchQuery.length >= 3){
                let filtered = this.items.filter(item => item.ContainerNo.includes(this.searchQuery))
                this.totalItems = filtered.length;
                this.currentPage = 1;
                return filtered;
            }
            return this.items;
        }
    },

    watch: {
        'devices': function(newVal, oldVal){
            this.items = newVal;
            this.totalItems = newVal.length;
        }
    },

    created(){
        this.items = this.devices;
        this.totalItems = this.devices.length;
    },

    methods: {
        rowClicked(row){
            if (row.length){
                this.$emit('showDetails', row[0].TagId)
            }
            else {
                this.$emit('showDetails', null)
            }
        },
    }
}
</script>

<style scoped>
table.position-relative {
    max-height: 300px;
    overflow: auto;
}
</style>