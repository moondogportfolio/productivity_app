<template>
  <q-uploader
    url="http://localhost:4444/upload"
    label="Batch upload"
    multiple
    batch
    class="col shadow-0"
    style="height: 500px"
  >
    <template v-slot:header="scope">
      <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
        <q-btn
          v-if="scope.queuedFiles.length > 0"
          icon="clear_all"
          @click="scope.removeQueuedFiles"
          round
          dense
          flat
        >
          <q-tooltip>Clear All</q-tooltip>
        </q-btn>
        <q-btn
          v-if="scope.uploadedFiles.length > 0"
          icon="done_all"
          @click="scope.removeUploadedFiles"
          round
          dense
          flat
        >
          <q-tooltip>Remove Uploaded Files</q-tooltip>
        </q-btn>
        <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
        <div class="col">
          <div class="q-uploader__title">Upload your files</div>
          <!-- <div class="q-uploader__subtitle">
            {{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}
          </div> -->
        </div>
        <q-btn
          v-if="scope.canAddFiles"
          type="a"
          icon="add_box"
          @click="scope.pickFiles"
          round
          dense
          flat
        >
          <q-uploader-add-trigger />
          <q-tooltip>Pick Files</q-tooltip>
        </q-btn>
        <q-btn
          v-if="scope.canUpload"
          icon="cloud_upload"
          @click="scope.upload"
          round
          dense
          flat
        >
          <q-tooltip>Upload Files</q-tooltip>
        </q-btn>

        <q-btn
          v-if="scope.isUploading"
          icon="clear"
          @click="scope.abort"
          round
          dense
          flat
        >
          <q-tooltip>Abort Upload</q-tooltip>
        </q-btn>
      </div>
    </template>
    <template v-slot:list="scope">
      <div
        class="bg-grey-3 row upload-box q-pa-sm items-center scroll full-height"
      >
        <div
          v-for="file in scope.files"
          :key="file.__key"
          class="q-ma-xs upload-file bg-grey-1 relative-position column items-center justify-center q-pt-sm"
        >
          <q-btn
            icon="close"
            class="absolute-top-right"
            style="z-index: 1000; transform: translateX(25%) translateY(-25%)"
            color="white"
            text-color="black"
            round
            size="12px"
          ></q-btn>
          <q-img :src="file.__img.src" v-if="file.__img" width="80%" />
          <q-space />
          <div class="ellipsis">asd asda as dasjukl asj dklasj</div>
        </div>
        <!-- </q-item-section> -->
        <!-- <q-item-label class="full-width ellipsis">
            {{ file.name }}
          </q-item-label> -->
      </div>
      <!-- <q-list separator>
        <q-item v-for="file in scope.files" :key="file.__key">
          <q-item-section>
            <q-item-label class="full-width ellipsis">
              {{ file.name }}
            </q-item-label>

            <q-item-label caption> Status: {{ file.__status }} </q-item-label>

            <q-item-label caption>
              {{ file.__sizeLabel }} / {{ file.__progressLabel }}
            </q-item-label>
          </q-item-section>

          <q-item-section v-if="file.__img" thumbnail class="gt-xs">
            <img :src="file.__img.src" />
          </q-item-section>

          <q-item-section top side>
            <q-btn
              class="gt-xs"
              size="12px"
              flat
              dense
              round
              icon="delete"
              @click="scope.removeFile(file)"
            />
          </q-item-section>
        </q-item>
      </q-list> -->
    </template>
  </q-uploader>
</template>

<script>
export default {};
</script>

<style>
.upload-box {
  border: 1px dashed lightgray;
  border-radius: 4px;
}

.upload-file {
  border-radius: 4px;
  height: 200px;
  width: 200px;
}
</style>
