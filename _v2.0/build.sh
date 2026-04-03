
# Building docker image

if [ -z "${DP_IMAGE_TAG}" ]; then
  DP_IMAGE_TAG=0.1
  echo "DP_IMAGE_TAG not provided, set to ${DP_IMAGE_TAG}"
fi

docker build . -t hanaloop/next-dev-portal:${DP_IMAGE_TAG}