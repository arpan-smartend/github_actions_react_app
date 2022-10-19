#!/bin/sh -l

echo "::debug ::Debug message"
echo "::warning ::warning message"
echo "::error ::error message"

echo "::add-mask::$1"

echo "Hello $1"
time=$(date)
echo "::set-output name=time::$time"

echo "::group:: Some expandable logs"
echo "some logs"
echo "some logs"
echo "some logs"
echo "some logs"
echo "some logs"
echo "::endgroup::"

echo "::set-env name=HELLO::"