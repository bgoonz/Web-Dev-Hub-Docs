# Documentation

Note

Click [here](https://pytorch.org/tutorials/beginner/basics/intro.html#sphx-glr-download-beginner-basics-intro-py) to download the full example code

**Learn the Basics** || [Quickstart](https://pytorch.org/tutorials/beginner/basics/quickstart\_tutorial.html) || [Tensors](https://pytorch.org/tutorials/beginner/basics/tensorqs\_tutorial.html) || [Datasets & DataLoaders](https://pytorch.org/tutorials/beginner/basics/data\_tutorial.html) || [Transforms](https://pytorch.org/tutorials/beginner/basics/transforms\_tutorial.html) || [Build Model](https://pytorch.org/tutorials/beginner/basics/buildmodel\_tutorial.html) || [Autograd](https://pytorch.org/tutorials/beginner/basics/autogradqs\_tutorial.html) || [Optimization](https://pytorch.org/tutorials/beginner/basics/optimization\_tutorial.html) || [Save & Load Model](https://pytorch.org/tutorials/beginner/basics/saveloadrun\_tutorial.html)

Authors: [Suraj Subramanian](https://github.com/suraj813), [Seth Juarez](https://github.com/sethjuarez/), [Cassie Breviu](https://github.com/cassieview/), [Dmitry Soshnikov](https://soshnikov.com), [Ari Bornstein](https://github.com/aribornstein/)

Most machine learning workflows involve working with data, creating models, optimizing model parameters, and saving the trained models. This tutorial introduces you to a complete ML workflow implemented in PyTorch, with links to learn more about each of these concepts.

We’ll use the FashionMNIST dataset to train a neural network that predicts if an input image belongs to one of the following classes: T-shirt/top, Trouser, Pullover, Dress, Coat, Sandal, Shirt, Sneaker, Bag, or Ankle boot.

This tutorial assumes a basic familiarity with Python and Deep Learning concepts.



### Imports

#### General

import torch # root package from torch.utils.data import Dataset, Dataloader # dataset representation and loading

#### Neural Network API

import torch.autograd as autograd # computation graph from torch import Tensor # tensor node in the computation graph import torch.nn as nn # neural networks import torch.nn.functional as F # layers, activations and more import torch.optim as optim # optimizers e.g. gradient descent, ADAM, etc. from torch.jit import script, trace # hybrid frontend decorator and tracing jit

See [autograd](https://pytorch.org/docs/stable/autograd.html), [nn](https://pytorch.org/docs/stable/nn.html), [functional](https://pytorch.org/docs/stable/nn.html#torch-nn-functional) and [optim](https://pytorch.org/docs/stable/optim.html)

#### Torchscript and JIT

torch.jit.trace() # takes your module or function and an example # data input, and traces the computational steps # that the data encounters as it progresses through the model

@script # decorator used to indicate data-dependent # control flow within the code being traced

See [Torchscript](https://pytorch.org/docs/stable/jit.html)

#### ONNX

torch.onnx.export(model, dummy data, xxxx.proto) # exports an ONNX formatted # model using a trained model, dummy # data and the desired file name

model = onnx.load("alexnet.proto") # load an ONNX model onnx.checker.check\_model(model) # check that the model # IR is well formed

onnx.helper.printable\_graph(model.graph) # print a human readable # representation of the graph

See [onnx](https://pytorch.org/docs/stable/onnx.html)

#### Vision

from torchvision import datasets, models, transforms # vision datasets, # architectures & # transforms

import torchvision.transforms as transforms # composable transforms

See [torchvision](https://pytorch.org/vision/stable/index.html)

#### Distributed Training

import torch.distributed as dist # distributed communication from torch.multiprocessing import Process # memory sharing processes

See [distributed](https://pytorch.org/docs/stable/distributed.html) and [multiprocessing](https://pytorch.org/docs/stable/multiprocessing.html)

### Tensors

#### Creation

x = torch.randn(\*size) # tensor with independent N(0,1) entries x = torch.\[ones|zeros]\(\*size) # tensor with all 1's \[or 0's] x = torch.tensor(L) # create tensor from \[nested] list or ndarray L y = x.clone() # clone of x with torch.no\_grad(): # code wrap that stops autograd from tracking tensor history requires\_grad=True # arg, when set to True, tracks computation # history for future derivative calculations

See [tensor](https://pytorch.org/docs/stable/tensors.html)

#### Dimensionality

x.size() # return tuple-like object of dimensions x = torch.cat(tensor\_seq, dim=0) # concatenates tensors along dim y = x.view(a,b,...) # reshapes x into size (a,b,...) y = x.view(-1,a) # reshapes x into size (b,a) for some b y = x.transpose(a,b) # swaps dimensions a and b y = x.permute(\*dims) # permutes dimensions y = x.unsqueeze(dim) # tensor with added axis y = x.unsqueeze(dim=2) # (a,b,c) tensor -> (a,b,1,c) tensor y = x.squeeze() # removes all dimensions of size 1 (a,1,b,1) -> (a,b) y = x.squeeze(dim=1) # removes specified dimension of size 1 (a,1,b,1) -> (a,b,1)

See [tensor](https://pytorch.org/docs/stable/tensors.html)

#### Algebra

ret = A.mm(B) # matrix multiplication ret = A.mv(x) # matrix-vector multiplication x = x.t() # matrix transpose

See [math operations](https://pytorch.org/docs/stable/torch.html?highlight=mm#math-operations)

#### GPU Usage

torch.cuda.is\_available # check for cuda x = x.cuda() # move x's data from # CPU to GPU and return new object

x = x.cpu() # move x's data from GPU to CPU # and return new object

if not args.disable\_cuda and torch.cuda.is\_available(): # device agnostic code args.device = torch.device('cuda') # and modularity else: # args.device = torch.device('cpu') #

net.to(device) # recursively convert their # parameters and buffers to # device specific tensors

x = x.to(device) # copy your tensors to a device # (gpu, cpu)

See [cuda](https://pytorch.org/docs/stable/cuda.html)

### Deep Learning

nn.Linear(m,n) # fully connected layer from # m to n units

nn.ConvXd(m,n,s) # X dimensional conv layer from # m to n channels where X⍷{1,2,3} # and the kernel size is s

nn.MaxPoolXd(s) # X dimension pooling layer # (notation as above)

nn.BatchNormXd # batch norm layer nn.RNN/LSTM/GRU # recurrent layers nn.Dropout(p=0.5, inplace=False) # dropout layer for any dimensional input nn.Dropout2d(p=0.5, inplace=False) # 2-dimensional channel-wise dropout nn.Embedding(num\_embeddings, embedding\_dim) # (tensor-wise) mapping from # indices to embedding vectors

See [nn](https://pytorch.org/docs/stable/nn.html)

#### Loss Functions

nn.X # where X is L1Loss, MSELoss, CrossEntropyLoss # CTCLoss, NLLLoss, PoissonNLLLoss, # KLDivLoss, BCELoss, BCEWithLogitsLoss, # MarginRankingLoss, HingeEmbeddingLoss, # MultiLabelMarginLoss, SmoothL1Loss, # SoftMarginLoss, MultiLabelSoftMarginLoss, # CosineEmbeddingLoss, MultiMarginLoss, # or TripletMarginLoss

See [loss functions](https://pytorch.org/docs/stable/nn.html#loss-functions)

#### Activation Functions

nn.X # where X is ReLU, ReLU6, ELU, SELU, PReLU, LeakyReLU, # RReLu, CELU, GELU, Threshold, Hardshrink, HardTanh, # Sigmoid, LogSigmoid, Softplus, SoftShrink, # Softsign, Tanh, TanhShrink, Softmin, Softmax, # Softmax2d, LogSoftmax or AdaptiveSoftmaxWithLoss

See [activation functions](https://pytorch.org/docs/stable/nn.html#non-linear-activations-weighted-sum-nonlinearity)

#### Optimizers

opt = optim.x(model.parameters(), ...) # create optimizer opt.step() # update weights optim.X # where X is SGD, Adadelta, Adagrad, Adam, # AdamW, SparseAdam, Adamax, ASGD, # LBFGS, RMSprop or Rprop

See [optimizers](https://pytorch.org/docs/stable/optim.html)

#### Learning rate scheduling

scheduler = optim.X(optimizer,...) # create lr scheduler scheduler.step() # update lr after optimizer updates weights optim.lr\_scheduler.X # where X is LambdaLR, MultiplicativeLR, # StepLR, MultiStepLR, ExponentialLR, # CosineAnnealingLR, ReduceLROnPlateau, CyclicLR, # OneCycleLR, CosineAnnealingWarmRestarts,

See [learning rate scheduler](https://pytorch.org/docs/stable/optim.html#how-to-adjust-learning-rate)

### Data Utilities

#### Datasets

Dataset # abstract class representing dataset TensorDataset # labelled dataset in the form of tensors Concat Dataset # concatenation of Datasets

See [datasets](https://pytorch.org/docs/stable/data.html?highlight=dataset#torch.utils.data.Dataset)

#### Dataloaders and DataSamplers

DataLoader(dataset, batch\_size=1, ...) # loads data batches agnostic # of structure of individual data points

sampler.Sampler(dataset,...) # abstract class dealing with # ways to sample from dataset

sampler.XSampler where ... # Sequential, Random, SubsetRandom, # WeightedRandom, Batch, Distributed

See [dataloader](https://pytorch.org/docs/stable/data.html?highlight=dataloader#torch.utils.data.DataLoader)

### Running the Tutorial Code

You can run this tutorial in a couple of ways:

* **In the cloud**: This is the easiest way to get started! Each section has a “Run in Microsoft Learn” link at the top, which opens an integrated notebook in Microsoft Learn with the code in a fully-hosted environment.
* **Locally**: This option requires you to setup PyTorch and TorchVision first on your local machine ([installation instructions](https://pytorch.org/get-started/locally/)). Download the notebook or copy the code into your favorite IDE.

### How to Use this Guide

If you’re familiar with other deep learning frameworks, check out the [0. Quickstart](https://pytorch.org/tutorials/beginner/basics/quickstart\_tutorial.html) first to quickly familiarize yourself with PyTorch’s API.

If you’re new to deep learning frameworks, head right into the first section of our step-by-step guide: [1. Tensors](https://pytorch.org/tutorials/beginner/basics/tensor\_tutorial.html).

**Total running time of the script:** ( 0 minutes 0.000 seconds)

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.readthedocs.io)

## PYTORCH DOCUMENTATION

PyTorch is an optimized tensor library for deep learning using GPUs and CPUs.

Features described in this documentation are classified by release status:

> _Stable:_ These features will be maintained long-term and there should generally be no major performance limitations or gaps in documentation. We also expect to maintain backwards compatibility (although breaking changes can happen and notice will be given one release ahead of time).
>
> _Beta:_ These features are tagged as Beta because the API may change based on user feedback, because the performance needs to improve, or because coverage across operators is not yet complete. For Beta features, we are committing to seeing the feature through to the Stable classification. We are not, however, committing to backwards compatibility.
>
> _Prototype:_ These features are typically not available as part of binary distributions like PyPI or Conda, except sometimes behind run-time flags, and are at an early stage for feedback and testing.

Notes

* [Automatic Mixed Precision examples](https://pytorch.org/docs/stable/notes/amp\_examples.html)
* [Autograd mechanics](https://pytorch.org/docs/stable/notes/autograd.html)
* [Broadcasting semantics](https://pytorch.org/docs/stable/notes/broadcasting.html)
* [CPU threading and TorchScript inference](https://pytorch.org/docs/stable/notes/cpu\_threading\_torchscript\_inference.html)
* [CUDA semantics](https://pytorch.org/docs/stable/notes/cuda.html)
* [Distributed Data Parallel](https://pytorch.org/docs/stable/notes/ddp.html)
* [Extending PyTorch](https://pytorch.org/docs/stable/notes/extending.html)
* [Frequently Asked Questions](https://pytorch.org/docs/stable/notes/faq.html)
* [Gradcheck mechanics](https://pytorch.org/docs/stable/notes/gradcheck.html)
* [HIP (ROCm) semantics](https://pytorch.org/docs/stable/notes/hip.html)
* [Features for large-scale deployments](https://pytorch.org/docs/stable/notes/large\_scale\_deployments.html)
* [Modules](https://pytorch.org/docs/stable/notes/modules.html)
* [Multiprocessing best practices](https://pytorch.org/docs/stable/notes/multiprocessing.html)
* [Reproducibility](https://pytorch.org/docs/stable/notes/randomness.html)
* [Serialization semantics](https://pytorch.org/docs/stable/notes/serialization.html)
* [Windows FAQ](https://pytorch.org/docs/stable/notes/windows.html)

Language Bindings

* [C++](https://pytorch.org/docs/stable/cpp\_index.html)
* [Javadoc](https://pytorch.org/javadoc/)

Python API

* [torch](https://pytorch.org/docs/stable/torch.html)
* [torch.nn](https://pytorch.org/docs/stable/nn.html)
* [torch.nn.functional](https://pytorch.org/docs/stable/nn.functional.html)
* [torch.Tensor](https://pytorch.org/docs/stable/tensors.html)
* [Tensor Attributes](https://pytorch.org/docs/stable/tensor\_attributes.html)
* [Tensor Views](https://pytorch.org/docs/stable/tensor\_view.html)
* [torch.autograd](https://pytorch.org/docs/stable/autograd.html)
* [torch.cuda](https://pytorch.org/docs/stable/cuda.html)
* [torch.cuda.amp](https://pytorch.org/docs/stable/amp.html)
* [torch.backends](https://pytorch.org/docs/stable/backends.html)
* [torch.distributed](https://pytorch.org/docs/stable/distributed.html)
* [torch.distributed.algorithms.join](https://pytorch.org/docs/stable/distributed.algorithms.join.html)
* [torch.distributed.elastic](https://pytorch.org/docs/stable/distributed.elastic.html)
* [torch.distributed.optim](https://pytorch.org/docs/stable/distributed.optim.html)
* [torch.distributions](https://pytorch.org/docs/stable/distributions.html)
* [torch.fft](https://pytorch.org/docs/stable/fft.html)
* [torch.futures](https://pytorch.org/docs/stable/futures.html)
* [torch.fx](https://pytorch.org/docs/stable/fx.html)
* [torch.hub](https://pytorch.org/docs/stable/hub.html)
* [torch.jit](https://pytorch.org/docs/stable/jit.html)
* [torch.linalg](https://pytorch.org/docs/stable/linalg.html)
* [torch.special](https://pytorch.org/docs/stable/special.html)
* [torch.overrides](https://pytorch.org/docs/stable/torch.overrides.html)
* [torch.package](https://pytorch.org/docs/stable/package.html)
* [torch.profiler](https://pytorch.org/docs/stable/profiler.html)
* [torch.nn.init](https://pytorch.org/docs/stable/nn.init.html)
* [torch.onnx](https://pytorch.org/docs/stable/onnx.html)
* [torch.optim](https://pytorch.org/docs/stable/optim.html)
* [Complex Numbers](https://pytorch.org/docs/stable/complex\_numbers.html)
* [DDP Communication Hooks](https://pytorch.org/docs/stable/ddp\_comm\_hooks.html)
* [Pipeline Parallelism](https://pytorch.org/docs/stable/pipeline.html)
* [Quantization](https://pytorch.org/docs/stable/quantization.html)
* [Distributed RPC Framework](https://pytorch.org/docs/stable/rpc.html)
* [torch.random](https://pytorch.org/docs/stable/random.html)
* [torch.sparse](https://pytorch.org/docs/stable/sparse.html)
* [torch.Storage](https://pytorch.org/docs/stable/storage.html)
* [torch.testing](https://pytorch.org/docs/stable/testing.html)
* [torch.utils.benchmark](https://pytorch.org/docs/stable/benchmark\_utils.html)
* [torch.utils.bottleneck](https://pytorch.org/docs/stable/bottleneck.html)
* [torch.utils.checkpoint](https://pytorch.org/docs/stable/checkpoint.html)
* [torch.utils.cpp\_extension](https://pytorch.org/docs/stable/cpp\_extension.html)
* [torch.utils.data](https://pytorch.org/docs/stable/data.html)
* [torch.utils.dlpack](https://pytorch.org/docs/stable/dlpack.html)
* [torch.utils.mobile\_optimizer](https://pytorch.org/docs/stable/mobile\_optimizer.html)
* [torch.utils.model\_zoo](https://pytorch.org/docs/stable/model\_zoo.html)
* [torch.utils.tensorboard](https://pytorch.org/docs/stable/tensorboard.html)
* [Type Info](https://pytorch.org/docs/stable/type\_info.html)
* [Named Tensors](https://pytorch.org/docs/stable/named\_tensor.html)
* [Named Tensors operator coverage](https://pytorch.org/docs/stable/name\_inference.html)
* [torch.\_\_config\_\_](https://pytorch.org/docs/stable/\_\_config\_\_.html)

Libraries

* [torchaudio](https://pytorch.org/audio/stable)
* [torchtext](https://pytorch.org/text/stable)
* [torchvision](https://pytorch.org/vision/stable)
* [TorchServe](https://pytorch.org/serve)
* [PyTorch on XLA Devices](http://pytorch.org/xla/)

Community

* [PyTorch Contribution Guide](https://pytorch.org/docs/stable/community/contribution\_guide.html)
* [PyTorch Governance](https://pytorch.org/docs/stable/community/governance.html)
* [PyTorch Governance | Persons of Interest](https://pytorch.org/docs/stable/community/persons\_of\_interest.html)

## INDICES AND TABLES

* [Index](https://pytorch.org/docs/stable/genindex.html)
* [Module Index](https://pytorch.org/docs/stable/py-modindex.html)













**Author**: [Justin Johnson](https://github.com/jcjohnson/pytorch-examples)

Note

This is one of our older PyTorch tutorials. You can view our latest beginner content in [Learn the Basics](https://pytorch.org/tutorials/beginner/basics/intro.html).

This tutorial introduces the fundamental concepts of [PyTorch](https://github.com/pytorch/pytorch) through self-contained examples.

At its core, PyTorch provides two main features:

* An n-dimensional Tensor, similar to numpy but can run on GPUs
* Automatic differentiation for building and training neural networks

We will use a problem of fitting y=sin⁡(x)y=\sin(x) with a third order polynomial as our running example. The network will have four parameters, and will be trained with gradient descent to fit random data by minimizing the Euclidean distance between the network output and the true output.

### [Tensors](https://pytorch.org/tutorials/beginner/pytorch\_with\_examples.html#id12)

#### [Warm-up: numpy](https://pytorch.org/tutorials/beginner/pytorch\_with\_examples.html#id13)

Before introducing PyTorch, we will first implement the network using numpy.

Numpy provides an n-dimensional array object, and many functions for manipulating these arrays. Numpy is a generic framework for scientific computing; it does not know anything about computation graphs, or deep learning, or gradients. However we can easily use numpy to fit a third order polynomial to sine function by manually implementing the forward and backward passes through the network using numpy operations:

\# -\*- coding: utf-8 -\*- import numpy as np import math

\# Create random input and output data x = np.linspace(-math.pi, math.pi, 2000) y = np.sin(x)

\# Randomly initialize weights a = np.random.randn() b = np.random.randn() c = np.random.randn() d = np.random.randn()

learning\_rate = 1e-6 for t in range(2000): # Forward pass: compute predicted y # y = a + b x + c x^2 + d x^3 y\_pred = a + b \* x + c \* x \*\* 2 + d \* x \*\* 3

```
\# Compute and print loss
loss \= np.square(y\_pred \- y).sum()
if t % 100 \== 99:
    print(t, loss)

\# Backprop to compute gradients of a, b, c, d with respect to loss
grad\_y\_pred \= 2.0 \* (y\_pred \- y)
grad\_a \= grad\_y\_pred.sum()
grad\_b \= (grad\_y\_pred \* x).sum()
grad\_c \= (grad\_y\_pred \* x \*\* 2).sum()
grad\_d \= (grad\_y\_pred \* x \*\* 3).sum()

\# Update weights
a \-= learning\_rate \* grad\_a
b \-= learning\_rate \* grad\_b
c \-= learning\_rate \* grad\_c
d \-= learning\_rate \* grad\_d
```

print(f'Result: y = {a} + {b} x + {c} x^2 + {d} x^3')

#### [PyTorch: Tensors](https://pytorch.org/tutorials/beginner/pytorch\_with\_examples.html#id14)

Numpy is a great framework, but it cannot utilize GPUs to accelerate its numerical computations. For modern deep neural networks, GPUs often provide speedups of [50x or greater](https://github.com/jcjohnson/cnn-benchmarks), so unfortunately numpy won’t be enough for modern deep learning.

Here we introduce the most fundamental PyTorch concept: the **Tensor**. A PyTorch Tensor is conceptually identical to a numpy array: a Tensor is an n-dimensional array, and PyTorch provides many functions for operating on these Tensors. Behind the scenes, Tensors can keep track of a computational graph and gradients, but they’re also useful as a generic tool for scientific computing.

Also unlike numpy, PyTorch Tensors can utilize GPUs to accelerate their numeric computations. To run a PyTorch Tensor on GPU, you simply need to specify the correct device.

Here we use PyTorch Tensors to fit a third order polynomial to sine function. Like the numpy example above we need to manually implement the forward and backward passes through the network:

\# -\*- coding: utf-8 -\*-

import torch import math

dtype = torch.float device = torch.device("cpu") # device = torch.device("cuda:0") # Uncomment this to run on GPU

\# Create random input and output data x = torch.linspace(-math.pi, math.pi, 2000, device=device, dtype=dtype) y = torch.sin(x)

\# Randomly initialize weights a = torch.randn((), device=device, dtype=dtype) b = torch.randn((), device=device, dtype=dtype) c = torch.randn((), device=device, dtype=dtype) d = torch.randn((), device=device, dtype=dtype)

learning\_rate = 1e-6 for t in range(2000): # Forward pass: compute predicted y y\_pred = a + b \* x + c \* x \*\* 2 + d \* x \*\* 3

```
\# Compute and print loss
loss \= (y\_pred \- y).pow(2).sum().item()
if t % 100 \== 99:
    print(t, loss)

\# Backprop to compute gradients of a, b, c, d with respect to loss
grad\_y\_pred \= 2.0 \* (y\_pred \- y)
grad\_a \= grad\_y\_pred.sum()
grad\_b \= (grad\_y\_pred \* x).sum()
grad\_c \= (grad\_y\_pred \* x \*\* 2).sum()
grad\_d \= (grad\_y\_pred \* x \*\* 3).sum()

\# Update weights using gradient descent
a \-= learning\_rate \* grad\_a
b \-= learning\_rate \* grad\_b
c \-= learning\_rate \* grad\_c
d \-= learning\_rate \* grad\_d
```

print(f'Result: y = {a.item()} + {b.item()} x + {c.item()} x^2 + {d.item()} x^3')

### [Autograd](https://pytorch.org/tutorials/beginner/pytorch\_with\_examples.html#id15)

#### [PyTorch: Tensors and autograd](https://pytorch.org/tutorials/beginner/pytorch\_with\_examples.html#id16)

In the above examples, we had to manually implement both the forward and backward passes of our neural network. Manually implementing the backward pass is not a big deal for a small two-layer network, but can quickly get very hairy for large complex networks.

Thankfully, we can use [automatic differentiation](https://en.wikipedia.org/wiki/Automatic\_differentiation) to automate the computation of backward passes in neural networks. The **autograd** package in PyTorch provides exactly this functionality. When using autograd, the forward pass of your network will define a **computational graph**; nodes in the graph will be Tensors, and edges will be functions that produce output Tensors from input Tensors. Backpropagating through this graph then allows you to easily compute gradients.

This sounds complicated, it’s pretty simple to use in practice. Each Tensor represents a node in a computational graph. If `x` is a Tensor that has `x.requires_grad=True` then `x.grad` is another Tensor holding the gradient of `x` with respect to some scalar value.

Here we use PyTorch Tensors and autograd to implement our fitting sine wave with third order polynomial example; now we no longer need to manually implement the backward pass through the network:

\# -\*- coding: utf-8 -\*- import torch import math

dtype = torch.float device = torch.device("cpu") # device = torch.device("cuda:0") # Uncomment this to run on GPU

\# Create Tensors to hold input and outputs. # By default, requires\_grad=False, which indicates that we do not need to # compute gradients with respect to these Tensors during the backward pass. x = torch.linspace(-math.pi, math.pi, 2000, device=device, dtype=dtype) y = torch.sin(x)

\# Create random Tensors for weights. For a third order polynomial, we need # 4 weights: y = a + b x + c x^2 + d x^3 # Setting requires\_grad=True indicates that we want to compute gradients with # respect to these Tensors during the backward pass. a = torch.randn((), device=device, dtype=dtype, requires\_grad=True) b = torch.randn((), device=device, dtype=dtype, requires\_grad=True) c = torch.randn((), device=device, dtype=dtype, requires\_grad=True) d = torch.randn((), device=device, dtype=dtype, requires\_grad=True)

learning\_rate = 1e-6 for t in range(2000): # Forward pass: compute predicted y using operations on Tensors. y\_pred = a + b \* x + c \* x \*\* 2 + d \* x \*\* 3

```
\# Compute and print loss using operations on Tensors.
\# Now loss is a Tensor of shape (1,)
\# loss.item() gets the scalar value held in the loss.
loss \= (y\_pred \- y).pow(2).sum()
if t % 100 \== 99:
    print(t, loss.item())

\# Use autograd to compute the backward pass. This call will compute the
\# gradient of loss with respect to all Tensors with requires\_grad=True.
\# After this call a.grad, b.grad. c.grad and d.grad will be Tensors holding
\# the gradient of the loss with respect to a, b, c, d respectively.
loss.backward()

\# Manually update weights using gradient descent. Wrap in torch.no\_grad()
\# because weights have requires\_grad=True, but we don't need to track this
\# in autograd.
with torch.no\_grad():
    a \-= learning\_rate \* a.grad
    b \-= learning\_rate \* b.grad
    c \-= learning\_rate \* c.grad
    d \-= learning\_rate \* d.grad

    \# Manually zero the gradients after updating weights
    a.grad \= None
    b.grad \= None
    c.grad \= None
    d.grad \= None
```

print(f'Result: y = {a.item()} + {b.item()} x + {c.item()} x^2 + {d.item()} x^3')

#### [PyTorch: Defining new autograd functions](https://pytorch.org/tutorials/beginner/pytorch\_with\_examples.html#id17)

Under the hood, each primitive autograd operator is really two functions that operate on Tensors. The **forward** function computes output Tensors from input Tensors. The **backward** function receives the gradient of the output Tensors with respect to some scalar value, and computes the gradient of the input Tensors with respect to that same scalar value.

In PyTorch we can easily define our own autograd operator by defining a subclass of `torch.autograd.Function` and implementing the `forward` and `backward` functions. We can then use our new autograd operator by constructing an instance and calling it like a function, passing Tensors containing input data.

In this example we define our model as y=a+bP3(c+dx)y=a+b P\_3(c+dx) instead of y=a+bx+cx2+dx3y=a+bx+cx^2+dx^3, where P3(x)=12(5x3−3x)P\_3(x)=\frac{1}{2}\left(5x^3-3x\right) is the [Legendre polynomial](https://en.wikipedia.org/wiki/Legendre\_polynomials) of degree three. We write our own custom autograd function for computing forward and backward of P3P\_3, and use it to implement our model:

\# -\*- coding: utf-8 -\*- import torch import math

class LegendrePolynomial3(torch.autograd.Function): """ We can implement our own custom autograd Functions by subclassing torch.autograd.Function and implementing the forward and backward passes which operate on Tensors. """

```
@staticmethod
def forward(ctx, input):
    """
```

In the forward pass we receive a Tensor containing the input and return a Tensor containing the output. ctx is a context object that can be used to stash information for backward computation. You can cache arbitrary objects for use in the backward pass using the ctx.save\_for\_backward method. """ ctx.save\_for\_backward(input) return 0.5 \* (5 \* input \*\* 3 - 3 \* input)

```
@staticmethod
def backward(ctx, grad\_output):
    """
```

In the backward pass we receive a Tensor containing the gradient of the loss with respect to the output, and we need to compute the gradient of the loss with respect to the input. """ input, = ctx.saved\_tensors return grad\_output \* 1.5 \* (5 \* input \*\* 2 - 1)

dtype = torch.float device = torch.device("cpu") # device = torch.device("cuda:0") # Uncomment this to run on GPU

\# Create Tensors to hold input and outputs. # By default, requires\_grad=False, which indicates that we do not need to # compute gradients with respect to these Tensors during the backward pass. x = torch.linspace(-math.pi, math.pi, 2000, device=device, dtype=dtype) y = torch.sin(x)

\# Create random Tensors for weights. For this example, we need # 4 weights: y = a + b \* P3(c + d \* x), these weights need to be initialized # not too far from the correct result to ensure convergence. # Setting requires\_grad=True indicates that we want to compute gradients with # respect to these Tensors during the backward pass. a = torch.full((), 0.0, device=device, dtype=dtype, requires\_grad=True) b = torch.full((), -1.0, device=device, dtype=dtype, requires\_grad=True) c = torch.full((), 0.0, device=device, dtype=dtype, requires\_grad=True) d = torch.full((), 0.3, device=device, dtype=dtype, requires\_grad=True)

learning\_rate = 5e-6 for t in range(2000): # To apply our Function, we use Function.apply method. We alias this as 'P3'. P3 = LegendrePolynomial3.apply

```
\# Forward pass: compute predicted y using operations; we compute
\# P3 using our custom autograd operation.
y\_pred \= a + b \* P3(c + d \* x)

\# Compute and print loss
loss \= (y\_pred \- y).pow(2).sum()
if t % 100 \== 99:
    print(t, loss.item())

\# Use autograd to compute the backward pass.
loss.backward()

\# Update weights using gradient descent
with torch.no\_grad():
    a \-= learning\_rate \* a.grad
    b \-= learning\_rate \* b.grad
    c \-= learning\_rate \* c.grad
    d \-= learning\_rate \* d.grad

    \# Manually zero the gradients after updating weights
    a.grad \= None
    b.grad \= None
    c.grad \= None
    d.grad \= None
```

print(f'Result: y = {a.item()} + {b.item()} \* P3({c.item()} + {d.item()} x)')

### [nn module](https://pytorch.org/tutorials/beginner/pytorch\_with\_examples.html#id18)

#### [PyTorch: nn](https://pytorch.org/tutorials/beginner/pytorch\_with\_examples.html#id19)

Computational graphs and autograd are a very powerful paradigm for defining complex operators and automatically taking derivatives; however for large neural networks raw autograd can be a bit too low-level.

When building neural networks we frequently think of arranging the computation into **layers**, some of which have **learnable parameters** which will be optimized during learning.

In TensorFlow, packages like [Keras](https://github.com/fchollet/keras), [TensorFlow-Slim](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/slim), and [TFLearn](http://tflearn.org) provide higher-level abstractions over raw computational graphs that are useful for building neural networks.

In PyTorch, the `nn` package serves this same purpose. The `nn` package defines a set of **Modules**, which are roughly equivalent to neural network layers. A Module receives input Tensors and computes output Tensors, but may also hold internal state such as Tensors containing learnable parameters. The `nn` package also defines a set of useful loss functions that are commonly used when training neural networks.

In this example we use the `nn` package to implement our polynomial model network:

\# -\*- coding: utf-8 -\*- import torch import math

\# Create Tensors to hold input and outputs. x = torch.linspace(-math.pi, math.pi, 2000) y = torch.sin(x)

\# For this example, the output y is a linear function of (x, x^2, x^3), so # we can consider it as a linear layer neural network. Let's prepare the # tensor (x, x^2, x^3). p = torch.tensor(\[1, 2, 3]) xx = x.unsqueeze(-1).pow(p)

\# In the above code, x.unsqueeze(-1) has shape (2000, 1), and p has shape # (3,), for this case, broadcasting semantics will apply to obtain a tensor # of shape (2000, 3)

\# Use the nn package to define our model as a sequence of layers. nn.Sequential # is a Module which contains other Modules, and applies them in sequence to # produce its output. The Linear Module computes output from input using a # linear function, and holds internal Tensors for its weight and bias. # The Flatten layer flatens the output of the linear layer to a 1D tensor, # to match the shape of \`y\`. model = torch.nn.Sequential( torch.nn.Linear(3, 1), torch.nn.Flatten(0, 1) )

\# The nn package also contains definitions of popular loss functions; in this # case we will use Mean Squared Error (MSE) as our loss function. loss\_fn = torch.nn.MSELoss(reduction='sum')

learning\_rate = 1e-6 for t in range(2000):

```
\# Forward pass: compute predicted y by passing x to the model. Module objects
\# override the \_\_call\_\_ operator so you can call them like functions. When
\# doing so you pass a Tensor of input data to the Module and it produces
\# a Tensor of output data.
y\_pred \= model(xx)

\# Compute and print loss. We pass Tensors containing the predicted and true
\# values of y, and the loss function returns a Tensor containing the
\# loss.
loss \= loss\_fn(y\_pred, y)
if t % 100 \== 99:
    print(t, loss.item())

\# Zero the gradients before running the backward pass.
model.zero\_grad()

\# Backward pass: compute gradient of the loss with respect to all the learnable
\# parameters of the model. Internally, the parameters of each Module are stored
\# in Tensors with requires\_grad=True, so this call will compute gradients for
\# all learnable parameters in the model.
loss.backward()

\# Update the weights using gradient descent. Each parameter is a Tensor, so
\# we can access its gradients like we did before.
with torch.no\_grad():
    for param in model.parameters():
        param \-= learning\_rate \* param.grad
```

\# You can access the first layer of \`model\` like accessing the first item of a list linear\_layer = model\[0]

\# For linear layer, its parameters are stored as \`weight\` and \`bias\`. print(f'Result: y = {linear\_layer.bias.item()} + {linear\_layer.weight\[:, 0].item()} x + {linear\_layer.weight\[:, 1].item()} x^2 + {linear\_layer.weight\[:, 2].item()} x^3')

#### [PyTorch: optim](https://pytorch.org/tutorials/beginner/pytorch\_with\_examples.html#id20)

Up to this point we have updated the weights of our models by manually mutating the Tensors holding learnable parameters with `torch.no_grad()`. This is not a huge burden for simple optimization algorithms like stochastic gradient descent, but in practice we often train neural networks using more sophisticated optimizers like AdaGrad, RMSProp, Adam, etc.

The `optim` package in PyTorch abstracts the idea of an optimization algorithm and provides implementations of commonly used optimization algorithms.

In this example we will use the `nn` package to define our model as before, but we will optimize the model using the RMSprop algorithm provided by the `optim` package:

\# -\*- coding: utf-8 -\*- import torch import math

\# Create Tensors to hold input and outputs. x = torch.linspace(-math.pi, math.pi, 2000) y = torch.sin(x)

\# Prepare the input tensor (x, x^2, x^3). p = torch.tensor(\[1, 2, 3]) xx = x.unsqueeze(-1).pow(p)

\# Use the nn package to define our model and loss function. model = torch.nn.Sequential( torch.nn.Linear(3, 1), torch.nn.Flatten(0, 1) ) loss\_fn = torch.nn.MSELoss(reduction='sum')

\# Use the optim package to define an Optimizer that will update the weights of # the model for us. Here we will use RMSprop; the optim package contains many other # optimization algorithms. The first argument to the RMSprop constructor tells the # optimizer which Tensors it should update. learning\_rate = 1e-3 optimizer = torch.optim.RMSprop(model.parameters(), lr=learning\_rate) for t in range(2000): # Forward pass: compute predicted y by passing x to the model. y\_pred = model(xx)

```
\# Compute and print loss.
loss \= loss\_fn(y\_pred, y)
if t % 100 \== 99:
    print(t, loss.item())

\# Before the backward pass, use the optimizer object to zero all of the
\# gradients for the variables it will update (which are the learnable
\# weights of the model). This is because by default, gradients are
\# accumulated in buffers( i.e, not overwritten) whenever .backward()
\# is called. Checkout docs of torch.autograd.backward for more details.
optimizer.zero\_grad()

\# Backward pass: compute gradient of the loss with respect to model
\# parameters
loss.backward()

\# Calling the step function on an Optimizer makes an update to its
\# parameters
optimizer.step()
```

linear\_layer = model\[0] print(f'Result: y = {linear\_layer.bias.item()} + {linear\_layer.weight\[:, 0].item()} x + {linear\_layer.weight\[:, 1].item()} x^2 + {linear\_layer.weight\[:, 2].item()} x^3')

#### [PyTorch: Custom nn Modules](https://pytorch.org/tutorials/beginner/pytorch\_with\_examples.html#id21)

Sometimes you will want to specify models that are more complex than a sequence of existing Modules; for these cases you can define your own Modules by subclassing `nn.Module` and defining a `forward` which receives input Tensors and produces output Tensors using other modules or other autograd operations on Tensors.

In this example we implement our third order polynomial as a custom Module subclass:

\# -\*- coding: utf-8 -\*- import torch import math

class Polynomial3(torch.nn.Module): def \_\_init\_\_(self): """ In the constructor we instantiate four parameters and assign them as member parameters. """ super().\_\_init\_\_() self.a = torch.nn.Parameter(torch.randn(())) self.b = torch.nn.Parameter(torch.randn(())) self.c = torch.nn.Parameter(torch.randn(())) self.d = torch.nn.Parameter(torch.randn(()))

```
def forward(self, x):
    """
```

In the forward function we accept a Tensor of input data and we must return a Tensor of output data. We can use Modules defined in the constructor as well as arbitrary operators on Tensors. """ return self.a + self.b \* x + self.c \* x \*\* 2 + self.d \* x \*\* 3

```
def string(self):
    """
```

Just like any class in Python, you can also define custom method on PyTorch modules """ return f'y = {self.a.item()} + {self.b.item()} x + {self.c.item()} x^2 + {self.d.item()} x^3'

\# Create Tensors to hold input and outputs. x = torch.linspace(-math.pi, math.pi, 2000) y = torch.sin(x)

\# Construct our model by instantiating the class defined above model = Polynomial3()

\# Construct our loss function and an Optimizer. The call to model.parameters() # in the SGD constructor will contain the learnable parameters (defined # with torch.nn.Parameter) which are members of the model. criterion = torch.nn.MSELoss(reduction='sum') optimizer = torch.optim.SGD(model.parameters(), lr=1e-6) for t in range(2000): # Forward pass: Compute predicted y by passing x to the model y\_pred = model(x)

```
\# Compute and print loss
loss \= criterion(y\_pred, y)
if t % 100 \== 99:
    print(t, loss.item())

\# Zero gradients, perform a backward pass, and update the weights.
optimizer.zero\_grad()
loss.backward()
optimizer.step()
```

print(f'Result: {model.string()}')

#### [PyTorch: Control Flow + Weight Sharing](https://pytorch.org/tutorials/beginner/pytorch\_with\_examples.html#id22)

As an example of dynamic graphs and weight sharing, we implement a very strange model: a third-fifth order polynomial that on each forward pass chooses a random number between 3 and 5 and uses that many orders, reusing the same weights multiple times to compute the fourth and fifth order.

For this model we can use normal Python flow control to implement the loop, and we can implement weight sharing by simply reusing the same parameter multiple times when defining the forward pass.

We can easily implement this model as a Module subclass:

\# -\*- coding: utf-8 -\*- import random import torch import math

class DynamicNet(torch.nn.Module): def \_\_init\_\_(self): """ In the constructor we instantiate five parameters and assign them as members. """ super().\_\_init\_\_() self.a = torch.nn.Parameter(torch.randn(())) self.b = torch.nn.Parameter(torch.randn(())) self.c = torch.nn.Parameter(torch.randn(())) self.d = torch.nn.Parameter(torch.randn(())) self.e = torch.nn.Parameter(torch.randn(()))

```
def forward(self, x):
    """
```

For the forward pass of the model, we randomly choose either 4, 5 and reuse the e parameter to compute the contribution of these orders.

Since each forward pass builds a dynamic computation graph, we can use normal Python control-flow operators like loops or conditional statements when defining the forward pass of the model.

Here we also see that it is perfectly safe to reuse the same parameter many times when defining a computational graph. """ y = self.a + self.b \* x + self.c \* x \*\* 2 + self.d \* x \*\* 3 for exp in range(4, random.randint(4, 6)): y = y + self.e \* x \*\* exp return y

```
def string(self):
    """
```

Just like any class in Python, you can also define custom method on PyTorch modules """ return f'y = {self.a.item()} + {self.b.item()} x + {self.c.item()} x^2 + {self.d.item()} x^3 + {self.e.item()} x^4 ? + {self.e.item()} x^5 ?'

\# Create Tensors to hold input and outputs. x = torch.linspace(-math.pi, math.pi, 2000) y = torch.sin(x)

\# Construct our model by instantiating the class defined above model = DynamicNet()

\# Construct our loss function and an Optimizer. Training this strange model with # vanilla stochastic gradient descent is tough, so we use momentum criterion = torch.nn.MSELoss(reduction='sum') optimizer = torch.optim.SGD(model.parameters(), lr=1e-8, momentum=0.9) for t in range(30000): # Forward pass: Compute predicted y by passing x to the model y\_pred = model(x)

```
\# Compute and print loss
loss \= criterion(y\_pred, y)
if t % 2000 \== 1999:
    print(t, loss.item())

\# Zero gradients, perform a backward pass, and update the weights.
optimizer.zero\_grad()
loss.backward()
optimizer.step()
```

print(f'Result: {model.string()}')

### [Examples](https://pytorch.org/tutorials/beginner/pytorch\_with\_examples.html#id23)

You can browse the above examples here.
