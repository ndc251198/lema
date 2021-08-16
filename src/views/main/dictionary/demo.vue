<template>
    <div class="col">
                        <div class="row q-pa-md">
                            <div class="col-5">
                                <label class="text-weight-bolder">Nguon booking</label>
                                <q-select filled v-model="model" :options="options" label="Chon nguon booking" />
                            </div>
                            <div class="col-2"></div>
                            <div class="col-5"> 
                                <label class="text-weight-bolder">Chuyen vien phu trach</label>
                                <q-select filled v-model="model" :options="options" label="Chon chuyen vien phu trach" />
                            </div>
                        </div> 
                    </div>
</template>