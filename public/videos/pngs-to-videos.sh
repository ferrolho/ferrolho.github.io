#!/usr/bin/env bash

# -- H.264

ffmpeg -y -r 60 -i ./task_1_dyn/%07d.png -an -pix_fmt yuv420p -vcodec libx264 -crf 18 -filter:v "setpts=0.5*PTS" ~/git/blog/videos/tasks/task_1_dyn.x264.mp4
ffmpeg -y -r 60 -i ./task_1_kin/%07d.png -an -pix_fmt yuv420p -vcodec libx264 -crf 18 -filter:v "setpts=0.5*PTS" ~/git/blog/videos/tasks/task_1_kin.x264.mp4

ffmpeg -y -r 60 -i ./task_2_dyn/%07d.png -an -pix_fmt yuv420p -vcodec libx264 -crf 18 -filter:v "setpts=0.5*PTS" ~/git/blog/videos/tasks/task_2_dyn.x264.mp4
ffmpeg -y -r 60 -i ./task_2_kin/%07d.png -an -pix_fmt yuv420p -vcodec libx264 -crf 18 -filter:v "setpts=0.5*PTS" ~/git/blog/videos/tasks/task_2_kin.x264.mp4

ffmpeg -y -r 60 -i ./task_3_dyn/%07d.png -an -pix_fmt yuv420p -vcodec libx264 -crf 18 ~/git/blog/videos/tasks/task_3_dyn.x264.mp4
ffmpeg -y -r 60 -i ./task_3_kin/%07d.png -an -pix_fmt yuv420p -vcodec libx264 -crf 18 ~/git/blog/videos/tasks/task_3_kin.x264.mp4


# -- VP9

# ffmpeg -y -r 60 -i ./task_1_dyn/%07d.png -an -c vp9 -b:v 0 -crf 41 -filter:v "setpts=0.5*PTS" ~/git/blog/videos/tasks/task_1_dyn.vp9.webm
# ffmpeg -y -r 60 -i ./task_1_kin/%07d.png -an -c vp9 -b:v 0 -crf 41 -filter:v "setpts=0.5*PTS" ~/git/blog/videos/tasks/task_1_kin.vp9.webm

# ffmpeg -y -r 60 -i ./task_2_dyn/%07d.png -an -c vp9 -b:v 0 -crf 41 -filter:v "setpts=0.5*PTS" ~/git/blog/videos/tasks/task_2_dyn.vp9.webm
# ffmpeg -y -r 60 -i ./task_2_kin/%07d.png -an -c vp9 -b:v 0 -crf 41 -filter:v "setpts=0.5*PTS" ~/git/blog/videos/tasks/task_2_kin.vp9.webm

# ffmpeg -y -r 60 -i ./task_3_dyn/%07d.png -an -c vp9 -b:v 0 -crf 41 ~/git/blog/videos/tasks/task_3_dyn.vp9.webm
# ffmpeg -y -r 60 -i ./task_3_kin/%07d.png -an -c vp9 -b:v 0 -crf 41 ~/git/blog/videos/tasks/task_3_kin.vp9.webm

# -- AV1

TASKS=(
# "task_1_dyn"
# "task_1_kin"
# "task_2_dyn"
# "task_2_kin"
)

for task in "${TASKS[@]}"; do
ffmpeg -y -r 60 -i ./$task/%07d.png -an -c:v libaom-av1 \
                                    -strict experimental \
                                    -cpu-used 1 \
                                    -tile-columns 4 \
                                    -row-mt 1 \
                                    -threads 10 \
                                    -pass 1 \
                                    -f mp4 \
                                    /dev/null && \
ffmpeg -y -r 60 -i ./$task/%07d.png -an -pix_fmt yuv420p \
                                    -movflags faststart \
                                    -c:v libaom-av1 \
                                    -strict experimental \
                                    -cpu-used 1 \
                                    -tile-columns 4 \
                                    -row-mt 1 \
                                    -threads 10 \
                                    -pass 2 \
                                    -filter:v "setpts=0.5*PTS" \
                                    ~/git/blog/videos/tasks/$task.av1.mp4
done

TASKS=(
# "task_3_dyn"
# "task_3_kin"
)

for task in "${TASKS[@]}"; do
ffmpeg -y -r 60 -i ./$task/%07d.png -an -c:v libaom-av1 \
                                    -strict experimental \
                                    -cpu-used 1 \
                                    -tile-columns 4 \
                                    -row-mt 1 \
                                    -threads 10 \
                                    -pass 1 \
                                    -f mp4 \
                                    /dev/null && \
ffmpeg -y -r 60 -i ./$task/%07d.png -an -pix_fmt yuv420p \
                                    -movflags faststart \
                                    -c:v libaom-av1 \
                                    -strict experimental \
                                    -cpu-used 1 \
                                    -tile-columns 4 \
                                    -row-mt 1 \
                                    -threads 10 \
                                    -pass 2 \
                                    ~/git/blog/videos/tasks/$task.av1.mp4
done
